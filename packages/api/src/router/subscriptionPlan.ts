import {
  getAllSubscriptionPlansHandler,
  getNextTierSubscriptionPlanHandler,
  getSubscriptionPlanByIdHandler,
  getSubscriptionPlanBySlugHandler,
} from '../controllers/subscriptionPlan.controller';
import {
  getAllSubscriptionPlansInput,
  getNextTierSubscriptionPlanInput,
  getSubscriptionPlanByIdInput,
  getSubscriptionPlanBySlugInput,
} from '../schema/subscriptionPlans.schema';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const subscriptionPlanRouter = createTRPCRouter({
  getSubscriptionPlanById: publicProcedure
    .input(getSubscriptionPlanByIdInput)
    .query(({ ctx, input }) => getSubscriptionPlanByIdHandler({ ctx, input })),

  getSubscriptionPlanBySlug: publicProcedure
    .input(getSubscriptionPlanBySlugInput)
    .query(({ ctx, input }) => getSubscriptionPlanBySlugHandler({ ctx, input })),

  getAllSubscriptionPlans: publicProcedure
    .input(getAllSubscriptionPlansInput)
    .query(({ ctx, input }) => getAllSubscriptionPlansHandler({ ctx, input })),

  getNextTierSubscriptionPlan: publicProcedure
    .input(getNextTierSubscriptionPlanInput)
    .query(({ ctx, input }) => getNextTierSubscriptionPlanHandler({ ctx, input })),
});
