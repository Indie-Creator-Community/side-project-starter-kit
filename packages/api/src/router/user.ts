import {
  addUserSubscriptionHandler,
  createUserHandler,
  deleteUserSubscriptionHandler,
  getUserByEmailHandler,
  getUserByIdHandler,
  getUserSubscriptionHandler,
} from '../controllers/user.controller';
import {
  addUserSubscriptionInput,
  createUserInput,
  deleteUserSubscriptionInput,
  getUserByEmailInput,
  getUserInput,
  getUserSubscriptionInput,
} from '../schema/user.schema';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(getUserInput)
    .query(({ ctx, input }) => getUserByIdHandler({ ctx, input })),

  getByEmail: publicProcedure
    .input(getUserByEmailInput)
    .query(({ ctx, input }) => getUserByEmailHandler({ ctx, input })),

  create: publicProcedure
    .input(createUserInput)
    .mutation(async ({ ctx, input }) => createUserHandler({ ctx, input })),

  getUserSubscription: publicProcedure
    .input(getUserSubscriptionInput)
    .query(async ({ ctx, input }) => getUserSubscriptionHandler({ ctx, input })),

  addUserSubscription: publicProcedure
    .input(addUserSubscriptionInput)
    .mutation(async ({ ctx, input }) => addUserSubscriptionHandler({ ctx, input })),

  deleteUserSubscriptionHandler: publicProcedure
    .input(deleteUserSubscriptionInput)
    .mutation(async ({ ctx, input }) => deleteUserSubscriptionHandler({ ctx, input })),
});
