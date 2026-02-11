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

  // Auto-animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % deals.length);
    }, 5000); // Change deal every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-16 lg:pb-32 bg-white antialiased font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white shadow-[0_40px_100px_-20px_rgba(253,138,107,0.1)] rounded-[2.5rem] overflow-hidden border border-slate-100">
          {/* LEFT NAV: Editorial Index */}
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

          {/* RIGHT CONTENT: The Showcase */}
          <div className="lg:col-span-8 relative group min-h-137.5">
            <div className="absolute inset-0 overflow-hidden">
              <img
                key={deals[active].image}
                src={deals[active].image}
                alt={deals[active].title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
              />

              {/* Elegant Info Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8 lg:p-14">
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                  <div className="flex items-center gap-6 text-white/90 mb-6 text-[10px] font-black uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-coral-red" />{" "}
                      {deals[active].location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-coral-red" />{" "}
                      {deals[active].sqft}
                    </span>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div className="space-y-1">
                      <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">
                        Exclusive Deal Price
                      </p>
                      <h3 className="text-5xl lg:text-6xl font-black text-white tracking-tighter">
                        {deals[active].price}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      {/* CALL BUTTON */}
                      <a
                        href="tel:+917699988876"
                        className="flex-1 flex items-center justify-center gap-3 bg-slate-900 text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-coral-red transition-all shadow-lg hover:shadow-coral-red/30"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        Call Now
                      </a>

                      {/* WHATSAPP/MESSAGE BUTTON */}
                      <a
                        href="https://wa.me/917699988876"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 bg-linear-to-r from-coral-red to-soft-orange text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-coral-red/20"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.031 6.17c-3.181 0-5.767 2.586-5.768 5.766-.001 1.018.271 1.957.734 2.775l-.734 2.684 2.767-.725a5.753 5.753 0 002.766.704h.001c3.181 0 5.767-2.586 5.767-5.766 0-1.536-.607-2.977-1.708-4.061-1.101-1.084-2.56-1.682-4.124-1.683h-.001zM12.031 16.923h-.001c-1.002 0-1.928-.276-2.732-.746l-1.947.511.519-1.897a5.728 5.728 0 01-.734-2.775c0-1.537.607-2.977 1.708-4.062 1.1-1.084 2.56-1.682 4.124-1.682 1.564 0 3.023.597 4.124 1.682 1.101 1.085 1.708 2.525 1.708 4.062 0 3.181-2.586 5.766-5.766 5.766zm3.155-4.271c-.173-.087-1.022-.505-1.18-.562-.158-.057-.274-.087-.39.088-.117.175-.453.563-.555.679-.102.116-.203.131-.377.044-.173-.087-.732-.27-1.393-.861-.515-.459-.863-1.026-.964-1.201-.102-.176-.011-.271.077-.359.08-.079.176-.206.264-.309.088-.103.117-.176.176-.293.058-.117.029-.22-.014-.308-.043-.088-.393-.948-.539-1.298-.144-.343-.291-.295-.393-.301-.102-.006-.219-.007-.336-.007-.117 0-.306.044-.467.219-.161.176-.615.602-.615 1.469 0 .867.63 1.705.717 1.822.087.117 1.25 1.905 3.026 2.671.423.182.753.291 1.011.372.425.135.811.116 1.117.071.343-.053 1.022-.418 1.165-.822.143-.404.143-.75.101-.822-.042-.072-.158-.117-.331-.204z" />
                        </svg>
                        Message Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em]">
                {deals[active].type}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
