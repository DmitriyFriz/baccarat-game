import { chipValues } from './gameData';

export enum BettingName {
  Player = 'player',
  Banker = 'banker',
  Tie = 'tie',
}

export type ChipValue = typeof chipValues[number];

export type Bets = {
  [Key in BettingName]: ChipValue[];
};
