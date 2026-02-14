import React, { useState } from "react"
import Section from "../../../components/layout/Section"
import Container from "../../../components/layout/Container"
import { Search, MapPin, IndianRupee } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { states, citiesInWB, placesInWB } from "../../../data/locations"

export default function HomeFilter() {
  const navigate = useNavigate()

  const MIN_LIMIT = 1000000
  const MAX_LIMIT = 500000000

  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedPlace, setSelectedPlace] = useState("")
  const [minBudget, setMinBudget] = useState(MIN_LIMIT)
  const [maxBudget, setMaxBudget] = useState(MAX_LIMIT)

  const cities = selectedState === "West Bengal" ? citiesInWB : []
  const places = selectedCity ? placesInWB[selectedCity] || [] : []

  const formatPrice = (value) => {
    if (value >= 10000000) return (value / 10000000).toFixed(1) + " Cr"
    if (value >= 100000) return (value / 100000).toFixed(0) + " L"
    return value
  }

  const handleSearch = () => {
    navigate(
      `/buy?state=${selectedState}&city=${selectedCity}&place=${selectedPlace}&min=${minBudget}&max=${maxBudget}`
    )
  }

  return (
    <Section size="default" className="bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-6">
            <h2 className="text-sm lg:text-base font-black uppercase bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
              Search Property by{" "}
              <span className="text-sky-700">State, City & Budget</span>
            </h2>
          </div>

          {/* FILTER CARD */}
          <div className="bg-slate-100 p-4 shadow-xl space-y-3">
            {/* STATE */}
            <div className="flex items-center bg-white px-3 py-3">
              <MapPin size={18} className="text-sky-700 mr-2" />
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value)
                  setSelectedCity("")
                  setSelectedPlace("")
                }}
                className="w-full outline-none text-sm font-semibold bg-white"
              >
                <option value="">Select State</option>
                {states.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* CITY */}
            <div className="flex items-center bg-white px-3 py-3">
              <MapPin size={18} className="text-sky-700 mr-2" />
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value)
                  setSelectedPlace("")
                }}
                className="w-full outline-none text-sm font-semibold bg-white"
                disabled={!selectedState || cities.length === 0}
              >
                <option value="">Select City</option>
                {cities.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* PLACE */}
            <div className="flex items-center bg-white px-3 py-3">
              <MapPin size={18} className="text-sky-700 mr-2" />
              <select
                value={selectedPlace}
                onChange={(e) => setSelectedPlace(e.target.value)}
                className="w-full outline-none text-sm font-semibold bg-white"
                disabled={!selectedCity || places.length === 0}
              >
                <option value="">Select Place</option>
                {places.map((p, idx) => (
                  <option key={idx} value={p}>
                    {p}
                  </option>
                ))}
              </select>
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
                <IndianRupee size={18} className="text-sky-700" />
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
                className="w-full accent-sky-700"
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
                <IndianRupee size={18} className="text-sky-700" />
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
                className="w-full accent-sky-700"
              />
            </div>

            {/* SEARCH BUTTON */}
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
  )
}
