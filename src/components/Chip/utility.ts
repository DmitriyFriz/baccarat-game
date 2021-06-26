import { ChipValue } from '../../common/types';
import { chipValues } from '../../common/gameData';

const leftStep = 550;

export const getChipSpriteLeftCoordinate = (value: ChipValue) => {
  return chipValues.indexOf(value) * leftStep;
};
