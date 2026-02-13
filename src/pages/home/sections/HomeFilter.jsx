import React, { useState } from "react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { Search, MapPin, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeFilter() {
  const navigate = useNavigate();

  const cities = [
    "Kolkata",
    "Durgapur",
    "Asansol",
    "Siliguri",
    "Howrah",
    "Bardhaman",
    "Kharagpur",
    "Haldia",
    "Malda",
    "Darjeeling",
    "Bankura",
    "Purulia",
    "Krishnanagar",
    "Barrackpore",
    "Midnapore",
  ];

  const MIN_LIMIT = 1000000;
  const MAX_LIMIT = 500000000;

  const [city, setCity] = useState("");
  const [minBudget, setMinBudget] = useState(MIN_LIMIT);
  const [maxBudget, setMaxBudget] = useState(MAX_LIMIT);

  const formatPrice = (value) => {
    if (value >= 10000000) return (value / 10000000).toFixed(1) + " Cr";
    if (value >= 100000) return (value / 100000).toFixed(0) + " L";
    return value;
  };

  const handleSearch = () => {
    navigate(`/buy?city=${city}&min=${minBudget}&max=${maxBudget}`);
  };

  return (
    <Section size="default" className="bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-6">
            <h2 className="text-sm lg:text-base font-black uppercase">
              Find Property by{" "}
              <span className="text-sky-700">City & Budget</span>
            </h2>
          </div>

          {/* FILTER CARD */}
          <div className="bg-slate-100 p-4 shadow-xl">

            {/* ===== DESKTOP ===== */}
            <div className="hidden lg:block space-y-3">

              {/* CITY */}
              <div className="flex items-center bg-white px-3 py-3">
                <MapPin size={18} className="text-sky-700 mr-2" />

                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full outline-none text-sm font-semibold bg-white"
                >
                  <option value="">Select City</option>

                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* MIN */}
              <div className="flex items-center bg-white px-3 py-3">
                <span className="text-xs font-black uppercase text-slate-500 mr-3">
                  Min
                </span>

                <IndianRupee size={18} className="text-sky-700 mr-2" />

                <input
                  type="number"
                  value={minBudget}
                  min={MIN_LIMIT}
                  max={maxBudget}
                  onChange={(e) =>
                    setMinBudget(Number(e.target.value))
                  }
                  className="w-full outline-none text-sm font-semibold"
                />
              </div>

              {/* MAX */}
              <div className="flex items-center bg-white px-3 py-3">
                <span className="text-xs font-black uppercase text-slate-500 mr-3">
                  Max
                </span>

                <IndianRupee size={18} className="text-sky-700 mr-2" />

                <input
                  type="number"
                  value={maxBudget}
                  min={minBudget}
                  max={MAX_LIMIT}
                  onChange={(e) =>
                    setMaxBudget(Number(e.target.value))
                  }
                  className="w-full outline-none text-sm font-semibold"
                />
              </div>

            </div>

            {/* ===== MOBILE ===== */}
            <div className="grid grid-cols-1 gap-3 lg:hidden">

              {/* CITY */}
              <div className="flex items-center bg-white px-3 py-3">
                <MapPin size={18} className="text-sky-700 mr-2" />

                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full outline-none text-sm font-semibold"
                >
                  <option value="">Select City</option>

                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* MIN */}
              <div className="flex items-center bg-white px-3 py-3">
                <span className="text-xs font-black uppercase text-slate-500 mr-3">
                  Min
                </span>

                <IndianRupee size={18} className="text-sky-700 mr-2" />

                <input
                  type="number"
                  value={minBudget}
                  min={MIN_LIMIT}
                  max={maxBudget}
                  onChange={(e) =>
                    setMinBudget(Number(e.target.value))
                  }
                  className="w-full outline-none text-sm font-semibold"
                />
              </div>

              {/* MAX */}
              <div className="flex items-center bg-white px-3 py-3">
                <span className="text-xs font-black uppercase text-slate-500 mr-3">
                  Max
                </span>

                <IndianRupee size={18} className="text-sky-700 mr-2" />

                <input
                  type="number"
                  value={maxBudget}
                  min={minBudget}
                  max={MAX_LIMIT}
                  onChange={(e) =>
                    setMaxBudget(Number(e.target.value))
                  }
                  className="w-full outline-none text-sm font-semibold"
                />
              </div>

            </div>

            {/* SLIDER */}
            <div className="mt-6">
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
                <span>₹ {formatPrice(minBudget)}</span>
                <span>₹ {formatPrice(maxBudget)}</span>
              </div>

              <input
                type="range"
                min={MIN_LIMIT}
                max={MAX_LIMIT}
                step="100000"
                value={minBudget}
                onChange={(e) =>
                  setMinBudget(Number(e.target.value))
                }
                className="w-full accent-sky-700 mb-2"
              />

              <input
                type="range"
                min={MIN_LIMIT}
                max={MAX_LIMIT}
                step="100000"
                value={maxBudget}
                onChange={(e) =>
                  setMaxBudget(Number(e.target.value))
                }
                className="w-full accent-sky-700"
              />
            </div>

            {/* SEARCH BUTTON — ALWAYS LAST */}
            <button
              onClick={handleSearch}
              className="
                w-full
                bg-sky-700
                text-white
                font-black uppercase tracking-widest
                text-xs
                flex items-center justify-center gap-2
                py-3
                mt-4
                hover:bg-sky-800
                transition
              "
            >
              <Search size={18} />
              Search
            </button>

          </div>

        </div>
      </Container>
    </Section>
  );
}
