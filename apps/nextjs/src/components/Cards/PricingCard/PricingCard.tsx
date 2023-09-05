import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { signIn } from 'next-auth/react';
import { Button, ButtonVariant, Icon, IconCatalog, IconStyle, Tag, TagVariant } from 'side-ui';
import {
  SubscriptionFrequency,
  SubscriptionPlanSlug,
  type Frequency,
  type SubscriptionPlan,
} from '~/common';

export enum PricingCardVariant {
  primary = 'primary',
  neutral = 'neutral',
}

const Variants: Record<PricingCardVariant, string> = {
  [PricingCardVariant.primary]: 'border border-primary-400 bg-slate-900 text-white',
  [PricingCardVariant.neutral]: 'bg-slate-950 border border-slate-700 text-white',
};

interface PricingCardProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * The tier of the pricing plan.
   */
  subscriptionPlanTier: number;

  /**
   * The slug of the pricing plan.
   */
  subscriptionPlanSlug: SubscriptionPlanSlug;

  /**
   * The user subscription plan.
   */
  userSubscriptionPlan?: SubscriptionPlan;

  /**
   * The frequency of the pricing plan.
   */
  frequency?: Frequency;

  /**
   * The  title of the pricing plan.
   */
  name: string;

  /**
   * The description of the pricing plan.
   */
  description?: string;

  /**
   * The price of the pricing plan.
   */
  price: number;

  /**
   * Specify the variant of the pricing card.
   */
  mostPopular?: boolean;

  /**
   * The link to redirect the user when the button is clicked.
   */
  href: string;

  /**
   * An array of features associated with Feature interface.
   */
  features: Array<string>;
}

export const PricingCard = ({
  className,
  name,
  subscriptionPlanTier,
  subscriptionPlanSlug,
  userSubscriptionPlan,
  description,
  price,
  frequency,
  features,
  mostPopular,
  href,
}: PricingCardProps) => {
  const classes = {
    container: cn(
      className,
      'flex flex-col gap-6',
      'max-w-sm px-10 py-8 rounded-xl',
      Variants[mostPopular === true ? PricingCardVariant.primary : PricingCardVariant.neutral],
    ),
    listIcon: cn('h-6 w-6 text-slate-400'),
    price: cn({
      'text-primary-300': subscriptionPlanSlug === SubscriptionPlanSlug.plus,
    }),
    divider: cn('border border-t border-slate-900 w-full'),
  };

  const buttonVariant = mostPopular === true ? ButtonVariant.primary : ButtonVariant.tertiary;
  const realValue = frequency?.value === SubscriptionFrequency.month ? '$7.99' : '$79.99';

  const handleLogInClicik = () => void signIn('twitter');

  const renderFeatures = () => {
    return features.map((feature) => {
      return (
        <li key={feature} className="flex items-center justify-start gap-4">
          <Icon icon={IconCatalog.check} className={classes.listIcon} iconStyle={IconStyle.bold} />
          <h3>{feature}</h3>
        </li>
      );
    });
  };

  const chooseButtonVariant = () => {
    if (!userSubscriptionPlan || subscriptionPlanTier <= userSubscriptionPlan.tier) {
      return {
        href: '/generate',
        buttonLabel: 'Get started',
      };
    } else {
      return {
        href,
        buttonLabel: 'Upgrade',
      };
    }
  };

  const renderButton = () => {
    const { href, buttonLabel } = chooseButtonVariant();

    if (userSubscriptionPlan) {
      return (
        <Button variant={buttonVariant} isFullWidth asChild>
          <Link href={href}>{buttonLabel}</Link>
        </Button>
      );
    }

    return (
      <Button variant={buttonVariant} isFullWidth onClick={handleLogInClicik}>
        {buttonLabel}
      </Button>
    );
  };

  return (
    <div className={classes.container}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <div className="flex items-center gap-2">
          {userSubscriptionPlan?.slug === subscriptionPlanSlug && (
            <Tag variant={TagVariant.success}>Your Plan</Tag>
          )}
          {mostPopular && <Tag variant={TagVariant.primary}>Popular</Tag>}
        </div>
      </div>
      <p className="text-sm text-slate-400">{description}</p>
      <p className="text-5xl font-bold">
        <span className="animate-fade-up inline-block">
          <span className={classes.price}>${price}</span>
          {subscriptionPlanSlug === SubscriptionPlanSlug.plus && (
            <span className="ml-3 text-2xl font-semibold text-slate-400 line-through">
              {realValue}
            </span>
          )}
          <span className="animate-fade-up animate-delay-700 ml-1 text-lg font-normal text-slate-500">
            {frequency?.priceSuffix}
          </span>
        </span>
      </p>

      {renderButton()}

      <hr className={classes.divider} />
      <ul className="flex flex-col gap-4">{renderFeatures()}</ul>
    </div>
  );
};
