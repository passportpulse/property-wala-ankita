import { useState } from "react";
import { ArrowRight, MapPin, Tag } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import BestBuyModal from "../../../components/modals/BestBuyModal";
import Header from "../../../components/Header";

const bestBuys = [
  {
    title: "2 BHK Apartment",
    type: "Ready to Move",
    location: "City Centre, Durgapur",
    price: "₹48 Lakh",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    isValue: true,
  },
  {
    title: "3 BHK House",
    type: "New Construction",
    location: "Benachity, Durgapur",
    price: "₹72 Lakh",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    isValue: true,
  },
  {
    title: "Residential Plot",
    type: "Clear Title",
    location: "Muchipara, Durgapur",
    price: "₹32 Lakh",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    isValue: true,
  },
  {
    title: "1 BHK Flat",
    type: "High Demand",
    location: "Bidhannagar, Durgapur",
    price: "₹26 Lakh",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    isValue: true,
  },
];

export default function BestBuySection() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Section>
        <Container>
          {/* UPDATED HEADER */}
          <Header
            tag="Best Buy"
            title="Value"
            highlight="Deals"
            subtitle="Paisa Vasool deals! Properties priced below market average for a limited time."
            buttonText="Explore Deals"
            onButtonClick="/buy"
          />

          {/* GRID */}
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
                className={`
                  min-w-70 sm:min-w-[320px] snap-center mr-4 last:mr-0
                  md:min-w-0 md:mr-0 group cursor-pointer rounded-2xl overflow-hidden bg-white transition-all duration-300
                  
                  ${
                    item.isValue
                      ? "border border-slate-400/40"
                      : "border border-slate-100 shadow-sm hover:shadow-xl"
                  }
                `}
              >
                {/* IMAGE */}
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* TYPE BADGE */}
                  <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest shadow-sm">
                    {item.type}
                  </div>

                  {/* VALUE TAG */}
                  {item.isValue && (
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white px-2 py-1 rounded-md text-[8px] font-black uppercase shadow-sm flex items-center gap-1">
                      <Tag size={10} />
                      Value
                    </div>
                  )}
                </div>

                {/* CONTENT */}
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

                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 transition-all duration-300 group-hover:gap-2">
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

      {/* MODAL */}
      <BestBuyModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
