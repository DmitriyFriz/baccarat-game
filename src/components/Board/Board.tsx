import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { ReactComponent as DeckIcon } from '../../assets/img/deck.svg';
import { CardCollection } from '../CardCollection';
import { Score } from '../Score';

import s from './Board.module.scss';

export const Board = observer(() => {
  const gameStore = useStore('gameStore');

  return (
    <div className={s.board}>
      {/* <div className={s.player_score}>player:{gameStore.playerScore}</div> */}
      {/* <div className={s.banker_score}>banker:{gameStore.bankerScore}</div> */}
      <Score name="player" score={gameStore.playerScore} className={s.player_score} />
      <Score name="banker" score={gameStore.bankerScore} className={s.banker_score} />
      <CardCollection collection={gameStore.playerCards} isBankerCollection={false} />
      <CardCollection collection={gameStore.bankerCards} isBankerCollection={true} />
      <DeckIcon className={s.deck} />
    </div>
  );
});
