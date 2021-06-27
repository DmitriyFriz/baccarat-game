import React from 'react';
import { Board } from '../Board';
import { BettingPanel } from '../BettingPanel';

import s from './Game.module.scss';

export const Game = () => {
  return (
    <div className={s.game}>
      <Board />
      <BettingPanel />
    </div>
  );
};
