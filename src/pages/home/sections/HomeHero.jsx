import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";

export default function HomeHero() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("What are you looking for?");
  const [mode, setMode] = useState("find"); // find | sell

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

  const sellOptions = [...findOptions];

  const handleOptionClick = (option) => {
    console.log("CTA clicked with option:", option);
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
      navigate(`/sell?type=${sectionId}`);
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center bg-white font-poppins">
      {/* Background Image */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full z-0">
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/60 to-transparent hidden lg:block z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/95 to-white/40 lg:hidden z-10" />
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
          alt="Modern Real Estate"
          className="w-full h-full object-cover transition duration-700"
        />
        <div className="absolute inset-0 bg-coral-red/5 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 py-12 lg:py-0">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter text-dark-slate">
                Property <br />
                <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
                  Wala Bhaiya
                </span>
              </h1>

              <h2 className="text-xl lg:text-2xl font-bold text-slate-800">
                Leading Property Dealer in Durgapur
              </h2>

              <p className="text-slate-600 max-w-md text-lg">
                Buy, sell & rent luxury homes, premium lands and commercial
                spaces with complete transparency.
              </p>
            </div>

            {/* Search Card */}
            <div className="max-w-xl relative z-50">
              {/* Mode Toggle */}
              <div className="flex bg-white/80 lg:bg-slate-100 p-1 rounded-xl shadow mb-3">
                <button
                  onClick={() => setMode("find")}
                  className={` cursor-pointer flex-1 py-3 rounded-lg text-[11px] font-black uppercase tracking-widest transition ${
                    mode === "find"
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:text-dark-slate"
                  }`}
                >
                  Find Property
                </button>

                <button
                  onClick={() => setMode("sell")}
                  className={`cursor-pointer flex-1 py-3 rounded-lg text-[11px] font-black uppercase tracking-widest transition ${
                    mode === "sell"
                      ? "bg-coral-red text-white"
                      : "text-slate-500 hover:text-dark-slate"
                  }`}
                >
                  Sell Property
                </button>
              </div>

              {/* Dropdown + CTA */}
              <div className="flex flex-col sm:flex-row bg-white/80 lg:bg-slate-100 p-1.5 rounded-2xl shadow-xl backdrop-blur">
                {/* Dropdown */}
                <div className="relative flex-1">
                  <button
                    onClick={() => setIsOpen((prev) => !prev)}
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
                      {/* Overlay */}
                      <div
                        className="fixed inset-0 z-30"
                        onClick={() => setIsOpen(false)}
                      />
                      {/* Dropdown Options */}
                      <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-2xl py-3 z-40 animate-in fade-in zoom-in-95">
                        {(mode === "find" ? findOptions : sellOptions).map(
                          (option) => (
                            <button
                              key={option}
                              onClick={() => {
                                console.log("Dropdown option clicked:", option);
                                setSelected(option); // update selected
                                setIsOpen(false);
                              }}
                              className="w-full text-left px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:bg-slate-50 hover:text-coral-red"
                            >
                              {option}
                            </button>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleOptionClick(selected)}
                  disabled={selected === "What are you looking for?"}
                  className={`cursor-pointer px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 transition active:scale-95 ${
                    selected === "What are you looking for?"
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : mode === "find"
                      ? "bg-slate-900 text-white hover:bg-coral-red"
                      : "bg-coral-red text-white hover:bg-slate-900"
                  }`}
                >
                  <Search size={16} />
                  {mode === "find" ? "Find Property" : "Post Property"}
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}