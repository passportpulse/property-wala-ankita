import React, { useEffect, useState } from "react";

const AuctionTimeline = ({ selectedAuction }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const endTime = selectedAuction?.endTime || "2026-12-31T17:00:00.000Z";

  useEffect(() => {
    const interval = setInterval(() => {
      const deadline = new Date(endTime).getTime();
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
  }, [endTime]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8">
      <h3 className="text-blue-400 text-sm font-black uppercase tracking-widest mb-4">
        Critical Auction Timelines
      </h3>

      {/* 🔥 COUNTDOWN */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 mb-4 text-center">
        <div className="flex justify-center gap-6 text-white font-black text-2xl">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
        </div>
        <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest mt-1.5">
          Time left to submit certified bid
        </p>
      </div>

      {/* TIMELINES */}
      <ul className="text-xs space-y-2 text-slate-400 font-medium">
        <li className="flex items-center gap-2">
          <span>📅</span>
          <span>
            <strong className="text-slate-200">Bid Submission Deadline:</strong>{" "}
            {new Date(endTime).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span>🔨</span>
          <span>
            <strong className="text-slate-200">Live Auction Date:</strong>{" "}
            {new Date(new Date(endTime).getTime() + 2*24*60*60*1000).toLocaleDateString('en-IN', { dateStyle: 'medium' })} (11:00 AM – 1:00 PM)
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span>📍</span>
          <span>
            <strong className="text-slate-200">Auction Venue:</strong> Online (E-Auction Portal)
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AuctionTimeline;
