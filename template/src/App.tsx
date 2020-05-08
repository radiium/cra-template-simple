import React, { FC } from 'react';
import Layout from './components/Layout/Layout';
import './App.scss';
import { CounterProvider } from './contexts/Counter';

const App: FC = () => {
  return (
    <CounterProvider>
      <Layout />
    </CounterProvider>
  );
}

export default App;
