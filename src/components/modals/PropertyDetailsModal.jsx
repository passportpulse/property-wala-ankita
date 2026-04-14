import React from "react";
import {
  X, MapPin, Bed, Bath, Compass, Phone, MessageCircle, 
  Ruler, ShieldCheck, Zap, Users, Info, ChevronRight, Droplets
} from "lucide-react";

export default function PropertyDetailsModal({ open, onClose, property }) {
  if (!open) return null;

  const nearby = [
    "Vishal mart", "Lord Shiva Temple", "SUNLIFES HOSPITAL", "HDFC ATM", 
    "Apollo Pharmacy", "HP Petrol Pump", "St. Mary's Bethany School"
  ];

  const specs = [
    { label: "Price", value: "₹58 Lac", sub: "@ 58k/sq.yd", highlight: true },
    { label: "Area", value: "100 sq.yd", sub: "83.61 sq.m" },
    { label: "Facing", value: "North", sub: "Main Road" },
    { label: "Age", value: "1-5 Yrs", sub: "Resale" },
  ];

  return (
    <div className="fixed inset-0 z-[1000] bg-slate-900/60 backdrop-blur-sm flex items-end md:items-center justify-center">
      <div className="bg-white w-full md:max-w-md rounded-t-[2rem] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* COMPACT HEADER */}
        <div className="px-5 py-4 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="bg-orange-100 text-orange-600 p-1.5 rounded-lg">
              <Info size={16} />
            </span>
            <div>
              <h2 className="text-sm font-black text-slate-900 leading-none">Property Details</h2>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">ID: 482910</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
            <X size={18} className="text-slate-400" />
          </button>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="overflow-y-auto pb-24">
          
          {/* SOCIAL PROOF & STATUS */}
          <div className="bg-orange-50 px-5 py-2 flex items-center justify-between">
            <p className="text-[10px] font-bold text-orange-700 flex items-center gap-1.5">
              <Users size={12} /> 2 people already contacted today
            </p>
            <span className="text-[9px] bg-white px-2 py-0.5 rounded-full border border-orange-200 text-orange-600 font-black uppercase">Active</span>
          </div>

          {/* MAIN IMAGE SET */}
          <div className="px-5 py-4">
            <div className="relative rounded-2xl overflow-hidden h-40">
              <img 
                src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d" 
                className="w-full h-full object-cover" 
                alt="Main"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg shadow-sm">
                 <p className="text-[10px] font-black text-slate-800 flex items-center gap-1">
                   <MapPin size={10} className="text-orange-600"/> Dammaiguda, Secunderabad
                 </p>
              </div>
            </div>
          </div>

          <div className="px-5 space-y-5">
            {/* GRID SPECS - HIGH DENSITY */}
            <div className="grid grid-cols-2 gap-2">
              {specs.map((s, i) => (
                <div key={i} className={`p-3 rounded-xl border ${s.highlight ? 'bg-slate-900 border-slate-900' : 'bg-white border-slate-100'}`}>
                  <p className={`text-[9px] font-bold uppercase tracking-widest ${s.highlight ? 'text-slate-400' : 'text-slate-400'}`}>{s.label}</p>
                  <p className={`text-sm font-black ${s.highlight ? 'text-white' : 'text-slate-900'}`}>{s.value}</p>
                  <p className={`text-[9px] font-medium ${s.highlight ? 'text-slate-500' : 'text-slate-400'}`}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* CONFIGURATION BAR */}
            <div className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <Bed size={14} className="text-slate-600"/>
                  <span className="text-[10px] font-black text-slate-700">2 Bed</span>
                </div>
                <div className="w-px h-6 bg-slate-200"/>
                <div className="flex flex-col items-center">
                  <Bath size={14} className="text-slate-600"/>
                  <span className="text-[10px] font-black text-slate-700">2 Bath</span>
                </div>
                <div className="w-px h-6 bg-slate-200"/>
                <div className="flex flex-col items-center">
                  <Droplets size={14} className="text-slate-600"/>
                  <span className="text-[10px] font-black text-slate-700">24/7 Water</span>
                </div>
              </div>
              <p className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-md">Resale</p>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h3 className="text-[11px] font-black uppercase text-slate-900 mb-2">About Property</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Independent house with 1 car & 1 bike parking. Features cement flooring, 30ft wide facing road, and municipal water connection. Unfurnished and ready to move.
              </p>
            </div>

            {/* NEARBY - COMPACT TAG CLOUD */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[11px] font-black uppercase text-slate-900">Nearby</h3>
                <button className="text-[10px] font-bold text-orange-600 flex items-center">View 21 <ChevronRight size={10}/></button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {nearby.map((n, i) => (
                  <span key={i} className="text-[9px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* STICKY ACTION FOOTER */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 flex gap-2">
          <a
            href="tel:+91000000000"
            className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all border border-slate-200"
          >
            <Phone size={14} /> Call
          </a>
          <a
            href="https://wa.me/91000000000"
            className="flex-[1.5] flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-100"
          >
            <MessageCircle size={14} /> Contact Now
          </a>
        </div>
      </div>
    </div>
  );
}