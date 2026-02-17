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
    const speed = 0.8;

    const animate = () => {
      if (!isPaused && !dragState.current.isDragging) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 2)
          container.scrollLeft = 0;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  /* =========================
     COMPONENT
  ========================= */
  return (
    <Section className="bg-linear-to-b from-orange-50 via-white to-white font-poppins">
      <Container>
        <div className="flex flex-col items-center">
          {/* HEADING */}
          <div className="text-center px-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-600">
              One Stop Solution
            </p>

            <h1 className="text-lg font-black leading-tight mt-1">
              <span className="text-slate-800">Investment to </span>

              <span className="bg-linear-to-r from-coral-red via-soft-orange-500 to-warm-yellow bg-clip-text text-transparent">
                Aesthetic Living
              </span>
            </h1>
          </div>

          {/* SEARCH CARD */}
          <div className="w-full mt-4">
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
              {/* LOGIN INFO */}
              <div className="px-4 py-3 border-b border-slate-100 text-center">
                <span className="text-xs font-semibold text-slate-600">
                  Login to unlock full property access
                </span>
              </div>

              {/* BUY RENT */}
              <div className="flex">
                {["Buy", "Rent"].map((type) => (
                  <button
                    key={type}
                    onClick={() => navigate("/login")}
                    className="
                    flex-1
                    py-3
                    font-bold
                    text-xs
                    uppercase
                    bg-linear-to-r
                    from-coral-red
                    to-soft-orange
                    text-white
                    active:scale-95
                    transition
                  "
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
                className="
                w-full
                bg-white
                rounded-2xl
                shadow-lg
                border border-orange-100
                px-4 py-4
                flex items-center justify-between
                active:scale-[0.98]
                transition
              "
              >
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-slate-800">
                    Post Your Property
                  </span>

                  <span className="text-[10px] text-slate-500">
                    Get unlimited enquiries
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="relative inline-block text-xs font-black text-white bg-green-700 px-2 py-1 rounded-lg overflow-hidden">
                    FREE
                    {/* Shining effect layer */}
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

          {/* PROPERTY TYPES */}
          <div className="w-full mt-6">
            <p className="text-xs font-bold text-slate-700 mb-3 px-1">
              Browse by Property Type
            </p>

            <div
              ref={marqueeRef}
              className="
              flex gap-5
              overflow-x-auto
              no-scrollbar
              pb-2
              px-1
            "
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {marqueeItems.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <button
                    key={`${item.name}-${index}`}
                    onClick={() => handlePropertyClick(item.name)}
                    className="
                    flex-shrink-0
                    flex flex-col
                    items-center
                    gap-1
                    w-[70px]
                  "
                  >
                    <div
                      className="
                    w-12 h-12
                    rounded-xl
                    bg-orange-50
                    flex items-center justify-center
                    border border-orange-100
                  "
                    >
                      <IconComponent
                        size={22}
                        className="text-orange-600"
                        strokeWidth={2.3}
                      />
                    </div>

                    <span
                      className="
                    text-[10px]
                    text-center
                    font-medium
                    text-slate-600
                    leading-tight
                  "
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
