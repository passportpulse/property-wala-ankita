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
    { name: "Commercial Space", icon: Briefcase },
    { name: "Factory", icon: Factory },
    { name: "Industrial Plots", icon: Map },
    { name: "Ware House", icon: Warehouse },
    { name: "Hospital", icon: HeartPulse },
    { name: "Hotels/Resort", icon: Hotel },
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
              <span className="text-lime-700">One Stop Solution</span>

              <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
                {" "}Listings to Aesthetic Living
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
                      min-w-[170px]
                      h-[80px]

                      bg-coral-red
                      text-orange-50

                      text-[10px]
                      font-black
                      uppercase
                      tracking-widest

                      shadow-md

                      hover:bg-orange-600
                      hover:scale-105

                      active:scale-95

                      transition-all duration-300

                      flex-shrink-0

                      flex flex-col
                      items-center
                      justify-center
                      gap-2

                      ${
                        selected === item.name
                          ? "bg-orange-600 scale-105"
                          : ""
                      }
                    `}
                  >
                    {/* ICON */}
                    <Icon size={22} strokeWidth={2.5} />

                    {/* TEXT */}
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SEARCH CARD */}
          <div className="w-full max-w-xl relative z-10">

            {/* TOGGLE */}
            <div className="flex bg-slate-100 p-1 rounded-xl shadow mb-3">

              <button
                onClick={() => setMode("find")}
                className={`
                  flex-1 py-3 rounded-lg
                  text-[11px]
                  font-black uppercase tracking-widest
                  transition
                  ${
                    mode === "find"
                      ? "bg-lime-700 text-white"
                      : "text-slate-500"
                  }
                `}
              >
                Buy
              </button>

              <button
                onClick={() => setMode("rent")}
                className={`
                  flex-1 py-3 rounded-lg
                  text-[11px]
                  font-black uppercase tracking-widest
                  transition
                  ${
                    mode === "rent"
                      ? "bg-coral-red text-white"
                      : "text-slate-500"
                  }
                `}
              >
                Rent
              </button>

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
                    tracking-widest text-[10px]
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
