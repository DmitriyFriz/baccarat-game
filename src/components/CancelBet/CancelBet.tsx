import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

export const CancelBet = observer(() => {
  const bettingStore = useStore('bettingStore');

  return (
    <button type="button" className="button" disabled={bettingStore.disableCancelBet}>
      cancel bet
    </button>
  );
});
