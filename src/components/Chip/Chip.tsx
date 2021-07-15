import React, { useCallback } from 'react';
import { ReactComponent as ChipSprite } from '../../assets/img/chips.svg';
import { ChipValue } from '../../common/types';
import { getChipSpriteLeftCoordinate } from './utility';

import style from './Chip.module.scss';

interface ChipProps {
  value: ChipValue;
  onClick?: (value: ChipValue) => void;
}

export const Chip = ({ value, onClick }: ChipProps) => {
  const leftCoordinate = getChipSpriteLeftCoordinate(value);

  const onAdd = useCallback(() => {
    if (onClick !== undefined) {
      onClick(value);
    }
  }, [onClick, value]);

  return (
    <ChipSprite className={style.chip} viewBox={`${leftCoordinate} 0 500 500`} onClick={onAdd} />
  );
};
