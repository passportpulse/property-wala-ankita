import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  Building2,
  Map,
  Handshake,
  Home,
  Briefcase,
  Factory,
  Warehouse,
  HeartPulse,
  Hotel,
  TrendingUp,
  Fuel,
  GraduationCap
} from "lucide-react";

export default function HomeHero() {
  const navigate = useNavigate();
  const marqueeRef = useRef(null);

  const [selected, setSelected] = useState("");
  const [mode, setMode] = useState("find");
  const [isPaused, setIsPaused] = useState(false);

  /* PROPERTY TYPES WITH ICON */
  const findOptions = [
    { name: "Flats", icon: Building2 },
    { name: "Plots", icon: Map },
    { name: "Joint Ventures", icon: Handshake },
    { name: "House/Duplex", icon: Home },
    { name: "Office/Retail", icon: Briefcase },
    { name: "Factory", icon: Factory },
    { name: "Industrial Plots", icon: Map },
    { name: "Ware House", icon: Warehouse },
    { name: "Hospital", icon: HeartPulse },
    { name: "Hotels/Resort", icon: Hotel },
    { name: "Petrol Pump", icon: Fuel },
    { name: "Institutes", icon: GraduationCap },
    { name: "Investment", icon: TrendingUp },
  ];

  /* duplicate for infinite scroll */
  const propertyTypes = [...findOptions, ...findOptions];

  const handleOptionClick = (option) => {
    const sectionId = option.toLowerCase().replace(/\s+|\/+/g, "-");

    if (mode === "find") {
      navigate(`/buy#${sectionId}`);

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      navigate(`/rent`);
    }
  };

  /* AUTO SCROLL */
  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    let animationFrame;
    const speed = 0.6;

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <Section size="small" className="bg-white font-poppins">
      <Container>
        <div className="text-center flex flex-col items-center">
          {/* HEADING */}
          <div className="mb-3 mt-2">
            <h1 className="text-xs lg:text-sm font-black uppercase">
              <span className="text-sky-700">One Stop Solution</span>

              <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
                {" "}
                Listings to Aesthetic Living
              </span>
            </h1>
          </div>

          {/* MARQUEE */}
          <div className="w-full mb-6">
            <div
              ref={marqueeRef}
              className="
                flex gap-4
                overflow-x-auto
                no-scrollbar
                scroll-smooth
                whitespace-nowrap
                py-2
                cursor-grab
                active:cursor-grabbing
              "
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {propertyTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSelected(item.name);
                      handleOptionClick(item.name);
                    }}
                    className={`
    min-w-[160px]
    h-[85px]

    rounded-xl

    bg-linear-to-br from-sky-700 via-sky-600 to-sky-700
    text-white

    hover:from-sky-600 hover:via-sky-500 hover:to-sky-600

    text-sm
    font-black
    uppercase
    tracking-widest

    shadow-md
    hover:shadow-xl

    hover:-translate-y-0.5
    hover:scale-[1.03]

    active:scale-95

    transition-all duration-300 ease-out

    flex-shrink-0
    flex flex-col
    items-center
    justify-center
    gap-2

    border border-sky-400

    ${
      selected === item.name
        ? "bg-gradient-to-br from-sky-800 via-sky-700 to-sky-800 border-sky-800 shadow-lg scale-[1.05]"
        : ""
    }
  `}
                  >
                    {/* ICON */}
                    <Icon
                      size={24}
                      strokeWidth={2.2}
                      className={`${
                        selected === item.name ? "text-white" : "text-sky-100"
                      }`}
                    />

                    {/* TEXT */}
                    <span
                      className={`${
                        selected === item.name ? "text-white" : "text-sky-50"
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SEARCH CARD */}
          <div className="w-full max-w-xl relative z-10">
            <div className="mt-4 flex gap-3">
              {/* LOGIN | BUY */}
              <div className="flex-1 bg-slate-100 p-1.5 rounded-2xl shadow-xl">
                <div className="flex w-full">
                  {/* LOGIN - LEFT (1/3) */}
                  <button
                    onClick={() => navigate("/login")}
                    className="
          w-2/3 py-4
          rounded-l-xl
          font-black uppercase
          tracking-widest text-[11px]
          bg-slate-200
          text-sky-700
          hover:bg-slate-300
          transition
        "
                  >
                    Login to
                  </button>

                  {/* BUY - RIGHT (2/3) */}
                  <button
                    onClick={() => navigate("/buy")}
                    className="
          w-1/3 py-4
          rounded-r-xl
          font-black uppercase
          tracking-widest text-[11px]

          bg-sky-700
          text-white

          flex items-center justify-center gap-2
          hover:bg-sky-800
          transition
        "
                  >
                    Buy
                  </button>
                </div>
              </div>

              {/* LOGIN | RENT */}
              <div className="flex-1 bg-slate-100 p-1.5 rounded-2xl shadow-xl">
                <div className="flex w-full">
                  {/* LOGIN - LEFT (1/3) */}
                  <button
                    onClick={() => navigate("/login")}
                    className="
          w-2/3 py-4
          rounded-l-xl
          font-black uppercase
          tracking-widest text-[11px]
          bg-slate-200
          text-sky-700
          hover:bg-slate-300
          transition
        "
                  >
                    Login to
                  </button>

                  {/* RENT - RIGHT (2/3) */}
                  <button
                    onClick={() => navigate("/rent")}
                    className="
          w-1/3 py-4
          rounded-r-xl
          font-black uppercase
          tracking-widest text-[11px]

          bg-sky-700
          text-white

          flex items-center justify-center gap-2
          hover:opacity-90
          transition
        "
                  >
                    Rent
                  </button>
                </div>
              </div>
            </div>

            {/* SELL */}
            <div className="mt-4 bg-slate-100 p-1.5 rounded-2xl shadow-xl">
              <div className="flex w-full">
                <button
                  onClick={() => navigate("/sell")}
                  className="
                    w-1/3 py-4
                    rounded-l-xl
                    font-black uppercase
                    tracking-widest text-[11px]
                    bg-slate-200 text-coral-red
                  "
                >
                  Sell
                </button>

                <button
                  onClick={() => navigate("/sell")}
                  className="
                    w-2/3 py-4
                    rounded-r-xl
                    font-black uppercase
                    tracking-widest text-[10px]

                    bg-linear-to-r
                    from-coral-red
                    via-soft-orange
                    to-peach-glow

                    text-white

                    flex items-center justify-center gap-2
                  "
                >
                  Post Your Property Free
                  <Search size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
