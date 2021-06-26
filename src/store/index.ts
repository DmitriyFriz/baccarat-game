import { createContext } from './storeUtils';
import { BettingStore } from './BettingStore';

const bettingStore = new BettingStore(1000);

export const { StoreProvider, useStore } = createContext({
  bettingStore,
});
