const data = [
  {
    type: "Flats 🏢",
    goal: "Modern Living",
    feature: "🕶️ 360° Virtual Tours",
    roi: "⭐⭐⭐ (Steady)",
  },
  {
    type: "Plots 🏗️",
    goal: "Custom Build",
    feature: "📜 Digital Land Records",
    roi: "⭐⭐⭐⭐ (High)",
  },
  {
    type: "Joint Venture 🤝",
    goal: "Partnership",
    feature: "🕵️ Developer Track Record",
    roi: "⭐⭐⭐⭐⭐ (Maximum)",
  },
  {
    type: "House/Duplex 🏡",
    goal: "Privacy/Luxury",
    feature: "💳 In-App Loan Approval",
    roi: "⭐⭐⭐ (Stable)",
  },
  {
    type: "Office/Retail 🛍️",
    goal: "Business Reach",
    feature: "📊 Footfall Analytics",
    roi: "⭐⭐⭐⭐ (Rental Yield)",
  },
  {
    type: "Factory 🏭",
    goal: "Manufacturing",
    feature: "⚖️ Zoning/Licensing Help",
    roi: "⭐⭐⭐ (Operational)",
  },
  {
    type: "Industrial Plots 🏗️🔩",
    goal: "Infrastructure",
    feature: "⚡ Utility Feasibility Tool",
    roi: "⭐⭐⭐⭐ (Strategic)",
  },
  {
    type: "Warehouse 📦",
    goal: "Logistics",
    feature: "📍 Proximity Mapping",
    roi: "⭐⭐⭐⭐ (Fast Growth)",
  },
  {
    type: "Hospital 🏥",
    goal: "Healthcare",
    feature: "🛡️ Safety Compliance Check",
    roi: "⭐⭐⭐ (Long-term)",
  },
  {
    type: "Hotels/Resort 🏨",
    goal: "Hospitality",
    feature: "📈 5-Year Revenue Projection",
    roi: "⭐⭐⭐⭐ (Premium)",
  },
  {
    type: "Petrol Pump ⛽",
    goal: "High-Yield Asset",
    feature: "📝 Regulatory Paperwork",
    roi: "⭐⭐⭐⭐⭐ (Consistent)",
  },
  {
    type: "Institutes 🎓",
    goal: "Education",
    feature: "🗺️ Student-Commute Heatmaps",
    roi: "⭐⭐⭐ (Legacy)",
  },
  {
    type: "Investments 📈",
    goal: "Wealth Growth",
    feature: "🔔 AI-Driven Price Alerts",
    roi: "⭐⭐⭐⭐⭐ (Aggressive)",
  },
];

import { useState } from "react";

export default function PropertyComparisonMatrix() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 mb-4 px-2 text-center">
      {/* --- MAIN HEADING (Punchy & Direct) --- */}{" "}
      <h2 className="text-xl lg:text-4xl font-[550] text-amber-600 tracking-tight leading-none">
        {" "}
        Stop Guessing. <br className="md:hidden" />{" "}
        <span className="text-dark-orange">Compare & Conquer.</span>{" "}
      </h2>{" "}
      {/* --- SUBHEADING (Benefit-Focused) --- */}{" "}
      <p className="text-[11px] lg:text-sm text-slate-500 mt-3 max-w-sm mx-auto font-medium leading-relaxed">
        {" "}
        Don't just search—evaluate. Compare{" "}
        <span className="text-slate-900 font-bold">
          13+ Property Types
        </span>{" "}
        across ROI, safety, and growth metrics instantly.{" "}
      </p>{" "}
      {/* --- ENHANCED TRIGGER BUTTON --- */}{" "}
      <div className="relative inline-block mt-5">
        {" "}
        <button
          onClick={() => setIsOpen(true)}
          className="relative z-10 bg-emerald-600 hover:bg-orange-600 text-white font-black py-2 px-4 rounded-xl text-[11px] uppercase tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all active:scale-95 flex items-center gap-3 border border-emerald-700"
        >
          {" "}
          <span className="text-lg">📊</span> Unlock Market Matrix{" "}
        </button>{" "}
        {/* Subtle Glow behind button */}{" "}
        <div className="absolute inset-0 bg-orange-400/20 blur-xl rounded-full -z-10"></div>{" "}
      </div>{" "}
      {/* --- POPUP / MODAL --- */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[80vh] rounded-xl shadow-2xl overflow-hidden flex flex-col relative">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:text-red-600 z-10 text-[10px]"
            >
              ✕
            </button>

            {/* MODAL HEADER */}
            <div className="p-3 border-b border-slate-100 bg-slate-50">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Property Comparison{" "}
                <span className="text-orange-600 text-[10px] ml-2 font-normal">
                  (Swipe left/right on mobile)
                </span>
              </h3>
            </div>

            {/* MODAL CONTENT - FORCED TABLE VIEW FOR BOTH MOBILE & DESKTOP */}
            <div className="overflow-auto bg-white">
              <table className="w-full border-collapse min-w-[600px]">
                {/* min-w-[600px] ensures the table keeps its shape on mobile */}
                <thead>
                  <tr className="bg-slate-50 sticky top-0 z-10">
                    <th className="py-2 px-3 border-b text-[9px] uppercase text-slate-400 text-left font-bold">
                      Type
                    </th>
                    <th className="py-2 px-3 border-b text-[9px] uppercase text-slate-400 text-left font-bold">
                      Goal
                    </th>
                    <th className="py-2 px-3 border-b text-[9px] uppercase text-slate-400 text-left font-bold">
                      Special Feature
                    </th>
                    <th className="py-2 px-3 border-b text-[9px] uppercase text-slate-400 text-left font-bold">
                      ROI / Growth
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr
                      key={i}
                      className="hover:bg-orange-50/40 border-b border-slate-50 last:border-0 transition-colors"
                    >
                      {/* text-left added to every cell to ensure strict alignment */}
                      <td className="py-2 px-3 text-left font-bold text-slate-800 text-[10px] whitespace-nowrap">
                        {item.type}
                      </td>
                      <td className="py-2 px-3 text-left text-slate-600 text-[10px] whitespace-nowrap">
                        {item.goal}
                      </td>
                      <td className="py-2 px-3 text-left text-slate-500 text-[10px] italic whitespace-nowrap">
                        {item.feature}
                      </td>
                      <td className="py-2 px-3 text-left font-bold text-orange-600 text-[10px] whitespace-nowrap">
                        {item.roi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* FOOTER */}
            <div className="p-2 bg-white text-center border-t border-slate-50">
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 font-bold text-[9px] hover:text-slate-600 uppercase"
              >
                — Close —
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
