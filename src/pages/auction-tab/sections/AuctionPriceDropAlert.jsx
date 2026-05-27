import React from "react";
import { TrendingDown } from "lucide-react";

const AuctionPriceDropAlert = ({ selectedAuction }) => {
  if (!selectedAuction) return null;

  return (
    <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-5 flex items-start gap-3 mb-6">
      {/* ICON */}
      <TrendingDown size={18} className="text-green-400 mt-0.5 shrink-0 animate-bounce" />

      {/* CONTENT */}
      <div className="text-xs text-slate-300 leading-relaxed font-medium">
        <p className="text-green-400 font-black uppercase tracking-widest text-[10px] mb-1">
          Bhaiya Foreclosure Update 🚨
        </p>

        <p>
          The previous bid round for the{" "}
          <span className="text-white font-bold">{selectedAuction.title}</span>{" "}
          received no qualified bids. This second round starts at a discounted Reserve Price of{" "}
          <span className="text-green-400 font-bold">{selectedAuction.basePrice}</span>!
        </p>

        <p className="mt-2 text-amber-400 font-bold uppercase tracking-wider text-[10px]">
          Secure your pre-bid consultation now!
        </p>
      </div>
    </div>
  );
};

export default AuctionPriceDropAlert;
