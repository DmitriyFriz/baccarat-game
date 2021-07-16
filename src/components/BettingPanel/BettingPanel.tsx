import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { CSSTransition } from 'react-transition-group';
import { useStore } from '../../store';
import { BettingPlace } from '../BettingPlace';
import { BettingName } from '../../common/gameData';
import { BettingControllers } from '../BettingControllers';

import style from './BettingPanel.module.scss';

export const BettingPanel = observer(() => {
  const bettingStore = useStore('bettingStore');

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      classNames={{
        appear: style.panelShow,
        enterActive: style.panelShow,
        exitActive: style.panelHidden,
      }}
      in={!bettingStore.isLockedBet}
      timeout={{
        enter: 1000,
        exit: 700,
      }}
      unmountOnExit
      appear
      nodeRef={nodeRef}
    >
      <div className={style.panel} ref={nodeRef}>
        <div className={style.placesWrapper}>
          <div className={style.placeContainer}>
            <div className={style.places}>
              <BettingPlace bettingName={BettingName.Player} />
              <BettingPlace bettingName={BettingName.Tie} />
              <BettingPlace bettingName={BettingName.Banker} />
            </div>
          </div>
        </div>
        <BettingControllers />
      </div>
    </CSSTransition>
  );
});
