import React from 'react';
import { observer } from 'mobx-react-lite';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useStore } from '../../store';
import { BettingName } from '../../common/gameData';
import { Chip } from '../Chip';

import style from './Bet.module.scss';

interface BetProps {
  bettingName: BettingName;
}

export const Bet = observer(({ bettingName }: BetProps) => {
  const bettingStore = useStore('bettingStore');
  const bet = bettingStore.selectBetByName(bettingName);

  return (
    <TransitionGroup
      className={style.chipPlace}
      onClick={() => bettingStore.cancelBet(bettingName)}
    >
      {bet.map((value, index) => {
        const key = `${index}${value}`;
        const nodeRef = React.createRef<HTMLDivElement>();

        return (
          <CSSTransition
            classNames={{
              enterActive: style.betShow,
              exitActive: style.betHide,
            }}
            timeout={{
              enter: 400,
              exit: 400,
            }}
            key={key}
            nodeRef={nodeRef}
            appear={true}
          >
            <div key={key} ref={nodeRef} className={style.chipContainer}>
              <Chip value={value} />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
});
