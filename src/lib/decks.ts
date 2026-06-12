export type Card = {
  id: number;
  front: string;
  back: string;
};

export type Deck = {
  id: string;
  title: string;
  description: string;
  cards: Card[];
};

export const decks:Deck[] = [
    { id: "sample",
        title: "Sample Deck",
        description: "A sample deck for demonstration purposes",
        cards: [{ id: 1,
            front: "What is the capital of France?",
            back: "Paris" }] },
    { id: "another",
        title: "Another Deck",
        description: "Another sample deck",
        cards: [{ id: 1,
            front: "What is the capital of Germany?",
            back: "Berlin" }] }];