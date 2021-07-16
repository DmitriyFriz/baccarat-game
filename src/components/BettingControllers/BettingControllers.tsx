import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { chipValues } from '../../common/gameData';
import { Chip } from '../Chip';

import style from './BettingControllers.module.scss';

export const BettingControllers = observer(() => {
  const bettingStore = useStore('bettingStore');
  const { balance } = bettingStore;

  const possibleChips = chipValues.filter((value) => value <= balance);
  const chipsView = possibleChips.map((value) => {
    return (
      <div key={value} className={style.chipContainer}>
        <Chip value={value} onClick={bettingStore.addBet} />;
      </div>
    );
  });

  return (
    <div className={style.container}>
      <div className={style.chipsArea}>{chipsView}</div>
    </div>
  );
});
