import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  Maximize2,
  MapPin,
  ArrowUpRight,
  Flame,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const deals = [
  {
    id: "01",
    title: "Riverfront Penthouse",
    location: "City Center, Durgapur",
    price: "₹64 L",
    sqft: "3,200 sq.ft",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "02",
    title: "Muchipara Commercial",
    location: "Prime Business Belt",
    price: "₹18.5 L",
    sqft: "1,500 sq.ft",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    title: "Bidhannagar Studio",
    location: "Residential Sector 2",
    price: "₹15 L",
    sqft: "850 sq.ft",
    type: "Studio",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
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
        {/* MOBILE ONLY HEADER */}
        <div className="lg:hidden relative mb-6 border-l-4 border-dark-orange pl-4">
          <div className="flex flex-col items-start gap-3">
            {/* TEXT CONTENT */}
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dark-orange">
                Hot Deals
              </span>

              {/* Single line heading */}
              <h2 className="text-xl font-black text-slate-800 tracking-tight leading-none whitespace-nowrap">
                High-Value{" "}
                <span className="bg-linear-to-r from-dark-orange to-lighter-orange bg-clip-text text-transparent">
                  Opportunities
                </span>
              </h2>

              <p className="text-slate-500 text-xs leading-relaxed font-medium max-w-xs">
                Exclusive high-value property deals.
              </p>
            </div>

            {/* BUTTON LEFT SIDE */}
            <button
              onClick={() => navigate("/buy")}
              className="
        cursor-pointer
        bg-dark-orange text-white
        flex items-center gap-1.5 group
        text-[9px]
        font-black uppercase tracking-widest
        px-3 py-2
        border border-dark-orange
        rounded-md
        hover:bg-white hover:text-dark-orange
        transition-all duration-300
        shadow-sm
      "
            >
              Explore Now
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* MAIN WRAPPER: Grid on Desktop, Box on Mobile */}
        <div className="lg:grid lg:grid-cols-12 bg-white lg:shadow-[0_40px_100px_-20px_rgba(253,138,107,0.1)] rounded-[2.5rem] overflow-hidden lg:border lg:border-slate-100">
          {/* DESKTOP LEFT SIDE (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-4 p-14 flex-col justify-between border-r border-slate-100">
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-[1.5px] bg-coral-red"></span>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
                    Hot Deals
                  </h2>
                </div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-tight">
                  High-Value <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">
                    Opportunities
                  </span>
                </h1>
              </div>

              <nav className="flex flex-col gap-2">
                {deals.map((deal, idx) => (
                  <button
                    key={deal.id}
                    onClick={() => setActive(idx)}
                    className={`group flex items-center justify-between p-5 transition-all duration-300 rounded-2xl ${
                      active === idx
                        ? "bg-slate-900 text-white shadow-xl translate-x-2"
                        : "hover:bg-slate-50 text-slate-500"
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span
                        className={`text-[9px] font-black uppercase mb-1 tracking-widest ${active === idx ? "text-coral-red" : "opacity-50"}`}
                      >
                        {deal.id}
                      </span>
                      <span className="text-sm font-bold tracking-tight uppercase">
                        {deal.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${active === idx ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`}
                    />
                  </button>
                ))}
              </nav>
            </div>
            <button
              onClick={() => navigate("/buy")}
              className="cursor-pointer flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 hover:text-coral-red transition-colors group"
            >
              Explore All Listings{" "}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* RIGHT SHOWCASE (Desktop) / FULL CARD (Mobile) */}
          <div className="lg:col-span-8 relative aspect-4/5 lg:aspect-auto lg:min-h-150 overflow-hidden group">
            {/* BACKGROUND IMAGES */}
            {deals.map((deal, idx) => (
              <div
                key={deal.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${active === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              >
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>
            ))}

            {/* CONTENT OVERLAY */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-6 lg:p-14">
              <div className="max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                {/* Type Badge */}
                <span className="inline-block bg-coral-red text-white text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3 lg:mb-4">
                  {deals[active].type}
                </span>

                {/* Mobile-Only Title (Hidden on desktop because it's in the side nav) */}
                <h3 className="lg:hidden text-3xl font-black text-white tracking-tighter leading-none mb-4">
                  {deals[active].title}
                </h3>

                <div className="flex items-center gap-4 lg:gap-8 text-white/80 mb-6 lg:mb-10">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-coral-red" />
                    <span className="text-xs lg:text-sm font-medium">
                      {deals[active].location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-white/20 pl-4 lg:pl-8">
                    <Maximize2 size={16} className="text-coral-red" />
                    <span className="text-xs lg:text-sm font-medium">
                      {deals[active].sqft}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-6 lg:pt-8">
                  <div>
                    <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">
                      Exclusive Price
                    </p>
                    <p className="text-4xl lg:text-6xl font-black text-white tracking-tighter">
                      {deals[active].price}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/buy")}
                    className="bg-white text-slate-900 h-12 lg:h-16 px-6 lg:px-10 rounded-2xl font-black text-[10px] lg:text-xs uppercase tracking-widest hover:bg-coral-red hover:text-white transition-all shadow-xl"
                  >
                    Claim Deal
                  </button>
                </div>
              </div>
            </div>

            {/* MOBILE ONLY PROGRESS BARS */}
            <div className="absolute top-6 inset-x-0 z-30 flex justify-center gap-1.5 lg:hidden px-6">
              {deals.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ${active === idx ? "w-8 bg-white" : "w-4 bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
