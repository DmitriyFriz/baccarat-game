import React from 'react';
import { observer } from 'mobx-react-lite';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useStore } from '../../store';
import { ChipValue } from '../../common/types';
import { Chip } from '../Chip';

import style from './Bet.module.scss';

interface BetProps {
  bet: ChipValue[];
}

export const Bet = observer(({ bet }: BetProps) => {
  return (
    <TransitionGroup className={style.chipPlace} onClick={() => console.log('click')}>
      {bet.map((value, index) => {
        const key = `${index}${value}`;
        const nodeRef = React.createRef<HTMLDivElement>();

        return (
          <CSSTransition classNames="100" timeout={700} key={key} nodeRef={nodeRef} appear={true}>
            <div key={key} ref={nodeRef} className={style.chipContainer}>
              <Chip value={value} />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
});
