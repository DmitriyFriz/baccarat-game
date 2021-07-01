import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Board } from '../Board';
import { BettingPanel } from '../BettingPanel';

import s from './Game.module.scss';

export const Game = observer(() => {
  const gameStore = useStore('gameStore');

  return (
    <div className={s.game}>
      <Board />
      <button type="button" onClick={() => gameStore.startGame()}>
        Start Game
      </button>
      <button type="button" onClick={() => gameStore.finishGame()}>
        Finish Game
      </button>
      <BettingPanel />
    </div>
  );
});
