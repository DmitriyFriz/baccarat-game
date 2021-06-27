import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { CardCollection } from '../CardCollection';

import s from './Board.module.scss';

export const Board = observer(() => {
  const gameStore = useStore('gameStore');

  gameStore.startGame();

  return (
    <div className={s.board}>
      <CardCollection collection={gameStore.playerCards} />
      <CardCollection collection={gameStore.bankerCards} />
    </div>
  );
});
