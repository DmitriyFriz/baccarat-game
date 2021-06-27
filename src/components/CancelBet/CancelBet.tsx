import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import s from './CancelBet.module.scss';

export const CancelBet = observer(() => {
  const bettingStore = useStore('bettingStore');

  return (
    <button
      type="button"
      className={s.cancel}
      onClick={() => bettingStore.cancelBet()}
      disabled={bettingStore.disableCancelBet}
    >
      cancel bet
    </button>
  );
});
