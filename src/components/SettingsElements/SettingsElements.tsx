import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { MinScore } from '../../common/types';
import { minScore } from '../../common/gameData';
import { Select } from '../Select';

import style from './SettingsElements.module.scss';

export const SettingsElements = observer(() => {
  const bettingStore = useStore('bettingStore');
  const statisticsStore = useStore('statisticsStore');
  const gameStore = useStore('gameStore');

  const { changePlayerMinScore, changeBankerMinScore } = gameStore;

  const handelChangePlayerMinScore = useCallback(
    (value) => {
      changePlayerMinScore(+value as MinScore);
    },
    [changePlayerMinScore]
  );

  const handelChangeBankerMinScore = useCallback(
    (value) => {
      changeBankerMinScore(+value as MinScore);
    },
    [changeBankerMinScore]
  );

  return (
    <div className={style.settings}>
      <button
        type="button"
        className={`button ${style.resetButton}`}
        onClick={bettingStore.resetBalance}
      >
        reset balance
      </button>
      <button
        type="button"
        className={`button ${style.resetButton}`}
        onClick={statisticsStore.resetStatistics}
      >
        reset statistics
      </button>
      <div className={style.selectorContainer}>
        <span>Min player score:</span>
        <Select
          data={minScore}
          onChange={handelChangePlayerMinScore}
          currentValue={gameStore.playerMinScore}
          className={style.selector}
        />
      </div>
      <div className={style.selectorContainer}>
        <span>Min banker score:</span>
        <Select
          data={minScore}
          onChange={handelChangeBankerMinScore}
          currentValue={gameStore.bankerMinScore}
          className={style.selector}
        />
      </div>
    </div>
  );
});
