import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { useEffect, useRef, useState, useCallback } from "react";
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

  /* =========================
     MARQUEE STATE + REFS
  ========================= */

  const marqueeRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const [isPaused, setIsPaused] = useState(false);

  /* =========================
     PROPERTY TYPES
  ========================= */

  const propertyTypes = [
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

  // duplicate for infinite scroll
  const marqueeItems = [...propertyTypes, ...propertyTypes];

  /* =========================
     NAVIGATION
  ========================= */

  const handlePropertyClick = useCallback(
    (name) => {
      const id = name.toLowerCase().replace(/\s+|\/+/g, "-");

      navigate(`/buy#${id}`);

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    [navigate],
  );

  /* =========================
     AUTO SCROLL
  ========================= */

  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    let frame;
    const speed = 0.7;

    const animate = () => {
      if (!isPaused && !dragState.current.isDragging) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  /* =========================
     DRAG SUPPORT
  ========================= */

  const handleMouseDown = (e) => {
    const container = marqueeRef.current;

    dragState.current = {
      isDragging: true,
      startX: e.pageX - container.offsetLeft,
      scrollLeft: container.scrollLeft,
    };

    container.classList.add("cursor-grabbing");
    setIsPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!dragState.current.isDragging) return;

    e.preventDefault();

    const container = marqueeRef.current;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.2;

    container.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const stopDragging = () => {
    dragState.current.isDragging = false;
    marqueeRef.current.classList.remove("cursor-grabbing");
    setIsPaused(false);
  };

  /* =========================
     COMPONENT
  ========================= */

  return (
    <Section className="bg-white font-poppins">
      <Container>
        <div className="flex flex-col items-center">
          {/* HEADING */}
          <h1 className="text-[10px] lg:text-sm font-black uppercase mt-2 mb-3 text-center">
            <span className="text-orange-700">One Stop Solution</span>

            <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
              {" "}
              Investment to Aesthetic Living
            </span>
          </h1>

          {/* MARQUEE */}
          <div className="w-full max-w-5xl">
            <div
              ref={marqueeRef}
              className="flex gap-10 overflow-x-auto no-scrollbar py-4 cursor-grab"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {marqueeItems.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <button
                    key={`${item.name}-${index}`}
                    onClick={() => handlePropertyClick(item.name)}
                    className="flex-shrink-0 flex flex-col items-center gap-2 min-w-[80px] group"
                  >
                    <IconComponent
                      size={26}
                      strokeWidth={2.2}
                      className="
          text-orange-600
          group-hover:text-orange-700
          group-hover:scale-110
          transition-all duration-200
        "
                    />

                    <span
                      className="
        text-[11px]
        text-slate-600
        text-center
        leading-tight
        group-hover:text-orange-700
        font-medium
      "
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SEARCH CARD */}
          <div className="w-full max-w-xl mt-4">
            {/* BUY RENT */}
            <div className="flex h-14 bg-slate-100 p-1 shadow-xl">
              <div className="flex-1 flex items-center justify-center font-black uppercase text-[11px] bg-slate-200 text-orange-700">
                <span className="text-coral-red mr-1">Login</span>
                To Start
              </div>

              <div className="flex gap-1">
                {["Buy", "Rent"].map((type) => (
                  <button
                    key={type}
                    onClick={() => navigate("/login")}
                    className="
                      w-[80px]
                      font-black uppercase text-[11px]
                      bg-orange-700 text-white
                      hover:bg-orange-800 transition
                    "
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* SELL */}
            <div className="mt-4 bg-slate-100 p-1 shadow-xl">
              <div className="flex h-14">
                <button
                  onClick={() => navigate("/sell")}
                  className="w-[80px] font-black uppercase text-[11px] bg-orange-700 text-white hover:bg-orange-800"
                >
                  Sell
                </button>

                <button
                  onClick={() => navigate("/sell")}
                  className="flex-1 relative bg-slate-200 hover:bg-slate-300 font-black uppercase text-[11px]"
                >
                  <div className="absolute inset-0 flex items-center justify-center gap-2 text-orange-700">
                    Post Your Property
                    <span
                      className="
                      text-[15px]
                      font-extrabold
                      bg-gradient-to-r from-green-700 via-green-600 to-green-500
                      bg-[length:200%_100%]
                      bg-clip-text
                      text-transparent
                      animate-[shine_2s_linear_infinite]
                    "
                    >
                      FREE
                    </span>
                    <Search size={16} strokeWidth={2.5} />
                  </div>

                  <span
                    className="
                    absolute bottom-1 left-1/2 -translate-x-1/2
                    text-[7px] font-semibold text-coral-red
                  "
                  >
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
