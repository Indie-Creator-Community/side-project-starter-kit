import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { Response, TRPCErrorCode, type Params } from '../common';
import type {
  CreateAccountInputType,
  GetAllProvidersByUserIdInputType,
} from '../schema/account.schema';

/**
 * Get all providers by user id
 * @param ctx Ctx
 * @param input GetAllProvidersByUserIdInputType
 * @returns Account[]
 */
export const getAllProvidersByUserIdHandler = async ({
  ctx,
  input,
}: Params<GetAllProvidersByUserIdInputType>) => {
  return ctx.prisma.account.findMany({
    where: {
      userId: input.userId,
    },
  });
};

/**
 * Create account
 * @param ctx Ctx
 * @param input CreateAccountInputType
 * @returns Account
 */
export const createAccountHandler = async ({ ctx, input }: Params<CreateAccountInputType>) => {
  try {
    const account = await ctx.prisma.account.create({
      data: {
        provider: input.provider,
        providerAccountId: input.providerAccountId,
        type: input.type,
        user: {
          connect: { id: input.userId },
        },
      },
    });

    return {
      status: Response.SUCCESS,
      result: {
        account,
      },
    };
  } catch (error: unknown) {
    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = 'createAccount: invalid input';
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }

    // TRPC error (Custom error)
    if (error instanceof TRPCError) {
      if (error.code === TRPCErrorCode.UNAUTHORIZED) {
        const message = 'createAccount: unauthorized';
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
