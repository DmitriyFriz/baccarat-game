import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import s from './DealButton.module.scss';

export const DealButton = observer(() => {
  const gameStore = useStore('gameStore');
  const bettingStore = useStore('bettingStore');

  const isDisable = !bettingStore.isExistedBet || gameStore.isGame;

  return (
    <button
      type="button"
      className={`button ${s.deal_button}`}
      onClick={() => gameStore.startGame()}
      disabled={isDisable}
    >
      Deal
    </button>
  );
});
