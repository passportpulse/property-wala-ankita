import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  Maximize2,
  MapPin,
  ArrowUpRight,
  Gem,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";

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
    <Section className="bg-white font-sans py-8 lg:py-20">
      <Container>
        {/* UPDATED HEADER */}
        <Header
          tag="High-Value Opportunities"
          title="Investor"
          highlight="Picks"
          subtitle="Smart moves for smart investors. High ROI and premium locations."
          buttonText="Explore Investments"
          onButtonClick="/buy"
        />

        {/* OUTER FRAME */}
        <div
          className="
          p-3
          bg-white 
          border border-slate-100 
          shadow-[0_10px_20px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.2),0_15px_30px_rgba(0,0,0,0.1)]
        "
        >
          <div className="lg:grid lg:grid-cols-12 bg-white overflow-hidden">
            {/* LEFT PANEL */}
            <div className="hidden lg:flex lg:col-span-4 p-14 flex-col justify-between">
              <div className="space-y-10">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-[1.5px] bg-dark-orange"></span>
                    <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
                      High-Value Opportunities
                    </h2>
                  </div>

                  <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-tight">
                    Investor
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-dark-orange to-soft-orange">
                      {" "}
                      Picks
                    </span>
                  </h1>
                </div>

                {/* NAV */}
                <nav className="flex flex-col gap-2">
                  {deals.map((deal, idx) => (
                    <button
                      key={deal.id}
                      onClick={() => setActive(idx)}
                      className={`group flex items-center justify-between p-5 transition-all duration-300 rounded-2xl ${
                        active === idx
                          ? "bg-slate-900 text-white shadow-xl translate-x-2"
                          : "hover:bg-white text-slate-500 hover:shadow-md"
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <span
                          className={`text-[9px] font-black uppercase mb-1 tracking-widest ${
                            active === idx ? "text-coral-red" : "opacity-50"
                          }`}
                        >
                          {deal.id}
                        </span>
                        <span className="text-sm font-bold tracking-tight uppercase">
                          {deal.title}
                        </span>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          active === idx
                            ? "translate-x-0"
                            : "-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      />
                    </button>
                  ))}
                </nav>
              </div>

              <button
                onClick={() => navigate("/buy")}
                className="cursor-pointer flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 hover:text-coral-red transition-colors group"
              >
                View Full Portfolio
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* RIGHT SHOWCASE */}
            <div className="lg:col-span-8 relative aspect-4/5 lg:aspect-auto lg:min-h-150 overflow-hidden group">
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
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>
              ))}

              {/* CONTENT OVERLAY */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 lg:p-14">
                <div className="max-w-xl">
                  {/* TYPE + INVESTOR BADGE */}
                  <div className="flex items-center gap-2 mb-3 lg:mb-4">
                    <span className="inline-block bg-coral-red text-white text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                      {deals[active].type}
                    </span>

                    <span
                      className="flex items-center gap-1 
  bg-gradient-to-r from-pink-500 to-rose-500 
  text-white px-2 py-1 
  rounded-full text-[8px] font-black uppercase 
  shadow-md shadow-pink-500/30 
  backdrop-blur-sm border border-white/20
"
                    >
                      <Gem size={10} />
                      High ROI
                    </span>
                  </div>

                  {/* TITLE MOBILE */}
                  <h3 className="lg:hidden text-3xl font-black text-white tracking-tighter leading-none mb-4">
                    {deals[active].title}
                  </h3>

                  {/* INFO */}
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

                  {/* PRICE + CTA */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-6 lg:pt-8">
                    <div>
                      <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">
                        Exclusive Price
                      </p>
                      <p className="text-3xl lg:text-4xl font-black text-white tracking-tighter">
                        {deals[active].price}
                      </p>
                    </div>

                    <button
                      onClick={() => navigate("/buy")}
                      className="bg-dark-orange text-white h-12 lg:h-16 px-6 lg:px-10 rounded-2xl font-black text-[10px] lg:text-xs uppercase tracking-widest hover:bg-white hover:text-dark-orange transition-all shadow-xl"
                    >
                      Claim Deal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
