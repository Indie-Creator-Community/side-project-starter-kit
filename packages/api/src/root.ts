import { accountRouter } from './router/account';
import { authRouter } from './router/auth';
import { paymentRouter } from './router/payment';
import { subscriptionRouter } from './router/subscription';
import { subscriptionPlanRouter } from './router/subscriptionPlan';
import { userRouter } from './router/user';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  account: accountRouter,
  auth: authRouter,
  payment: paymentRouter,
  subscription: subscriptionRouter,
  subscriptionPlan: subscriptionPlanRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
