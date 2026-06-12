import { decks } from "@/lib/decks";
import FlashcardClient from "./flashcard";

export default async function Deck({ params, }: { params: { id: string }; }) {
  const { id } = await params;
  const deck = decks.find(d => d.id === id);
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <nav id="navbar" className="w-full flex flex-row items-left bg-gray-300">
        <h1 id="logo" className="p-5 text-4xl font-bold text-black">StudySpark 🚀</h1>
      </nav>
      <div id="deck-content" className="m-5 flex flex-col items-center">
        <h1 id="deck-name" className="text-4xl font-bold text-black">{deck?.title}</h1>
        <p id="deck-description" className="mt-2 text-gray-600">{deck?.description}</p>
        <FlashcardClient cards={deck?.cards || []} />
      </div>
    </main>
  );
}