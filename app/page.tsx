"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [streak, setStreak] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [lastStudy, setLastStudy] = useState("");

  const fetchStats = async () => {
    const res = await fetch("/api/streak");
    const data = await res.json();

    setStreak(data.currentStreak);
    setTotalDays(data.totalDays);
    setLastStudy(data.lastStudy);
  };

  const markStudy = async () => {
    const res = await fetch("/api/study", {
      method: "POST",
    });

    const data = await res.json();
    alert(data.message);

    fetchStats();
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">
          Daily Learning Streak Tracker
        </h1>

        <p className="text-lg">Current Streak: {streak} days</p>
        <p className="text-lg">Total Study Days: {totalDays}</p>
        <p className="text-lg mb-4">Last Studied: {lastStudy}</p>

        {/* Study Button */}
        <button
          onClick={markStudy}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          I Studied Today
        </button>

        {/* History Button */}
        <div className="mt-4">
          <a
            href="/history"
            className="text-blue-600 underline hover:text-blue-800"
          >
            View Study History
          </a>
        </div>
      </div>
    </div>
  );
}
