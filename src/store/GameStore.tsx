import { action, makeAutoObservable } from 'mobx';
import { PlayingCard } from '../common/types';
import {
  minScore,
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

  constructor(private dealer: Dealer, private bettingStore: BettingStore) {
    makeAutoObservable(this, {
      startGame: action.bound,
      continueGame: action.bound,
      resetCards: action.bound,
      finishGame: action.bound,
    });
  }

  startGame() {
    this.playerCards.push(this.dealer.card);
    this.playerScore = 0;
    this.bankerScore = 0;
    this.isGame = true;
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

    if (this.playerCards.length < maxCountCards && this.playerScore < minScore) {
      this.playerCards.push(this.dealer.card);
      return;
    }

    if (this.bankerCards.length < maxCountCards && this.bankerScore < minScore) {
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

  resetCards() {
    this.playerCards = [];
    this.bankerCards = [];
    this.playerScore = null;
    this.bankerScore = null;
  }

  finishGame() {
    this.isGame = false;
  }
}
