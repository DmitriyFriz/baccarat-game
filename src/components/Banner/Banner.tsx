import React, { useState, useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { CSSTransition } from 'react-transition-group';
import { useStore } from '../../store';
import { BannerPhrase } from '../../common/gameData';
import { ReactComponent as BannerIcon } from '../../assets/img/banner.svg';

import s from './Banner.module.scss';

export const Banner = observer(() => {
  const bettingStore = useStore('bettingStore');
  const gameStore = useStore('gameStore');
  const { reward } = bettingStore;

  const [visible, setVisible] = useState(false);
  const nodeRef = useRef(null);

  const bannerClassName = reward === 0 ? s.banner_lose : s.banner_win;
  const phraseMessage = reward === 0 ? BannerPhrase.Lose : BannerPhrase.Win;
  const rewardMessage = reward === 0 ? null : reward;

  useEffect(() => {
    if (reward !== null) {
      setVisible(true);
    }
  }, [reward]);

  return (
    <CSSTransition
      classNames={{
        enterActive: s.banner_showed,
        exitActive: s.banner_hidden,
      }}
      in={visible}
      timeout={{
        enter: 3000,
        exit: 700,
      }}
      unmountOnExit
      nodeRef={nodeRef}
      onEntered={() => setVisible(false)}
      onExited={() => {
        bettingStore.restBets();
        gameStore.resetCards();
      }}
    >
      <div className={s.banner_container} ref={nodeRef}>
        <BannerIcon className={bannerClassName} />
        <div className={s.massage}>
          <div>{phraseMessage}</div>
          <div>{rewardMessage}</div>
        </div>
      </div>
    </CSSTransition>
  );
});
