import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { BettingName, ratioByBettingName } from '../../common/gameData';
import { Bet } from '../Bet';

import style from './BettingPlace.module.scss';

interface BettingPlaceProps {
  bettingName: BettingName;
}

export const BettingPlace = observer(({ bettingName }: BettingPlaceProps) => {
  const bettingStore = useStore('bettingStore');
  const ratio = ratioByBettingName[bettingName];
  const amount = bettingStore.selectBetAmountByName(bettingName);

  const bet = bettingStore.selectBetByName(bettingName);

  return (
    <label htmlFor={bettingName} className={style.bettingContainer}>
      <input
        className={style.radio}
        id={bettingName}
        type="radio"
        name="bet-place"
        value={bettingName}
        checked={bettingStore.selectedBet === bettingName}
        onChange={() => bettingStore.changeBet(bettingName)}
      />
      <div className={style.bet}>
        <p>{bettingName}</p>
        {bet.length > 0 ? <Bet bet={bet} bettingName={bettingName} /> : <p>{ratio}:1</p>}
        <p className={style.amount}>{amount}</p>
      </div>
    </label>
  );
});
