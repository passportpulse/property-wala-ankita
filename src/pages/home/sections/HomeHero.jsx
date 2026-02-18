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

  const marqueeItems = [...propertyTypes, ...propertyTypes, ...propertyTypes]; // Triple for smoother infinite loop

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
      ROBUST AUTO SCROLL
  ========================= */
  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    let frame;
    const speed = 0.8;

    const animate = () => {
      // Only scroll if NOT paused AND NOT dragging
      if (!isPaused && !dragState.current.isDragging) {
        container.scrollLeft += speed;

        // Reset to middle for infinite effect
        if (container.scrollLeft >= container.scrollWidth / 1.5) {
          container.scrollLeft =
            container.scrollLeft - container.scrollWidth / 3;
        }
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <Section className="relative bg-linear-to-b from-orange-50 via-white to-white font-poppins overflow-hidden">
      {/* =========================
          PROFESSIONAL DOT GRID (Top Area Only)
      ========================= */}
      <div className="hidden md:block absolute inset-0 bottom-1/3 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: `radial-gradient(#df6a15 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          {/* HEADING */}
          <div className="text-center px-2">
            <p className="text-[10px] lg:text-sm font-bold uppercase tracking-widest text-coral-red">
              One Stop Solution
            </p>
            <h1 className="text-lg lg:text-3xl font-black leading-tight mt-1 lg:mt-4">
              <span className="text-slate-800">Investment to </span>
              <span className="bg-linear-to-r from-coral-red via-soft-orange-500 to-warm-yellow bg-clip-text text-transparent">
                Aesthetic Living
              </span>
            </h1>
          </div>

          {/* SEARCH CARD */}
          <div className="w-full lg:w-1/2 mt-4">
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 text-center">
                <span className="text-xs lg:text-sm font-semibold text-slate-600">
                  Login to unlock full property access
                </span>
              </div>
              <div className="flex">
                {["Buy", "Rent"].map((type) => (
                  <button
                    key={type}
                    onClick={() => navigate("/login")}
                    className="flex-1 py-3 font-bold text-xs lg:text-sm uppercase bg-linear-to-r from-coral-red to-soft-orange text-white active:scale-95 transition cursor-pointer"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* SELL CARD */}
            <div className="mt-3">
              <button
                onClick={() => navigate("/sell")}
                className="w-full bg-white rounded-2xl shadow-lg border border-orange-100 px-4 py-4 flex items-center justify-between active:scale-[0.98] transition cursor-pointer"
              >
                <div className="flex flex-col items-start">
                  <span className="text-sm lg:text-base font-bold text-slate-800">
                    Post Your Property
                  </span>
                  <span className="text-[10px] lg:text-xs mt-0 lg:mt-1 text-slate-500">
                    Get unlimited enquiries
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative inline-block text-xs lg:text-sm font-black text-white bg-green-700 px-2 py-1 rounded-lg overflow-hidden">
                    FREE
                    <span
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.5) 50%, transparent 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shine 2s linear infinite",
                      }}
                    />
                  </span>
                  <Search
                    size={20}
                    className="text-orange-600"
                    strokeWidth={2.5}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* =========================
          MARQUEE SECTION (No BG)
      ========================= */}
      <div className="relative w-full lg:mt-10 py-6">
        <p className="relative z-10 text-xs lg:text-sm font-semibold text-slate-700 mb-4 lg:mb-8 text-center">
          Browse by Property Type
        </p>

        <div
          ref={marqueeRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-2 px-4 cursor-grab active:cursor-grabbing relative z-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            dragState.current.isDragging = false;
          }}
          onMouseDown={(e) => {
            dragState.current.isDragging = true;
            dragState.current.startX = e.pageX - marqueeRef.current.offsetLeft;
            dragState.current.scrollLeft = marqueeRef.current.scrollLeft;
          }}
          onMouseMove={(e) => {
            if (!dragState.current.isDragging) return;
            e.preventDefault();
            const x = e.pageX - marqueeRef.current.offsetLeft;
            const walk = (x - dragState.current.startX) * 1.5;
            marqueeRef.current.scrollLeft = dragState.current.scrollLeft - walk;
          }}
          onMouseUp={() => {
            dragState.current.isDragging = false;
            setIsPaused(false);
          }}
          onTouchStart={(e) => {
            dragState.current.isDragging = true;
            dragState.current.startX =
              e.touches[0].pageX - marqueeRef.current.offsetLeft;
            dragState.current.scrollLeft = marqueeRef.current.scrollLeft;
            setIsPaused(true);
          }}
          onTouchMove={(e) => {
            if (!dragState.current.isDragging) return;
            const x = e.touches[0].pageX - marqueeRef.current.offsetLeft;
            const walk = (x - dragState.current.startX) * 1.5;
            marqueeRef.current.scrollLeft = dragState.current.scrollLeft - walk;
          }}
          onTouchEnd={() => {
            dragState.current.isDragging = false;
            setIsPaused(false);
          }}
        >
          {marqueeItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={`${item.name}-${index}`}
                onClick={() => handlePropertyClick(item.name)}
                className="shrink-0 flex flex-col items-center gap-1 w-17.5 group cursor-pointer"
              >
                <div className="w-12 lg:w-14 h-12 lg:h-14 shadow-sm rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:border-coral-red transition-colors relative z-20">
                  <IconComponent
                    size={22}
                    className="text-coral-red opacity-90"
                    strokeWidth={2.3}
                  />
                </div>
                <span className="text-[10px] lg:text-xs text-center font-medium text-slate-800 leading-tight">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
