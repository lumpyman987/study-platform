"use client";

export default function Home() {
  function getStarted() {
    window.location.href = "/dashboard";
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-black">
        StudySpark 🚀
      </h1>

      <p className="mt-2 text-gray-600">
        Build your flashcards, study smarter.
      </p>

      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded" onClick={getStarted}>
        Get Started
      </button>

    </main>
  );
}