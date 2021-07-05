import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { BannerPhrase } from '../../common/gameData';
import { ReactComponent as BannerIcon } from '../../assets/img/banner.svg';

import s from './Banner.module.scss';

export const Banner = observer(() => {
  const bettingStore = useStore('bettingStore');
  const { reward } = bettingStore;

  const bannerClassName = reward === 0 ? s.banner_lose : s.banner_win;
  const phraseMessage = reward === 0 ? BannerPhrase.Lose : BannerPhrase.Win;
  const rewardMessage = reward === 0 ? null : reward;

  return (
    <div className={s.banner_container}>
      <BannerIcon className={bannerClassName} />
      <div className={s.massage}>
        <div>{phraseMessage}</div>
        <div>{rewardMessage}</div>
      </div>
    </div>
  );
});
