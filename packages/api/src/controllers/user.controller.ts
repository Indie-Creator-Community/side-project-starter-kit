import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { PrismaErrorCode, Response, TRPCErrorCode, type Params } from '../common';
import type {
  CreateUserInputType,
  GetUserByEmailInputType,
  GetUserInputType,
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
      result: {
        user,
      },
    };
  } catch (error: unknown) {
    // Prisma error (Database issue)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === PrismaErrorCode.UniqueConstraintViolation) {
        const message = 'createUser: user already exists';
        throw new TRPCError({
          code: TRPCErrorCode.CONFLICT,
          message,
        });
      }
    }

    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = 'createUser: invalid input';
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }

    // TRPC error (Custom error)
    if (error instanceof TRPCError) {
      if (error.code === TRPCErrorCode.UNAUTHORIZED) {
        const message = 'createUser: unauthorized';
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
