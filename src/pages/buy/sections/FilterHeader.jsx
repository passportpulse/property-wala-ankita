import { Home, Trees, Building2, Search } from "lucide-react";
export default function FilterHeader({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "Flats", label: "Home/Flats", icon: <Home size={16} /> },
    { id: "Commercial", label: "Commercial", icon: <Building2 size={16} /> },
    { id: "Land", label: "Land/Plots", icon: <Trees size={16} /> },
  ];
  return (
    <>
      {/* 1. FILTER HEADER */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h1 className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              Durgapur <span className="text-coral-red">/</span> Inventory
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Verified by Property Wala Bhaiya
            </p>
          </div>

          <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-coral-red shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="relative group w-full lg:w-72">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-coral-red"
              size={18}
            />
            <input
              type="text"
              placeholder="Search Locality..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:bg-white focus:ring-2 focus:ring-coral-red/10 transition-all"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
