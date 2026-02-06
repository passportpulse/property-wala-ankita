/* sections/Categories.js */
import { Home, Landmark, Building2, Map, ArrowRight } from "lucide-react";

const cats = [
  {
    name: "Luxury Flats",
    icon: <Home className="w-5 h-5 lg:w-6 lg:h-6" />,
    count: "40+ Units",
    color: "from-coral-red to-soft-orange",
  },
  {
    name: "Prime Plots",
    icon: <Map className="w-5 h-5 lg:w-6 lg:h-6" />,
    count: "15+ Locations",
    color: "from-soft-orange to-peach-glow",
  },
  {
    name: "Commercial",
    icon: <Building2 className="w-5 h-5 lg:w-6 lg:h-6" />,
    count: "10+ Spaces",
    color: "from-peach-glow to-warm-yellow",
  },
  {
    name: "Investment",
    icon: <Landmark className="w-5 h-5 lg:w-6 lg:h-6" />,
    count: "25+ Options",
    color: "from-warm-yellow to-peach-glow",
  },
];

export default function Categories() {
  return (
    <section className="py-16 lg:py-24 bg-white font-poppins relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-coral-red"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
                Browse by Intent
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              What are you <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">
                looking for?
              </span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm lg:text-base leading-relaxed border-l border-slate-100 pl-6 hidden md:block">
            Choose a category to see Durgapur's most prestigious verified listings.
          </p>
        </div>

        {/* The Responsive Card Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {cats.map((cat, i) => (
            <div
              key={i}
              className="group relative p-6 lg:p-8 rounded-3xl lg:rounded-[2.5rem] bg-white border border-slate-100 hover:border-peach-glow/30 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-peach-glow/10 overflow-hidden"
            >
              <div className="relative z-10">
                <div
                  className={`w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl mb-6 flex items-center justify-center bg-linear-to-br ${cat.color} text-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {cat.icon}
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-base lg:text-xl tracking-tight group-hover:text-coral-red transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-[9px] lg:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    {cat.count}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-900">
                    View All
                  </span>
                  <ArrowRight className="w-3 h-3 text-coral-red -translate-x-2 group-hover:translate-x-0 transition-transform" />
                </div>
              </div>

              {/* FIX: Bottom accent bar */}
              {/* Using inset-x-0 and h-1.5 with absolute positioning at bottom-0 */}
              <div
                className={`absolute bottom-0 inset-x-0 h-1.5 bg-linear-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}