import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { BettingName } from '../../common/types';
import { ratioByBettingName } from '../../common/gameData';

// style
import s from './BettingPlace.module.scss';

interface BettingPlaceProps {
  bettingName: BettingName;
}

export const BettingPlace = observer(({ bettingName }: BettingPlaceProps) => {
  const bettingStore = useStore('bettingStore');
  const ratio = ratioByBettingName[bettingName];
  const amount = bettingStore.selectBetAmountByName(bettingName);

  return (
    <label htmlFor={bettingName}>
      <input
        className={s.radio}
        id={bettingName}
        type="radio"
        name="bet-place"
        value={bettingName}
        checked={bettingStore.selectedBet === bettingName}
        onChange={() => bettingStore.changeBet(bettingName)}
      />
      <div className={s.bet}>
        <p>{bettingName}</p>
        <p>{ratio}:1</p>
        <p>{amount}</p>
      </div>
    </label>
  );
});
