import React, { useState, useRef, useEffect } from "react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { Search, MapPin, IndianRupee, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { states, citiesInWB, placesInWB } from "../../../data/locations";

export default function HomeFilter() {
  const navigate = useNavigate();

  const MIN_LIMIT = 1000000;
  const MAX_LIMIT = 500000000;

  // States
  const [selectedState, setSelectedState] = useState("West Bengal"); // preselect WB
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [minBudget, setMinBudget] = useState(MIN_LIMIT);
  const [maxBudget, setMaxBudget] = useState(MAX_LIMIT);

  // Dropdown open states
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [placeDropdownOpen, setPlaceDropdownOpen] = useState(false);

  const stateRef = useRef(null);
  const cityRef = useRef(null);
  const placeRef = useRef(null);

  const cities = selectedState === "West Bengal" ? citiesInWB : [];
  const places = selectedCity ? placesInWB[selectedCity] || [] : [];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stateRef.current && !stateRef.current.contains(event.target)) {
        setStateDropdownOpen(false);
      }
      if (cityRef.current && !cityRef.current.contains(event.target)) {
        setCityDropdownOpen(false);
      }
      if (placeRef.current && !placeRef.current.contains(event.target)) {
        setPlaceDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatPrice = (value) => {
    if (value >= 10000000) return (value / 10000000).toFixed(1) + " Cr";
    if (value >= 100000) return (value / 100000).toFixed(0) + " L";
    return value;
  };

  const handleSearch = () => {
    navigate(
      `/buy?state=${selectedState}&city=${selectedCity}&place=${selectedPlace}&min=${minBudget}&max=${maxBudget}`,
    );
  };

  return (
    <Section size="default" className="bg-white">
      <Container>
        <div className="max-w-5xl mx-auto space-y-3">
          {/* FILTER CARD */}
          <div className="bg-slate-300 p-4 shadow-xl space-y-3">
            {/* HEADING */}
            <div className="text-center mb-6">
              <h2 className="text-xs lg:text-base font-black uppercase bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
                Search Property by{" "}
                <span className="text-teal-700">State, City & Budget</span>
              </h2>
            </div>
            {/* STATE DROPDOWN */}
            <div className="relative" ref={stateRef}>
              <div
                className="flex items-center justify-between bg-white px-3 py-3 cursor-pointer"
                onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-teal-700" />
                  <span className="text-sm font-semibold">
                    {selectedState || "Select State"}
                  </span>
                </div>
                <ChevronDown size={18} className="text-teal-700" />
              </div>
              {stateDropdownOpen && (
                <div className="absolute z-10 w-full max-h-60 overflow-y-auto bg-white border mt-1 rounded shadow">
                  {states.map((s) => (
                    <div
                      key={s.id}
                      className={`px-3 py-2 cursor-pointer hover:bg-teal-100 ${
                        s.name !== "West Bengal"
                          ? "text-gray-400 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => {
                        if (s.name === "West Bengal") {
                          setSelectedState(s.name);
                          setSelectedCity("");
                          setSelectedPlace("");
                          setStateDropdownOpen(false);
                        }
                      }}
                    >
                      {s.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CITY DROPDOWN */}
            <div className="relative" ref={cityRef}>
              <div
                className={`flex items-center justify-between bg-white px-3 py-3 cursor-pointer ${
                  !selectedState ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() =>
                  selectedState && setCityDropdownOpen(!cityDropdownOpen)
                }
              >
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-teal-700" />
                  <span className="text-sm font-semibold">
                    {selectedCity || "Select City"}
                  </span>
                </div>
                <ChevronDown size={18} className="text-teal-700" />
              </div>
              {cityDropdownOpen && (
                <div className="absolute z-10 w-full max-h-60 overflow-y-auto bg-white border mt-1 rounded shadow">
                  {cities.map((c, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 cursor-pointer hover:bg-teal-100"
                      onClick={() => {
                        setSelectedCity(c);
                        setSelectedPlace("");
                        setCityDropdownOpen(false);
                      }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* PLACE DROPDOWN */}
            <div className="relative" ref={placeRef}>
              <div
                className={`flex items-center justify-between bg-white px-3 py-3 cursor-pointer ${
                  !selectedCity ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() =>
                  selectedCity && setPlaceDropdownOpen(!placeDropdownOpen)
                }
              >
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-teal-700" />
                  <span className="text-sm font-semibold">
                    {selectedPlace || "Select Place"}
                  </span>
                </div>
                <ChevronDown size={18} className="text-teal-700" />
              </div>
              {placeDropdownOpen && (
                <div className="absolute z-10 w-full max-h-60 overflow-y-auto bg-white border mt-1 rounded shadow">
                  {places.map((p, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 cursor-pointer hover:bg-teal-100"
                      onClick={() => {
                        setSelectedPlace(p);
                        setPlaceDropdownOpen(false);
                      }}
                    >
                      {p}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* MIN BUDGET + SLIDER */}
            <div className="bg-white p-3 rounded-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-slate-500">
                  Min
                </span>
                <span className="text-xs font-bold text-slate-600">
                  ₹ {formatPrice(minBudget)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee size={18} className="text-teal-700" />
                <input
                  type="number"
                  value={minBudget}
                  min={MIN_LIMIT}
                  max={maxBudget}
                  onChange={(e) => setMinBudget(Number(e.target.value))}
                  className="w-full outline-none text-sm font-semibold"
                />
              </div>
              <input
                type="range"
                min={MIN_LIMIT}
                max={MAX_LIMIT}
                step="100000"
                value={minBudget}
                onChange={(e) => setMinBudget(Number(e.target.value))}
                className="w-full accent-teal-700"
              />
            </div>

            {/* MAX BUDGET + SLIDER */}
            <div className="bg-white p-3 rounded-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-slate-500">
                  Max
                </span>
                <span className="text-xs font-bold text-slate-600">
                  ₹ {formatPrice(maxBudget)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee size={18} className="text-teal-700" />
                <input
                  type="number"
                  value={maxBudget}
                  min={minBudget}
                  max={MAX_LIMIT}
                  onChange={(e) => setMaxBudget(Number(e.target.value))}
                  className="w-full outline-none text-sm font-semibold"
                />
              </div>
              <input
                type="range"
                min={MIN_LIMIT}
                max={MAX_LIMIT}
                step="100000"
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-teal-700"
              />
            </div>

            {/* SEARCH BUTTON */}
            <button
              onClick={handleSearch}
              className="w-full bg-teal-700 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 py-3 mt-4 hover:bg-teal-800 transition"
            >
              <Search size={18} /> Search
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
