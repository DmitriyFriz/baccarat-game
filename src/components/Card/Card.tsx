import React from 'react';
import { ReactComponent as CardSprite } from '../../assets/img/cards.svg';
import { PlayingCard } from '../../common/types';
import { getCardSpriteCoordinates } from './utility';

import s from './Card.module.scss';

export const Card = ({ suit, value }: PlayingCard) => {
  const { leftCoordinate, topCoordinate } = getCardSpriteCoordinates({ suit, value });

  return <CardSprite className={s.card} viewBox={`${leftCoordinate} ${topCoordinate} 140 190`} />;
};
