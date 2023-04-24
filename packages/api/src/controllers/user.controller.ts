import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { i18n } from '@acme/i18n';
import { PrismaErrorCode, Response, TRPCErrorCode, type Ctx, type Params } from '../common';
import type {
  CreateUserInputType,
  GetUserByDiscordIdInputType,
  GetUserByEmailInputType,
  GetUserByProviderInputType,
  GetUserInputType,
} from '../schema/user.schema';

export const getUserHandler = async ({ ctx, input }: Params<GetUserInputType>) =>
  ctx.prisma.user.findUnique({ where: { id: input.id } });

export const getUserByDiscordIdHandler = async ({ ctx, input }: Params<GetUserByDiscordIdInputType>) => {
  return ctx.prisma.user.findFirst({
    where: {
      accounts: {
        some: {
          providerAccountId: input.discordId,
          provider: 'discord',
        },
      },
    },
    include: {
      accounts: true,
    },
  });
};

export const getUserByProviderHandler = async ({ ctx, input }: Params<GetUserByProviderInputType>) => {
  return ctx.prisma.user.findFirst({
    where: {
      accounts: {
        some: {
          providerAccountId: input.providerAccountId,
          provider: input.provider,
        },
      },
    },
    include: {
      accounts: true,
    },
  });
};

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

export const getUsersHandler = async (ctx: Ctx) => {
  return ctx.prisma.user.findMany({
    include: {
      accounts: true,
    },
  });
};

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
        const message = i18n.t('api:user.create.error.userAlreadyExists');
        throw new TRPCError({
          code: TRPCErrorCode.CONFLICT,
          message,
        });
      }
    }

    // Zod error (Invalid input)
    if (error instanceof z.ZodError) {
      const message = i18n.t('api:user.create.error.invalidInput');
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
