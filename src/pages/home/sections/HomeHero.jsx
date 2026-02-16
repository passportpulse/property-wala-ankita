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

  /* DRAG SUPPORT */
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

        <div className="flex flex-col items-center w-full">

          {/* HEADING */}
          <div className="text-center mb-3 mt-2">
            <h1 className="text-[10px] lg:text-sm font-black uppercase">

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
          <div className="w-full max-w-5xl">

            <div
              ref={marqueeRef}
              className="
                flex gap-10
                overflow-x-auto no-scrollbar
                py-4
                cursor-grab
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
                      min-w-[80px]
                      transition-all duration-200
                    "
                  >
                    <Icon
                      size={26}
                      strokeWidth={2.2}
                      className={`
                        transition-all duration-200
                        ${
                          isActive
                            ? "text-sky-700 scale-110"
                            : "text-sky-600"
                        }
                      `}
                    />

                    <span
                      className={`
                        text-[11px]
                        text-center
                        leading-tight
                        ${
                          isActive
                            ? "text-sky-700 font-semibold"
                            : "text-slate-600"
                        }
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
          <div className="w-full max-w-xl mt-4 relative z-10">

            {/* BUY RENT */}
            <div className="flex w-full h-14 bg-slate-100 p-1 shadow-xl">

              <div className="
                flex-1 flex items-center justify-center
                font-black uppercase tracking-widest text-[11px]
                bg-slate-200 text-sky-700
              ">
                <span className="text-coral-red mr-1">Login</span>
                To Start
              </div>

              <div className="flex gap-1">

                <button
                  onClick={() => navigate("/login")}
                  className="
                    w-[80px]
                    h-full
                    font-black uppercase tracking-widest text-[11px]
                    bg-sky-700 text-white
                    hover:bg-sky-800 transition
                  "
                >
                  Buy
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="
                    w-[80px]
                    h-full
                    font-black uppercase tracking-widest text-[11px]
                    bg-sky-700 text-white
                    hover:bg-sky-800 transition
                  "
                >
                  Rent
                </button>

              </div>

            </div>


            {/* SELL */}
            <div className="mt-4 bg-slate-100 p-1 shadow-xl">

              <div className="flex w-full h-14">

                <button
                  onClick={() => navigate("/sell")}
                  className="
                    w-[80px]
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
                    relative
                    bg-slate-200 text-sky-700
                    hover:bg-slate-300 transition
                    font-black uppercase tracking-widest text-[11px]
                  "
                >

                  <div className="absolute inset-0 flex items-center justify-center gap-2">

                    Post Your Property

                    <span className="text-coral-red text-[15px] font-extrabold">
                      FREE
                    </span>

                    <Search size={16} strokeWidth={2.5} />

                  </div>


                  <span className="
                    absolute bottom-1 left-1/2 -translate-x-1/2
                    text-[7px] font-semibold text-coral-red
                  ">
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
