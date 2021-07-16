import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import style from './App.module.scss';

import { Header } from '../Header';
import { Game } from '../pages/Game';
import { Statistics } from '../pages/Statistics';
import { Chart } from '../pages/Chart';
import { Settings } from '../pages/Settings';

export const App = () => {
  return (
    <BrowserRouter>
      <div className={style.container}>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Game} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/chart" component={Chart} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
