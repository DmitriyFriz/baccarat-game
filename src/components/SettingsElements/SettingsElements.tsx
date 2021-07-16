import React from 'react';
import { useStore } from '../../store';

import style from './SettingsElements.module.scss';

export const SettingsElements = () => {
  const bettingStore = useStore('bettingStore');
  const statisticsStore = useStore('statisticsStore');

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
    </div>
  );
};
