"use client";
import { decks } from "@/lib/decks";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <nav id="navbar" className="w-full flex flex-row items-left bg-gray-300">
        <h1 id="logo" className="p-5 text-4xl font-bold text-black">StudySpark 🚀</h1>
      </nav>
      <div id="dashboard-content" className="m-5 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your dashboard! Here you can create and manage your flashcards.</p>
        <div id="statistics" className="flex flex-row mt-6 p-4 bg-gray-500 rounded-xl w-full max-w-md">
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-bold text-white">Total Flashcards</h2>
            <p className="text-3xl font-bold text-white">##</p>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-bold text-white">Decks Created</h2>
            <p className="text-3xl font-bold text-white">{decks.length}</p>
          </div>
        </div>
        <div id="decks" className="flex flex-col mt-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-black mb-4">Your Decks</h2>
          <div className="flex flex-row flex-wrap">
            {decks.map(deck => (
              <div key={deck.id} className="flex flex-col m-4" onClick={() => window.location.href = `/deck/${deck.id}`}>
                <div className="p-4 bg-gray-200 rounded-lg">
                  <h3 className="text-xl font-bold text-black">{deck.title}</h3>
                  <p className="text-gray-600">Flashcards: {deck.cards.length}</p>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </main>
  );
}