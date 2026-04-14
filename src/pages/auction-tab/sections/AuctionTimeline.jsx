import React, { useEffect, useState } from "react";

const AuctionTimeline = () => {
  // ✅ FUTURE DATE (safe for testing)
  const deadline = new Date("December 31, 2026 17:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(
          0,
          Math.floor((distance / (1000 * 60 * 60)) % 24)
        ),
        minutes: Math.max(
          0,
          Math.floor((distance / (1000 * 60)) % 60)
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <h3 className="text-blue-400 text-sm font-bold mb-3">
        Critical Auction Timelines
      </h3>

      {/* 🔥 COUNTDOWN */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-3 text-center">
        <div className="flex justify-center gap-4 text-white font-bold text-sm">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
        </div>
        <p className="text-[10px] text-red-400 mt-1">
          Time left to submit bid
        </p>
      </div>

      {/* TIMELINES */}
      <ul className="text-sm space-y-1 text-slate-400">
        <li>📅 Bid Submission Deadline: Dec 31, 2026 (5:00 PM)</li>
        <li>🔨 Live Auction Date: Jan 3, 2027 (11:00 AM – 1:00 PM)</li>
        <li>📍 Auction Venue: Online (E-Auction Portal)</li>
      </ul>
    </div>
  );
};

export default AuctionTimeline;
