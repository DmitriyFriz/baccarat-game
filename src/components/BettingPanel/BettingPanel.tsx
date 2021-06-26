import React from 'react';
import { BettingPlace } from '../BettingPlace';
import { BettingName } from '../../common/types';
import { BettingControllers } from '../BettingControllers';

import s from './BettingPanel.module.scss';

export const BettingPanel = () => {
  return (
    <>
      <div className={s.places}>
        <BettingPlace bettingName={BettingName.Player} />
        <BettingPlace bettingName={BettingName.Tie} />
        <BettingPlace bettingName={BettingName.Banker} />
      </div>
      <BettingControllers />
    </>
  );
};
