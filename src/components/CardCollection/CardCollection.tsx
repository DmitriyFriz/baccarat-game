import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { PlayingCard } from '../../common/types';
import { Card } from '../Card';

import s from './CardCollection.module.scss';

interface CardCollectionProps {
  collection: PlayingCard[];
  isBankerCollection: boolean;
}

export const CardCollection = observer(
  ({ collection, isBankerCollection }: CardCollectionProps) => {
    const gameStore = useStore('gameStore');
    const collectionClass = isBankerCollection ? s.banker_collection : s.player_collection;

    return (
      <TransitionGroup className={collectionClass}>
        {collection.map(({ suit, value }, index) => {
          const key = `${suit}${value}`;
          const nodeRef = React.createRef<HTMLDivElement>();

          return (
            <CSSTransition
              classNames={{
                enterActive: s.card_showed,
                exitActive: s.card_hidden,
              }}
              timeout={{
                exit: 1000,
              }}
              key={key}
              nodeRef={nodeRef}
              appear={true}
              onEntered={() => {
                // if (index === 1 && isBankerCollection) {
                gameStore.continueGame();
                // }
              }}
              addEndListener={(done) => {
                nodeRef.current!.addEventListener(
                  'animationend',
                  () => {
                    if (gameStore.isGame) {
                      done();
                    }
                  },
                  false
                );
              }}
            >
              <div key={key} ref={nodeRef} className={s.card_container}>
                <div className={s.card_inner}>
                  <Card suit={suit} value={value} key={key} />
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
);
