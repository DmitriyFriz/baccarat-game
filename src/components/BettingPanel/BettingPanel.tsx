import React from 'react';
import { BettingPlace } from '../BettingPlace';
import { BettingName } from '../../common/gameData';
import { BettingControllers } from '../BettingControllers';

import style from './BettingPanel.module.scss';

export const BettingPanel = () => {
  return (
    <>
      <div className={style.places}>
        <BettingPlace bettingName={BettingName.Player} />
        <BettingPlace bettingName={BettingName.Tie} />
        <BettingPlace bettingName={BettingName.Banker} />
      </div>
      <BettingControllers />
    </>
  );
};
