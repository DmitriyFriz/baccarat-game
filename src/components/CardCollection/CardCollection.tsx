import React from 'react';
import { PlayingCard } from '../../common/types';
import { Card } from '../Card';

interface CardCollectionProps {
  collection: PlayingCard[];
}

export const CardCollection = ({ collection }: CardCollectionProps) => {
  const cardCollectionView = collection.map(({ suit, value }) => (
    <Card suit={suit} value={value} key={`${suit}${value}`} />
  ));

  return <div>{cardCollectionView}</div>;
};
