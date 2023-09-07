import { z, type TypeOf } from 'zod';
import { SubscriptionPlanSlug } from '@acme/db';

/*------------------------------------*/

export const getSubscriptionPlanByIdInput = z.object({
  id: z.string(),
});
export type GetSubscriptionPlanByIdInputType = TypeOf<typeof getSubscriptionPlanByIdInput>;

/*------------------------------------*/

export const getSubscriptionPlanBySlugInput = z.object({
  slug: z.nativeEnum(SubscriptionPlanSlug),
});
export type GetSubscriptionPlanBySlugInputType = TypeOf<typeof getSubscriptionPlanBySlugInput>;

/*------------------------------------*/

export const getSubscriptionPlanByProductIdInput = z.object({
  productId: z.string(),
});
export type GetSubscriptionPlanByProductIdInputType = TypeOf<
  typeof getSubscriptionPlanByProductIdInput
>;

/*------------------------------------*/

export const getAllSubscriptionPlansInput = z.object({});
export type GetAllSubscriptionPlansInputType = TypeOf<typeof getAllSubscriptionPlansInput>;

/*------------------------------------*/
