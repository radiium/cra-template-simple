import React, { FC } from 'react';
import logo from '../../logo.svg';
import Counter from '../Counter/Counter';
import './Layout.scss'

interface Props {
}

interface State {
}

export const Layout: FC = (props: Props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter/>
            </header>
        </div>
    );
};

export default Layout;