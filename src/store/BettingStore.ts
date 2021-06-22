import { makeAutoObservable, action } from 'mobx';
import { BettingName } from '../types';

export class BettingStore {
  selectedBet: BettingName | null = null;

  constructor() {
    makeAutoObservable(this, {
      changeBet: action.bound,
    });
  }

  changeBet(bet: BettingName | null) {
    this.selectedBet = bet;
  }
}
