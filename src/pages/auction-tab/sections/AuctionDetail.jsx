import React from "react";
import { Gavel, Calendar, MapPin, ShieldCheck, FileText } from "lucide-react";
import AuctionTimeline from "./AuctionTimeline";
import AuctionPriceDropAlert from "./AuctionPriceDropAlert";
import BhaiyaAuctionGuide from "./BhaiyaAuctionGuide";

const AuctionDetail = () => {
  return (
    <section className="bg-[#020617] text-slate-200 py-6 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="border border-slate-800 rounded-xl p-4 bg-slate-900">
          <p className="text-[11px] text-slate-400">
            🔨 Auction ID: #BHA-9921 | Moulana Azad, City Centre
          </p>
          <h1 className="font-bold text-white mt-1">
            3 BHK Apartment - Bank of Baroda Foreclosure
          </h1>
        </div>

        {/* 1. PROFIT MATRIX */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 border border-slate-800 rounded-xl p-4">
          <h3 className="text-amber-400 text-sm font-bold mb-3">
            Profit Matrix
          </h3>
          <p className="text-slate-400 text-xs mb-3">
            This is the "Bhaiya" special. We show the user exactly why this deal
            is worth the effort.
          </p>

          <div className="grid grid-cols-3 gap-3 text-xs mb-3">
            <div className="bg-slate-950 p-3 rounded-lg">
              <p className="text-slate-500">Bhaiya Market Value</p>
              <p className="font-bold">₹1.10 Cr</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg">
              <p className="text-slate-500">Auction Reserve Price</p>
              <p className="font-bold">₹82.5 Lakhs</p>
            </div>

            <div className="bg-amber-400/10 p-3 rounded-lg text-center">
              <p className="text-amber-400">Potential Savings</p>
              <p className="font-bold text-amber-400">₹27.5 Lakhs (25%)</p>
            </div>
          </div>

          <p className="text-[12px] text-slate-400">
            💡 Bhaiya’s Analysis: "Based on recent sales in the same building,
            this property is being auctioned at nearly 25% below current market
            rates. Even with ₹5 Lakhs in renovation, you're looking at instant
            equity!"
          </p>
        </div>
        <AuctionPriceDropAlert />
        {/* 2. TIMELINES */}
        <AuctionTimeline />

        {/* 3. FINANCIALS */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <h3 className="text-green-400 text-sm font-bold mb-3">
            Financial Requirements
          </h3>

          <ul className="text-sm space-y-2 text-slate-300">
            <li>
              💰{" "}
              <span className="font-semibold text-white">
                Earnest Money Deposit (EMD):
              </span>{" "}
              ₹8,25,000{" "}
              <span className="text-slate-400 text-xs">
                (10% of Reserve Price)
              </span>
            </li>

            <li>
              🔁{" "}
              <span className="font-semibold text-white">Bid Increment:</span>{" "}
              ₹50,000{" "}
              <span className="text-slate-400 text-xs">
                (Minimum jump during live bidding)
              </span>
            </li>

            <li className="pt-2">
              📆{" "}
              <span className="font-semibold text-white">
                Payment Schedule:
              </span>
            </li>

            <li className="ml-4 text-slate-400 text-xs">
              • <span className="text-white">T+24 Hours:</span> 25% of bid
              amount must be paid if you win
            </li>

            <li className="ml-4 text-slate-400 text-xs">
              • <span className="text-white">T+15 Days:</span> Remaining 75%
              payment deadline
            </li>
          </ul>
        </div>

        {/* 4. LEGAL */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <h3 className="text-amber-400 text-sm font-bold mb-3">
            Legal & Possession Status
          </h3>

          <ul className="text-sm space-y-2 text-slate-300">
            <li>
              🟢{" "}
              <span className="font-semibold text-white">Possession Type:</span>{" "}
              Physical Possession{" "}
              <span className="text-slate-400 text-xs">
                (Bank has the keys; move-in ready after payment)
              </span>
            </li>

            <li>
              📄 <span className="font-semibold text-white">Encumbrances:</span>{" "}
              None reported{" "}
              <span className="text-slate-400 text-xs">
                (Bhaiya recommends a Title Search)
              </span>
            </li>

            <li>
              ⚠️{" "}
              <span className="font-semibold text-white">
                Outstanding Dues:
              </span>{" "}
              ₹45,000{" "}
              <span className="text-slate-400 text-xs">
                (Electricity & Society Maintenance)
              </span>
            </li>

            <li className="pt-2">
              📂{" "}
              <span className="font-semibold text-white">
                Documents Available:
              </span>
            </li>

            <li className="ml-4 flex gap-3 text-xs">
              <button className="text-blue-400 hover:underline">
                Download Tender Doc PDF
              </button>
              <button className="text-blue-400 hover:underline">
                Sale Notice PDF
              </button>
            </li>
          </ul>
        </div>

        {/* 5. TOOLKIT */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <h3 className="text-purple-400 text-sm font-bold mb-3">
            Bhaiya Toolkit
          </h3>

          <div className="space-y-3 text-[11px] text-slate-400">
            {/* LEGAL */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3">
              <p className="text-white font-semibold mb-1">
                🛡️ Legal Due Diligence (₹2,999)
              </p>
              <p className="mb-2">
                Let our lawyers verify the bank's chain of documents before you
                bid.
              </p>
              <button className="text-[10px] bg-purple-500/20 text-purple-300 px-3 py-1 rounded-md border border-purple-500/30">
                Buy Now
              </button>
            </div>

            {/* LOAN */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3">
              <p className="text-white font-semibold mb-1">
                💰 Auction Loan Support
              </p>
              <p className="mb-2">
                Need funding? Get a pre-sanctioned loan letter for this specific
                property.
              </p>
              <button className="text-[10px] bg-green-500/20 text-green-300 px-3 py-1 rounded-md border border-green-500/30">
                Check Eligibility
              </button>
            </div>

            {/* SITE VISIT */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3">
              <p className="text-white font-semibold mb-1">
                🏃 Site Visit Assistant
              </p>
              <p className="mb-2">
                Want to see the property? We can coordinate with the Bank
                Recovery Officer for you.
              </p>
              <button className="text-[10px] bg-blue-500/20 text-blue-300 px-3 py-1 rounded-md border border-blue-500/30">
                Book Visit
              </button>
            </div>
          </div>
        </div>

        {/* 6. LOCATION */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <h3 className="text-blue-400 text-sm font-bold mb-3">
            Location & Neighborhood
          </h3>

          <div className="space-y-3 text-[11px] text-slate-400">
            {/* LOCALITY SCORE */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 flex justify-between items-center">
              <p className="text-white font-semibold">
                Bhaiya’s Locality Score
              </p>
              <span className="text-amber-400 font-bold">⭐ 4.2/5</span>
            </div>

            {/* NEARBY */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3">
              <p className="text-white font-semibold mb-1">📍 Nearby</p>
              <p>200m from Metro Station | 1km from City Hospital.</p>
            </div>

            {/* HEAT MAP INSIGHT */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
              <p className="text-blue-300 font-semibold mb-1">
                📊 Heat Map Insight
              </p>
              <p>
                Prices in this sector have grown 8% YoY. High rental demand from
                working professionals.
              </p>
            </div>
          </div>
        </div>
        <BhaiyaAuctionGuide/>

        {/* COMPACT MOBILE CTA */}
        <div className="sticky bottom-0 left-0 w-full bg-[#020617]/95 backdrop-blur-sm border-t border-slate-800 p-2 px-4">
          <div className="max-w-md mx-auto flex items-center gap-3">
            {/* LEFT SIDE: SUBTEXT/DEADLINE */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-[11px] font-bold truncate">
                The Final Call to Action
              </p>
              <p className="text-slate-400 text-[10px] truncate">
                Secure your place now
              </p>
            </div>

            {/* RIGHT SIDE: BUTTON */}
            <button
              className="bg-gradient-to-r from-amber-400 to-yellow-300 
      text-black px-5 py-2.5 rounded-full font-black text-xs 
      flex items-center gap-2 shadow-lg shadow-amber-500/20 
      active:scale-95 transition-transform"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative h-2 w-2 rounded-full bg-red-600"></span>
              </span>
              I WANT TO BID
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuctionDetail;
