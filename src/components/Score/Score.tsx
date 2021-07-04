import React from 'react';

import s from './Score.module.scss';

interface ScoreProps {
  name: string;
  score: number | null;
  className: string;
}

export const Score = ({ name, score, className }: ScoreProps) => {
  const opacity = score === null ? 0 : 1;

  return (
    <div style={{ opacity }} className={className}>
      <div className={s.name}>{name}</div>
      <div className={s.score}>{score}</div>
    </div>
  );
};
