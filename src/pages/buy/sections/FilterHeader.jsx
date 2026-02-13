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
} from "lucide-react";

import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

const slugify = (text) =>
  text.toLowerCase().trim().replace(/\s+|\/+/g, "-").replace(/-+/g, "-");

export default function FilterHeader({ activeTab, setActiveTab }) {
  const tabs = [
    { label: "Flats", icon: Home },
    { label: "Plots", icon: Trees },
    { label: "House / Duplex", icon: Home },
    { label: "Commercial", icon: Store },
    { label: "Factory", icon: Factory },
    { label: "Industrial", icon: Factory },
    { label: "Warehouse", icon: Warehouse },
    { label: "Hospital", icon: Hospital },
    { label: "Hotels", icon: Hotel },
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
    <Section className="sticky top-4 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
      <Container>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4">

          <div>
            <h1 className="text-lg font-black uppercase tracking-tight">
              Durgapur <span className="text-coral-red">Inventory</span>
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
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-coral-red/10"
            />
          </div>

        </div>

        {/* MOBILE DROPDOWN */}
        <div className="lg:hidden relative">

          <select
            value={activeTab}
            onChange={(e) => handleFilterClick(e.target.value)}
            className="w-full appearance-none bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest outline-none focus:ring-2 focus:ring-coral-red/10"
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
                  ? "bg-coral-red text-white border-coral-red"
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
