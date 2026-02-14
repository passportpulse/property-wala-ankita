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
  GraduationCap,
} from "lucide-react";

export default function HomeHero() {
  const navigate = useNavigate();

  /* MARQUEE REFS */
  const marqueeRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [selected, setSelected] = useState("");
  const [mode, setMode] = useState("find");
  const [isPaused, setIsPaused] = useState(false);

  /* PROPERTY TYPES */
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

  /* Duplicate for infinite scroll */
  const propertyTypes = [...findOptions, ...findOptions];

  /* CLICK NAVIGATION */
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
      if (!isPaused && !isDragging.current) {
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

  /* DESKTOP DRAG SUPPORT */
  const handleMouseDown = (e) => {
    isDragging.current = true;
    marqueeRef.current.classList.add("cursor-grabbing");

    startX.current = e.pageX - marqueeRef.current.offsetLeft;
    scrollLeft.current = marqueeRef.current.scrollLeft;

    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    marqueeRef.current.classList.remove("cursor-grabbing");
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    marqueeRef.current.classList.remove("cursor-grabbing");
    setIsPaused(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();

    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;

    marqueeRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <Section size="small" className="bg-white font-poppins">
      <Container>
        <div className="text-center flex flex-col items-center">

          {/* HEADING */}
          <div className="mb-3 mt-2">
            <h1 className="text-xs lg:text-sm font-black uppercase">
              <span className="text-sky-700">
                One Stop Solution
              </span>

              <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
                {" "}
                Investment to Aesthetic Living
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
                select-none
              "
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              onMouseEnter={() => setIsPaused(true)}
            >
              {propertyTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                   <div className="flex-1 bg-slate-100 p-1.5 shadow-lg">
                  <button
                    key={index}
                    onClick={() => {
                      setSelected(item.name);
                      handleOptionClick(item.name);
                    }}
                    className={`
                      min-w-[160px]
                      h-[85px]

                      bg-linear-to-br from-sky-700 via-sky-600 to-sky-700
                      text-white cursor-pointer

                      hover:from-sky-600 hover:via-sky-500 hover:to-sky-600

                      text-sm
                      font-black
                      uppercase
                      tracking-widest

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
                    <Icon
                      size={24}
                      strokeWidth={2.2}
                      className="text-sky-100"
                    />

                    <span>{item.name}</span>

                  </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SEARCH CARD */}
          <div className="w-full max-w-xl relative z-10">

            {/* BUY + RENT */}
            <div className="mt-4 flex gap-3">

              {/* BUY */}
              <div className="flex-1 bg-slate-100 p-1.5 shadow-xl">
                <div className="flex w-full">

                  <button
                    onClick={() => navigate("/login")}
                    className="
                      flex-1
                      py-4
                      font-black uppercase tracking-widest text-[11px]
                      bg-slate-200 text-sky-700
                      hover:bg-slate-300 transition
                    "
                  >
                    Login
                  </button>

                  <button
                    onClick={() => navigate("/buy")}
                    className="
                      w-[70px]
                      flex-shrink-0
                      py-4
                      font-black uppercase tracking-widest text-[11px]
                      bg-sky-700 text-white
                      hover:bg-sky-800 transition
                    "
                  >
                    Buy
                  </button>

                </div>
              </div>

              {/* RENT */}
              <div className="flex-1 bg-slate-100 p-1.5 shadow-xl">
                <div className="flex w-full">

                  <button
                    onClick={() => navigate("/login")}
                    className="
                      flex-1
                      py-4
                      font-black uppercase tracking-widest text-[11px]
                      bg-slate-200 text-sky-700
                      hover:bg-slate-300 transition
                    "
                  >
                    Login
                  </button>

                  <button
                    onClick={() => navigate("/rent")}
                    className="
                      w-[70px]
                      flex-shrink-0
                      py-4
                      font-black uppercase tracking-widest text-[11px]
                      bg-sky-700 text-white
                      hover:bg-sky-800 transition
                    "
                  >
                    Rent
                  </button>

                </div>
              </div>

            </div>

            {/* SELL */}
            <div className="mt-4 bg-slate-100 p-1.5 shadow-xl">
              <div className="flex w-full">

                <button
                  onClick={() => navigate("/sell")}
                  className="
                    w-[70px]
                    flex-shrink-0
                    py-4
                    font-black uppercase tracking-widest text-[11px]
                    bg-sky-700 text-white
                    hover:bg-sky-800 transition
                  "
                >
                  Sell
                </button>

                <button
                  onClick={() => navigate("/sell")}
                  className="
                    flex-1
                    py-4
                    font-black uppercase tracking-widest text-[11px]
                    bg-slate-200 text-sky-700
                    flex items-center justify-center gap-2
                    hover:bg-slate-300 transition
                  "
                >
                  Post Your Property
                  <span className="text-[15px] font-extrabold">FREE</span>
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
