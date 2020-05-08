import React, { FC, createContext, useContext, useState } from 'react';

export interface CounterProps {
  children: any;
}

export interface CounterState {
    count: number;
}

export interface CounterContextType {
    getCount: () => number;
    increment: () => void;
    decrement: () => void;
}

const initialState: CounterState = { count: 0 };
const CounterContext = createContext<CounterContextType>({} as any);

export const CounterProvider: FC<CounterProps> = (props: CounterProps) => {
  const [state, setState] = useState<CounterState>(initialState);

  const getCount = (): number => state.count;
  const increment = (): void => setState({ count: state.count + 1 });
  const decrement = (): void => setState({ count: state.count - 1 });

  const counterActions: CounterContextType = { getCount, increment, decrement };

  return (<CounterContext.Provider value={counterActions} {...props}/>);
}

export const useCounterContext = () => useContext(CounterContext);
