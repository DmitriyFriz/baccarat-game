import React from 'react';
import { ReactComponent as ChipSprite } from '../../assets/img/chips.svg';

// style
import s from './Chip.module.scss';

interface ChipProps {
  value: number;
}

export const Chip = ({ value }: ChipProps) => {
  return <ChipSprite className={s.chip} viewBox="0 0 500 500" />;
};
