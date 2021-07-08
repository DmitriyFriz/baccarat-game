import React from 'react';
import { Board } from '../Board';
import { BettingPanel } from '../BettingPanel';

import style from './Game.module.scss';

export const Game = () => {
  return (
    <div className={style.game}>
      <Board />
      <BettingPanel />
    </div>
  );
};
