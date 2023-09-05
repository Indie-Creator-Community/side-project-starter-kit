import { z, type TypeOf } from 'zod';
import { SubscriptionFrequency } from '@acme/db';

/*------------------------------------*/

export const getUserInput = z.object({
  id: z.string(),
});
export type GetUserInputType = TypeOf<typeof getUserInput>;

/*------------------------------------*/

export const getUserByEmailInput = z.object({
  email: z.string(),
});
export type GetUserByEmailInputType = TypeOf<typeof getUserByEmailInput>;

/*------------------------------------*/

export const createUserInput = z.object({
  name: z.string(),
  email: z.string().optional(),
  image: z.string().default(''),
});
export type CreateUserInputType = TypeOf<typeof createUserInput>;

/*------------------------------------*/

export const getUserSubscriptionInput = z.object({
  userId: z.string(),
});
export type GetUserSubscriptionInputType = TypeOf<typeof getUserSubscriptionInput>;

/*------------------------------------*/

export const deleteUserSubscriptionInput = z.object({
  userId: z.string(),
});
export type DeleteUserSubscriptionInputType = TypeOf<typeof deleteUserSubscriptionInput>;

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
