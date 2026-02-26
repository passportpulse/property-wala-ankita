import {
  Home,
  Trees,
  Factory,
  Warehouse,
  Hospital,
  Hotel,
  TrendingUp,
  Store,
  Search,
  ChevronDown,
  Handshake,
  Briefcase,
  Fuel,
  GraduationCap,
  Map,
} from "lucide-react";

import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { useEffect, useState } from "react";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+|\/+/g, "-")
    .replace(/-+/g, "-");

export default function FilterHeader({ activeTab, setActiveTab }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // adjust trigger point
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const tabs = [
    { label: "Flats", icon: Home },
    { label: "Plots", icon: Trees },
    { label: "Joint Ventures", icon: Handshake },
    { label: "House / Duplex", icon: Home },
    { label: "Office / Retail", icon: Briefcase },
    { label: "Factory", icon: Factory },
    { label: "Industrial Plots", icon: Map },
    { label: "Warehouse", icon: Warehouse },
    { label: "Hospital", icon: Hospital },
    { label: "Hotels / Resort", icon: Hotel },
    { label: "Petrol Pump", icon: Fuel },
    { label: "Institutes", icon: GraduationCap },
    { label: "Investment", icon: TrendingUp },
  ];

  const handleFilterClick = (label) => {
    setActiveTab(label);

    const id = slugify(label);
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Section
  className={`sticky z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 transition-all duration-300 ${
    isScrolled 
      ? "top-24 shadow-md mt-2"  // Moves the "sticky" position down when scrolled
      : "top-20 mt-0"            // Original sticky position
  }`}
>
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4">
          <div>
            <h1 className="text-lg font-black uppercase tracking-tight">
              Durgapur <span className="text-dark-orange">Inventory</span>
            </h1>

            <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
              Verified Listings
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-64">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              placeholder="Search area..."
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-dark-orange/10"
            />
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        <div className="lg:hidden relative">
          <select
            value={activeTab}
            onChange={(e) => handleFilterClick(e.target.value)}
            className="w-full appearance-none bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest outline-none focus:ring-2 focus:ring-dark-orange/10"
          >
            {tabs.map((tab) => (
              <option key={tab.label} value={tab.label}>
                {tab.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={16}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        {/* DESKTOP PILLS */}
        <div className="hidden lg:flex flex-wrap gap-2">
          {tabs.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => handleFilterClick(label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeTab === label
                  ? "bg-dark-orange text-white border-dark-orange"
                  : "bg-slate-50 text-slate-600 border-slate-100 hover:bg-white"
              }`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
      </Container>
    </Section>
  );
}
