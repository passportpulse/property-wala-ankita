import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import React, { useState, useEffect } from "react";
import { ChevronRight, Maximize2, MapPin, ArrowRight } from "lucide-react";
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
    <Section size="large" className="bg-white font-poppins">

      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white shadow-[0_40px_100px_-20px_rgba(253,138,107,0.1)] rounded-[2.5rem] overflow-hidden border border-slate-100">

          {/* LEFT SIDE */}
          <div className="lg:col-span-4 p-8 lg:p-14 flex flex-col justify-between border-r border-slate-100">

            <div className="space-y-10">

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-[1.5px] bg-coral-red"></span>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
                    Hot Deals
                  </h2>
                </div>

                <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-tight">
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

            <div className="pt-8">
              <button
                onClick={() => navigate("/buy")}
                className="cursor-pointer flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 hover:text-coral-red transition-colors group"
              >
                Explore All Listings
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

          </div>


          {/* RIGHT SHOWCASE */}
          <div className="lg:col-span-8 relative group min-h-[550px]">

            <div className="absolute inset-0 overflow-hidden">

              <img
                key={deals[active].image}
                src={deals[active].image}
                alt={deals[active].title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8 lg:p-14">

                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">

                  <div className="flex items-center gap-6 text-white/90 mb-6 text-[10px] font-black uppercase tracking-[0.2em]">

                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-coral-red" />
                      {deals[active].location}
                    </span>

                    <span className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-coral-red" />
                      {deals[active].sqft}
                    </span>

                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

                    <div>
                      <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">
                        Exclusive Deal Price
                      </p>
                      <h3 className="text-5xl lg:text-6xl font-black text-white tracking-tighter">
                        {deals[active].price}
                      </h3>
                    </div>

                  </div>

                </div>

              </div>

              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em]">
                {deals[active].type}
              </div>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}
