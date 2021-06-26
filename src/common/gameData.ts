import { BettingName } from './types';

export const ratioByBettingName = {
  [BettingName.Player]: 2,
  [BettingName.Banker]: 2,
  [BettingName.Tie]: 8,
};

export const chipValues = [1, 5, 10, 50, 100, 500] as const;
