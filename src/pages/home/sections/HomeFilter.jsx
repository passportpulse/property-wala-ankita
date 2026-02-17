import React, { useState, useRef, useEffect } from "react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeFilter() {
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_CSC_API_KEY;

  const MIN_LIMIT = 1000000;
  const MAX_LIMIT = 500000000;

  const [pincode, setPincode] = useState("");

  // API DATA STATES
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // SELECTED STATES
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  // Budget
  const [minBudget, setMinBudget] = useState(MIN_LIMIT);
  const [maxBudget, setMaxBudget] = useState(MAX_LIMIT);

  // Dropdown states
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const stateRef = useRef(null);
  const cityRef = useRef(null);

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stateRef.current && !stateRef.current.contains(event.target)) {
        setStateDropdownOpen(false);
      }
      if (cityRef.current && !cityRef.current.contains(event.target)) {
        setCityDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // FETCH STATES (INDIA)
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await fetch(
          "https://api.countrystatecity.in/v1/countries/IN/states",
          {
            headers: {
              "X-CSCAPI-KEY": API_KEY,
            },
          }
        );

        const data = await res.json();
        setStates(data);
      } catch (err) {
        console.error("State fetch error:", err);
      }
    };

    fetchStates();
  }, []);

  // FETCH CITIES WHEN STATE SELECTED
  useEffect(() => {
    if (!selectedState) return;

    const fetchCities = async () => {
      try {
        const res = await fetch(
          `https://api.countrystatecity.in/v1/countries/IN/states/${selectedState.iso2}/cities`,
          {
            headers: {
              "X-CSCAPI-KEY": API_KEY,
            },
          }
        );

        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error("City fetch error:", err);
      }
    };

    fetchCities();
  }, [selectedState]);

  const formatPrice = (value) => {
    if (value >= 10000000) return (value / 10000000).toFixed(1) + " Cr";
    if (value >= 100000) return (value / 100000).toFixed(0) + " L";
    return value;
  };

  const handleSearch = () => {
    if (pincode.length === 6) {
      navigate(`/buy?pincode=${pincode}&min=${minBudget}&max=${maxBudget}`);
    } else {
      navigate(
        `/buy?state=${selectedState?.name}&city=${selectedCity}&min=${minBudget}&max=${maxBudget}`
      );
    }
  };

  return (
    <Section size="default" className="bg-white">
      <Container>
        <div className="max-w-5xl mx-auto space-y-3">

          <div className="bg-slate-300 p-4 shadow-xl space-y-3">

            {/* PINCODE */}
            <div className="bg-white px-3 py-3 flex items-center gap-2">
              <MapPin size={18} className="text-sky-700" />

              <input
                type="text"
                placeholder="Search by Pincode"
                maxLength={6}
                value={pincode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setPincode(value);
                  setSelectedCity("");
                }}
                className="w-full outline-none text-sm font-semibold"
              />
            </div>

            {/* STATE */}
            <div ref={stateRef} className="relative">

              <div
                className="flex justify-between bg-white px-3 py-3 cursor-pointer"
                onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
              >
                <span className="text-sm font-semibold">
                  {selectedState?.name || "Select State"}
                </span>

                <ChevronDown size={18} />
              </div>

              {stateDropdownOpen && (
                <div className="absolute w-full bg-white border shadow max-h-60 overflow-y-auto z-50">

                  {states.map((state) => (
                    <div
                      key={state.iso2}
                      className="px-3 py-2 hover:bg-sky-100 cursor-pointer"
                      onClick={() => {
                        setSelectedState(state);
                        setSelectedCity("");
                        setStateDropdownOpen(false);
                      }}
                    >
                      {state.name}
                    </div>
                  ))}

                </div>
              )}
            </div>

            {/* CITY */}
            <div ref={cityRef} className="relative">

              <div
                className="flex justify-between bg-white px-3 py-3 cursor-pointer"
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
              >
                <span className="text-sm font-semibold">
                  {selectedCity || "Select City"}
                </span>

                <ChevronDown size={18} />
              </div>

              {cityDropdownOpen && (
                <div className="absolute w-full bg-white border shadow max-h-60 overflow-y-auto">

                  {cities.map((city) => (
                    <div
                      key={city.id}
                      className="px-3 py-2 hover:bg-sky-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCity(city.name);
                        setCityDropdownOpen(false);
                      }}
                    >
                      {city.name}
                    </div>
                  ))}

                </div>
              )}
            </div>

            {/* MIN */}
            <div className="bg-white p-3">

              <div className="flex justify-between text-xs">
                <span>Min</span>
                <span>₹ {formatPrice(minBudget)}</span>
              </div>

              <input
                type="range"
                min={MIN_LIMIT}
                max={MAX_LIMIT}
                step="100000"
                value={minBudget}
                onChange={(e) => setMinBudget(Number(e.target.value))}
                className="w-full accent-sky-700"
              />
            </div>

            {/* MAX */}
            <div className="bg-white p-3">

              <div className="flex justify-between text-xs">
                <span>Max</span>
                <span>₹ {formatPrice(maxBudget)}</span>
              </div>

              <input
                type="range"
                min={MIN_LIMIT}
                max={MAX_LIMIT}
                step="100000"
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-sky-700"
              />
            </div>

            {/* SEARCH */}
            <button
              onClick={handleSearch}
              className="w-full bg-sky-700 text-white py-3 text-xs font-bold"
            >
              Search
            </button>

          </div>
        </div>
      </Container>
    </Section>
  );
}
