import { z, type TypeOf } from 'zod';

/*------------------------------------*/

export const getUserInput = z.object({
  id: z.string(),
});
export type GetUserInputType = TypeOf<typeof getUserInput>;

/*------------------------------------*/

export const getUserByDiscordIdInput = z.object({
  discordId: z.string(),
});
export type GetUserByDiscordIdInputType = TypeOf<typeof getUserByDiscordIdInput>;

/*------------------------------------*/

export const getUserByProviderInput = z.object({
  providerAccountId: z.string(),
  provider: z.string(),
});
export type GetUserByProviderInputType = TypeOf<typeof getUserByProviderInput>;

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
