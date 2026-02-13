import Container from "../../../components/layout/Container";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";

export default function HomeHero() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("What are you looking for?");
  const [mode, setMode] = useState("find");

  useEffect(() => {
    const closeDropdown = () => setIsOpen(false);
    window.addEventListener("scroll", closeDropdown);
    return () => window.removeEventListener("scroll", closeDropdown);
  }, []);

  const findOptions = [
    "Flats",
    "Plots",
    "House/Duplex",
    "Commercial Space",
    "Factory",
    "Industrial Plots",
    "Ware House",
    "Hospital",
    "Hotels/Resort",
    "Investment",
  ];

  const rentOptions = [...findOptions];

  const handleOptionClick = (option) => {
    const sectionId = option.toLowerCase().replace(/\s+|\/+/g, "-");

    if (mode === "find") {
      navigate(`/buy#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      navigate(`/rent`);
    }
  };

  return (
    <section className="w-full mt-10 flex items-center justify-center bg-white font-poppins px-6">
      <div className="max-w-3xl w-full text-center flex flex-col items-center justify-center">

        {/* Heading */}
        <div className="mb-8 mt-4">
          <h1 className="text-md lg:text-lg font-black text-lime-700 leading-tight tracking-wider text-dark-slate uppercase">
            One Way Solution
            <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent tracking-wider">
              {" "}Listings to Living
            </span>
          </h1>
        </div>

        {/* Search Card */}
        <div className="w-full max-w-xl relative z-10">

          {/* Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-xl shadow mb-3">
            <button
              onClick={() => setMode("find")}
              className={`flex-1 py-3 rounded-lg text-[11px] font-black uppercase tracking-widest transition ${
                mode === "find"
                  ? "bg-lime-700 text-white"
                  : "text-slate-500 hover:text-dark-slate"
              }`}
            >
              Buy
            </button>

            <button
              onClick={() => setMode("rent")}
              className={`flex-1 py-3 rounded-lg text-[11px] font-black uppercase tracking-widest transition ${
                mode === "rent"
                  ? "bg-coral-red text-white"
                  : "text-slate-500 hover:text-dark-slate"
              }`}
            >
              Rent
            </button>
          </div>

          {/* Dropdown + CTA */}
          <div className="flex flex-col sm:flex-row bg-slate-100 p-1.5 rounded-2xl shadow-xl">

            {/* Dropdown */}
            <div className="relative flex-1">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-4"
              >
                <span className="text-sm font-bold uppercase tracking-wider text-dark-slate">
                  {selected}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    isOpen ? "rotate-180 text-coral-red" : "text-slate-400"
                  }`}
                />
              </button>

              {isOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsOpen(false)}
                  />

                  <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-2xl py-3 z-40">
                    {(mode === "find" ? findOptions : rentOptions).map(
                      (option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                          }}
                          className="w-full text-left px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:bg-slate-50 hover:text-coral-red"
                        >
                          {option}
                        </button>
                      ),
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Find Button */}
            <button
              onClick={() => handleOptionClick(selected)}
              disabled={selected === "What are you looking for?"}
              className={`px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition active:scale-95 ${
                selected === "What are you looking for?"
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-lime-400 text-white hover:bg-coral-red"
              }`}
            >
              <Search size={16} />
              Find Property
            </button>

          </div>

          {/* SELL SECTION — SAME DESIGN FOR DESKTOP + MOBILE */}
          <div className="mt-4 bg-slate-100 p-1.5 rounded-2xl shadow-xl">

            <div className="flex w-full">

              {/* Sell */}
              <button
                onClick={() => navigate("/sell")}
                className="w-1/3 py-4 rounded-l-xl font-black uppercase tracking-widest text-[10px] 
                bg-slate-200 text-coral-red flex items-center justify-center 
                hover:bg-slate-300 transition"
              >
                Sell
              </button>

              {/* Post Property Free */}
              <button
                onClick={() => navigate("/sell")}
                className="w-2/3 py-4 rounded-r-xl font-black uppercase tracking-widest text-[10px]
                bg-linear-to-r from-coral-red via-soft-orange to-peach-glow
                text-white flex items-center justify-center gap-2
                hover:brightness-110 transition"
              >
                <span>Post Your Property Free</span>
                <Search size={16} strokeWidth={2.5} />
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
