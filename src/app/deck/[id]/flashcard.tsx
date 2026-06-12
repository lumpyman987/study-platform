"use client";
import type { Card } from "@/lib/decks";
import { useState } from "react";

export default function FlashcardClient({ cards, }: { cards: Card[]; }) {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const card = cards[index];

    return (
        <>
            <div id="flashcard" className="flex flex-col items-center justify-center mt-6 rounded-lg w-full max-w-md bg-gray-200 p-4" onClick={() => setFlipped(!flipped)}>
                <div className="cursor-pointer text-black">
                    {flipped ? card.back : card.front}
                </div>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIndex((index + 1) % cards.length)}>
                Next
            </button>
        </>
    );
}