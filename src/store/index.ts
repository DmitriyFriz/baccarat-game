import { createContext } from './storeUtils';
import { BettingStore } from './BettingStore';
import { GameStore } from './GameStore';
import { Dealer } from './Dealer';

const bettingStore = new BettingStore(1000);

const dealer = new Dealer();
const gameStore = new GameStore(dealer, bettingStore);

export const { StoreProvider, useStore } = createContext({
  bettingStore,
  gameStore,
});
