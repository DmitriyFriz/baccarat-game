import React from 'react';

import style from './Score.module.scss';

interface ScoreProps {
  name: string;
  score: number | null;
  className: string;
}

export const Score = ({ name, score, className }: ScoreProps) => {
  const opacity = score === null ? 0 : 1;

  return (
    <div style={{ opacity }} className={className}>
      <div className={style.name}>{name}</div>
      <div className={style.score}>{score}</div>
    </div>
  );
};
