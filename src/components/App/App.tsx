import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import style from './App.module.scss';

import { Header } from '../Header';
import { Game } from '../pages/Game';
import { Statistics } from '../pages/Statistics';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={style.container}>
        <Switch>
          <Route path="/" exact={true} component={Game} />
          <Route path="/statistics" component={Statistics} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
