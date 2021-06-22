import React from 'react';
import { BettingPanel } from '../BettingPanel';

// style
import s from './App.module.scss';

export const App = () => {
  return (
    <div className={s.container}>
      <BettingPanel />
    </div>
  );
};
