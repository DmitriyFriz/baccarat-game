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
