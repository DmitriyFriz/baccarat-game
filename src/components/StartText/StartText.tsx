import React from 'react';
import { ReactComponent as Text } from '../../assets/img/start-text.svg';

import style from './StartText.module.scss';

export const StartText = () => {
  return <Text className={style.text} />;
};
