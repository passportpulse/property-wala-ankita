import { useState } from "react";
import { ArrowRight, MapPin, X, Phone, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { ArrowUpRight } from "lucide-react";

const bestBuys = [
  {
    title: "2 BHK Apartment",
    type: "Ready to Move",
    location: "City Centre, Durgapur",
    price: "₹48 Lakh",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    description:
      "Modern 2BHK located in the heart of Durgapur with modular kitchen, lift, and 24/7 power backup. Ideal for families.",
  },
  {
    title: "3 BHK Independent House",
    type: "New Construction",
    location: "Benachity, Durgapur",
    price: "₹72 Lakh",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description:
      "Spacious independent house with a private terrace and garage. Located in a quiet, high-demand residential neighborhood.",
  },
  {
    title: "Residential Plot",
    type: "Clear Title",
    location: "Muchipara, Durgapur",
    price: "₹32 Lakh",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    description:
      "LDA approved plot with immediate registration. Perfect for investment or building your custom dream home.",
  },
  {
    title: "1 BHK Investment Flat",
    type: "Rental Demand Area",
    location: "Bidhannagar, Durgapur",
    price: "₹26 Lakh",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    description:
      "Budget-friendly flat in a high rental yield area near the hospital and engineering colleges.",
  },
];

export default function BestBuySection() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Section className="pb-16 lg:pb-32 bg-white font-poppins">
        <Container>
          {/* HEADER */}
          <div className="relative mb-8 lg:mb-16 border-l-4 border-dark-orange pl-4 lg:pl-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1 lg:space-y-2">
                <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                  Durgapur Properties
                </span>

                <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                  Best Buys in {" "}
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

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bestBuys.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-dark-orange shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    {item.type}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-dark-slate">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-slate">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>

                  <div className="mt-4 text-lg font-bold text-dark-slate">
                    {item.price}
                  </div>

                  <div className="mt-5 flex items-center justify-between text-sm font-semibold text-slate-600 group-hover:text-dark-orange transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-14 text-center">
            <button
              onClick={() => navigate("/buy")}
              className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-dark-orange transition-all shadow-lg hover:shadow-dark-orange/20"
            >
              View All Properties in Durgapur
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Container>
      </Section>

      {/* --- MODAL (Outside Container for full-screen overlay) --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          />

          <div className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-dark-orange hover:text-white transition"
            >
              <X size={18} />
            </button>

            <div className="h-56">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-dark-orange">
                    {selectedItem.type}
                  </p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    {selectedItem.title}
                  </h3>
                </div>
                <p className="text-xl font-bold text-slate-900">
                  {selectedItem.price}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
                <MapPin className="w-4 h-4 text-lighter-orange" />
                {selectedItem.location}
              </div>

              <p className="mt-6 text-slate-600 text-sm leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <a
                  href="tel:+917699988876"
                  className="flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-dark-orange transition"
                >
                  <Phone size={14} /> Call Agent
                </a>

                <a
                  href="https://wa.me/917699988876"
                  className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-dark-orange to-lighter-orange text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition"
                >
                  <MessageSquare size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
