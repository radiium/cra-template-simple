import React, { FC } from 'react';
import { Counter } from '../Counter/Counter';
import logo from '../../logo.svg';

import './Layout.scss'

export interface LayoutProps {
}

export const Layout: FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div className="layout-wrapper" {...props}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter/>
            </header>
        </div>
    );
};
