import { PlayingCard, CardValue } from '../../common/types';
import { cardValues, basicScore } from '../../common/gameData';

export const countScore = (cards: PlayingCard[]) => {
  const fullScore = cards.reduce((amount, { value }) => amount + countScoreByCardValue(value), 0);

  return fullScore % basicScore;
};

const countScoreByCardValue = (value: CardValue) => {
  const score = cardValues.indexOf(value) + 1;

  return score < basicScore ? score : 0;
};
