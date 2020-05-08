import React, { FC, createContext, useContext, useState } from 'react';

interface Props {
  children: any;
}

interface State {
  count: number;
}

const initialState = 0;
export const CounterContext = createContext<any>(null);

export const CounterProvider: FC<Props> = (props: Props) => {
  const [count, setCount] = useState(initialState);
  const getValue = () => count;
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const counterActions = { getValue, increment, decrement };
  return (<CounterContext.Provider value={counterActions} {...props}/>);
}

export const useCounterContext = () => useContext(CounterContext);
