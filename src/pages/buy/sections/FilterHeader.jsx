import {
  Home,
  Trees,
  Building2,
  Factory,
  Warehouse,
  Hospital,
  Hotel,
  TrendingUp,
  Store,
  Search,
} from "lucide-react";

// Standardizing the slug logic
const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+|\/+/g, "-") 
    .replace(/-+/g, "-");      
};

export default function FilterHeader({ activeTab, setActiveTab }) {
  const tabs = [
    { label: "Flats", icon: Home },
    { label: "Plots", icon: Trees },
    { label: "House / Duplex", icon: Home },
    { label: "Commercial Space", icon: Store },
    { label: "Factory", icon: Factory },
    { label: "Industrial Plots", icon: Factory },
    { label: "Warehouse", icon: Warehouse },
    { label: "Hospital", icon: Hospital },
    { label: "Hotels / Resort", icon: Hotel },
    { label: "Investment", icon: TrendingUp },
  ];

  const handleFilterClick = (label) => {
    setActiveTab(label);
    window.location.hash = slugify(label); 
  };

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h1 className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              Durgapur <span className="text-coral-red">/</span> Inventory
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Verified by Property Wala Bhaiya
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative w-full lg:w-72">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
              size={18}
            />
            <input
              type="text"
              placeholder="Search locality or area..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:bg-white focus:ring-2 focus:ring-coral-red/10 transition-all"
            />
          </div>
        </div>

        {/* FILTER SECTION */}
        <div className="space-y-3">
          <p className="text-[11px] font-black uppercase tracking-widest text-slate-500">
            What are you looking for?
          </p>

          <div className="flex flex-wrap gap-3">
            {tabs.map(({ label, icon: Icon }) => {
              // FIX: Define sectionId inside the map
              const sectionId = slugify(label);
              
              return (
                <button
                  key={label}
                  id={sectionId}
                  onClick={() => handleFilterClick(label)}
                  className={`cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                    activeTab === label
                      ? "bg-coral-red text-white border-coral-red shadow-sm"
                      : "bg-slate-50 text-slate-500 border-slate-100 hover:bg-white hover:text-slate-700"
                  }`}
                >
                  {Icon && <Icon size={16} />}
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}