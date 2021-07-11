import { BettingName, chipValues, cardSuits, cardValues } from './gameData';

export type ChipValue = typeof chipValues[number];

export type Bets = {
  [Key in BettingName]: ChipValue[];
};

export type CardSuit = typeof cardSuits[number];
export type CardValue = typeof cardValues[number];

export interface PlayingCard {
  suit: CardSuit;
  value: CardValue;
}

export interface RoundStatistics {
  playerScore: number;
  bankerScore: number;
  betsAmount: number;
  reward: number;
}

export interface Time {
  timestamp: number;
}

export type Statistics = RoundStatistics & Time;
