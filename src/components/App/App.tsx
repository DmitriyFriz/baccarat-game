import React from 'react';
import s from './App.module.scss';

import { Game } from '../Game';

export const App = () => {
  return (
    <div className={s.container}>
      <Game />
    </div>
  );
};
