import { useState } from 'react';
import { type NextPage } from 'next';
import cn from 'classnames';
import { useSession } from 'next-auth/react';
import { Spinner, SpinnerSize, SpinnerVariant } from 'side-ui';
import { api } from '~/utils/api';
import { SubscriptionFrequency, type Frequency } from '~/common';
import { PricingCard, SubscriptionButton } from '~/components';

const SubscriptionTypeLabel: Record<SubscriptionFrequency, string> = {
  [SubscriptionFrequency.day]: 'Daily',
  [SubscriptionFrequency.week]: 'Weekly',
  [SubscriptionFrequency.month]: 'Monthly',
  [SubscriptionFrequency.year]: 'Yearly',
};

const frequencies: Array<Frequency> = [
  {
    value: SubscriptionFrequency.month,
    label: SubscriptionTypeLabel.month,
    priceSuffix: '/month',
  },
  {
    value: SubscriptionFrequency.year,
    label: SubscriptionTypeLabel.year,
    priceSuffix: '/year',
  },
];

const Pricing: NextPage = () => {
  const [frequency, setFrequency] = useState<Frequency>(frequencies[0] as Frequency);

  const { data: sessionData } = useSession();

  // Get all subscription plans
  const { data: subscriptionPlans, isLoading } =
    api.subscriptionPlan.getAllSubscriptionPlans.useQuery({});

  // Get user subscription
  const { data: userSubscription } = api.user.getUserSubscription.useQuery({
    userId: sessionData?.user.id ?? '',
  });

  const handleSubscription = (frequency: Frequency) => setFrequency(frequency);

  const renderTier = () =>
    subscriptionPlans?.map(
      ({ id, priceMonthly, priceYearly, hrefMonthly, hrefYearly, slug, tier, ...attr }, index) => {
        const classes = cn('animate-fade-up', `animate-delay-${(index + 3) * 100}`);
        const emailParam = `?checkout[email]=${sessionData?.user.email}`;

        return (
          <PricingCard
            {...attr}
            className={classes}
            key={id}
            subscriptionPlanTier={tier}
            subscriptionPlanSlug={slug}
            userSubscriptionPlan={userSubscription?.subscriptionPlan}
            price={frequency?.value === SubscriptionFrequency.month ? priceMonthly : priceYearly}
            frequency={frequency}
            href={
              frequency?.value === SubscriptionFrequency.month
                ? `${hrefMonthly}${emailParam}`
                : `${hrefYearly}${emailParam}`
            }
          />
        );
      },
    );

  if (isLoading)
    return <Spinner className="h-[80vh]" size={SpinnerSize.lg} variant={SpinnerVariant.neutral} />;

  return (
    <main>
      {/* PRICING TIERS SECTION */}
      <section className="relative my-10 pt-20">
        <div className="container relative z-20 mx-auto flex flex-col items-center px-4 md:px-0">
          <h1 className="text-fluid-lg animate-fade-up text-5xl font-bold">Pricing</h1>

          <p className="animate-fade-up animate-delay-100 mx-auto mb-6 max-w-[40ch] text-center text-slate-300 md:text-lg">
            Start your 14-day free trial today. No credit card required.
          </p>

          <SubscriptionButton
            className="animate-fade-up animate-delay-200"
            defaultFrequency={frequency}
            frequencies={frequencies}
            onClick={handleSubscription}
          />

          {/* Card section */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 px-4">{renderTier()}</div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
