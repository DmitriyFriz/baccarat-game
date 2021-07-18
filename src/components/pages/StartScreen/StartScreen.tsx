import React from 'react';
import { useHistory } from 'react-router-dom';

import style from './StartScreen.module.scss';

export const StartScreen = () => {
  const history = useHistory();

  return (
    <div className={style.screen}>
      <button type="button" className="button" onClick={() => history.push('/game')}>
        Play
      </button>
    </div>
  );
};
