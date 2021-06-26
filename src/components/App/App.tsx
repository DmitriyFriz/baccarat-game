import React from 'react';
import { BettingPanel } from '../BettingPanel';

import s from './App.module.scss';

export const App = () => {
  return (
    <div className={s.container}>
      <BettingPanel />
    </div>
  );
};
