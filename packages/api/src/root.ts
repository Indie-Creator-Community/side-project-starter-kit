import { accountRouter } from './router/account';
import { authRouter } from './router/auth';
import { paymentRouter } from './router/payment';
import { subscriptionPlanRouter } from './router/subscriptionPlan';
import { userRouter } from './router/user';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  account: accountRouter,
  auth: authRouter,
  payment: paymentRouter,
  subscriptionPlan: subscriptionPlanRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
