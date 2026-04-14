import React from "react";
import { useNavigate } from "react-router-dom";
import { Gavel, TrendingDown, Zap } from "lucide-react";

const GoToAuctionCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#020617] border-y border-slate-800 py-8 my-6">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* HEADING */}
        <h2 className="text-lg md:text-2xl font-bold text-white mb-2">
          Unlock{" "}
          <span className="text-green-400">Distressed Property Deals</span>
        </h2>

        <p className="text-slate-400 text-sm md:text-base mb-6">
          Buy properties at{" "}
          <span className="text-amber-400 font-semibold">
            20–30% below market value
          </span>{" "}
          through verified bank auctions.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-3 gap-3 mb-6 text-[11px] md:text-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 flex flex-col items-center">
            <TrendingDown size={16} className="text-green-400 mb-1" />
            <span className="text-slate-300">Below Market Deals</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 flex flex-col items-center">
            <Zap size={16} className="text-amber-400 mb-1" />
            <span className="text-slate-300">High ROI Potential</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 flex flex-col items-center">
            <Gavel size={16} className="text-blue-400 mb-1" />
            <span className="text-slate-300">Bank Verified Auctions</span>
          </div>
        </div>

        {/* CTA BUTTON */}
        <button
          onClick={() => navigate("/auction")}
          className="bg-amber-400 hover:bg-amber-300 text-black 
     px-4 py-2 shadow-lg flex items-center gap-2 
          mx-auto transition-all duration-200 hover:scale-105"
        >
          <Gavel size={18} />
          Explore Auction Deals
        </button>

        {/* SUBTEXT */}
        <p className="text-[11px] text-slate-500 mt-3">
          Limited inventory. Auctions closing every week.
        </p>
      </div>
    </section>
  );
};

export default GoToAuctionCTA;
