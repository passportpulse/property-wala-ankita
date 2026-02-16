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
    const speed = 1;

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
            <h1 className="text-[10px] lg:text-sm font-black uppercase">
              <span className="text-teal-700">One Stop Solution</span>

              <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
                {" "}
                Investment to Aesthetic Living
              </span>
            </h1>
          </div>

          {/* MARQUEE */}
          {/* MARQUEE - 99acres Style */}
          <div className="w-full mt-4">
            <div
              ref={marqueeRef}
              className="
      flex gap-8
      overflow-x-auto no-scrollbar
      scroll-smooth
      py-3
      items-center
    "
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {propertyTypes.map((item, index) => {
                const Icon = item.icon;
                const isActive = selected === item.name;

                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSelected(item.name);
                      handleOptionClick(item.name);
                    }}
                    className="
            flex-shrink-0
            flex flex-col items-center
            gap-2
            min-w-[70px]
            transition-all duration-200
          "
                  >
                    {/* Blue Icon */}
                    <Icon
                      size={26}
                      strokeWidth={2.2}
                      className={`
              transition-all duration-200
              ${isActive ? "text-teal-700 scale-110" : "text-teal-600"}
            `}
                    />

                    {/* Text Below */}
                    <span
                      className={`
              text-[11px]
              font-medium
              text-center
              leading-tight
              ${isActive ? "text-teal-700 font-semibold" : "text-slate-600"}
            `}
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
            {/* BUY + RENT */}
            <div className="flex w-full h-14 bg-slate-100 p-1 shadow-xl">
              {/* Login To Label */}
              <div
                className="
      flex-1
      flex items-center justify-center
      font-black uppercase tracking-widest text-[11px]
      bg-slate-200 text-teal-700
    "
              >
                <span className="font-extrabold text-coral-red mr-1">
                  Login
                </span>
                To Start
              </div>

              {/* Buy + Rent wrapper with gap */}
              <div className="flex gap-1">
                {/* Buy */}
                <button
                  onClick={() => navigate("/login")}
                  className="
         w-[70px]
        h-full
        font-black uppercase tracking-widest text-[11px]
        bg-teal-700 text-white
        hover:bg-teal-800 transition
      "
                >
                  Buy
                </button>

                {/* Rent */}
                <button
                  onClick={() => navigate("/login")}
                  className="
        w-[70px]
        h-full
        font-black uppercase tracking-widest text-[11px]
        bg-teal-700 text-white
        hover:bg-teal-800 transition
      "
                >
                  Rent
                </button>
              </div>
            </div>

            {/* SELL */}
            <div className="mt-4 bg-slate-100 p-1 shadow-xl">
              <div className="flex w-full h-14">
                {/* Sell label */}
                <button
                  onClick={() => navigate("/sell")}
                  className="
          w-[70px]
          h-full
          flex-shrink-0
          font-black uppercase tracking-widest text-[11px]
          bg-teal-700 text-white
          hover:bg-teal-800 transition
        "
                >
                  Sell
                </button>

                {/* Main Sell Button */}
                <button
                  onClick={() => navigate("/sell")}
                  className="
          flex-1
          h-full
          bg-slate-200 text-teal-700
          hover:bg-slate-300 transition
          relative
          font-black uppercase tracking-widest text-[11px]
        "
                >
                  {/* Perfect Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center gap-2">
                    Post Your Property
                    <span className="text-[15px] font-extrabold text-coral-red">
                      FREE
                    </span>
                    <Search size={16} strokeWidth={2.5} />
                  </div>

                  {/* Bottom Content */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[7px] font-semibold text-coral-red">
                    Get unlimited enquiries
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
