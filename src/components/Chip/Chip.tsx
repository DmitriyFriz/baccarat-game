import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { ReactComponent as ChipSprite } from '../../assets/img/chips.svg';
import { ChipValue } from '../../common/types';
import { getChipSpriteLeftCoordinate } from './utility';

import style from './Chip.module.scss';

interface ChipProps {
  value: ChipValue;
}

export const Chip = observer(({ value }: ChipProps) => {
  const bettingStore = useStore('bettingStore');
  const leftCoordinate = getChipSpriteLeftCoordinate(value);

  return (
    <ChipSprite
      className={style.chip}
      viewBox={`${leftCoordinate} 0 500 500`}
      onClick={() => bettingStore.addBet(value)}
    />
  );
});
