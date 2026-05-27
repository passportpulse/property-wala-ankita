import React, { useState, useEffect } from "react";
import axios from "axios";
import { Map as MapIcon, Info, TrendingUp, Zap, MousePointer2 } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

const API_BASE = "http://localhost:5000/api";

export default function PriceHeatMap() {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeatMap = async () => {
      try {
        const response = await axios.get(`${API_BASE}/heatmap`);
        setAreas(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching heatmap:", error);
        setLoading(false);
      }
    };
    fetchHeatMap();
  }, []);

  // Zones info (could also be dynamic, but usually static in structure)
  const zones = [
    {
      title: "Red Zones (High-Demand)",
      desc: "These are the hottest hotspots. Maximum appreciation and premium resale value. Investors here focus on high ROI and elite neighborhood status.",
      priceLabel: "Entry Price",
      price: "₹5,500+",
      subLabel: "Growth",
      subValue: "8-12% p.a.",
      color: "red",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Yellow Zones (Stable Growth)",
      desc: "Balanced areas with steady demand. Perfect for end-users looking for a safe, long-term home with guaranteed infrastructure growth.",
      priceLabel: "Entry Price",
      price: "₹3,800 - 5,200",
      subLabel: "Stability",
      subValue: "Very High",
      color: "yellow",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Green Zones (Best Value)",
      desc: "Emerging hotspots with the lowest entry prices. Highest potential for sudden growth as new projects hit the market. Buy now for maximum gains!",
      priceLabel: "Entry Price",
      price: "₹2,500 - 3,500",
      subLabel: "Potential",
      subValue: "Extreme",
      color: "emerald",
      icon: <MousePointer2 className="w-5 h-5" />
    }
  ];

  if (loading) return null;

  return (
    <Section className="bg-slate-900 py-12 md:py-24 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-8 md:space-y-12 relative z-10 text-left py-2">
            <div className="space-y-4 md:space-y-6 border-l-4 border-orange-500 pl-6 md:pl-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-black uppercase tracking-wider border border-orange-500/20 w-fit">
                <TrendingUp className="w-3 h-3" /> Market Intelligence
              </div>
              <h2 className="font-black text-white leading-tight tracking-tighter uppercase max-w-4xl">
                <span className="text-2xl sm:text-3xl lg:text-4xl block mb-2">Don't Just Search.</span>
                <span className="text-lg sm:text-xl lg:text-2xl">
                  <span className="text-orange-500">Invest Smart</span> with Bhaiya’s Heat Map.
                </span>
              </h2>
              <p className="text-slate-400 font-medium text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
                See which neighborhoods are heating up and where the best deals are hidden. Our real-time data visualizes the market so you don't have to guess.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {zones.map((zone, idx) => (
                <div key={idx} className="p-5 rounded-[2rem] bg-white/5 border border-white/10 text-left transition-all hover:bg-white/10 group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${zone.color}-500/10 rounded-full -mr-12 -mt-12 blur-2xl`} />
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-2xl bg-${zone.color}-500 shrink-0 shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-center justify-center text-white`}>
                      {zone.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-black uppercase tracking-tight text-base">{zone.title}</h3>
                      <p className="text-slate-400 text-[11px] font-medium leading-relaxed">
                        {zone.desc}
                      </p>
                      <div className="flex gap-4 pt-1">
                        <div>
                          <p className={`text-[9px] font-black text-${zone.color}-400 uppercase tracking-widest`}>{zone.priceLabel}</p>
                          <p className="text-sm font-black text-white">{zone.price}</p>
                        </div>
                        <div>
                          <p className={`text-[9px] font-black text-${zone.color}-400 uppercase tracking-widest`}>{zone.subLabel}</p>
                          <p className="text-sm font-black text-white">{zone.subValue}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95 shadow-xl shadow-orange-500/20 text-[10px] sm:text-xs">
                <MapIcon className="w-4 h-4" /> Open Full Interactive Map
              </button>
            </div>
          </div>

          <div className="relative aspect-square sm:aspect-video lg:aspect-square xl:aspect-video rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-slate-800 border-2 sm:border-4 border-slate-700 shadow-2xl group">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/India_map_outline.svg" 
              className="w-full h-full object-contain opacity-80 invert brightness-[2] transition-all duration-1000 p-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              alt="India Map"
            />
            
            {/* Heat Map Overlays */}
            <div className="absolute inset-0 pointer-events-none">
              {areas.map((area) => (
                <div
                  key={area._id}
                  className={`absolute rounded-full blur-2xl opacity-60 transition-all duration-500 animate-pulse ${area.color} ${area.size || 'w-24 h-24'}`}
                  style={{ top: area.top, left: area.left }}
                />
              ))}
            </div>

            {/* Interactive Points */}
            <div className="absolute inset-0">
              {areas.map((area) => (
                <div
                  key={area._id}
                  onMouseEnter={() => setHoveredArea(area)}
                  onMouseLeave={() => setHoveredArea(null)}
                  className="absolute cursor-help group/point"
                  style={{ top: area.top, left: area.left }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-white rounded-full shadow-lg border-2 border-slate-900 group-hover/point:scale-150 transition-transform" />
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/20 rounded-full animate-ping pointer-events-none" />
                    
                    {hoveredArea?._id === area._id && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white rounded-2xl p-4 shadow-2xl animate-fade-in z-50">
                        <div className="space-y-2">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{area.name}</p>
                          <div className="flex items-end justify-between">
                            <p className="text-xl font-black text-slate-900">{area.price}<span className="text-[10px] text-slate-400">/sq.ft</span></p>
                            <p className="text-xs font-black text-emerald-500 flex items-center gap-0.5">
                              <TrendingUp className="w-3 h-3" /> {area.trend}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-slate-100">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Demand: <span className="text-orange-500">{area.demand}</span></p>
                          </div>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating UI Elements */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <div className="glass px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live India Market Pulse
              </div>
            </div>

            <div className="absolute bottom-6 right-6">
              <div className="dark-glass p-4 rounded-2xl text-white space-y-3 max-w-[200px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Map Legend</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-xs font-bold">Trending High</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold">Best Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
