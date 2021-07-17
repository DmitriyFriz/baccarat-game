import { createContext } from './storeUtils/storeUtils';
import { BettingStore } from './BettingStore';
import { GameStore } from './GameStore';
import { Dealer } from './gameUtils/Dealer';
import { StatisticsStore } from './StatisticsStore';

const statisticsStore = new StatisticsStore();
const bettingStore = new BettingStore(statisticsStore);

const dealer = new Dealer();
const gameStore = new GameStore(dealer, bettingStore);

export const { StoreProvider, useStore } = createContext({
  bettingStore,
  gameStore,
  statisticsStore,
});
