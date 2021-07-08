import React from 'react';
import style from './App.module.scss';

import { Game } from '../Game';

export const App = () => {
  return (
    <div className={style.container}>
      <Game />
    </div>
  );
};
