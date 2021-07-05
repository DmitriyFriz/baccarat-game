export enum BettingName {
  Player = 'player',
  Banker = 'banker',
  Tie = 'tie',
}

export const ratioByBettingName = {
  [BettingName.Player]: 2,
  [BettingName.Banker]: 2,
  [BettingName.Tie]: 8,
};

export const chipValues = [1, 5, 10, 50, 100, 500] as const;

export const cardSuits = ['clubs', 'diamonds', 'hearts', 'spades'] as const;
export const cardValues = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
] as const;

export const basicScore = 10;
export const minScore = 6;
export const prettyScore: ReadonlyArray<number> = [8, 9];

export const minCountCards = 2;
export const maxCountCards = 3;

export enum BannerPhrase {
  Win = 'you win',
  Lose = 'you lose',
}
