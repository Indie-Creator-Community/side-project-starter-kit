import { z, type TypeOf } from 'zod';

export const subscriptionCreatedInput = z.object({
  productId: z.string(),
  variantId: z.string(),
  userEmail: z.string(),
  renewsAt: z.string(),
});
export type SubscriptionCreatedInputType = TypeOf<typeof subscriptionCreatedInput>;

/*------------------------------------*/

export const getVariantByIdInput = z.object({
  variantId: z.string(),
});
export type GetVariantByIdInputType = TypeOf<typeof getVariantByIdInput>;

/*------------------------------------*/
