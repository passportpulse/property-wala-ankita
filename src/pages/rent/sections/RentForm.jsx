import React from "react";
import {
  MapPin,
  Wallet,
  Home,
  ChevronRight,
  Settings2,
  Clock,
  Ruler,
  Bath,
  LayoutGrid,
} from "lucide-react";
import { states, citiesInWB, placesInWB } from "../../../data/locations";

export default function RentForm({ formData, setFormData, onSubmit }) {
  // Safe access to places
  const availablePlaces =
    formData && formData.city ? placesInWB[formData.city] || [] : [];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const amenitiesList = [
    "Lift",
    "Gated Community",
    "Parking",
    "Power Backup",
    "WiFi",
    "AC",
    "Pet Allowed",
  ];

  // Logic to show BHK/1RK only for residential types
  const isResidential = ["flat", "house", "duplex", "pg / co-living"].includes(
    formData?.type?.toLowerCase(),
  );

  return (
    <div className="max-w-4xl mx-auto px-2 pb-10">
      {/* HEADER SECTION */}
      <div className="relative mb-6 border-l-4 border-orange-500 pl-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
          Rental Inventory
        </span>
        <h2 className="text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-tight">
          Find Your <span className="italic text-orange-500">Next Space</span>
        </h2>
        <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
          Verified listings with complete legal due diligence.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-5 lg:p-8 space-y-8">
          {/* 01. LOCATION & TIMELINE */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-600">
              <MapPin size={14} className="text-orange-500" /> Where & When
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* STATE - Fixed to WB with Disabled Others */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  State
                </label>
                <select
                  className="w-full bg-transparent text-xs font-bold outline-none cursor-pointer"
                  value={formData.state || "West Bengal"}
                  onChange={(e) => handleChange("state", e.target.value)}
                >
                  {states.map((s) => (
                    <option
                      key={s.id}
                      value={s.name}
                      disabled={s.name !== "West Bengal"}
                    >
                      {s.name} {s.name !== "West Bengal" ? "(Soon)" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* CITY */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  City
                </label>
                <select
                  className="w-full bg-transparent text-xs font-bold outline-none cursor-pointer"
                  value={formData.city || ""}
                  onChange={(e) => {
                    const newCity = e.target.value;
                    setFormData({
                      ...formData,
                      city: newCity,
                      loc: placesInWB[newCity]?.[0] || "",
                    });
                  }}
                >
                  <option value="" disabled>
                    Select City
                  </option>
                  {citiesInWB.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* AREA */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  Area
                </label>
                <select
                  className="w-full bg-transparent text-xs font-bold outline-none cursor-pointer"
                  value={formData.loc || ""}
                  onChange={(e) => handleChange("loc", e.target.value)}
                >
                  <option value="" disabled>
                    Select Area
                  </option>
                  {availablePlaces.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* MOVE IN */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  Move-in
                </label>
                <select
                  className="w-full bg-transparent text-xs font-bold outline-none cursor-pointer"
                  value={formData.moveTime || "Immediately"}
                  onChange={(e) => handleChange("moveTime", e.target.value)}
                >
                  <option>Immediately</option>
                  <option>Within 1 Week</option>
                  <option>Within 2 Weeks</option>
                  <option>Within 1 Month</option>
                  <option>2-3 Months</option>
                </select>
              </div>
            </div>
          </section>
          {/* 02. BUDGET SLIDER SECTION */}
         <section className="space-y-6 pt-4 select-none">
  {/* Header & Manual Inputs */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-orange-600">
        <Wallet size={12} /> Monthly Budget
      </div>
      <p className="text-[10px] text-slate-400 font-medium tracking-tight">
        Precise range selection (₹1 steps)
      </p>
    </div>

    {/* Manual Input Fields */}
    <div className="flex items-center gap-2">
      <div className="relative group">
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 group-focus-within:text-orange-500 transition-colors">
          ₹
        </span>
        <input
          type="number"
          value={formData.minBud === 0 ? "" : formData.minBud}
          placeholder="0"
          onChange={(e) => {
            const val = Number(e.target.value);
            const constrainedVal = Math.max(0, Math.min(val, (formData.maxBud || 500000) - 1));
            setFormData({ ...formData, minBud: constrainedVal });
          }}
          className="w-28 pl-6 pr-2 py-2 text-[11px] font-black text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all shadow-sm"
        />
      </div>
      <span className="text-slate-300 font-bold text-xs">—</span>
      <div className="relative group">
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 group-focus-within:text-orange-500 transition-colors">
          ₹
        </span>
        <input
          type="number"
          value={formData.maxBud === 0 ? "" : formData.maxBud}
          placeholder="500000"
          onChange={(e) => {
            const val = Number(e.target.value);
            const constrainedVal = Math.min(500000, Math.max(val, (formData.minBud || 0) + 1));
            setFormData({ ...formData, maxBud: constrainedVal });
          }}
          className="w-28 pl-6 pr-2 py-2 text-[11px] font-black text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all shadow-sm"
        />
      </div>
    </div>
  </div>

  {/* Slider Component */}
  <div className="relative h-12 flex items-center px-2">
    {/* Base Track */}
    <div className="absolute left-2 right-2 h-2 bg-slate-100 rounded-full" />

    {/* Active Range Highlight - FIXED INITIAL VISIBILITY */}
    {/* Active Range Highlight - Bulletproof Version */}
<div
  className="absolute h-2 bg-orange-400 rounded-full transition-all duration-75 shadow-[0_0_15px_rgba(251,146,60,0.3)]"
  style={{
    left: `${
      ((Number(formData.minBud) || 0) / 500000) * 100
    }%`,
    width: `${
      ((Number(formData.maxBud || 500000) - Number(formData.minBud || 0)) / 500000) * 100
    }%`,
  }}
/>

    {/* Granular Breakpoints */}
    <div className="absolute left-2 right-2 flex justify-between px-[2px]">
      {[0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000].map((tick) => (
        <div key={tick} className="relative flex flex-col items-center">
          <div className={`w-[1px] transition-all duration-300 ${tick >= (formData.minBud || 0) && tick <= (formData.maxBud || 500000) ? "h-4 bg-orange-400" : "h-2 bg-slate-200"}`} />
          {(tick % 100000 === 0 || tick === 0) && (
            <span className={`absolute top-5 text-[8px] font-bold uppercase tracking-tighter whitespace-nowrap transition-colors ${tick >= (formData.minBud || 0) && tick <= (formData.maxBud || 500000) ? "text-orange-500" : "text-slate-400"}`}>
              {tick === 0 ? "0" : tick >= 100000 ? `${tick / 100000}L` : `${tick / 1000}K`}
            </span>
          )}
        </div>
      ))}
    </div>

    {/* Dual Inputs */}
    <input
      type="range"
      min="0"
      max="500000"
      step="1"
      value={formData.minBud || 0}
      onChange={(e) => {
        const val = Math.min(parseInt(e.target.value), (formData.maxBud || 500000) - 1);
        setFormData({ ...formData, minBud: val });
      }}
      className="absolute left-0 w-full appearance-none bg-transparent pointer-events-none z-30 h-2 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[4px] [&::-webkit-slider-thumb]:border-orange-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:active:scale-90 [&::-webkit-slider-thumb]:transition-transform"
    />
    <input
      type="range"
      min="0"
      max="500000"
      step="1"
      value={formData.maxBud || 500000}
      onChange={(e) => {
        const val = Math.max(parseInt(e.target.value), (formData.minBud || 0) + 1);
        setFormData({ ...formData, maxBud: val });
      }}
      className="absolute left-0 w-full appearance-none bg-transparent pointer-events-none z-30 h-2 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[4px] [&::-webkit-slider-thumb]:border-orange-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:active:scale-90 [&::-webkit-slider-thumb]:transition-transform"
    />
  </div>

  {/* Dynamic Selection Summary */}
  <div className="flex justify-center mt-2">
    <div className="bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
      <p className="text-[10px] font-black text-orange-700 uppercase tracking-widest">
        Selected: ₹{new Intl.NumberFormat("en-IN").format(formData.minBud || 0)} — ₹{new Intl.NumberFormat("en-IN").format(formData.maxBud || 500000)}
      </p>
    </div>
  </div>
</section>
          {/* 03. AREA SIZE SLIDER SECTION */}
          <section className="space-y-6 pt-6 border-t border-slate-50 select-none">
            {/* Header & Manual Inputs */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-orange-600">
                  <Ruler size={12} /> 03. Area Size (Sq.ft)
                </div>
                <p className="text-[10px] text-slate-400 font-medium tracking-tight">
                  Enter size or slide for range
                </p>
              </div>

              {/* Manual Input Fields for Area */}
              <div className="flex items-center gap-2">
                <div className="relative group">
                  <input
                    type="number"
                    // Fix: Shows empty string instead of 0 for easier typing
                    value={formData.minSqft === 0 ? "" : formData.minSqft}
                    placeholder="100"
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      const constrainedVal = Math.max(
                        100,
                        Math.min(val, (formData.maxSqft || 60000) - 1),
                      );
                      setFormData({ ...formData, minSqft: constrainedVal });
                    }}
                    className="w-28 px-3 py-2 text-[11px] font-black text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all shadow-sm"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-bold text-slate-300">
                    SQFT
                  </span>
                </div>
                <span className="text-slate-300 font-bold text-xs">—</span>
                <div className="relative group">
                  <input
                    type="number"
                    value={formData.maxSqft === 0 ? "" : formData.maxSqft}
                    placeholder="60000"
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      const constrainedVal = Math.min(
                        60000,
                        Math.max(val, (formData.minSqft || 100) + 1),
                      );
                      setFormData({ ...formData, maxSqft: constrainedVal });
                    }}
                    className="w-28 px-3 py-2 text-[11px] font-black text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all shadow-sm"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-bold text-slate-300">
                    SQFT
                  </span>
                </div>
              </div>
            </div>

            {/* Slider Component */}
            <div className="relative h-12 flex items-center px-2">
              {/* Base Track */}
              <div className="absolute left-2 right-2 h-2 bg-slate-100 rounded-full" />

              {/* Active Range Highlight */}
              {/* Active Range Highlight */}
              <div
                className="absolute h-2 bg-orange-400 rounded-full transition-all duration-75 shadow-[0_0_15px_rgba(251,146,60,0.3)]"
                style={{
                  // We add fallbacks (|| 100) and (|| 60000) to ensure the line renders on load
                  left: `${(((formData.minSqft || 100) - 100) / (60000 - 100)) * 100}%`,
                  width: `${(((formData.maxSqft || 60000) - (formData.minSqft || 100)) / (60000 - 100)) * 100}%`,
                }}
              />

              {/* Breakpoints (Granular scale for Area) */}
              <div className="absolute left-2 right-2 flex justify-between px-[2px]">
                {[100, 15000, 30000, 45000, 60000].map((tick) => (
                  <div
                    key={tick}
                    className="relative flex flex-col items-center"
                  >
                    <div
                      className={`w-[1px] transition-all duration-300 ${tick >= formData.minSqft && tick <= formData.maxSqft ? "h-4 bg-orange-400" : "h-2 bg-slate-200"}`}
                    />
                    <span
                      className={`absolute top-5 text-[8px] font-bold uppercase tracking-tighter whitespace-nowrap transition-colors ${tick >= formData.minSqft && tick <= formData.maxSqft ? "text-orange-500" : "text-slate-400"}`}
                    >
                      {tick >= 1000 ? `${tick / 1000}K` : tick}
                    </span>
                  </div>
                ))}
              </div>

              {/* Dual Thumb Inputs */}
              <input
                type="range"
                min="100"
                max="60000"
                step="1"
                value={formData.minSqft || 100}
                onChange={(e) => {
                  const val = Math.min(
                    parseInt(e.target.value),
                    (formData.maxSqft || 60000) - 1,
                  );
                  setFormData({ ...formData, minSqft: val });
                }}
                className="absolute left-0 w-full appearance-none bg-transparent pointer-events-none z-30 h-2 
        [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none 
        [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white 
        [&::-webkit-slider-thumb]:border-[4px] [&::-webkit-slider-thumb]:border-orange-400 
        [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-grab 
        [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:active:scale-90 [&::-webkit-slider-thumb]:transition-transform"
              />
              <input
                type="range"
                min="100"
                max="60000"
                step="1"
                value={formData.maxSqft || 60000}
                onChange={(e) => {
                  const val = Math.max(
                    parseInt(e.target.value),
                    (formData.minSqft || 100) + 1,
                  );
                  setFormData({ ...formData, maxSqft: val });
                }}
                className="absolute left-0 w-full appearance-none bg-transparent pointer-events-none z-30 h-2 
        [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none 
        [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white 
        [&::-webkit-slider-thumb]:border-[4px] [&::-webkit-slider-thumb]:border-orange-400 
        [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-grab 
        [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:active:scale-90 [&::-webkit-slider-thumb]:transition-transform"
              />
            </div>

            {/* Area Summary Badge */}
            <div className="flex justify-center mt-2">
              <div className="bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 flex items-center gap-2">
                <p className="text-[10px] font-black text-orange-700 uppercase tracking-widest">
                  Range: {formData.minSqft?.toLocaleString()} —{" "}
                  {formData.maxSqft?.toLocaleString()} Sq.ft
                </p>
              </div>
            </div>
          </section>
          {/* 04. CONFIGURATION GRID */}
          <section className="pt-6 border-t border-slate-50 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-600">
              <Settings2 size={14} className="text-orange-600" />
              Configuration
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-slate-50 p-2.5 rounded-xl">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  Property
                </label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none"
                  value={formData.type || "flat"}
                  onChange={(e) => handleChange("type", e.target.value)}
                >
                  <option value="duplex">Duplex</option>
                  <option value="flat">Flat</option>
                  <option value="hall">Hall</option>
                  <option value="house">House</option>
                  <option value="office">Office</option>
                  <option value="pg / co-living">PG / Co-living</option>
                  <option value="retail space">Retail Space</option>
                  <option value="vacant land">Vacant Land</option>
                  <option value="warehouse">Warehouse</option>
                </select>
              </div>

              {isResidential && (
                <div className="bg-orange-50/50 p-2.5 rounded-xl border border-orange-100">
                  <label className="text-[8px] font-black uppercase text-orange-600 block mb-1">
                    BHK / 1RK
                  </label>
                  <select
                    className="w-full bg-transparent text-[11px] font-bold outline-none"
                    value={formData.bed || "1 BHK"}
                    onChange={(e) => handleChange("bed", e.target.value)}
                  >
                    <option>1 RK</option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>4 BHK</option>
                    <option>5+ BHK</option>
                  </select>
                </div>
              )}

              <div className="bg-slate-50 p-2.5 rounded-xl">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  Furnishing
                </label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none"
                  value={formData.fur || "Unfurnished"}
                  onChange={(e) => handleChange("fur", e.target.value)}
                >
                  <option>Unfurnished</option>
                  <option>Semi-Furnished</option>
                  <option>Fully Furnished</option>
                </select>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  Floor
                </label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none"
                  value={formData.floor || "Any"}
                  onChange={(e) => handleChange("floor", e.target.value)}
                >
                  <option>Any</option>
                  <option>Ground</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  Bathrooms
                </label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none"
                  value={formData.bath || "1"}
                  onChange={(e) => handleChange("bath", e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  Tenant Type
                </label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none"
                  value={formData.tenant || "Family"}
                  onChange={(e) => handleChange("tenant", e.target.value)}
                >
                  <option>Family</option>
                  <option>Student</option>
                  <option>Working Professionals</option>
                  <option>Company</option>
                </select>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  Property Age
                </label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none"
                  value={formData.age || "0-1 Years"}
                  onChange={(e) => handleChange("age", e.target.value)}
                >
                  <option>0-1 Years</option>
                  <option>1-5 Years</option>
                  <option>5-10 Years</option>
                  <option>10-20 Years</option>
                  <option>20-50 Years</option>
                </select>
              </div>
            </div>
          </section>

          {/* 04. AMENITIES */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-600">
              <LayoutGrid size={14} className="text-orange-500" /> Amenities
            </div>
            <div className="flex flex-wrap gap-2">
              {amenitiesList.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    const current = formData.amenities || [];
                    const next = current.includes(item)
                      ? current.filter((i) => i !== item)
                      : [...current, item];
                    handleChange("amenities", next);
                  }}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-black transition-all border ${
                    formData.amenities?.includes(item)
                      ? "bg-dark-orange border-dark-orange text-white shadow-lg shadow-slate-200"
                      : "bg-white border-slate-100 text-slate-400 hover:border-orange-500 hover:text-orange-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          {/* SUBMIT */}
          <div className="pt-4">
            <button
              onClick={onSubmit}
              className="w-full bg-dark-orange text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-500 transition-all shadow-xl group"
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
