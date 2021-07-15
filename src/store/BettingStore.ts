import { makeAutoObservable, action } from 'mobx';
import { Bets, ChipValue } from '../common/types';
import { BettingName, ratioByBettingName } from '../common/gameData';
import { StatisticsStore } from './StatisticsStore';

export class BettingStore {
  selectedBet: BettingName | null = null;
  bets: Bets = {
    [BettingName.Player]: [],
    [BettingName.Banker]: [],
    [BettingName.Tie]: [],
  };
  reward: number | null = null;
  commissionForBanker: number = 5;

  constructor(private balance: number, private statisticStore: StatisticsStore) {
    makeAutoObservable(this, {
      changeBet: action.bound,
      addBet: action.bound,
      cancelBet: action.bound,
      restBets: action.bound,
    });
  }

  changeBet(bet: BettingName | null) {
    this.selectedBet = bet;
  }

  addBet(value: ChipValue) {
    if (this.selectedBet !== null) {
      this.bets[this.selectedBet].push(value);
      this.balance -= value;
    }
  }

  cancelBet() {
    if (this.selectedBet !== null) {
      const value = this.bets[this.selectedBet].pop();

      if (value !== undefined) {
        this.balance += value;
      }
    }
  }

  selectBetByName(name: BettingName) {
    return this.bets[name];
  }

  selectBetAmountByName(name: BettingName) {
    return this.bets[name].reduce((amount, value) => amount + value, 0);
  }

  handleGameResult(wonBet: BettingName, playerScore: number, bankerScore: number) {
    this.calculationReward(wonBet);
    this.statisticStore.addRoundStatistics({
      playerScore,
      bankerScore,
      betsAmount: this.allBetsAmount,
      reward: this.reward!,
    });
  }

  private calculationReward(wonBet: BettingName) {
    const betAmount = this.selectBetAmountByName(wonBet);
    const commission = wonBet === BettingName.Banker ? this.commissionForBanker : 0;

    this.reward = Math.round(betAmount * ratioByBettingName[wonBet] * (1 - commission / 100));
    this.balance += this.reward;
  }

  restBets() {
    this.reward = null;
    this.selectedBet = null;
    Object.values(this.bets).forEach((bet) => bet.splice(0));
  }

  get currentBalance() {
    return this.balance;
  }

  get allBetsAmount() {
    return Object.keys(this.bets).reduce(
      (amount, bettingName) => amount + this.selectBetAmountByName(bettingName as BettingName),
      0
    );
  }

  get disableCancelBet() {
    return this.selectedBet === null || this.bets[this.selectedBet].length === 0;
  }

  get isExistedBet() {
    return Object.values(this.bets).some((bet) => bet.length > 0);
  }
}
