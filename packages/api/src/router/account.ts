import {
  createAccountHandler,
  getAllProvidersByUserIdHandler,
} from '../controllers/account.controller';
import { createAccountInput, getAllProvidersByUserIdInput } from '../schema/account.schema';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const accountRouter = createTRPCRouter({
  getAllProvidersByUserId: publicProcedure
    .input(getAllProvidersByUserIdInput)
    .query(({ ctx, input }) => getAllProvidersByUserIdHandler({ ctx, input })),

  create: publicProcedure
    .input(createAccountInput)
    .mutation(async ({ ctx, input }) => createAccountHandler({ ctx, input })),
});
