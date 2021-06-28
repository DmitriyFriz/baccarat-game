import { BettingName, chipValues, cardSuits, cardValues } from './gameData';

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
