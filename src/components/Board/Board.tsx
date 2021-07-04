import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { CardCollection } from '../CardCollection';
import { ReactComponent as DeckIcon } from '../../assets/img/deck.svg';

import s from './Board.module.scss';

export const Board = observer(() => {
  const gameStore = useStore('gameStore');

  return (
    <div className={s.board}>
      <div className={s.player_score}>player:{gameStore.playerScore}</div>
      <div className={s.banker_score}>banker:{gameStore.bankerScore}</div>
      <CardCollection collection={gameStore.playerCards} isBankerCollection={false} />
      <CardCollection collection={gameStore.bankerCards} isBankerCollection={true} />
      <DeckIcon className={s.deck} />
    </div>
  );
});
