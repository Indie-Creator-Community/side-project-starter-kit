import { z, type TypeOf } from 'zod';
import { SubscriptionFrequency } from '@acme/db';

/*------------------------------------*/

export const getUserSubscriptionInput = z.object({
  userId: z.string(),
});
export type GetUserSubscriptionInputType = TypeOf<typeof getUserSubscriptionInput>;

/*------------------------------------*/

export const addUserSubscriptionInput = z.object({
  userId: z.string(),
  subscriptionPlanId: z.string(),
  frequency: z.nativeEnum(SubscriptionFrequency),
  startsAt: z.date(),
  endsAt: z.date().nullable(),
  renewsAt: z.date(),
});
export type AddUserSubscriptionInputType = TypeOf<typeof addUserSubscriptionInput>;

/*------------------------------------*/

export const updateUserSubscriptionInput = z.object({
  userId: z.string(),
  subscriptionPlanId: z.string(),
  frequency: z.nativeEnum(SubscriptionFrequency),
  startsAt: z.date(),
  endsAt: z.date(),
  renewsAt: z.date(),
  isActive: z.boolean(),
});
export type UpdateUserSubscriptionInputType = TypeOf<typeof updateUserSubscriptionInput>;

/*------------------------------------*/

export const deleteUserSubscriptionInput = z.object({
  userId: z.string(),
});
export type DeleteUserSubscriptionInputType = TypeOf<typeof deleteUserSubscriptionInput>;
