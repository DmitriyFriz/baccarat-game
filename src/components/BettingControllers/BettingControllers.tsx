import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { chipValues } from '../../common/gameData';
import { Chip } from '../Chip';

export const BettingControllers = observer(() => {
  const bettingStore = useStore('bettingStore');
  const { currentScore } = bettingStore;
  const possibleChips = chipValues.filter((value) => value <= currentScore);
  const chipsView = possibleChips.map((possibleValue) => (
    <Chip value={possibleValue} key={possibleValue} />
  ));

  return (
    <div>
      {chipsView}
      <div>{currentScore}</div>
    </div>
  );
});
