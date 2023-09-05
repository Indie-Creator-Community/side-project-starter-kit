import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { PrismaErrorCode, Response, TRPCErrorCode, type Params } from '../common';
import type {
  AddUserSubscriptionInputType,
  CreateUserInputType,
  DeleteUserSubscriptionInputType,
  GetUserByEmailInputType,
  GetUserInputType,
  GetUserSubscriptionInputType,
  UpdateUserSubscriptionInputType,
} from '../schema/user.schema';

/**
 * Get user by id
 * @param ctx Ctx
 * @param input GetUserInputType
 * @returns User
 */
export const getUserByIdHandler = async ({ ctx, input }: Params<GetUserInputType>) =>
  ctx.prisma.user.findUnique({ where: { id: input.id }, include: { subscription: true } });

/**
 * Get user by email
 * @param ctx Ctx
 * @param input GetUserByEmailInputType
 * @returns User
 */
export const getUserByEmailHandler = async ({ ctx, input }: Params<GetUserByEmailInputType>) => {
  return ctx.prisma.user.findUnique({
    where: {
      email: input.email,
    },
    include: {
      accounts: true,
    },
  });
};

/**
 * Create user
 * @param ctx Ctx
 * @param input CreateUserInputType
 * @returns User
 */
export const createUserHandler = async ({ ctx, input }: Params<CreateUserInputType>) => {
  try {
    const user = await ctx.prisma.user.create({
      data: {
        name: input.name,
        image: input.image,
        email: input.email,
      },
    });

    return {
      status: Response.SUCCESS,
      data: {
        user,
      },
    };
  } catch (error: unknown) {
    // Prisma error (Database issue)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === PrismaErrorCode.UniqueConstraintViolation) {
        const message = 'api:user.create.error.userAlreadyExists';
        throw new TRPCError({
          code: TRPCErrorCode.CONFLICT,
          message,
        });
      }
    }

    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = 'api:user.create.error.invalidInput';
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
  }
};

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
      data: {
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
      data: {
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

    const user = await ctx.prisma.user.findUnique({ where: { id: userId } });

    // Check if user exist
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
      data: {
        subscription: deletedSubscription,
      },
    };
  } catch (error: unknown) {
    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = 'deleteUserSubscriptionHandler: invalid input';
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }

    // TRPC error (Custom error)
    if (error instanceof TRPCError) {
      if (error.code === TRPCErrorCode.UNAUTHORIZED) {
        const message = 'unauthorized';
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
