import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  X,
  Phone,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import BestBuyModal from "../../../components/modals/BestBuyModal";

const bestBuys = [
  {
    title: "2 BHK Apartment",
    type: "Ready to Move",
    location: "City Centre, Durgapur",
    price: "₹48 Lakh",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    description:
      "Modern 2BHK located in the heart of Durgapur with modular kitchen, lift, and 24/7 power backup. Ideal for families.",
  },
  {
    title: "3 BHK House",
    type: "New Construction",
    location: "Benachity, Durgapur",
    price: "₹72 Lakh",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description:
      "Spacious independent house with a private terrace and garage. Located in a quiet residential neighborhood.",
  },
  {
    title: "Residential Plot",
    type: "Clear Title",
    location: "Muchipara, Durgapur",
    price: "₹32 Lakh",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    description:
      "LDA approved plot with immediate registration. Perfect for investment or building your custom dream home.",
  },
  {
    title: "1 BHK Flat",
    type: "High Demand",
    location: "Bidhannagar, Durgapur",
    price: "₹26 Lakh",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    description:
      "Budget-friendly flat in a high rental yield area near the hospital and engineering colleges.",
  },
];

export default function BestBuySection() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Section>
        <Container>
          {/* HEADER */}
          <div className="relative mb-8 lg:mb-16 border-l-4 border-dark-orange pl-4 lg:pl-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1 lg:space-y-2">
                <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                  Durgapur Properties
                </span>

                <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                  Best Buys in{" "}
                  <span className="bg-linear-to-r from-dark-orange to-lighter-orange bg-clip-text text-transparent">
                    Durgapur
                  </span>
                </h2>

                <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
                  Prime Durgapur properties with verified documentation.
                </p>
              </div>

              <button
                onClick={() => navigate("/buy")}
                className="
    cursor-pointer
    bg-dark-orange text-white
    flex items-center gap-2 group
    text-[10px] lg:text-[11px]
    font-black uppercase tracking-widest
    px-4 py-2 lg:px-5 lg:py-2.5
    border-2 border-white
    rounded-md
    hover:bg-white hover:text-orange-600 hover:border-orange-600
    transition-all duration-300
    shadow-sm hover:shadow-md
    w-fit
  "
              >
                See What's New
                <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* GRID: Horizontal Scroll on Mobile, Grid on Desktop */}
          <div
            className="
            flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar
            md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:mx-0 md:px-0
          "
          >
            {bestBuys.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedItem(item)}
                className="
                  min-w-[280px] sm:min-w-[320px] snap-center mr-4 last:mr-0
                  md:min-w-0 md:mr-0 group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300
                "
              >
                {/* COMPACT IMAGE */}
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  {/* SHINING TYPE BADGE */}
                  <div className="absolute top-3 left-3 bg-green-600 text-white backdrop-blur px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {item.type}
                    <span
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shine 2s linear infinite",
                      }}
                    />
                  </div>
                </div>

                {/* COMPACT CONTENT */}
                <div className="p-4 lg:p-6">
                  <h3 className="text-base lg:text-lg font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin size={12} className="text-dark-orange" />
                    <span className="truncate">{item.location}</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-black text-slate-900">
                      {item.price}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-dark-orange transition-all duration-300 group-hover:gap-2">
                      View Details
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* MODAL*/}
      <BestBuyModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </>
  );
}
