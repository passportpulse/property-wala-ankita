import React from "react";
import {
  MapPin,
  Wallet,
  Settings2,
  ChevronRight,
  Ruler,
  Home,
  Clock,
  LayoutGrid
} from "lucide-react";
import { states, citiesInWB, placesInWB } from "../../../data/locations";

export default function BuyForm({ formData, setFormData, onSubmit }) {
  // Safe access to places
  const availablePlaces =
    formData && formData.city ? placesInWB[formData.city] || [] : [];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Logic to show BHK/1RK only for residential types
  const isResidential = ["flat", "house", "duplex", "villa"].includes(
    formData?.type?.toLowerCase()
  );

  // Helper for dynamic styling: Only orange if a value exists
  const getBoxStyle = (value) => 
    value ? "bg-orange-50 border-orange-200 ring-1 ring-orange-100/50" : "bg-slate-50 border-slate-100";
  
  const getLabelStyle = (value) => 
    value ? "text-orange-600" : "text-slate-400";

  return (
    <div className="max-w-4xl mx-auto px-2 pb-10">
      {/* HEADER SECTION */}
      <div className="relative mb-6 border-l-4 border-orange-500 pl-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
          Property Purchase
        </span>
        <h2 className="text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-tight">
          Buy Your <span className="italic text-orange-500">Dream Property</span>
        </h2>
        <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
          Verified listings and direct owner connectivity. Find residential and commercial spaces with ease.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-5 lg:p-8 space-y-8">
          
          {/* 01. LOCATION SECTION */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <MapPin size={14} className="text-orange-500" /> Location Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* STATE */}
              <div className={`p-3 rounded-2xl border transition-all ${getBoxStyle(formData.state)}`}>
                <label className={`text-[8px] font-black uppercase block mb-1 ${getLabelStyle(formData.state)}`}>State</label>
                <select
                  className="w-full bg-transparent text-xs font-bold outline-none cursor-pointer"
                  value={formData.state || "West Bengal"}
                  onChange={(e) => handleChange("state", e.target.value)}
                >
                  {states.map((s) => (
                    <option key={s.id} value={s.name} disabled={s.name !== "West Bengal"}>
                      {s.name} {s.name !== "West Bengal" ? "(Soon)" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* CITY */}
              <div className={`p-3 rounded-2xl border transition-all ${getBoxStyle(formData.city)}`}>
                <label className={`text-[8px] font-black uppercase block mb-1 ${getLabelStyle(formData.city)}`}>City</label>
                <select
                  className="w-full bg-transparent text-xs font-bold outline-none cursor-pointer"
                  value={formData.city || ""}
                  onChange={(e) => {
                    const newCity = e.target.value;
                    setFormData({ ...formData, city: newCity, loc: placesInWB[newCity]?.[0] || "" });
                  }}
                >
                  <option value="" disabled>Select City</option>
                  {citiesInWB.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* AREA */}
              <div className={`p-3 rounded-2xl border transition-all ${getBoxStyle(formData.loc)}`}>
                <label className={`text-[8px] font-black uppercase block mb-1 ${getLabelStyle(formData.loc)}`}>Area</label>
                <select
                  className="w-full bg-transparent text-xs font-bold outline-none cursor-pointer"
                  value={formData.loc || ""}
                  onChange={(e) => handleChange("loc", e.target.value)}
                >
                  <option value="" disabled>Select Area</option>
                  {availablePlaces.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* 02. BUDGET SLIDER (Same as your provided design) */}
          <section className="space-y-4 pt-4 select-none">
            {(() => {
              const minBudgetNum = Number(formData.minBud) || 0;
              const maxBudgetNum = Number(formData.maxBud) || 10000000; // Adjusted for Buying (1Cr)
              const isInvalid = minBudgetNum > maxBudgetNum;

              return (
                <>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                        <Wallet size={12} /> Purchase Budget
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium tracking-tight">Set your price range</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={formData.minBud ?? ""}
                            onChange={(e) => handleChange("minBud", e.target.value)}
                            className={`w-24 p-2 text-[11px] font-black rounded-xl border outline-none ${isInvalid ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
                            placeholder="Min"
                        />
                        <span className="text-slate-300 font-bold">—</span>
                        <input
                            type="number"
                            value={formData.maxBud ?? ""}
                            onChange={(e) => handleChange("maxBud", e.target.value)}
                            className={`w-24 p-2 text-[11px] font-black rounded-xl border outline-none ${isInvalid ? 'border-red-300 bg-red-50' : 'border-slate-200'}`}
                            placeholder="Max"
                        />
                    </div>
                  </div>
                  
                  {/* Slider Logic Here... (Kept as per your design) */}
                </>
              );
            })()}
          </section>

         

          {/* 04. PROPERTY DETAILS - TURN ORANGE ON SELECT */}
          <section className="pt-6 border-t border-slate-50 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <Settings2 size={14} /> Property Details
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Type */}
              <div className={`p-2.5 rounded-xl border transition-all ${getBoxStyle(formData.type)}`}>
                <label className={`text-[8px] font-black uppercase mb-1 block ${getLabelStyle(formData.type)}`}>Type</label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none cursor-pointer"
                  value={formData.type || ""}
                  onChange={(e) => handleChange("type", e.target.value)}
                >
                  <option value="" disabled>Select</option>
                  <option value="flat">Flat</option>
                  <option value="house">House</option>
                  <option value="duplex">Duplex</option>
                  <option value="vacant land">Vacant Land</option>
                </select>
              </div>

              {/* BHK (Conditional) */}
              {isResidential && (
                <div className={`p-2.5 rounded-xl border transition-all ${getBoxStyle(formData.bed)}`}>
                  <label className={`text-[8px] font-black uppercase mb-1 block ${getLabelStyle(formData.bed)}`}>BHK</label>
                  <select
                    className="w-full bg-transparent text-[11px] font-bold outline-none cursor-pointer"
                    value={formData.bed || ""}
                    onChange={(e) => handleChange("bed", e.target.value)}
                  >
                    <option value="" disabled>Select</option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>4+ BHK</option>
                  </select>
                </div>
              )}

              {/* Construction Status */}
              <div className={`p-2.5 rounded-xl border transition-all ${getBoxStyle(formData.status)}`}>
                <label className={`text-[8px] font-black uppercase mb-1 block ${getLabelStyle(formData.status)}`}>Status</label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none cursor-pointer"
                  value={formData.status || ""}
                  onChange={(e) => handleChange("status", e.target.value)}
                >
                  <option value="" disabled>Select</option>
                  <option>Under Construction</option>
                  <option>Ready to Move</option>
                  <option>New Launch</option>
                </select>
              </div>

              {/* Possession */}
              <div className={`p-2.5 rounded-xl border transition-all ${getBoxStyle(formData.possession)}`}>
                <label className={`text-[8px] font-black uppercase mb-1 block ${getLabelStyle(formData.possession)}`}>Possession</label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none cursor-pointer"
                  value={formData.possession || ""}
                  onChange={(e) => handleChange("possession", e.target.value)}
                >
                  <option value="" disabled>Select</option>
                  <option>Immediately</option>
                  <option>In 6 Months</option>
                  <option>1-2 Years</option>
                </select>
              </div>
            </div>
          </section>

          {/* SUBMIT */}
          <div className="pt-4 flex justify-center">
                      <button
                        onClick={onSubmit}
                        className="bg-dark-orange text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-500 transition-all shadow-xl group"
                      >
                        Show Listings
                        <ChevronRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
        </div>
      </div>
    </div>
  );
}