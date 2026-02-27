import React from "react";
import { MapPin, Wallet, Home, ChevronRight } from "lucide-react";
import { states, citiesInWB, placesInWB } from "../../../data/locations";

export default function RentForm({ formData, setFormData, onSubmit }) {
  // Local calculation to ensure the Area dropdown always has data
  const availablePlaces = placesInWB[formData.city] || [];

  return (
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
                <label className="text-[8px] font-black uppercase text-slate-400 ml-1">State</label>
                <select
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold outline-none cursor-pointer focus:border-orange-300 transition-colors"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                >
                  {states.map((s) => (
                    <option key={s.id} value={s.name} disabled={s.name !== "West Bengal"}>
                      {s.name} {s.name !== "West Bengal" ? "(Coming Soon)" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[8px] font-black uppercase text-slate-400 ml-1">City</label>
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
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[8px] font-black uppercase text-slate-400 ml-1">Area / Landmark</label>
                <select
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold outline-none cursor-pointer focus:border-orange-300"
                  value={formData.loc}
                  onChange={(e) => setFormData({ ...formData, loc: e.target.value })}
                >
                  {availablePlaces.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-10 pt-6 border-t border-slate-50">
            {/* 02. UPDATED BUDGET SLIDER */}
            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-orange-600">
                  <Wallet size={12} /> 02. Monthly Budget
                </div>
                <span className="text-[10px] font-black text-slate-900 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                  ₹{formData.minBud === 0 ? "0" : formData.minBud >= 80000 ? "80K+" : `${formData.minBud / 1000}K`} — 
                  ₹{formData.maxBud >= 80000 ? "80K+" : `${formData.maxBud / 1000}K`}
                </span>
              </div>

              <div className="relative h-10 flex items-center">
                <div className="absolute w-full h-1 bg-slate-100 rounded-full" />
                <div
                  className="absolute h-1 bg-[#efae2e] rounded-full z-10"
                  style={{
                    left: `${(formData.minBud / 80000) * 100}%`,
                    width: `${((formData.maxBud - formData.minBud) / 80000) * 100}%`,
                  }}
                />
                <div className="absolute w-full flex justify-between px-0.5">
                  {[0, 20000, 40000, 60000, 80000].map((tick) => (
                    <div key={tick} className="flex flex-col items-center relative">
                      <div className={`w-1 h-1 rounded-full ${tick >= formData.minBud && tick <= formData.maxBud ? "bg-orange-400" : "bg-slate-300"}`} />
                      <span className="text-[7px] font-bold text-slate-400 mt-5 absolute whitespace-nowrap uppercase">
                        {tick === 0 ? "₹0" : tick === 80000 ? "80K+" : `${tick / 1000}K`}
                      </span>
                    </div>
                  ))}
                </div>
                <input
                  type="range" min="0" max="80000" step="1000"
                  value={formData.minBud}
                  onChange={(e) => setFormData({ ...formData, minBud: Math.min(parseInt(e.target.value), formData.maxBud - 1000) })}
                  className="absolute w-full appearance-none bg-transparent pointer-events-none z-30 h-1 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#efae2e] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
                />
                <input
                  type="range" min="0" max="80000" step="1000"
                  value={formData.maxBud}
                  onChange={(e) => setFormData({ ...formData, maxBud: Math.max(parseInt(e.target.value), formData.minBud + 1000) })}
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
                  <label className="text-[8px] font-black uppercase text-slate-400 ml-1">BHK Type</label>
                  <select
                    className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold outline-none"
                    value={formData.bed}
                    onChange={(e) => setFormData({ ...formData, bed: e.target.value })}
                  >
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>4+ BHK</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[8px] font-black uppercase text-slate-400 ml-1">Property</label>
                  <select
                    className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold outline-none"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
              onClick={onSubmit}
              className="bg-dark-orange text-white px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-orange-600 transition-all shadow-lg group"
            >
              Show Listings
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}