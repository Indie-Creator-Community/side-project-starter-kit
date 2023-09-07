import { z, type TypeOf } from 'zod';

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
