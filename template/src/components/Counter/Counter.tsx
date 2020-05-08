import React, { FC } from 'react';
import { useCounterContext } from '../../contexts/Counter';
import './Counter.scss'

interface Props {
}

interface State {
}

export const Counter: FC = (props: Props) => {
    const counterContext = useCounterContext();
    return (
        <div className="counter-wrapper">
            <button className="counter-btn" onClick={counterContext.decrement}>-</button>
            <div>Counter: {counterContext.getValue()}</div>
            <button className="counter-btn" onClick={counterContext.increment}>+</button>
        </div>
    );
};

export default Counter;