import {
  getVariantByIdHandler,
  subscriptionCreatedHandler,
} from '../controllers/lemonSqueezy.controller';
import { getVariantByIdInput, subscriptionCreatedInput } from '../schema/lemonSqueezy.schema';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const paymentRouter = createTRPCRouter({
  subscriptionCreated: publicProcedure
    .input(subscriptionCreatedInput)
    .mutation(async ({ ctx, input }) => subscriptionCreatedHandler({ ctx, input })),

  getVariantById: publicProcedure
    .input(getVariantByIdInput)
    .query(async ({ ctx, input }) => getVariantByIdHandler({ ctx, input })),
});
