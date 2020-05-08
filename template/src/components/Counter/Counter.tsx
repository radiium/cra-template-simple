import React, { FC } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';

import './Counter.scss'

export interface CounterProps {
}

export const Counter: FC<CounterProps> = (props: CounterProps) => {
    const counterContext = useCounterContext();
    return (
        <div className="counter-wrapper" {...props}>
            <button className="counter-btn" onClick={counterContext.decrement}>-</button>
            <div>Counter: {counterContext.getCount()}</div>
            <button className="counter-btn" onClick={counterContext.increment}>+</button>
        </div>
    );
};
