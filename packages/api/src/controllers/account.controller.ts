import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { i18n } from '@acme/i18n';
import { Response, TRPCErrorCode, type Params } from '../common';
import type {
  CreateAccountInputType,
  GetAllProvidersByUserIdInputType,
} from '../schema/account.schema';

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

export const createAccountHandler = async ({ ctx, input }: Params<CreateAccountInputType>) => {
  try {
    const account = await ctx.prisma.account.create({
      data: {
        provider: input.provider,
        providerAccountId: input.providerAccountId,
        providerUsername: input.providerUsername,
        type: input.type,
        user: {
          connect: { id: input.userId },
        },
      },
    });

    return {
      status: Response.SUCCESS,
      data: {
        account,
      },
    };
  } catch (error: unknown) {
    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = i18n.t('api:account.create.error.notFound');
      throw new TRPCError({
        code: TRPCErrorCode.BAD_REQUEST,
        message,
      });
    }

    // TRPC error (Custom error)
    if (error instanceof TRPCError) {
      if (error.code === TRPCErrorCode.UNAUTHORIZED) {
        const message = i18n.t('common:message.error.unauthorized');
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
