import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import style from './App.module.scss';

import { Header } from '../Header';
import { Game } from '../pages/Game';
import { Statistics } from '../pages/Statistics';
import { Chart } from '../pages/Chart';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={style.container}>
        <Switch>
          <Route path="/" exact={true} component={Game} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/chart" component={Chart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
