import React, { useState } from "react";
import {
  Home,
  Trees,
  Building2,
  Search,
  ShieldCheck,
  Heart,
  ArrowUpRight,
  Bed,
  Maximize2,
  MapPin,
  Sparkles,
  X,
  MessageSquare,
  Phone,
  Landmark,
  Compass,
} from "lucide-react";

/* --- THEME PALETTE ---
   Coral Red: #FA5C5C
   Soft Orange: #FD8A6B
   Peach Glow: #FEC288
   Warm Yellow: #FBEF76
*/

/* --- MODAL COMPONENT --- */
const PropertyDossier = ({ isOpen, onClose, property }) => {
  if (!isOpen || !property) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row animate-in fade-in zoom-in-95 duration-500 max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:text-coral-red transition-all"
        >
          <X size={20} />
        </button>
        <div className="lg:w-1/2 relative bg-slate-100">
          <img
            src={property.img}
            className="w-full h-full object-cover"
            alt={property.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase">
              {property.title}
            </h2>
            <div className="flex items-center gap-2 text-warm-yellow mt-2 font-bold uppercase text-[10px] tracking-widest">
              <MapPin size={14} /> {property.area}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-8 lg:p-14 bg-white">
          <div className="space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-coral-red">
              Confidential Dossier
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Unlock full access to government-verified floor plans and RERA
              documents.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase mb-1">
                  Valuation
                </p>
                <p className="text-2xl font-black text-coral-red">
                  ₹{property.price}
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase mb-1">
                  Layout
                </p>
                <p className="text-2xl font-black text-slate-900">
                  {property.tag}
                </p>
              </div>
            </div>
            <form className="space-y-4 pt-6 border-t border-slate-100">
              <input
                type="tel"
                placeholder="WhatsApp Number"
                className="w-full bg-slate-50 border border-slate-100 px-6 py-5 rounded-2xl outline-none focus:ring-4 focus:ring-coral-red/5 font-bold"
              />
              <button className="w-full bg-coral-red text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-xl hover:bg-soft-orange transition-all flex items-center justify-center gap-2">
                <MessageSquare size={16} /> Get Dossier on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- MAIN PAGE COMPONENT --- */
export default function Buy() {
  const [activeTab, setActiveTab] = useState("Flats");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { id: "Flats", label: "Home/Flats", icon: <Home size={16} /> },
    { id: "Commercial", label: "Commercial", icon: <Building2 size={16} /> },
    { id: "Land", label: "Land/Plots", icon: <Trees size={16} /> },
  ];

  const propertyData = {
    Flats: [
      {
        id: 1,
        title: "Dream Heritage",
        area: "City Center",
        price: "52.4 L",
        img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        tag: "3 BHK",
        status: "New Launch",
      },
      {
        id: 2,
        title: "Skyline Heights",
        area: "Bidhannagar",
        price: "65.0 L",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        tag: "2 BHK",
        status: "Ready",
      },
    ],
    Commercial: [
      {
        id: 4,
        title: "Fortune Biz Hub",
        area: "Junction Mall",
        price: "1.2 Cr",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        tag: "Furnished",
        status: "Grade A",
      },
    ],
    Land: [
      {
        id: 5,
        title: "Greenwood Plots",
        area: "Muchipara",
        price: "18.0 L",
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
        tag: "Resi. Plot",
        status: "Verified",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
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

      {/* 2. PROPERTY GRID */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-2 text-coral-red mb-12">
          <Sparkles size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            Curated {activeTab} Inventory
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {propertyData[activeTab]?.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[3.5rem] border border-slate-100 overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(250,92,92,0.1)] transition-all duration-700 hover:-translate-y-3"
            >
              <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-[2.5rem]">
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={item.title}
                />
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl text-[9px] font-black uppercase flex items-center gap-1.5 shadow-sm text-slate-900">
                  <ShieldCheck size={12} className="text-coral-red" />{" "}
                  {item.status}
                </div>
                {/* Glass Price Reveal */}
                <div className="absolute bottom-5 right-5 left-5 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-[1.5rem] flex justify-between items-center transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">
                    Pricing
                  </span>
                  <span className="text-xl font-black text-white tracking-tight leading-none">
                    ₹{item.price}
                  </span>
                </div>
              </div>

              <div className="p-10 pt-4">
                <div className="flex items-center gap-1 text-soft-orange mb-2">
                  <MapPin size={12} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    {item.area}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-8 group-hover:text-coral-red transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-8 py-6 border-y border-slate-50 mb-10 font-bold text-slate-600 uppercase tracking-widest text-[11px]">
                  <div className="flex items-center gap-3">
                    <Bed size={18} className="text-coral-red" /> {item.tag}
                  </div>
                  <div className="flex items-center gap-3">
                    <Maximize2 size={18} className="text-soft-orange" /> Premium
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedProperty(item);
                    setIsModalOpen(true);
                  }}
                  className="w-full border-2 border-coral-red text-coral-red bg-white py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:bg-coral-red hover:text-white transition-all duration-500 flex items-center justify-center gap-2 shadow-lg shadow-coral-red/5"
                >
                  View Full Dossier <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 3. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative bg-white border border-slate-100 rounded-[3rem] p-8 lg:p-16 overflow-hidden group shadow-xs">
          {/* Clean, subtle background element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-coral-red/[0.03] to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side: Professional Hook */}
            <div className="max-w-xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-coral-red"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-coral-red">
                  Priority Concierge
                </span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none uppercase">
                Private{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">
                  Showings
                </span>{" "}
                <br />
                On Your Schedule.
              </h3>

              <p className="text-slate-500 font-medium text-base lg:text-lg max-w-md leading-relaxed">
                Skip the paperwork. Connect directly with Property Wala Bhaiya to arrange a
                private walkthrough of Durgapur's most exclusive listings.
              </p>
            </div>

            {/* Right Side: Sophisticated Input Group */}
            <div className="w-full lg:w-auto">
              <div className="bg-slate-50 p-3 rounded-[2.5rem] border border-slate-100 flex flex-col sm:flex-row items-center gap-3 shadow-inner">
                <div className="flex items-center gap-3 px-5 py-2">
                  <Phone size={18} className="text-coral-red" />
                  <input
                    type="tel"
                    placeholder="Enter WhatsApp"
                    className="bg-transparent border-none outline-none font-bold text-slate-700 placeholder:text-slate-300 w-full sm:w-48"
                  />
                </div>
                <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-[2rem] font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-coral-red transition-all duration-500 flex items-center justify-center gap-2 active:scale-95">
                  Book Site Visit <ArrowUpRight size={14} />
                </button>
              </div>

              <p className="mt-4 text-[9px] text-center lg:text-left text-slate-400 font-bold uppercase tracking-widest ml-4">
                <span className="text-soft-orange">●</span> Property Wala Bhaiya usually
                responds in 15 mins
              </p>
            </div>
          </div>

          {/* Elegant corner watermark instead of giant icon */}
          <Landmark
            size={120}
            className="absolute -bottom-6 -right-6 text-slate-100 rotate-12 group-hover:text-coral-red/5 transition-colors duration-700"
          />
        </div>
      </section>

      <PropertyDossier
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={selectedProperty}
      />
    </div>
  );
}
