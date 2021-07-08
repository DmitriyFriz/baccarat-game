import React from 'react';
import { PlayingCard } from '../../common/types';
import { getCardSpriteCoordinates } from './utility';
import { ReactComponent as CardSprite } from '../../assets/img/cards.svg';
import { ReactComponent as BackwardIcon } from '../../assets/img/backward.svg';

import style from './Card.module.scss';

export const Card = ({ suit, value }: PlayingCard) => {
  const { leftCoordinate, topCoordinate } = getCardSpriteCoordinates({ suit, value });

  return (
    <>
      <div className={style.cardFront}>
        <CardSprite viewBox={`${leftCoordinate} ${topCoordinate} 140 190`} />
      </div>
      <div className={style.cardBack}>
        <BackwardIcon />
      </div>
    </>
  );
};
