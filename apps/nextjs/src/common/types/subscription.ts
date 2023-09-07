import { type SubscriptionFrequency } from '~/common';

export type Frequency = {
  value: SubscriptionFrequency;
  label: string;
  priceSuffix: string;
};
