import React, { useState } from "react";
import {
  Search,
  Calendar,
  Zap,
  Landmark,
  DollarSign,
  TrendingDown,
  Bell,
  ZapIcon,
} from "lucide-react";
import Container from "../../../components/layout/Container";

const Hero = () => {
  const [price, setPrice] = useState(1000000); // default ₹10L
  const [date, setDate] = useState("");

  return (
    <section className="py-4 lg:py-8 bg-[#020617] min-h-screen text-slate-200 ">
      <Container>
        <div className="max-w-5xl mx-auto space-y-6">
          {/* HEADER */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white">
              Bhaiya <span className="text-amber-400">Auctions</span>
            </h1>
            <p className="text-slate-400 text-xs mt-1 leading-snug">
              High Stakes, High Rewards. Snag Properties at{" "}
              <span className="text-amber-400 font-semibold">
                20-30% Below Market Value
              </span>
            </p>
          </div>

          {/* 1. AUCTION DASHBOARD */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 mb-4">
            <h3 className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-3">
              <Search size={14} /> Auction Dashboard
            </h3>

            <div className="space-y-2 text-xs">
              <label className="block text-[10px] text-slate-500 mb-1">
                Auction Type
              </label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-md p-2">
                <option>Bank Auction (SARFAESI)</option>
                <option>Liquidation</option>
                <option>Private</option>
                <option>Foreclosure</option>
              </select>
              <label className="block text-[10px] text-slate-500 mb-1">
                Bank Name
              </label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-md p-2">
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
              </select>
              <label className="block text-[10px] text-slate-500 mb-1">
                Reserve Price Range
              </label>
              <div>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="100000"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-amber-400"
                />

                {/* LIVE VALUE */}
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>₹10L</span>
                  <span>₹5Cr+</span>
                </div>

                <p className="text-[11px] text-amber-400 mt-1 font-semibold">
                  Selected: ₹{price.toLocaleString("en-IN")}
                </p>
              </div>

              {/* DATE PICKER */}
              <div className="mt-3">
                <label className="block text-[10px] text-slate-500 mb-1">
                  Auction Date
                </label>

                {/* WRAPPER */}
                <div className="relative">
                  {/* ICON */}
                  <Calendar
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400"
                  />

                  {/* INPUT */}
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 
      py-2 pl-9 pr-2 rounded-lg text-[11px] text-slate-200 appearance-none"
                  />
                </div>

                {/* SELECTED DATE DISPLAY */}
                {date && (
                  <div className="mt-2 inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full">
                    <Calendar size={12} className="text-amber-400" />
                    <span className="text-[11px] text-amber-400 font-semibold">
                      {new Date(date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 2. AUCTION CARD */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 border border-slate-800 rounded-xl p-3 mb-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-sm font-bold text-white leading-tight">
                Premium Residential Villa, Durgapur
              </h2>
              <span className="text-[9px] bg-red-500 px-2 py-1 rounded-full animate-pulse">
                Only 3 days left!
              </span>
            </div>

            {/* PRICE COMPARISON */}
            <div className="grid grid-cols-3 gap-2 text-xs mb-3">
              <div className="bg-slate-950 p-2 rounded-lg">
                <p className="text-[9px] text-slate-500">Reserve Price</p>
                <p className="font-bold">₹62,00,000</p>
              </div>

              <div className="bg-slate-950 p-2 rounded-lg relative">
                <TrendingDown
                  size={12}
                  className="absolute top-1 right-1 text-green-400"
                />
                <p className="text-[9px] text-slate-500">
                  Estimated Market Value
                </p>
                <p className="font-bold text-green-400">₹85,00,000</p>
              </div>

              <div className="bg-amber-400/10 p-2 rounded-lg text-center">
                <p className="text-[9px] text-amber-500">Potential Profit</p>
                <p className="font-bold text-amber-400">₹23,00,000</p>
              </div>
            </div>

            {/* INFO */}
            <div className="flex justify-between text-[11px] text-slate-300 mb-3">
              <span className="flex items-center gap-1">
                <Landmark size={12} /> Physical Possession
              </span>
              <span className="flex items-center gap-1">
                <DollarSign size={12} /> EMD: 10% (₹6.2L)
              </span>
            </div>

            {/* WORKFLOW (VISUAL) */}
            <div className="flex justify-between text-[9px] text-center bg-slate-950 p-2 rounded-lg">
              <span>
                🧐
                <br />
                Interest
              </span>
              <span>
                ⚖️
                <br />
                Legal
              </span>
              <span>
                💰
                <br />
                EMD
              </span>
              <span>
                🔨
                <br />
                Bid
              </span>
            </div>
          </div>

          {/* 3 & 4. AUCTION GUIDE + WORKFLOW */}
          <section className="bg-blue-950/30 border border-blue-800 rounded-xl p-3 mb-4">
            <h3 className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-3">
              <Zap size={14} /> Bhaiya Auction Guide
            </h3>

            {/* GUIDE */}
            <div className="space-y-2">
              <p className="text-[11px] text-slate-400">
                <span className="text-white font-semibold">What is EMD?</span>{" "}
                The "Security Deposit" you pay to participate in the bid.
              </p>

              <p className="text-[11px] text-slate-400">
                <span className="text-white font-semibold">
                  Physical vs. Symbolic:
                </span>{" "}
                Physical means the bank has the keys; Symbolic means the bank
                has the legal right but maybe not the keys yet.
              </p>
            </div>

            {/* HIDDEN COSTS */}
            <div className="bg-slate-950/60 p-2 rounded-md mt-3 border border-slate-800">
              <p className="text-[10px] text-amber-400 font-bold mb-1">
                Hidden Costs Checklist
              </p>
              <ul className="text-[11px] text-slate-400 space-y-1">
                <li>• Stamp Duty</li>
                <li>• Outstanding Society Dues</li>
                <li>• Legal Verification</li>
              </ul>
            </div>

            {/* WORKFLOW */}
            <div className="mt-4">
              <p className="text-[10px] text-blue-400 font-bold mb-2 uppercase tracking-wide">
                Step-by-Step Auction Workflow
              </p>

              <div className="space-y-2 text-[11px] text-slate-400">
                <div className="flex gap-2">
                  <span>🧐</span>
                  <p>
                    <span className="text-white font-semibold">
                      Express Interest:
                    </span>{" "}
                    Buyer clicks this, and you send them the Tender Document and
                    Bank Manager’s contact.
                  </p>
                </div>

                <div className="flex gap-2">
                  <span>⚖️</span>
                  <p>
                    <span className="text-white font-semibold">
                      Legal Check:
                    </span>{" "}
                    Offer a "Bhaiya Legal Partner" to vet the bank documents for
                    a small fee.
                  </p>
                </div>

                <div className="flex gap-2">
                  <span>💰</span>
                  <p>
                    <span className="text-white font-semibold">Pay EMD:</span>{" "}
                    Instructions on how to submit the deposit to the bank.
                  </p>
                </div>

                <div className="flex gap-2">
                  <span>🔨</span>
                  <p>
                    <span className="text-white font-semibold">The Bid:</span>{" "}
                    Link to the specific E-Auction portal where the live bidding
                    happens.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. MONETIZATION */}
          <section className="space-y-3 mb-4">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">
              Monetization for You (How Bhaiya makes money)
            </p>
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-3 rounded-xl">
              <p className="text-white text-xs font-bold mb-1">Premium Leads</p>
              <p className="text-[11px] text-slate-400">
                Charge banks or auction houses to "Feature" their distressed
                assets.
              </p>
            </div>
            {/* AUCTION ASSISTANCE */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-3 rounded-xl">
              <p className="text-white text-xs font-bold mb-1">
                Auction Assistance Service
              </p>
              <p className="text-[11px] text-slate-400">
                Charge buyers a flat fee to handle the paperwork and bidding
                strategy.
              </p>
            </div>

            {/* LOAN ASSISTANCE */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-3 rounded-xl">
              <p className="text-white text-xs font-bold mb-1">
                Loan Assistance
              </p>
              <p className="text-[11px] text-slate-400">
                Partner with banks to offer "Pre-approved Auction Loans" (which
                are notoriously hard to get).
              </p>
            </div>

            {/* PREMIUM LEADS / FEATURED */}

            <p className="text-[12px] text-center font-bold text-amber-400 flex items-start justify-center">
              <Zap size={16} className="text-amber-400" />
              <span>
                Don't miss a deal! Notify me whenever a property goes under
                auction.
              </span>
            </p>
          </section>

          {/* 6. ALERT BUTTON */}
          <button className="mx-auto bg-amber-400 text-black px-3 py-2 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg">
            <Bell size={16} /> SET AUCTION ALERT
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
