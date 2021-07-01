import { action, makeAutoObservable } from 'mobx';
import { PlayingCard } from '../common/types';
import { Dealer } from './Dealer';

export class GameStore {
  private readonly countCardsForFirstDistribution = 2;
  playerCards: PlayingCard[] = [];
  bankerCards: PlayingCard[] = [];
  isGame: boolean = false;

  constructor(private dealer: Dealer) {
    makeAutoObservable(this, {
      startGame: action.bound,
      continueGame: action.bound,
      finishGame: action.bound,
    });
  }

  startGame() {
    for (let i = 0; i < this.countCardsForFirstDistribution; i++) {
      this.playerCards.push(this.dealer.card);
      this.bankerCards.push(this.dealer.card);
    }
    this.isGame = true;
  }

  continueGame() {
    this.playerCards.push(this.dealer.card);
    this.bankerCards.push(this.dealer.card);
  }

  finishGame() {
    this.playerCards = [];
    this.bankerCards = [];
    this.isGame = false;
  }
}
