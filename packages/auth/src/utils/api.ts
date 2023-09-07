import { type User } from 'next-auth';
import { SubscriptionPlanSlug, prisma } from '@acme/db';

export const createUserSubscriptionHandler = async (user: User) => {
  try {
    // Connect user with the subscription free plan
    await prisma.subscription.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
        subscriptionPlan: {
          connect: {
            slug: SubscriptionPlanSlug.free,
          },
        },
        endsAt: null,
        renewsAt: null,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// get user subscription plan
export const getUserSubscriptionPlanHandler = async (userId: string) => {
  try {
    const subscription = await prisma.subscription.findFirst({
      where: {
        userId,
      },
    });

    // check if user has a subscription
    if (!subscription) return null;

    // get subscription plan
    const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
      where: {
        id: subscription.subscriptionPlanId,
      },
    });

    // check if subscription plan exists
    if (!subscriptionPlan) return null;

    return subscriptionPlan.slug;
  } catch (error) {
    console.error(error);
  }
};
