import {
  addUserSubscriptionHandler,
  deleteUserSubscriptionHandler,
  getUserSubscriptionHandler,
  updateUserSubscriptionHandler,
} from '../controllers/subscription.controller';
import {
  addUserSubscriptionInput,
  deleteUserSubscriptionInput,
  getUserSubscriptionInput,
  updateUserSubscriptionInput,
} from '../schema/subscription.schema';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const subscriptionRouter = createTRPCRouter({
  getUserSubscription: publicProcedure
    .input(getUserSubscriptionInput)
    .query(({ ctx, input }) => getUserSubscriptionHandler({ ctx, input })),

  addUserSubscription: publicProcedure
    .input(addUserSubscriptionInput)
    .query(({ ctx, input }) => addUserSubscriptionHandler({ ctx, input })),

  updateUserSubscription: publicProcedure
    .input(updateUserSubscriptionInput)
    .query(({ ctx, input }) => updateUserSubscriptionHandler({ ctx, input })),

  deleteUserSubscription: publicProcedure
    .input(deleteUserSubscriptionInput)
    .mutation(async ({ ctx, input }) => deleteUserSubscriptionHandler({ ctx, input })),
});
