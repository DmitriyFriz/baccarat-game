import { PlayingCard } from '../common/types';
import { cardSuits, cardValues } from '../common/gameData';

export class Dealer {
  private readonly deck: PlayingCard[] = this.createDeck();
  private cardsInGame: PlayingCard[] = this.createShuffledCards();

  get card() {
    if (this.cardsInGame.length === 0) {
      this.cardsInGame = this.createShuffledCards();
    }

    return this.cardsInGame.pop()!;
  }

  private createShuffledCards() {
    const shuffledCards = [...this.deck];

    for (let i = shuffledCards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * shuffledCards.length);
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }

    return shuffledCards;
  }

  private createDeck() {
    const deck: PlayingCard[] = [];

    cardSuits.forEach((suit) => cardValues.forEach((value) => deck.push({ suit, value })));

    return deck;
  }
}
