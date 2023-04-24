import { z, type TypeOf } from 'zod';

/*------------------------------------*/

export const getAllProvidersByUserIdInput = z.object({
  userId: z.string(),
});
export type GetAllProvidersByUserIdInputType = TypeOf<typeof getAllProvidersByUserIdInput>;

/*------------------------------------*/

export const createAccountInput = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  providerUsername: z.string().optional(),
  userId: z.string(),
});
export type CreateAccountInputType = TypeOf<typeof createAccountInput>;

/*------------------------------------*/
