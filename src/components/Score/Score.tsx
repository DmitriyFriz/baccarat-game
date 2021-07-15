import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './Score.module.scss';

interface ScoreProps {
  name: string;
  score: number | null;
  className: string;
}

export const Score = ({ name, score, className }: ScoreProps) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      classNames={{
        appear: style.scoreInvisible,
        enter: style.scoreInvisible,
        enterActive: style.showScore,
        exitActive: style.hideScore,
      }}
      in={score !== null}
      timeout={{
        enter: 1800,
        exit: 400,
      }}
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div className={className} ref={nodeRef}>
        <div className={style.name}>{name}</div>
        <div className={style.score}>{score}</div>
      </div>
    </CSSTransition>
  );
};
