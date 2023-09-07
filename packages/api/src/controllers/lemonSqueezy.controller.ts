import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { Response, TRPCErrorCode, type LemonSqueezyVariant, type Params } from '../common';
import type {
  GetVariantByIdInputType,
  SubscriptionCreatedInputType,
} from '../schema/lemonSqueezy.schema';
import {
  addUserSubscriptionHandler,
  deleteUserSubscriptionHandler,
} from './subscription.controller';
import { getSubscriptionPlanByProductIdHandler } from './subscriptionPlan.controller';

/**
 * Subscription created (Lemon Squeezy)
 * @param ctx Ctx
 * @param input SubscriptionCreatedInputType
 */
export const subscriptionCreatedHandler = async ({
  ctx,
  input,
}: Params<SubscriptionCreatedInputType>) => {
  try {
    const { productId, variantId, userEmail, renewsAt } = input;

    // Check if user exists
    const user = await ctx.prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
    if (!user) {
      const message = 'api:payment.subscriptionCreated.error.userNotFound';
      throw new TRPCError({
        code: TRPCErrorCode.NOT_FOUND,
        message,
      });
    }

    // CREATE USER's SUBSCRIPTION

    // Check if subscription plan exists
    const subscriptionPlan = await getSubscriptionPlanByProductIdHandler({
      ctx,
      input: {
        productId,
      },
    });
    if (!subscriptionPlan) {
      const message = 'api:payment.subscriptionCreated.error.subscriptionPlanNotFound';
      throw new TRPCError({
        code: TRPCErrorCode.NOT_FOUND,
        message,
      });
    }

    // Check if variant exists
    const variant = await getVariantByIdHandler({
      ctx,
      input: {
        variantId,
      },
    });
    if (!variant) {
      const message = 'api:payment.subscriptionCreated.error.variantNotFound';
      throw new TRPCError({
        code: TRPCErrorCode.NOT_FOUND,
        message,
      });
    }

    // Check if user has an active subscription
    const subscription = await ctx.prisma.subscription.findFirst({
      where: {
        userId: user.id,
      },
    });

    // Delete subscription if exists
    if (subscription) {
      const response = await deleteUserSubscriptionHandler({
        ctx,
        input: {
          userId: user.id,
        },
      });

      if (response?.status !== Response.SUCCESS) {
        const message = 'api:payment.subscriptionCreated.error.deleteSubscription';
        throw new TRPCError({
          code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
          message,
        });
      }
    }

    // Add subscription
    const newSubscription = await addUserSubscriptionHandler({
      ctx,
      input: {
        userId: user.id,
        subscriptionPlanId: subscriptionPlan.id,
        frequency: variant.data.attributes.interval,
        startsAt: new Date(),
        endsAt: null,
        renewsAt: new Date(renewsAt),
      },
    });

    // Check if subscription was added
    if (!newSubscription) {
      const message = 'api:payment.subscriptionCreated.error.addSubscription';
      throw new TRPCError({
        code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
        message,
      });
    }

    return {
      status: Response.SUCCESS,
      result: {
        subscription: newSubscription,
      },
    };
  } catch (error: unknown) {
    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = 'api:payment.subscriptionCreated.error.invalidInput';
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }

    // TRPC error (Custom error)
    if (error instanceof TRPCError) {
      if (error.code === TRPCErrorCode.UNAUTHORIZED) {
        const message = 'common:message.error.unauthorized';
        throw new TRPCError({
          code: TRPCErrorCode.UNAUTHORIZED,
          message,
        });
      }

      throw new TRPCError({
        code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }

    console.error('subscriptionCreatedHandler.error: ', error);
  }
};

/**
 * Get variant by id
 * @param ctx Ctx
 * @param input GetVariantByIdInputType
 */
export const getVariantByIdHandler = async ({ input }: Params<GetVariantByIdInputType>) => {
  try {
    const { variantId } = input;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${process.env.LEMON_SQUEEZY_API_KEY as string}`);

    const response = await fetch(`${process.env.LEMON_SQUEEZY_URL}/v1/variants/${variantId}`, {
      method: 'GET',
      headers,
    });

    const result = (await response.json()) as LemonSqueezyVariant;

    return result;
  } catch (error) {
    // TRPC error (Custom error)
    if (error instanceof TRPCError) {
      throw new TRPCError({
        code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }

    console.error('getVariantByIdHandler.error: ', error);
  }
};
