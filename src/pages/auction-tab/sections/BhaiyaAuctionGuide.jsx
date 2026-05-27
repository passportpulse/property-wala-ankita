import React, { useState } from "react";
import { BookOpen, X } from "lucide-react";

const BhaiyaAuctionGuide = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔘 BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500/10 border border-blue-500/30 text-blue-400 
        px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2"
      >
        <BookOpen size={14} />
        Bhaiya Auction Guide
      </button>

      {/* 🔲 POPUP */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur z-50 flex items-center justify-center px-4">
          
          <div className="bg-[#020617] border border-slate-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-4 relative">

            {/* ❌ CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            {/* HEADER */}
            <h2 className="text-lg font-bold text-white mb-1">
              📘 The Bhaiya Guide: How to Win at Bank Auctions
            </h2>
            <p className="text-xs text-slate-400 mb-4">
              Everything you need to know to buy a home at a massive discount, safely.
            </p>

            {/* CONTENT */}
            <div className="space-y-5 text-[12px] text-slate-300 leading-relaxed">

              {/* 1 */}
              <div>
                <p className="text-amber-400 font-bold mb-1">
                  1. The Pre-Bid Phase (Research is King)
                </p>
                <p className="mb-1">
                  Before you even think about the money, do these three things:
                </p>
                <ul className="space-y-1 text-slate-400">
                  <li>• Physical Verification: Never bid "blind." Even if it's a bank auction, request a site visit. Check for structural damage, seepage, or illegal extensions.</li>
                  <li>• The "Encumbrance" Check: Banks sell on an "As-is, Where-is" basis. This means any unpaid electricity bills, property taxes, or society dues become your problem the moment you win.</li>
                  <li>• Read the Sale Notice: Ensure the bank has "Physical Possession." If it's "Symbolic," you might have to fight a legal battle to get the previous owner to move out.</li>
                </ul>
              </div>

              {/* 2 */}
              <div>
                <p className="text-green-400 font-bold mb-1">
                  2. The Financial Phase (The Money Flow)
                </p>
                <p className="mb-1">
                  Auctions move fast. If you win, you usually have only 15 to 30 days to pay the full amount.
                </p>
                <ul className="space-y-1 text-slate-400">
                  <li>• EMD (Earnest Money Deposit): Usually 10% of the reserve price. You must pay this via DD or RTGS just to enter the auction.</li>
                  <li>• The 25% Rule: If you win, you must pay another 15% (to reach 25% of the total bid) within 24–48 hours. If you fail, the bank forfeits your EMD.</li>
                  <li>• The Final 75%: The remaining balance is usually due within 15 days.</li>
                  <li className="text-amber-400">
                    Bhaiya’s Pro-Tip: Don't rely on a standard home loan. Auction properties are harder to fund. Secure your "Auction Loan" before the bid.
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div>
                <p className="text-blue-400 font-bold mb-1">
                  3. The Bidding Phase (Stay Calm)
                </p>
                <ul className="space-y-1 text-slate-400">
                  <li>• Don't Get Into a "Bidding War": Set a "Maximum Price" based on the Bhaiya Market Value and stick to it. If the bid goes higher, walk away. There will always be another auction.</li>
                  <li>• The E-Auction Portal: Most auctions happen on portals like MSTC or BankAuctions.in. Ensure your laptop is charged and your internet is stable.</li>
                </ul>
              </div>

              {/* 4 */}
              <div>
                <p className="text-purple-400 font-bold mb-1">
                  4. The Post-Auction Phase (Closing the Deal)
                </p>
                <p className="mb-1">
                  Once the full payment is made, the bank issues a Sale Certificate.
                </p>
                <ul className="space-y-1 text-slate-400">
                  <li>• Stamp Duty: Just like a normal sale, you must pay stamp duty and registration fees to the government to get the property in your name.</li>
                  <li>• Possession: If the bank has physical possession, they will hand over the keys. If the property is occupied, you may need to file for an "Eviction Order" through the District Magistrate—Bhaiya can help you find a lawyer for this.</li>
                </ul>
              </div>

              {/* 5 */}
              <div>
                <p className="text-red-400 font-bold mb-1">
                  5. Bhaiya’s Final Checklist (The "Red Flags")
                </p>
                <p className="mb-1">❌ Avoid the deal if:</p>
                <ul className="space-y-1 text-slate-400">
                  <li>• The property has multiple "co-owners" who haven't signed off.</li>
                  <li>• There is an active stay order from a court.</li>
                  <li>• The "Symbolic Possession" seems legally messy.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BhaiyaAuctionGuide;
