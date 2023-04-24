import React, { createContext, useContext, useMemo, useState } from 'react';

interface ExampleContextType {
  data: string;
  setData: (data: string) => void;
}

interface ExampleProviderProps {
  children: React.ReactNode;
  initialState?: string;
}

/*  CONTEXT DEFINITION  */
export const ExampleContext = createContext<ExampleContextType>({} as ExampleContextType);

export const ExampleProvider = ({ children, initialState = '' }: ExampleProviderProps): JSX.Element => {
  const [data, setData] = useState(initialState);

  const value = useMemo(() => ({ data, setData }), [data]);

  return <ExampleContext.Provider value={value}>{children}</ExampleContext.Provider>;
};

/*   EXPORT USE METHOD   */
export const useExampleContext = () => {
  const context = useContext(ExampleContext);
  if (!context) throw new Error('useExampleContext must be wrapped within ExampleProvider');
  return context;
};
