import React from 'react';
import { observer } from 'mobx-react-lite';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useStore } from '../../store';
import { ChipValue } from '../../common/types';
import { BettingName } from '../../common/gameData';
import { Chip } from '../Chip';

import style from './Bet.module.scss';

interface BetProps {
  bet: ChipValue[];
  bettingName: BettingName;
}

export const Bet = observer(({ bet, bettingName }: BetProps) => {
  const bettingStore = useStore('bettingStore');

  return (
    <TransitionGroup
      className={style.chipPlace}
      onClick={() => bettingStore.cancelBet(bettingName)}
    >
      {bet.map((value, index) => {
        const key = `${index}${value}`;
        const nodeRef = React.createRef<HTMLDivElement>();

        return (
          <CSSTransition classNames="100" timeout={5} key={key} nodeRef={nodeRef} appear={true}>
            <div key={key} ref={nodeRef} className={style.chipContainer}>
              <Chip value={value} />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
});
