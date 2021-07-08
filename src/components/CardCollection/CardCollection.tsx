import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { PlayingCard } from '../../common/types';
import { Card } from '../Card';

import style from './CardCollection.module.scss';

interface CardCollectionProps {
  collection: PlayingCard[];
  isBankerCollection: boolean;
}

export const CardCollection = observer(
  ({ collection, isBankerCollection }: CardCollectionProps) => {
    const gameStore = useStore('gameStore');
    const collectionClass = isBankerCollection ? style.bankerCollection : style.playerCollection;

    return (
      <TransitionGroup className={collectionClass}>
        {collection.map(({ suit, value }, index) => {
          const key = `${suit}${value}`;
          const nodeRef = React.createRef<HTMLDivElement>();

          return (
            <CSSTransition
              classNames={{
                enterActive: style.cardShowed,
                exitActive: style.cardHidden,
              }}
              timeout={{
                exit: 700,
              }}
              key={key}
              nodeRef={nodeRef}
              appear={true}
              onEntered={() => {
                gameStore.continueGame();
              }}
              onExited={() => {
                if (index === 0 && isBankerCollection) {
                  gameStore.finishGame();
                }
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
              <div key={key} ref={nodeRef} className={style.cardContainer}>
                <div className={style.cardInner}>
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
