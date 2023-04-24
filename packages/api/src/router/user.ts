import {
  createUserHandler,
  getUserByDiscordIdHandler,
  getUserByEmailHandler,
  getUserByProviderHandler,
  getUserHandler,
  getUsersHandler,
} from '../controllers/user.controller';
import {
  createUserInput,
  getUserByDiscordIdInput,
  getUserByEmailInput,
  getUserByProviderInput,
  getUserInput,
} from '../schema/user.schema';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(getUserInput)
    .query(({ ctx, input }) => getUserHandler({ ctx, input })),

  getByDiscordId: publicProcedure
    .input(getUserByDiscordIdInput)
    .query(({ ctx, input }) => getUserByDiscordIdHandler({ ctx, input })),

  getUserByProvider: publicProcedure
    .input(getUserByProviderInput)
    .query(({ ctx, input }) => getUserByProviderHandler({ ctx, input })),

  getByEmail: publicProcedure
    .input(getUserByEmailInput)
    .query(({ ctx, input }) => getUserByEmailHandler({ ctx, input })),

  getAll: publicProcedure.query(({ ctx }) => getUsersHandler(ctx)),

  create: publicProcedure
    .input(createUserInput)
    .mutation(async ({ ctx, input }) => createUserHandler({ ctx, input })),
});
