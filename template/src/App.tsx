import React, { FC } from 'react';
import { Layout } from './components/Layout/Layout';
import { CounterProvider } from './contexts/CounterContext';

import './App.scss';

const App: FC = () => {
  return (
    <CounterProvider>
      <Layout />
    </CounterProvider>
  );
}

export default App;
