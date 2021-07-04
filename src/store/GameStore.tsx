import { action, makeAutoObservable } from 'mobx';
import { PlayingCard } from '../common/types';
import { minScore, prettyScore, minCountCards, maxCountCards } from '../common/gameData';
import { Dealer } from './Dealer';
import { countScore } from './countScore';

export class GameStore {
  playerCards: PlayingCard[] = [];
  bankerCards: PlayingCard[] = [];
  playerScore: number | null = null;
  bankerScore: number | null = null;
  isGame: boolean = false;

  constructor(private dealer: Dealer) {
    makeAutoObservable(this, {
      startGame: action.bound,
      continueGame: action.bound,
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

    console.log('continue');

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
      console.log('1');
      this.finishGame();
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

    this.finishGame();
  }

  finishGame() {
    // this.playerCards = [];
    // this.bankerCards = [];
    // this.playerScore = null;
    // this.bankerScore = null;
    console.log('finish');
    this.isGame = false;
  }

  resetCards() {
    this.playerCards = [];
    this.bankerCards = [];
    this.playerScore = null;
    this.bankerScore = null;
  }
}
