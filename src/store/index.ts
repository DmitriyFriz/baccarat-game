import { createContext } from './storeUtils';
import { BettingStore } from './BettingStore';

const bettingStore = new BettingStore();

export const { StoreProvider, useStore } = createContext({
  bettingStore,
});
