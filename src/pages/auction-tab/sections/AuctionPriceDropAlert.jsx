import React from "react";
import { TrendingDown } from "lucide-react";

const AuctionPriceDropAlert = () => {
  return (
    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 flex items-start gap-2 mb-4">
      
      {/* ICON */}
      <TrendingDown size={16} className="text-green-400 mt-0.5 shrink-0" />

      {/* CONTENT */}
      <div className="text-[11px] text-slate-300 leading-snug">
        <p className="text-green-400 font-bold mb-1">
          Bhaiya Update 🚨
        </p>

        <p>
          The{" "}
          <span className="text-white font-semibold">
            Moulana Azad Auction
          </span>{" "}
          failed. Next round starts at{" "}
          <span className="text-green-400 font-semibold">
            ₹74 Lakhs
          </span>!
        </p>

        <p className="mt-1 text-amber-400 font-semibold">
          Want in?
        </p>

        {/* CTA */}
        <button className="mt-2 text-[10px] bg-amber-400 text-black px-3 py-1 rounded-md font-bold">
          View Auction
        </button>
      </div>
    </div>
  );
};

export default AuctionPriceDropAlert;
