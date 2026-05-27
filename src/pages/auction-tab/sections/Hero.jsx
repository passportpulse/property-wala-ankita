import React, { useState, useMemo } from "react";
import {
  Search,
  Calendar,
  Zap,
  Landmark,
  DollarSign,
  TrendingDown,
  Bell,
  MapPin,
  Clock,
  Sparkles
} from "lucide-react";
import Container from "../../../components/layout/Container";

const Hero = ({ auctions, loading, selectedAuction, setSelectedAuction }) => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [priceLimit, setPriceLimit] = useState(20000000); // default ₹2Cr limit
  const [searchDate, setSearchDate] = useState("");
  const [alertSet, setAlertSet] = useState(false);

  // Extract unique cities and types for filters
  const cities = useMemo(() => {
    const list = auctions.map(a => a.city).filter(Boolean);
    return ["All", ...new Set(list)];
  }, [auctions]);

  const types = useMemo(() => {
    const list = auctions.map(a => a.type).filter(Boolean);
    return ["All", ...new Set(list)];
  }, [auctions]);

  // Filter auctions
  const filteredAuctions = useMemo(() => {
    return auctions.filter(auction => {
      if (selectedType !== "All" && auction.type !== selectedType) return false;
      if (selectedCity !== "All" && auction.city !== selectedCity) return false;
      
      // Parse basePrice (e.g. "₹82.5 L" or "₹2.1 Cr" or "₹62,00,000") to numeric for price filter
      let numericPrice = 0;
      if (auction.basePrice) {
        const clean = auction.basePrice.replace(/[^0-9.]/g, '');
        const val = parseFloat(clean);
        if (auction.basePrice.includes('Cr') || auction.basePrice.includes('cr')) {
          numericPrice = val * 10000000;
        } else if (auction.basePrice.includes('L') || auction.basePrice.includes('lakh') || auction.basePrice.includes('Lakhs')) {
          numericPrice = val * 100000;
        } else {
          numericPrice = val;
        }
      }
      if (numericPrice && numericPrice > priceLimit) return false;

      // Filter by end date
      if (searchDate && auction.endTime) {
        const selDate = new Date(searchDate).getTime();
        const aucDate = new Date(auction.endTime).getTime();
        if (aucDate > selDate) return false;
      }

      return true;
    });
  }, [auctions, selectedType, selectedCity, priceLimit, searchDate]);

  return (
    <section className="py-8 lg:py-16 bg-[#020617] text-slate-200">
      <Container>
        <div className="max-w-7xl mx-auto space-y-12">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
              <Sparkles size={12} /> High-Impact Distressed Assets
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-none uppercase tracking-tighter">
              Bhaiya <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Auctions</span>
            </h1>
            <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
              Snag certified high-value properties at{" "}
              <span className="text-amber-400 font-bold decoration-amber-400/30 underline decoration-2 underline-offset-4">
                20-30% below market value
              </span>. Fully audited, zero-litigation foreclosure inventory.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* 1. FILTERS SIDEBAR (lg:col-span-4) */}
            <div className="lg:col-span-4 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 lg:p-8 backdrop-blur-md space-y-6">
              <h3 className="flex items-center gap-2 text-amber-400 text-sm font-black uppercase tracking-widest pb-4 border-b border-slate-800">
                <Search size={18} /> Search Dashboard
              </h3>

              <div className="space-y-4 text-xs">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Auction Type
                  </label>
                  <select 
                    value={selectedType}
                    onChange={e => setSelectedType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl p-3 text-slate-200 font-medium"
                  >
                    <option value="All">All Types</option>
                    {types.filter(t => t !== "All").map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                    City Location
                  </label>
                  <select 
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl p-3 text-slate-200 font-medium"
                  >
                    <option value="All">All Cities</option>
                    {cities.filter(c => c !== "All").map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Reserve Price Limit
                  </label>
                  <input
                    type="range"
                    min="1000000"
                    max="50000000"
                    step="500000"
                    value={priceLimit}
                    onChange={(e) => setPriceLimit(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                    <span>₹10 L</span>
                    <span>₹5 Cr+</span>
                  </div>
                  <p className="text-[11px] text-amber-400 font-black uppercase tracking-widest mt-1 bg-amber-400/5 border border-amber-400/10 p-2.5 rounded-lg text-center">
                    Max Price: ₹{(priceLimit / 100000).toFixed(1)} Lakhs
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Deadline Date Before
                  </label>
                  <div className="relative">
                    <Calendar
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 pointer-events-none"
                    />
                    <input
                      type="date"
                      value={searchDate}
                      onChange={(e) => setSearchDate(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 py-3 pl-10 pr-3 rounded-xl text-[11px] text-slate-200 appearance-none font-bold"
                    />
                  </div>
                </div>
              </div>

              {/* BHAIYA LIVE COUNTER */}
              <div className="p-4 bg-gradient-to-br from-amber-400/10 to-yellow-400/5 border border-amber-400/20 rounded-2xl">
                <p className="text-xs text-white font-black uppercase tracking-tight flex items-center gap-2 mb-1.5">
                  <Zap size={14} className="text-amber-400 animate-bounce" /> Bhaiya Alert Hub
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  We verify each auction directly with the recovery cells of SBI, HDFC, and BoB. Zero litigation guaranteed.
                </p>
              </div>

              <button 
                onClick={() => setAlertSet(!alertSet)}
                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-[1.02] ${
                  alertSet 
                    ? "bg-emerald-500 text-white shadow-emerald-500/20" 
                    : "bg-amber-400 text-slate-950 shadow-amber-500/20"
                }`}
              >
                <Bell size={16} /> {alertSet ? "ALERT CONFIGURED!" : "SET AUCTION ALERT"}
              </button>
            </div>

            {/* 2. AUCTION LISTINGS GRID (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-6">
              {loading ? (
                <div className="flex flex-col items-center justify-center p-20 space-y-4">
                  <div className="w-12 h-12 border-4 border-amber-400/20 border-t-amber-400 rounded-full animate-spin"></div>
                  <p className="text-sm font-black uppercase tracking-widest text-slate-500 animate-pulse">Loading Distress Assets...</p>
                </div>
              ) : filteredAuctions.length === 0 ? (
                <div className="bg-slate-900/40 border-2 border-dashed border-slate-800 rounded-3xl p-16 text-center space-y-4">
                  <p className="text-4xl">🔍</p>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight">No Matching Auctions Found</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Try adjusting your filters or raising the Reserve Price limit to browse other premium foreclosure inventory.
                  </p>
                  <button 
                    onClick={() => {
                      setSelectedType("All");
                      setSelectedCity("All");
                      setPriceLimit(20000000);
                      setSearchDate("");
                    }}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-[11px] font-black uppercase tracking-widest"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid gap-6">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 flex justify-between items-center px-2">
                    <span>Foreclosure Inventory ({filteredAuctions.length} assets)</span>
                    <span className="text-amber-400">Click card to load Bhaiya Matrix</span>
                  </p>
                  {filteredAuctions.map((auction) => {
                    const isSelected = selectedAuction?._id === auction._id;
                    const timeLeftMs = new Date(auction.endTime).getTime() - Date.now();
                    const daysLeft = Math.max(0, Math.ceil(timeLeftMs / (1000 * 60 * 60 * 24)));

                    return (
                      <div 
                        key={auction._id}
                        onClick={() => {
                          setSelectedAuction(auction);
                          // Smooth scroll to the details section
                          document.getElementById("auction-detail-section")?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`group relative bg-gradient-to-br from-slate-900 to-slate-950 border rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/5 ${
                          isSelected 
                            ? "border-amber-400 ring-1 ring-amber-400 shadow-xl" 
                            : "border-slate-800 hover:border-amber-400/40"
                        }`}
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <span className="px-2.5 py-1 rounded-lg bg-amber-400/10 text-amber-400 text-[9px] font-black uppercase tracking-widest border border-amber-400/20">
                                  {auction.type}
                                </span>
                                <span className="flex items-center gap-1 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                                  <MapPin size={10} /> {auction.city}
                                </span>
                              </div>
                              <h2 className="text-lg font-black text-white uppercase group-hover:text-amber-400 transition-colors leading-tight">
                                {auction.title}
                              </h2>
                            </div>
                            <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shrink-0 ${
                              daysLeft <= 3 
                                ? "bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse" 
                                : "bg-slate-800 text-slate-400 border border-slate-700"
                            }`}>
                              {daysLeft === 0 ? "Bidding Over" : `Only ${daysLeft} days left!`}
                            </span>
                          </div>

                          {/* PRICE COMPARISON */}
                          <div className="grid grid-cols-3 gap-3 text-xs">
                            <div className="bg-slate-950/80 border border-slate-900 p-3 rounded-2xl">
                              <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mb-0.5">Reserve Price</p>
                              <p className="font-black text-white text-sm">{auction.basePrice}</p>
                            </div>

                            <div className="bg-slate-950/80 border border-slate-900 p-3 rounded-2xl relative">
                              <TrendingDown
                                size={12}
                                className="absolute top-2 right-2 text-green-400"
                              />
                              <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mb-0.5">Market Value</p>
                              <p className="font-black text-green-400 text-sm">{auction.marketValue || "N/A"}</p>
                            </div>

                            <div className="bg-amber-400/10 border border-amber-400/20 p-3 rounded-2xl text-center">
                              <p className="text-[9px] text-amber-500 uppercase tracking-widest font-black mb-0.5">Potential Profit</p>
                              <p className="font-black text-amber-400 text-sm">{auction.potentialSavings || "N/A"}</p>
                            </div>
                          </div>

                          {/* INFO */}
                          <div className="flex flex-wrap justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-2 border-t border-slate-900/60">
                            <span className="flex items-center gap-1.5">
                              <Landmark size={12} className="text-amber-400" /> {auction.possessionType || "SARFAESI Possession"}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <DollarSign size={12} className="text-green-400" /> EMD: {auction.emd || "10% of Reserve"}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={12} className="text-amber-400" /> End: {auction.endTime ? new Date(auction.endTime).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }) : "N/A"}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
