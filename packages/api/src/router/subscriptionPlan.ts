import {
  getAllSubscriptionPlansHandler,
  getSubscriptionPlanByIdHandler,
  getSubscriptionPlanByProductIdHandler,
  getSubscriptionPlanBySlugHandler,
} from '../controllers/subscriptionPlan.controller';
import {
  getAllSubscriptionPlansInput,
  getSubscriptionPlanByIdInput,
  getSubscriptionPlanByProductIdInput,
  getSubscriptionPlanBySlugInput,
} from '../schema/subscriptionPlan.schema';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const subscriptionPlanRouter = createTRPCRouter({
  getSubscriptionPlanById: publicProcedure
    .input(getSubscriptionPlanByIdInput)
    .query(({ ctx, input }) => getSubscriptionPlanByIdHandler({ ctx, input })),

  getSubscriptionPlanBySlug: publicProcedure
    .input(getSubscriptionPlanBySlugInput)
    .query(({ ctx, input }) => getSubscriptionPlanBySlugHandler({ ctx, input })),

  getSubscriptionPlanByProductId: publicProcedure
    .input(getSubscriptionPlanByProductIdInput)
    .query(({ ctx, input }) => getSubscriptionPlanByProductIdHandler({ ctx, input })),

  getAllSubscriptionPlans: publicProcedure
    .input(getAllSubscriptionPlansInput)
    .query(({ ctx, input }) => getAllSubscriptionPlansHandler({ ctx, input })),
});
