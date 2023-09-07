import {
  createUserHandler,
  getUserByEmailHandler,
  getUserByIdHandler,
} from '../controllers/user.controller';
import { createUserInput, getUserByEmailInput, getUserInput } from '../schema/user.schema';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(getUserInput)
    .query(({ ctx, input }) => getUserByIdHandler({ ctx, input })),

  getByEmail: publicProcedure
    .input(getUserByEmailInput)
    .query(({ ctx, input }) => getUserByEmailHandler({ ctx, input })),

  create: publicProcedure
    .input(createUserInput)
    .mutation(async ({ ctx, input }) => createUserHandler({ ctx, input })),
});
