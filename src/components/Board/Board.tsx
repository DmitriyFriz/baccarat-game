import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { CardCollection } from '../CardCollection';

import s from './Board.module.scss';

export const Board = observer(() => {
  const gameStore = useStore('gameStore');

  return (
    <div className={s.board}>
      <CardCollection collection={gameStore.playerCards} isBankerCollection={false} />
      <CardCollection collection={gameStore.bankerCards} isBankerCollection={true} />
    </div>
  );
});
