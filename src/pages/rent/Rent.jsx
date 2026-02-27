import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  MapPin,
  Search,
  Home,
  Building2,
  ShieldCheck,
  ArrowUpRight,
  Wallet,
  Info,
} from "lucide-react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

// Data Import
import { states, citiesInWB, placesInWB } from "../../data/locations";

export default function Rent() {
  const [showResults, setShowResults] = useState(false);

  // FORM STATE - Initialized to 0 and 80k
  const [formData, setFormData] = useState({
    state: "West Bengal",
    city: "Durgapur",
    loc: "City Centre",
    type: "PG / Co-living",
    bed: "1 BHK",
    minBud: 0,
    maxBud: 80000,
    fur: "Semi-furnished",
  });

  const availablePlaces = placesInWB[formData.city] || [];

  return (
    <Section
      className="bg-[#f8fafc] min-h-screen py-10 font-poppins text-slate-800"
      size="small"
    >
      <Container>
        {!showResults ? (
          <>
            {/* HEADER - Matched to Service Page */}
            <div className="relative mb-8 lg:mb-12 border-l-4 border-dark-orange pl-4 lg:pl-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1 lg:space-y-2">
                  <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                    Rental Inventory
                  </span>
                  <h2 className="mt-3 text-xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                    Find Your{" "}
                    <span className="bg-linear-to-r from-dark-orange to-orange-400 bg-clip-text text-transparent italic">
                      Next Spaces
                    </span>
                  </h2>
                  <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
                    Verified listings with complete legal due diligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 lg:p-10 space-y-10">
                {/* 01. CASCADING LOCATION SELECTORS */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-orange-600">
                    <MapPin size={12} /> 01. Select Location
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[8px] font-black uppercase text-slate-400 ml-1">
                        State
                      </label>
                      <select
                        className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold outline-none cursor-pointer focus:border-orange-300 transition-colors"
                        value={formData.state}
                        onChange={(e) =>
                          setFormData({ ...formData, state: e.target.value })
                        }
                      >
                        {states.map((s) => (
                          <option
                            key={s.id}
                            value={s.name}
                            disabled={s.name !== "West Bengal"} // Disables everything except West Bengal
                          >
                            {s.name}{" "}
                            {s.name !== "West Bengal" ? "(Coming Soon)" : ""}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[8px] font-black uppercase text-slate-400 ml-1">
                        City
                      </label>
                      <select
                        className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold outline-none cursor-pointer focus:border-orange-300"
                        value={formData.city}
                        onChange={(e) => {
                          const newCity = e.target.value;
                          setFormData({
                            ...formData,
                            city: newCity,
                            loc: placesInWB[newCity][0],
                          });
                        }}
                      >
                        {citiesInWB.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[8px] font-black uppercase text-slate-400 ml-1">
                        Area / Landmark
                      </label>
                      <select
                        className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold outline-none cursor-pointer focus:border-orange-300"
                        value={formData.loc}
                        onChange={(e) =>
                          setFormData({ ...formData, loc: e.target.value })
                        }
                      >
                        {availablePlaces.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </section>

                <div className="grid md:grid-cols-2 gap-10 pt-6 border-t border-slate-50">
                  {/* 02. UPDATED BUDGET SLIDER SECTION */}
                  <section className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-orange-600">
                        <Wallet size={12} /> 02. Monthly Budget
                      </div>
                      <span className="text-[10px] font-black text-slate-900 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                        ₹
                        {formData.minBud === 0
                          ? "0"
                          : formData.minBud >= 80000
                            ? "80K+"
                            : `${formData.minBud / 1000}K`}{" "}
                        — ₹
                        {formData.maxBud >= 80000
                          ? "80K+"
                          : `${formData.maxBud / 1000}K`}
                      </span>
                    </div>

                    <div className="relative h-10 flex items-center">
                      {/* 1. Base Track - Using w-full for perfect alignment */}
                      <div className="absolute w-full h-1 bg-slate-100 rounded-full" />

                      {/* 2. Active Range Highlight - Improved Math */}
                      <div
                        className="absolute h-1 bg-[#efae2e] rounded-full z-10"
                        style={{
                          left: `${(formData.minBud / 80000) * 100}%`,
                          width: `${((formData.maxBud - formData.minBud) / 80000) * 100}%`,
                        }}
                      />

                      {/* 3. Breakpoint Ticks & Labels - Shifted to match thumb center */}
                      <div className="absolute w-full flex justify-between px-[2px]">
                        {[0, 20000, 40000, 60000, 80000].map((tick) => (
                          <div
                            key={tick}
                            className="flex flex-col items-center relative"
                          >
                            <div
                              className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                                tick >= formData.minBud &&
                                tick <= formData.maxBud
                                  ? "bg-orange-400"
                                  : "bg-slate-300"
                              }`}
                            />
                            <span className="text-[7px] font-bold text-slate-400 mt-5 absolute whitespace-nowrap uppercase tracking-tighter">
                              {tick === 0
                                ? "₹0"
                                : tick === 80000
                                  ? "80K+"
                                  : `${tick / 1000}K`}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* 4. Range Inputs - Pure w-full with zero padding */}
                      <input
                        type="range"
                        min="0"
                        max="80000"
                        step="1000"
                        value={formData.minBud}
                        onChange={(e) => {
                          const val = Math.min(
                            parseInt(e.target.value),
                            formData.maxBud - 1000,
                          );
                          setFormData({ ...formData, minBud: val });
                        }}
                        className="absolute w-full appearance-none bg-transparent pointer-events-none z-30 h-1 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#efae2e] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
                      />
                      <input
                        type="range"
                        min="0"
                        max="80000"
                        step="1000"
                        value={formData.maxBud}
                        onChange={(e) => {
                          const val = Math.max(
                            parseInt(e.target.value),
                            formData.minBud + 1000,
                          );
                          setFormData({ ...formData, maxBud: val });
                        }}
                        className="absolute w-full appearance-none bg-transparent pointer-events-none z-30 h-1 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#efae2e] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
                      />
                    </div>
                  </section>

                  {/* 03. PROPERTY SPECS */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-orange-600">
                      <Home size={12} /> 03. Preferences
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[8px] font-black uppercase text-slate-400 ml-1">
                          BHK Type
                        </label>
                        <select
                          className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold outline-none"
                          value={formData.bed}
                          onChange={(e) =>
                            setFormData({ ...formData, bed: e.target.value })
                          }
                        >
                          <option>1 BHK</option>
                          <option>2 BHK</option>
                          <option>3 BHK</option>
                          <option>4+ BHK</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[8px] font-black uppercase text-slate-400 ml-1">
                          Property
                        </label>
                        <select
                          className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold outline-none"
                          value={formData.type}
                          onChange={(e) =>
                            setFormData({ ...formData, type: e.target.value })
                          }
                        >
                          <option>PG / Co-living</option>
                          <option>Flat</option>
                          <option>House</option>
                          <option>Office</option>
                        </select>
                      </div>
                    </div>
                  </section>
                </div>

                {/* SEARCH BUTTON */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => setShowResults(true)}
                    className="bg-dark-orange text-white px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-orange-600 transition-all shadow-lg group"
                  >
                    Show Listings
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* PAGE 2: RESULTS - Same as original */
          <>
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setShowResults(false)}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors"
              >
                <ChevronLeft size={16} /> Reconfigure
              </button>
              <div className="text-right">
                <span className="text-[8px] font-black text-orange-600 uppercase tracking-[0.2em] leading-none mb-1 block">
                  Live Results
                </span>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-tighter">
                  {formData.loc}, {formData.city}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-lg hover:border-orange-100 transition-all group"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white border border-slate-100 text-orange-600 rounded-xl shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                        <Building2 size={22} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                            Verified
                          </span>
                          <ShieldCheck size={12} className="text-green-500" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">
                          Modern {formData.bed} {formData.type}
                        </h3>
                        <p className="text-[11px] text-slate-500 max-w-sm leading-relaxed">
                          Exclusive property with high-end amenities,{" "}
                          {formData.fur} finish, and 24/7 security concierge.
                        </p>
                      </div>
                    </div>

                    <div className="flex md:flex-col justify-between items-end gap-3 border-t md:border-t-0 pt-4 md:pt-0 border-slate-50">
                      <div className="text-right">
                        <p className="text-xl font-black text-slate-900">
                          ₹{(formData.maxBud - 2000).toLocaleString()}
                        </p>
                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                          All Inclusive / mo
                        </p>
                      </div>
                      <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all">
                        View <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}
