"use client";

import { useState } from "react";

export default function HistoryPage() {
  const [history, setHistory] = useState<string[]>([]);

  const addToday = () => {
    const today = new Date().toDateString();

    if (history.includes(today)) {
      alert("Already added today");
      return;
    }

    setHistory([today, ...history]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Study History</h1>

        <button
          onClick={addToday}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4 w-full"
        >
          Add Today
        </button>

        <ul>
          {history.map((date, index) => (
            <li key={index} className="border-b py-2">
              {date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
