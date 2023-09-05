import { useEffect, useState } from 'react';
import cn from 'classnames';
import { type Frequency } from '~/common';

interface SubscriptionButtonProps {
  /**
   * The default frequency to be displayed.
   */
  defaultFrequency: Frequency;

  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * The function to be called when the button is clicked.
   */
  onClick: (frequency: Frequency) => void;

  /**
   * The list of frequencies to be displayed.
   */
  frequencies: Array<Frequency>;
}

export const SubscriptionButton = ({
  onClick,
  frequencies,
  defaultFrequency,
  className,
}: SubscriptionButtonProps) => {
  const [frequency, setFrequency] = useState<Frequency>(defaultFrequency || frequencies[0]);

  useEffect(() => {
    setFrequency(defaultFrequency);
  }, [defaultFrequency]);

  const classes = {
    container: cn(
      className,
      'relative flex items-center justify-between rounded-full bg-slate-900 px-4 py-2 w-44 font-bold',
    ),
    toggle: cn(
      'absolute inset-y-0 z-10',
      'flex items-center',
      'mx-1 my-auto px-4 h-5/6 bg-secondary-500',
      'transition-all rounded-full',
      {
        'left-[50%]': frequency.value === frequencies[1]?.value,
        'left-[0%]': frequency.value === frequencies[0]?.value,
      },
    ),
  };

  const handleToggleOnClick = () => {
    setFrequency((prev) => {
      const next = prev.value === frequencies[0]?.value ? frequencies[1] : frequencies[0];
      onClick(next as Frequency);
      return next as Frequency;
    });
  };

  return (
    <button className={classes.container} onClick={handleToggleOnClick}>
      {/* MONTHLY FREQUENCY */}
      <div className="text-slate-500">{frequencies[0]?.label}</div>

      {/* ACTIVE PLACEHOLDER */}
      <div className={classes.toggle}>
        <span>{frequency.label}</span>
      </div>

      {/* YEARLY FREQUENCY */}
      <div className="text-slate-500">{frequencies[1]?.label}</div>
    </button>
  );
};
