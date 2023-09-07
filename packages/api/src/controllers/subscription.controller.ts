import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { Response, TRPCErrorCode, type Params } from '../common';
import type {
  AddUserSubscriptionInputType,
  DeleteUserSubscriptionInputType,
  GetUserSubscriptionInputType,
  UpdateUserSubscriptionInputType,
} from '../schema/subscription.schema';
import { getUserByIdHandler } from './user.controller';

/**
 * Get user subscription
 * @param ctx Ctx
 * @param input GetUserSubscriptionInputType
 * @returns SubscriptionPlan
 */
export const getUserSubscriptionHandler = async ({
  ctx,
  input,
}: Params<GetUserSubscriptionInputType>) =>
  await ctx.prisma.subscription.findFirst({
    where: {
      userId: input.userId,
    },
    select: {
      subscriptionPlan: true,
    },
  });

/**
 * Add user subscription
 * @param ctx Ctx
 * @param input AddUserSubscriptionInputType
 * @returns Subscription
 */
export const addUserSubscriptionHandler = async ({
  ctx,
  input,
}: Params<AddUserSubscriptionInputType>) => {
  try {
    const { userId, subscriptionPlanId, frequency, startsAt, endsAt, renewsAt } = input;

    // Check if user exist
    const user = await getUserByIdHandler({ ctx, input: { id: userId } });
    if (!user) {
      const message = 'addUserSubscription: user not found';
      throw new TRPCError({
        code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
        message,
      });
    }

    // Check if user already has a subscription
    if (user.subscription !== null) {
      const message = 'addUserSubscription: user already has a subscription';
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }

    // Add subscription
    const subscription = await ctx.prisma.subscription.create({
      data: {
        userId,
        subscriptionPlanId,
        frequency,
        startsAt,
        endsAt,
        renewsAt,
      },
    });

    return {
      status: Response.SUCCESS,
      result: {
        subscription,
      },
    };
  } catch (error: unknown) {
    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = 'addUserSubscription: invalid input';
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }
  }
};

/**
 * Update user subscription
 * @param ctx Ctx
 * @param input UpdateUserSubscriptionInputType
 * @returns Subscription
 */
export const updateUserSubscriptionHandler = async ({
  ctx,
  input,
}: Params<UpdateUserSubscriptionInputType>) => {
  try {
    const { userId, subscriptionPlanId, frequency, startsAt, endsAt, renewsAt, isActive } = input;

    // Check if user exist
    const user = await getUserByIdHandler({ ctx, input: { id: userId } });
    if (!user) {
      const message = 'updateUserSubscription: user not found';
      throw new TRPCError({
        code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
        message,
      });
    }

    // Check if user already has a subscription
    if (!user.subscription) {
      const message = 'updateUserSubscription: user has no subscription';
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }

    // Update subscription
    const subscription = await ctx.prisma.subscription.update({
      where: {
        userId: user.id,
      },
      data: {
        subscriptionPlan: {
          connect: {
            id: subscriptionPlanId,
          },
        },
        frequency,
        startsAt,
        endsAt,
        renewsAt,
        isActive,
      },
    });

    return {
      status: Response.SUCCESS,
      result: {
        subscription,
      },
    };
  } catch (error: unknown) {
    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = 'updateUserSubscription: invalid input';
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }

    // TRPC error (Custom error)
    if (error instanceof TRPCError) {
      throw new TRPCError({
        code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  }
};

/**
 * Delete user subscription
 * @param ctx Ctx
 * @param input DeleteUserSubscriptionInputType
 * @returns Subscription
 */
export const deleteUserSubscriptionHandler = async ({
  ctx,
  input,
}: Params<DeleteUserSubscriptionInputType>) => {
  try {
    const { userId } = input;

    // Check if user exist
    const user = await getUserByIdHandler({ ctx, input: { id: userId } });
    if (!user) {
      const message = 'deleteUserSubscription: user not found';
      throw new TRPCError({
        code: TRPCErrorCode.INTERNAL_SERVER_ERROR,
        message,
      });
    }

    // Delete subscription
    const deletedSubscription = await ctx.prisma.subscription.delete({
      where: {
        userId: user.id,
      },
    });

    return {
      status: Response.SUCCESS,
      result: {
        subscription: deletedSubscription,
      },
    };
  } catch (error: unknown) {
    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = 'deleteUserSubscription: invalid input';
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }

    // TRPC error (Custom error)
    if (error instanceof TRPCError) {
      if (error.code === TRPCErrorCode.UNAUTHORIZED) {
        const message = 'deleteUserSubscription: unauthorized';
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
  }
};
