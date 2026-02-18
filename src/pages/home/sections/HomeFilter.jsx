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
  const [selectedState, setSelectedState] = useState("West Bengal");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [placeSearch, setPlaceSearch] = useState("");
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stateRef.current && !stateRef.current.contains(event.target))
        setStateDropdownOpen(false);
      if (cityRef.current && !cityRef.current.contains(event.target))
        setCityDropdownOpen(false);
      if (placeRef.current && !placeRef.current.contains(event.target))
        setPlaceDropdownOpen(false);
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

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(citySearch.toLowerCase()),
  );

  const filteredPlaces = places.filter((place) =>
    place.toLowerCase().includes(placeSearch.toLowerCase()),
  );

  return (
    <Section className="relative overflow-hidden py-4">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-150 h-150 bg-orange-200/20 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 bg-coral-red/10 blur-[120px] rounded-full"></div>
      </div>

      <Container>
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* LEFT SIDE: Content (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-coral-red mb-4">
              Premium Listings
            </p>
            <h2 className="text-4xl font-black leading-[1.1] text-slate-800">
              Find Your <br />
              <span className="bg-linear-to-r from-coral-red to-orange-600 bg-clip-text text-transparent">
                Perfect Property
              </span>
            </h2>
            <p className="mt-6 text-base text-slate-500 font-medium leading-relaxed max-w-sm">
              Tailor your search by state, city, and budget. Our verified
              listings make finding your next home or investment seamless.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-0.5 bg-coral-red"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Filter Card */}
          <div className="lg:col-span-7">
            {/* MOBILE HEADER */}
            <div className="text-center mb-4 lg:hidden">
              <h2 className="text-lg font-black uppercase tracking-tight text-slate-800">
                Find Your <span className="text-coral-red">Own Property</span>
              </h2>
              <div className="w-12 h-1 bg-linear-to-r from-coral-red via-soft-orange-500 to-warm-yellow mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl lg:rounded-[2.5rem] shadow-3xl shadow-orange-100/50 border border-slate-200 p-4 lg:p-10 relative z-30">
              <div className="space-y-4 lg:space-y-6">
                
                {/* GRID FOR DROPDOWNS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  
                  {/* STATE - Fixed Dropdown */}
                  <div className="relative" ref={stateRef}>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1 block lg:mb-2">
                      State
                    </label>
                    <button
                      onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                      className="w-full flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl px-3 py-2.5 lg:px-4 lg:py-3.5 hover:border-orange-300 transition-all group"
                    >
                      <div className="flex items-center gap-2 lg:gap-3">
                        <MapPin size={16} className="text-coral-red lg:group-hover:scale-110 transition-transform" />
                        <span className="text-xs lg:text-sm font-bold text-slate-700">
                          {selectedState}
                        </span>
                      </div>
                      <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${stateDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    {stateDropdownOpen && (
                      <div className="absolute z-100 w-full mt-1 lg:mt-2 bg-white rounded-2xl shadow-2xl border border-slate-50 animate-in fade-in zoom-in-95">
                        <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
                          {states.map((s) => (
                            <div
                              key={s.id}
                              onClick={() => {
                                if (s.name === "West Bengal") {
                                  setSelectedState(s.name);
                                  setSelectedCity("");
                                  setSelectedPlace("");
                                  setStateDropdownOpen(false);
                                }
                              }}
                              className={`px-4 py-2 lg:py-3 text-xs lg:text-sm font-semibold transition-colors cursor-pointer ${s.name === "West Bengal" ? "hover:bg-orange-50 text-slate-700" : "text-slate-300 bg-slate-50/50"}`}
                            >
                              {s.name} {s.name !== "West Bengal" && "(Soon)"}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CITY */}
                  <div className="relative" ref={cityRef}>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1 block lg:mb-2">
                      City
                    </label>
                    <button
                      onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                      disabled={!selectedState}
                      className="w-full flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl px-3 py-2.5 lg:px-4 lg:py-3.5 hover:border-orange-300 transition-all disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2 lg:gap-3">
                        <MapPin size={16} className="text-coral-red" />
                        <span className="text-xs lg:text-sm font-bold text-slate-700 truncate">
                          {selectedCity || "Select City"}
                        </span>
                      </div>
                      <ChevronDown size={14} className="text-slate-400" />
                    </button>
                    {cityDropdownOpen && (
                      <div className="absolute z-100 w-full mt-1 lg:mt-2 bg-white rounded-2xl shadow-2xl border border-slate-50 animate-in fade-in zoom-in-95">
                        <input
                          placeholder="Search city..."
                          value={citySearch}
                          onChange={(e) => setCitySearch(e.target.value)}
                          className="w-full px-4 py-2 lg:py-3 border-b outline-none text-xs lg:text-sm font-medium bg-slate-50/50 focus:bg-white"
                        />
                        <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
                          {filteredCities.map((c, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setSelectedCity(c);
                                setCityDropdownOpen(false);
                              }}
                              className="px-4 py-2 lg:py-3 text-xs lg:text-sm font-semibold text-slate-600 hover:bg-orange-50 cursor-pointer"
                            >
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* LOCALITY */}
                  <div className="relative" ref={placeRef}>
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1 block lg:mb-2">
                      Locality
                    </label>
                    <button
                      onClick={() => setPlaceDropdownOpen(!placeDropdownOpen)}
                      disabled={!selectedCity}
                      className="w-full flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl px-3 py-2.5 lg:px-4 lg:py-3.5 hover:border-orange-300 transition-all disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2 lg:gap-3">
                        <MapPin size={16} className="text-coral-red" />
                        <span className="text-xs lg:text-sm font-bold text-slate-700 truncate">
                          {selectedPlace || "All Localities"}
                        </span>
                      </div>
                      <ChevronDown size={14} className="text-slate-400" />
                    </button>
                    {placeDropdownOpen && (
                      <div className="absolute z-100 w-full mt-1 lg:mt-2 bg-white rounded-2xl shadow-2xl border border-slate-50 animate-in fade-in zoom-in-95">
                        <input
                          placeholder="Search locality..."
                          value={placeSearch}
                          onChange={(e) => setPlaceSearch(e.target.value)}
                          className="w-full px-4 py-2 lg:py-3 border-b outline-none text-xs lg:text-sm font-medium bg-slate-50/50 focus:bg-white"
                        />
                        <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
                          {filteredPlaces.map((p, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setSelectedPlace(p);
                                setPlaceDropdownOpen(false);
                              }}
                              className="px-4 py-2 lg:py-3 text-xs lg:text-sm font-semibold text-slate-600 hover:bg-orange-50 cursor-pointer"
                            >
                              {p}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* BUDGET SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
                  <div className="bg-slate-50 rounded-xl lg:rounded-2xl p-3 lg:p-5 border border-slate-100">
                    <div className="flex justify-between items-center mb-1 lg:mb-4">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Min Budget</span>
                      <span className="text-xs lg:text-sm font-black text-coral-red">₹ {formatPrice(minBudget)}</span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
                      <IndianRupee size={14} className="text-slate-400" />
                      <input
                        type="number"
                        value={minBudget}
                        onChange={(e) => setMinBudget(Number(e.target.value))}
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
                      className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-coral-red"
                    />
                  </div>

                  <div className="bg-slate-50 rounded-xl lg:rounded-2xl p-3 lg:p-5 border border-slate-100">
                    <div className="flex justify-between items-center mb-1 lg:mb-4">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Max Budget</span>
                      <span className="text-xs lg:text-sm font-black text-coral-red">₹ {formatPrice(maxBudget)}</span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
                      <IndianRupee size={14} className="text-slate-400" />
                      <input
                        type="number"
                        value={maxBudget}
                        onChange={(e) => setMaxBudget(Number(e.target.value))}
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
                      className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-coral-red"
                    />
                  </div>
                </div>

                {/* SEARCH BUTTON */}
                <div className="pt-1 flex justify-center lg:justify-end">
                  <button
                    onClick={handleSearch}
                    className="w-auto min-w-50 bg-linear-to-r from-coral-red via-soft-orange to-warm-yellow text-white font-black uppercase text-xs tracking-[0.15em] py-3 lg:py-4 px-4 lg:px-6 rounded-full shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <Search size={18} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}