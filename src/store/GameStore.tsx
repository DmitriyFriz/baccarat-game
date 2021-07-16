import { action, makeAutoObservable } from 'mobx';
import { PlayingCard, MinScore } from '../common/types';
import {
  minScoreForStart,
  prettyScore,
  minCountCards,
  maxCountCards,
  BettingName,
} from '../common/gameData';
import { Dealer } from './Dealer';
import { BettingStore } from './BettingStore';
import { countScore } from './countScore';

export class GameStore {
  playerCards: PlayingCard[] = [];
  bankerCards: PlayingCard[] = [];
  playerScore: number | null = null;
  bankerScore: number | null = null;
  isGame: boolean = false;
  playerMinScore: MinScore = minScoreForStart;
  bankerMinScore: MinScore = minScoreForStart;

  constructor(private dealer: Dealer, private bettingStore: BettingStore) {
    makeAutoObservable(this, {
      startGame: action.bound,
      continueGame: action.bound,
      resetElements: action.bound,
      finishGame: action.bound,
      changePlayerMinScore: action.bound,
      changeBankerMinScore: action.bound,
    });
  }

  changePlayerMinScore(score: MinScore) {
    this.playerMinScore = score;
  }

  changeBankerMinScore(score: MinScore) {
    this.bankerMinScore = score;
  }

  startGame() {
    this.playerCards.push(this.dealer.card);
    this.playerScore = 0;
    this.bankerScore = 0;
    this.isGame = true;
    this.bettingStore.lockBets();
  }

  continueGame() {
    this.playerScore = countScore(this.playerCards);
    this.bankerScore = countScore(this.bankerCards);

    if (this.playerCards.length < minCountCards || this.bankerCards.length < minCountCards) {
      this.playerCards.length === this.bankerCards.length
        ? this.playerCards.push(this.dealer.card)
        : this.bankerCards.push(this.dealer.card);

      return;
    }

    if (
      (prettyScore.includes(this.playerScore) && this.playerCards.length < maxCountCards) ||
      (prettyScore.includes(this.bankerScore) && this.bankerCards.length < maxCountCards)
    ) {
      this.defineWinner();
      return;
    }

    if (this.playerCards.length < maxCountCards && this.playerScore < this.playerMinScore) {
      this.playerCards.push(this.dealer.card);
      return;
    }

    if (this.bankerCards.length < maxCountCards && this.bankerScore < this.bankerMinScore) {
      this.bankerCards.push(this.dealer.card);
      return;
    }

    this.defineWinner();
  }

  private defineWinner() {
    if (this.playerScore === this.bankerScore) {
      this.bettingStore.handleGameResult(BettingName.Tie, this.playerScore!, this.bankerScore!);
      return;
    }

    if (this.playerScore! > this.bankerScore!) {
      this.bettingStore.handleGameResult(BettingName.Player, this.playerScore!, this.bankerScore!);
    } else {
      this.bettingStore.handleGameResult(BettingName.Banker, this.playerScore!, this.bankerScore!);
    }
  }

  resetElements() {
    this.playerCards = [];
    this.bankerCards = [];
    this.playerScore = null;
    this.bankerScore = null;
    this.bettingStore.restBets();
  }

  finishGame() {
    this.isGame = false;
    this.bettingStore.unlockBets();
  }
}
