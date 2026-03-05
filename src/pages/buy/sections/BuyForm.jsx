import React, { useState } from "react";
import {
  MapPin,
  Wallet,
  Settings2,
  ChevronRight,
  Ruler,
  Home,
  Clock,
  LayoutGrid,
  Banknote,
} from "lucide-react";
import { states, citiesInWB, placesInWB } from "../../../data/locations";
import { IndianRupee } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function BuyForm({ formData, setFormData, onSubmit }) {
  const MIN_LIMIT = 1000000;
  const MAX_LIMIT = 500000000;
  const [minBudget, setMinBudget] = useState(MIN_LIMIT);
  const [maxBudget, setMaxBudget] = useState(MAX_LIMIT);
  const formatPrice = (value) => {
    if (value >= 10000000) return (value / 10000000).toFixed(1) + " Cr";
    if (value >= 100000) return (value / 100000).toFixed(0) + " L";
    return value;
  };

  const propertyTypes = [
    "Flats",
    "Plots",
    "Joint Ventures",
    "House/Duplex",
    "Office/Retail",
    "Factory",
    "Industrial Plots",
    "Ware House",
    "Hospital",
    "Hotels/Resort",
    "Petrol Pump",
    "Institutes",
    "Investment",
  ];
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // 1. Clean the hash (e.g., "#house-duplex" -> "house-duplex")
      const selectedType = hash.replace("#", "");

      // 2. Match it against your array
      const matchedType = propertyTypes.find(
        (t) => t.toLowerCase().replace(/\s+|\/+/g, "-") === selectedType,
      );

      if (matchedType) {
        // We call setFormData directly here to ensure the state updates
        // even if handleChange has dependencies
        setFormData((prev) => ({ ...prev, type: matchedType }));
      }
    }
  }, [hash]); // Only trigger when hash changes

  // Safe access to places
  const availablePlaces =
    formData && formData.city ? placesInWB[formData.city] || [] : [];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Logic to show BHK/1RK only for residential types
  const isResidential = ["flat", "house", "duplex", "villa"].includes(
    formData?.type?.toLowerCase(),
  );

  // Helper for dynamic styling: Only orange if a value exists
  const getBoxStyle = (value) =>
    value
      ? "bg-orange-50 border-orange-200 ring-1 ring-orange-100/50"
      : "bg-slate-50 border-slate-100";

  const getLabelStyle = (value) =>
    value ? "text-orange-600" : "text-slate-400";
  const [budgetError, setBudgetError] = useState("");
  return (
    <div className="max-w-4xl mx-auto px-2 pb-10">
      {/* HEADER SECTION */}
      <div className="relative mb-6 border-l-4 border-orange-500 pl-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
          Property Purchase
        </span>
        <h2 className="text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-tight">
          Buy Your{" "}
          <span className="italic text-orange-500">Dream Property</span>
        </h2>
        <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
          Verified listings and direct owner connectivity. Find residential and
          commercial spaces with ease.
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
              <div
                className={`p-3 rounded-2xl border transition-all ${getBoxStyle(formData.state)}`}
              >
                <label
                  className={`text-[8px] font-black uppercase block mb-1 ${getLabelStyle(formData.state)}`}
                >
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
              <div
                className={`p-3 rounded-2xl border transition-all ${getBoxStyle(formData.city)}`}
              >
                <label
                  className={`text-[8px] font-black uppercase block mb-1 ${getLabelStyle(formData.city)}`}
                >
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
              <div
                className={`p-3 rounded-2xl border transition-all ${getBoxStyle(formData.loc)}`}
              >
                <label
                  className={`text-[8px] font-black uppercase block mb-1 ${getLabelStyle(formData.loc)}`}
                >
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
            </div>
          </section>

          {/* 04. PROPERTY DETAILS - TURN ORANGE ON SELECT */}
          <section className="pt-6 border-t border-slate-50 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <Settings2 size={14} /> Property Required
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Type */}
              <div
                className={`p-2.5 rounded-xl border transition-all ${getBoxStyle(formData.type)}`}
              >
                <label
                  className={`text-[8px] font-black uppercase mb-1 block ${getLabelStyle(formData.type)}`}
                >
                  Type
                </label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none cursor-pointer"
                  value={formData.type || ""}
                  onChange={(e) => handleChange("type", e.target.value)}
                  // The select itself stays enabled so they can click it
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {propertyTypes.map((type) => {
                    // Logic: If there is a hash, only the matching type is enabled.
                    // If there is NO hash, all types are enabled.
                    const isLockedByHash =
                      hash &&
                      hash.replace("#", "") !==
                        type.toLowerCase().replace(/\s+|\/+/g, "-");

                    return (
                      <option
                        key={type}
                        value={type}
                        disabled={isLockedByHash} // This disables all other options
                        className={
                          isLockedByHash ? "text-slate-300" : "text-slate-800"
                        }
                      >
                        {type}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* BHK (Conditional) */}
              {isResidential && (
                <div
                  className={`p-2.5 rounded-xl border transition-all ${getBoxStyle(formData.bed)}`}
                >
                  <label
                    className={`text-[8px] font-black uppercase mb-1 block ${getLabelStyle(formData.bed)}`}
                  >
                    BHK
                  </label>
                  <select
                    className="w-full bg-transparent text-[11px] font-bold outline-none cursor-pointer"
                    value={formData.bed || ""}
                    onChange={(e) => handleChange("bed", e.target.value)}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>4+ BHK</option>
                  </select>
                </div>
              )}

              {/* Construction Status */}
              <div
                className={`p-2.5 rounded-xl border transition-all ${getBoxStyle(formData.status)}`}
              >
                <label
                  className={`text-[8px] font-black uppercase mb-1 block ${getLabelStyle(formData.status)}`}
                >
                  Status
                </label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none cursor-pointer"
                  value={formData.status || ""}
                  onChange={(e) => handleChange("status", e.target.value)}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Under Construction</option>
                  <option>Ready to Move</option>
                  <option>New Launch</option>
                  <option>Resell</option>
                </select>
              </div>

              {/* Possession */}
              <div
                className={`p-2.5 rounded-xl border transition-all ${getBoxStyle(formData.possession)}`}
              >
                <label
                  className={`text-[8px] font-black uppercase mb-1 block ${getLabelStyle(formData.possession)}`}
                >
                  Time Period
                </label>
                <select
                  className="w-full bg-transparent text-[11px] font-bold outline-none cursor-pointer"
                  value={formData.possession || ""}
                  onChange={(e) => handleChange("possession", e.target.value)}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Immediately</option>
                  <option>In 6 Months</option>
                  <option>1-2 Years</option>
                </select>
              </div>
            </div>
          </section>
          {/* 02. BUDGET SLIDER */}
          <section className="space-y-4 pt-4 select-none">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                <Banknote size={14} /> Set your budget
              </div>

              {/* DYNAMIC ALERT MESSAGE */}
              {minBudget > maxBudget && (
                <span className="text-[10px] font-bold text-red-500 animate-pulse bg-red-50 px-2 py-1 rounded-lg border border-red-100">
                  ⚠️ Min budget cannot exceed Max
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
              {/* MIN BUDGET BOX */}
              <div
                className={`bg-white rounded-xl lg:rounded-2xl p-3 lg:p-5 border transition-colors ${minBudget > maxBudget ? "border-red-200 bg-red-50/30" : "border-slate-100"}`}
              >
                <div className="flex justify-between items-center mb-1 lg:mb-4">
                  <span className="text-[9px] font-black text-slate-400 uppercase">
                    Min
                  </span>
                  <span className="text-xs lg:text-sm font-black text-dark-orange">
                    ₹ {formatPrice(minBudget)}
                  </span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
                  <IndianRupee
                    size={14}
                    className={
                      minBudget > maxBudget ? "text-red-400" : "text-slate-400"
                    }
                  />
                  <input
                    type="text"
                    value={minBudget === 0 ? "" : minBudget}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      setMinBudget(val === "" ? 0 : Number(val));
                    }}
                    className="bg-transparent w-full text-xs lg:text-sm font-black outline-none text-slate-700"
                  />
                </div>
                <input
                  type="range"
                  min={MIN_LIMIT}
                  max={MAX_LIMIT}
                  step="100000"
                  value={minBudget}
                  onChange={(e) => setMinBudget(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-dark-orange"
                />
              </div>

              {/* MAX BUDGET BOX */}
              <div
                className={`bg-white rounded-xl lg:rounded-2xl p-3 lg:p-5 border transition-colors ${minBudget > maxBudget ? "border-red-200 bg-red-50/30" : "border-slate-100"}`}
              >
                <div className="flex justify-between items-center mb-1 lg:mb-4">
                  <span className="text-[9px] font-black text-slate-400 uppercase">
                    Max
                  </span>
                  <span className="text-xs lg:text-sm font-black text-dark-orange">
                    ₹ {formatPrice(maxBudget)}
                  </span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
                  <IndianRupee
                    size={14}
                    className={
                      minBudget > maxBudget ? "text-red-400" : "text-slate-400"
                    }
                  />
                  <input
                    type="text"
                    value={maxBudget === 0 ? "" : maxBudget}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      setMaxBudget(val === "" ? 0 : Number(val));
                    }}
                    className="bg-transparent w-full text-xs lg:text-sm font-black outline-none text-slate-700"
                  />
                </div>
                <input
                  type="range"
                  min={MIN_LIMIT}
                  max={MAX_LIMIT}
                  step="100000"
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-dark-orange"
                />
              </div>
            </div>
          </section>

          {/* SUBMIT */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={onSubmit}
              disabled={minBudget > maxBudget}
              className={`${minBudget > maxBudget ? "opacity-50 cursor-not-allowed" : ""} bg-dark-orange text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-500 transition-all shadow-xl group`}
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
