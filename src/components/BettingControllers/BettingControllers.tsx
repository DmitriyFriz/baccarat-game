import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { chipValues } from '../../common/gameData';
import { Chip } from '../Chip';
import { CancelBet } from '../CancelBet';

import style from './BettingControllers.module.scss';

export const BettingControllers = observer(() => {
  const bettingStore = useStore('bettingStore');
  const { currentBalance } = bettingStore;

  const possibleChips = chipValues.filter((value) => value <= currentBalance);
  const chipsView = possibleChips.map((possibleValue) => (
    <Chip value={possibleValue} key={possibleValue} />
  ));

  return (
    <div className={style.container}>
      <div className={style.balance}>{currentBalance}</div>
      <div className={style.chipsArea}>{chipsView}</div>
      <CancelBet />
    </div>
  );
});
