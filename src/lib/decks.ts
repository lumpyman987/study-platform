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
            back: "Paris" }, { id: 2,
            front: "What is the capital of Germany?",
            back: "Berlin" }, { id: 3,
            front: "What is the capital of Japan?",
            back: "Tokyo" }, { id: 4,
            front: "What is the capital of Canada?",
            back: "Ottawa" }, { id: 5,
            front: "What is the capital of Australia?",
            back: "Canberra" }] },
    { id: "another",
        title: "Another Deck",
        description: "Another sample deck",
        cards: [{ id: 1,
            front: "What is the capital of Germany?",
            back: "Berlin" }, { id: 2,
            front: "What is the capital of Japan?",
            back: "Tokyo" }, { id: 3,
            front: "What is the capital of Canada?",
            back: "Ottawa" }] }];