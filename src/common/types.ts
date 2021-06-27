import { chipValues, cardSuits, cardValues } from './gameData';

export enum BettingName {
  Player = 'player',
  Banker = 'banker',
  Tie = 'tie',
}

export type ChipValue = typeof chipValues[number];

export type Bets = {
  [Key in BettingName]: ChipValue[];
};

export type CardSuit = typeof cardSuits[number];
export type CardValue = typeof cardValues[number];

export type PlayingCard = {
  suit: CardSuit;
  value: CardValue;
};
