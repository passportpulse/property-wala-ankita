import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import React, { useState, useEffect } from "react";
import { Maximize2, MapPin, ArrowRight, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

const deals = [
  {
    id: "01",
    title: "Riverfront Penthouse",
    location: "City Center, Durgapur",
    price: "₹64 L",
    sqft: "3,200 sq.ft",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "02",
    title: "Muchipara Commercial",
    location: "Prime Business Belt",
    price: "₹18.5 L",
    sqft: "1,500 sq.ft",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    title: "Bidhannagar Studio",
    location: "Residential Sector 2",
    price: "₹15 L",
    sqft: "850 sq.ft",
    type: "Studio",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HotDeals() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % deals.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="bg-white font-poppins py-8 lg:py-20">
      <Container>
        {/* MOBILE HEADER - Clean & Minimal */}
        <div className="flex items-center justify-between mb-6 lg:hidden px-2">
          <div>
            <div className="flex items-center gap-1.5 mb-1 text-red-600 f">
              <Flame size={14} className="ill-coral-red" />
              <span className="text-[10px] font-black uppercase tracking-widest text-coral-red">Hot Deals</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 leading-none">Top Opportunities</h2>
          </div>
          <button 
            onClick={() => navigate("/buy")}
            className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-900"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 aspect-[4/5] md:aspect-video lg:h-[600px]">
          
          {/* BACKGROUND IMAGES */}
          {deals.map((deal, idx) => (
            <div
              key={deal.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                active === idx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            </div>
          ))}

          {/* DESKTOP SIDE NAVIGATION (Hidden on Mobile) */}
          <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 z-30 flex-col gap-4 w-72">
            {deals.map((deal, idx) => (
              <button
                key={deal.id}
                onClick={() => setActive(idx)}
                className={`p-6 rounded-2xl transition-all duration-300 flex items-center justify-between ${
                  active === idx ? "bg-white text-slate-900 shadow-2xl scale-105" : "bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                }`}
              >
                <div className="text-left">
                  <p className={`text-[9px] font-black uppercase tracking-widest mb-1 ${active === idx ? "text-coral-red" : "text-white/60"}`}>
                    Deal {deal.id}
                  </p>
                  <p className="font-bold text-sm tracking-tight">{deal.title}</p>
                </div>
                <ArrowRight size={16} className={active === idx ? "text-coral-red" : "text-white/40"} />
              </button>
            ))}
          </div>

          {/* CONTENT OVERLAY (Primary Info) */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-6 lg:p-14 lg:pl-[400px]">
            <div className="max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              {/* Type Badge */}
              <span className="inline-block bg-coral-red text-white text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">
                {deals[active].type}
              </span>

              <h3 className="text-3xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-4">
                {deals[active].title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 lg:gap-8 text-white/80 mb-8 lg:mb-10">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-coral-red" />
                  <span className="text-xs lg:text-sm font-medium">{deals[active].location}</span>
                </div>
                <div className="flex items-center gap-2 border-l border-white/20 pl-4 lg:pl-8">
                  <Maximize2 size={16} className="text-coral-red" />
                  <span className="text-xs lg:text-sm font-medium">{deals[active].sqft}</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-6 lg:pt-8">
                <div>
                  <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">Fixed Price</p>
                  <p className="text-4xl lg:text-6xl font-black text-white">{deals[active].price}</p>
                </div>
                
                <button 
                  onClick={() => navigate("/buy")}
                  className="bg-white text-slate-900 h-14 lg:h-16 px-6 lg:px-10 rounded-2xl font-black text-[11px] lg:text-xs uppercase tracking-widest hover:bg-coral-red hover:text-white transition-all shadow-xl active:scale-95"
                >
                  Claim Deal
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE PROGRESS DOTS */}
          <div className="absolute top-6 inset-x-0 z-30 flex justify-center gap-1.5 lg:hidden px-6">
            {deals.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-500 ${
                  active === idx ? "w-8 bg-white" : "w-4 bg-white/30"
                }`}
              />
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}