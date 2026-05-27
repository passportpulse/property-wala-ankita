import React, { useState } from "react";
import { Gavel, Calendar, MapPin, ShieldCheck, FileText, Landmark, DollarSign, ArrowRight } from "lucide-react";
import AuctionTimeline from "./AuctionTimeline";
import AuctionPriceDropAlert from "./AuctionPriceDropAlert";
import BhaiyaAuctionGuide from "./BhaiyaAuctionGuide";

const AuctionDetail = ({ selectedAuction }) => {
  const [biddingRequestSent, setBiddingRequestSent] = useState(false);

  if (!selectedAuction) return null;

  const handleBidInterest = () => {
    setBiddingRequestSent(true);
    // WhatsApp direct action
    const text = `Hi, I am interested in bidding for the foreclosure asset: ${selectedAuction.title} in ${selectedAuction.city}. Please share legal tender documents and coordinate visit.`;
    const whatsappUrl = `https://wa.me/917699988876?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  return (
    <section id="auction-detail-section" className="bg-[#020617] text-slate-200 py-12 px-4 scroll-mt-6 border-t border-slate-900">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* HEADER */}
        <div className="border border-slate-800 rounded-3xl p-6 bg-slate-900/40 backdrop-blur-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-[10px] text-amber-400 font-black uppercase tracking-widest">
              🔨 Foreclosure Asset ID: #{selectedAuction._id.substring(selectedAuction._id.length - 6).toUpperCase()}
            </p>
            <h1 className="font-black text-2xl lg:text-3xl text-white mt-1 uppercase tracking-tight">
              {selectedAuction.title}
            </h1>
            <p className="text-xs text-slate-400 mt-1 font-semibold flex items-center gap-1.5">
              <MapPin size={12} className="text-amber-400" /> {selectedAuction.city} | {selectedAuction.type}
            </p>
          </div>
          {selectedAuction.image && (
            <img 
              src={selectedAuction.image} 
              alt={selectedAuction.title} 
              className="w-24 h-24 rounded-2xl object-cover border border-slate-800"
            />
          )}
        </div>

        {/* 1. PROFIT MATRIX */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950/80 border border-slate-800 rounded-3xl p-6 lg:p-8">
          <h3 className="text-amber-400 text-sm font-black uppercase tracking-widest mb-3 flex items-center gap-2">
            <Gavel size={16} /> Bhaiya’s Profit Matrix
          </h3>
          <p className="text-slate-400 text-xs mb-6">
            This is the "Bhaiya" signature analysis. We calculate the absolute margin of safety on this bank-distressed property.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs mb-6">
            <div className="bg-slate-950/90 border border-slate-900 p-4 rounded-2xl">
              <p className="text-slate-500 uppercase font-black text-[9px] tracking-wider mb-1">Bhaiya Market Value</p>
              <p className="font-black text-white text-base">{selectedAuction.marketValue || "N/A"}</p>
            </div>

            <div className="bg-slate-950/90 border border-slate-900 p-4 rounded-2xl">
              <p className="text-slate-500 uppercase font-black text-[9px] tracking-wider mb-1">Auction Reserve Price</p>
              <p className="font-black text-white text-base">{selectedAuction.reservePrice || selectedAuction.basePrice}</p>
            </div>

            <div className="bg-amber-400/10 border border-amber-400/20 p-4 rounded-2xl text-center">
              <p className="text-amber-400 uppercase font-black text-[9px] tracking-wider mb-1">Potential Savings</p>
              <p className="font-black text-amber-400 text-base">{selectedAuction.potentialSavings || "N/A"}</p>
            </div>
          </div>

          {selectedAuction.bhaiyaAnalysis && (
            <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-2xl">
              <p className="text-[12px] text-slate-300 leading-relaxed font-medium">
                💡 <span className="text-amber-400 font-bold">Bhaiya’s Core Analysis:</span> "{selectedAuction.bhaiyaAnalysis}"
              </p>
            </div>
          )}
        </div>

        <AuctionPriceDropAlert selectedAuction={selectedAuction} />

        {/* 2. TIMELINES */}
        <AuctionTimeline selectedAuction={selectedAuction} />

        {/* 3. FINANCIALS */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 lg:p-8">
          <h3 className="text-emerald-400 text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
            <DollarSign size={16} /> Financial Requirements
          </h3>

          <ul className="text-sm space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">💰</span>
              <div>
                <span className="font-bold text-white uppercase tracking-tight text-xs">Earnest Money Deposit (EMD):</span>{" "}
                <span className="text-emerald-400 font-black">{selectedAuction.emd || "10% of Reserve Price"}</span>
                <p className="text-slate-500 text-[10px] mt-0.5">Required security deposit to register for the live bid.</p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">🔁</span>
              <div>
                <span className="font-bold text-white uppercase tracking-tight text-xs">Bid Increment:</span>{" "}
                <span className="text-slate-200 font-black">{selectedAuction.bidIncrement || "₹50,000"}</span>
                <p className="text-slate-500 text-[10px] mt-0.5">Minimum bid increment during live bidding.</p>
              </div>
            </li>

            {selectedAuction.paymentSchedule && selectedAuction.paymentSchedule.length > 0 && (
              <li className="pt-2 flex flex-col gap-2">
                <span className="font-bold text-white uppercase tracking-tight text-xs flex items-center gap-1.5">
                  📅 Payment Schedule Timeline:
                </span>
                <div className="ml-6 space-y-2">
                  {selectedAuction.paymentSchedule.map((line, idx) => (
                    <div key={idx} className="text-xs text-slate-400 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </li>
            )}
          </ul>
        </div>

        {/* 4. LEGAL */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 lg:p-8">
          <h3 className="text-amber-400 text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
            <ShieldCheck size={16} /> Legal & Possession Status
          </h3>

          <ul className="text-sm space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">🟢</span>
              <div>
                <span className="font-bold text-white uppercase tracking-tight text-xs">Possession Type:</span>{" "}
                <span className="text-slate-200 font-black">{selectedAuction.possessionType || "Physical Possession"}</span>
                <p className="text-slate-500 text-[10px] mt-0.5">Physical possession means bank has full custody and key handover is swift.</p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">📄</span>
              <div>
                <span className="font-bold text-white uppercase tracking-tight text-xs">Encumbrances:</span>{" "}
                <span className="text-slate-200 font-bold">{selectedAuction.encumbrances || "None reported"}</span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">⚠️</span>
              <div>
                <span className="font-bold text-white uppercase tracking-tight text-xs">Outstanding Dues:</span>{" "}
                <span className="text-red-400 font-black">{selectedAuction.outstandingDues || "None reported"}</span>
                <p className="text-slate-500 text-[10px] mt-0.5">Electricity, municipal tax, or housing society arrears to verify.</p>
              </div>
            </li>

            {selectedAuction.documents && selectedAuction.documents.length > 0 && (
              <li className="pt-2 flex flex-col gap-2">
                <span className="font-bold text-white uppercase tracking-tight text-xs flex items-center gap-1.5">
                  📂 Documents Checklist Available:
                </span>
                <div className="ml-6 flex flex-wrap gap-2">
                  {selectedAuction.documents.map((doc, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300 flex items-center gap-1.5"
                    >
                      <FileText size={12} className="text-amber-400" /> {doc}
                    </span>
                  ))}
                </div>
              </li>
            )}
          </ul>
        </div>

        {/* 5. TOOLKIT */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 lg:p-8">
          <h3 className="text-purple-400 text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
            <Sparkles size={16} /> Bhaiya Toolkit Services
          </h3>

          <div className="grid md:grid-cols-3 gap-4 text-xs">
            {/* LEGAL */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-white font-black uppercase tracking-tight text-xs mb-1">
                  🛡️ Due Diligence (₹2,999)
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  Let our corporate lawyers verify the bank's chain of title search deeds before you submit.
                </p>
              </div>
              <button className="text-[10px] bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-black uppercase tracking-widest py-2 rounded-xl border border-purple-500/20 w-full">
                Order Verification
              </button>
            </div>

            {/* LOAN */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-white font-black uppercase tracking-tight text-xs mb-1">
                  💰 Pre-approved Loans
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                   Distressed funding is complex. Get a pre-sanctioned credit evaluation tailored to this property.
                </p>
              </div>
              <button className="text-[10px] bg-green-500/10 hover:bg-green-500/20 text-green-300 font-black uppercase tracking-widest py-2 rounded-xl border border-green-500/20 w-full">
                Check Eligibility
              </button>
            </div>

            {/* SITE VISIT */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-white font-black uppercase tracking-tight text-xs mb-1">
                  🏃 Site Coordinator
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  Want physical access? We coordinate directly with the bank recovery officer to arrange inspection.
                </p>
              </div>
              <button className="text-[10px] bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 font-black uppercase tracking-widest py-2 rounded-xl border border-blue-500/20 w-full">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>

        {/* 6. LOCATION */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 lg:p-8">
          <h3 className="text-blue-400 text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
            <MapPin size={16} className="text-blue-400" /> Locality & Market Insight
          </h3>

          <div className="space-y-4 text-xs">
            {/* LOCALITY SCORE */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex justify-between items-center">
              <p className="text-white font-black uppercase tracking-widest text-[10px]">Bhaiya’s Locality Quality Score</p>
              <span className="text-amber-400 font-black text-xs bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-lg">⭐ {selectedAuction.localityScore || "4.2/5"}</span>
            </div>

            {/* NEARBY */}
            {selectedAuction.nearby && (
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                <p className="text-white font-black uppercase tracking-widest text-[10px] mb-1.5">📍 Key Infrastructure Nearby</p>
                <p className="text-slate-400 leading-relaxed font-medium">{selectedAuction.nearby}</p>
              </div>
            )}

            {/* HEAT MAP INSIGHT */}
            {selectedAuction.heatmapInsight && (
              <div className="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-4">
                <p className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-1.5 flex items-center gap-1.5">
                  📊 Heat Map Trend Analyzer
                </p>
                <p className="text-slate-300 leading-relaxed font-medium">
                  {selectedAuction.heatmapInsight}
                </p>
              </div>
            )}
          </div>
        </div>

        <BhaiyaAuctionGuide />

        {/* STICKY COMPACT MOBILE CTA */}
        <div className="sticky bottom-4 left-0 w-full bg-slate-950/90 border border-slate-800 p-4 rounded-3xl backdrop-blur-md shadow-2xl flex items-center justify-between gap-6">
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-black uppercase tracking-tight truncate">
              {selectedAuction.title}
            </p>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider truncate">
              Direct Bank Submission Portal
            </p>
          </div>

          <button
            onClick={handleBidInterest}
            disabled={biddingRequestSent}
            className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-2xl transition-all ${
              biddingRequestSent 
                ? "bg-slate-800 text-slate-500 border border-slate-700 cursor-default" 
                : "bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 hover:scale-105 active:scale-95 shadow-amber-500/10"
            }`}
          >
            {biddingRequestSent ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative h-2 w-2 rounded-full bg-amber-400"></span>
                </span>
                REDIRECTING...
              </>
            ) : (
              <>
                <Gavel size={14} /> I WANT TO BID <ArrowRight size={12} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuctionDetail;
