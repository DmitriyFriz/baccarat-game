import { makeAutoObservable, action } from 'mobx';
import { Bets, ChipValue } from '../common/types';
import { BettingName } from '../common/gameData';

export class BettingStore {
  selectedBet: BettingName | null = null;
  bets: Bets = {
    [BettingName.Player]: [],
    [BettingName.Banker]: [],
    [BettingName.Tie]: [],
  };

  constructor(private score: number) {
    makeAutoObservable(this, {
      changeBet: action.bound,
      addBet: action.bound,
      cancelBet: action.bound,
    });
  }

  changeBet(bet: BettingName | null) {
    this.selectedBet = bet;
  }

  addBet(value: ChipValue) {
    if (this.selectedBet !== null) {
      this.bets[this.selectedBet].push(value);
      this.score -= value;
    }
  }

  cancelBet() {
    if (this.selectedBet !== null) {
      const value = this.bets[this.selectedBet].pop();

      if (value !== undefined) {
        this.score += value;
      }
    }
  }

  selectBetAmountByName(name: BettingName) {
    return this.bets[name].reduce((amount, value) => amount + value, 0);
  }

  get currentScore() {
    return this.score;
  }

  get disableCancelBet() {
    return this.selectedBet === null || this.bets[this.selectedBet].length === 0;
  }
}
