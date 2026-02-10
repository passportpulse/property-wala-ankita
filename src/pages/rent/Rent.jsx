import React, { useState } from "react";
import { 
  Search, 
  MapPin, 
  Key, 
  ShieldCheck, 
  Zap, 
  Clock, 
  ArrowRight,
  Filter
} from "lucide-react";
import Cta from "../buy/sections/Cta";

export default function Rent() {
  const [activeCategory, setActiveCategory] = useState("Flats");

  const rentSteps = [
    { icon: <Search />, title: "Browse Listings", desc: "Explore verified flats and commercial spaces in Durgapur." },
    { icon: <ShieldCheck />, title: "Verify Dossier", desc: "Access legal documents and owner details via WhatsApp." },
    { icon: <Clock />, title: "Book Visit", desc: "Schedule a physical walkthrough at your convenience." },
    { icon: <Key />, title: "Move In", desc: "Standardized rent agreements and hassle-free onboarding." },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-slate-50">
        {/* Background Subtle Gradient */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-soft-orange/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* LEFT: CONTENT */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full">
                <Zap size={14} className="text-warm-yellow" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Verified Rental Network
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                Rent with <br />
                <span className="text-coral-red">Confidence.</span>
              </h1>
              
              <p className="text-slate-500 text-lg font-medium max-w-md leading-relaxed mx-auto lg:mx-0">
                Forget the endless search. Access pre-verified rental inventories with direct owner connections.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-coral-red transition-all shadow-xl shadow-slate-200">
                  Explore Inventory
                </button>
                <div className="flex items-center gap-3 px-6 py-5 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-all">
                  <Filter size={18} className="text-coral-red" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Advanced Filter</span>
                </div>
              </div>
            </div>

            {/* RIGHT: PROFESSIONAL IMAGE */}
            <div className="lg:w-1/2 relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-12 border-white relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern Apartment Interior" 
                  className="w-full h-125 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-50 flex items-center gap-4">
                <div className="w-12 h-12 bg-coral-red/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="text-coral-red" size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Local Focus</p>
                  <p className="text-xl font-black italic tracking-tighter text-slate-900">DURGAPUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Rent Focused) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-coral-red font-black text-[10px] uppercase tracking-[0.4em] mb-4">
              Tenant Guide
            </h2>
            <p className="text-4xl font-black tracking-tighter uppercase text-slate-900">
              Your journey to <br /> a new home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {rentSteps.map((step, i) => (
              <div key={i} className="group space-y-6">
                <div className="text-6xl font-black text-slate-100 transition-colors group-hover:text-coral-red/10 leading-none">
                  0{i + 1}
                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-coral-red group-hover:bg-coral-red group-hover:text-white transition-all">
                   {React.cloneElement(step.icon, { size: 18 })}
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CATEGORY QUICK LINKS --- */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Premium Flats", "Studio Units", "Office Spaces"].map((cat) => (
              <div key={cat} className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all cursor-pointer group">
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">{cat}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">View Listings</span>
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-coral-red group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <Cta />
    </div>
  );
}