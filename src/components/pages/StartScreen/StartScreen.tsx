import React from 'react';
import { useHistory } from 'react-router-dom';
import { StartText } from '../../StartText';

import style from './StartScreen.module.scss';

export const StartScreen = () => {
  const history = useHistory();

  return (
    <div className={style.screen}>
      <button
        type="button"
        className={`button ${style.playButton}`}
        onClick={() => history.push('/game')}
      >
        Play
      </button>
      <StartText />
    </div>
  );
};
