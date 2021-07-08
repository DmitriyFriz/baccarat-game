import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { ReactComponent as DeckIcon } from '../../assets/img/deck.svg';
import { CardCollection } from '../CardCollection';
import { Score } from '../Score';
import { DealButton } from '../DealButton';
import { Banner } from '../Banner';

import style from './Board.module.scss';

export const Board = observer(() => {
  const gameStore = useStore('gameStore');

  return (
    <div className={style.board}>
      <Banner />
      <Score name="player" score={gameStore.playerScore} className={style.playerScore} />
      <Score name="banker" score={gameStore.bankerScore} className={style.bankerScore} />
      <CardCollection collection={gameStore.playerCards} isBankerCollection={false} />
      <CardCollection collection={gameStore.bankerCards} isBankerCollection={true} />
      <DealButton />
      <DeckIcon className={style.deck} />
    </div>
  );
});
