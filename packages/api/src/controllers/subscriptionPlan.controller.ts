import { TRPCError } from '@trpc/server';
import { TRPCErrorCode, type Params } from '../common';
import type {
  GetAllSubscriptionPlansInputType,
  GetNextTierSubscriptionPlanInputType,
  GetSubscriptionPlanByIdInputType,
  GetSubscriptionPlanByProductIdInputType,
  GetSubscriptionPlanBySlugInputType,
} from '../schema/subscriptionPlans.schema';

/**
 * Get subscription plan by id
 * @param ctx Ctx
 * @param input GetSubscriptionPlanByIdInputType
 */
export const getSubscriptionPlanByIdHandler = async ({
  ctx,
  input,
}: Params<GetSubscriptionPlanByIdInputType>) =>
  ctx.prisma.subscriptionPlan.findUnique({ where: { id: input.id } });

/**
 * Get subscription plan by slug
 * @param ctx Ctx
 * @param input GetSubscriptionPlanBySlugInputType
 */
export const getSubscriptionPlanBySlugHandler = async ({
  ctx,
  input,
}: Params<GetSubscriptionPlanBySlugInputType>) =>
  ctx.prisma.subscriptionPlan.findUnique({ where: { slug: input.slug } });

/**
 * Get subscription plan by product id
 * @param ctx Ctx
 * @param input GetSubscriptionPlanByProductIdInputType
 */
export const getSubscriptionPlanByProductIdHandler = async ({
  ctx,
  input,
}: Params<GetSubscriptionPlanByProductIdInputType>) =>
  ctx.prisma.subscriptionPlan.findFirst({ where: { productId: input.productId } });

/**
 * Get all subscription plans
 * @param ctx Ctx
 * @param input GetAllSubscriptionPlansInputType
 */
export const getAllSubscriptionPlansHandler = async ({
  ctx,
}: Params<GetAllSubscriptionPlansInputType>) =>
  ctx.prisma.subscriptionPlan.findMany({ orderBy: { createdAt: 'asc' } });

/**
 * Get next tier subscription plan
 * @param ctx Ctx
 * @param input GetNextTierSubscriptionPlanInputType
 * @deprecated
 */
export const getNextTierSubscriptionPlanHandler = async ({
  ctx,
  input,
}: Params<GetNextTierSubscriptionPlanInputType>) => {
  const { currentSubscriptionPlanId } = input;

  const currentSubscriptionPlan = await ctx.prisma.subscriptionPlan.findUnique({
    where: { id: currentSubscriptionPlanId },
  });
  if (!currentSubscriptionPlan) {
    const message = 'current subscription plan not found';
    throw new TRPCError({
      code: TRPCErrorCode.NOT_FOUND,
      message,
    });
  }

  const nextTierSubscriptionPlan = await ctx.prisma.subscriptionPlan.findFirst({
    where: {
      tier: currentSubscriptionPlan.tier + 1,
    },
  });
  if (!nextTierSubscriptionPlan) {
    const message = 'next tier subscription plan not found';
    throw new TRPCError({
      code: TRPCErrorCode.NOT_FOUND,
      message,
    });
  }

  return nextTierSubscriptionPlan;
};
