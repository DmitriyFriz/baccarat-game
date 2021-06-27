import React from 'react';
import { Game } from '../Game';

import s from './App.module.scss';

export const App = () => {
  return (
    <div className={s.container}>
      <Game />
    </div>
  );
};
