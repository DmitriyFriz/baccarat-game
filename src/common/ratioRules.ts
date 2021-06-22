import { BettingName } from './types';

export const ratioByBettingName = {
  [BettingName.Player]: 2,
  [BettingName.Banker]: 2,
  [BettingName.Tie]: 8,
};
