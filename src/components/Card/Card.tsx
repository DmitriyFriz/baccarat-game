import React from 'react';
import { PlayingCard } from '../../common/types';
import { getCardSpriteCoordinates } from './utility';
import { ReactComponent as CardSprite } from '../../assets/img/cards.svg';
import { ReactComponent as BackwardIcon } from '../../assets/img/backward.svg';

import s from './Card.module.scss';
import st from '../CardCollection/CardCollection.module.scss';

export const Card = ({ suit, value }: PlayingCard) => {
  const { leftCoordinate, topCoordinate } = getCardSpriteCoordinates({ suit, value });

  return (
    <>
      <div className={s.card_front}>
        <CardSprite className={s.card} viewBox={`${leftCoordinate} ${topCoordinate} 140 190`} />
      </div>
      <div className={s.card_back}>
        <BackwardIcon className={s.card} />
      </div>
    </>
  );
};
