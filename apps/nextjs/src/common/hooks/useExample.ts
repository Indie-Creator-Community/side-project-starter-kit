import { useCallback, useEffect, useState } from 'react';

interface ExampleOptions {
  // Define the options for your custom hook here.
  // For example:
  initialValue: string;
  onChange: (value: string) => void;
}

export const useExample = (options: ExampleOptions) => {
  const { initialValue, onChange } = options;

  // State for keeping track of the example value
  const [value, setValue] = useState(initialValue);

  // Handler for updating the value
  const updateValue = useCallback(
    (newValue: string): void => {
      setValue(newValue);
      if (typeof onChange === 'function') {
        onChange(newValue);
      }
    },
    [onChange],
  );

  // Add any necessary side effects or event listeners here
  useEffect(() => {
    // This is just a placeholder for any side effects or event listeners
    // you may need in your custom hook.
    return () => {
      // Clean up any side effects or event listeners here.
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return [value, updateValue];
};
