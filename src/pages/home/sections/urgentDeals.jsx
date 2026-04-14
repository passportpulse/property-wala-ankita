import { useState } from "react";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import Header from "../../../components/Header";

const urgentDeals = [
  {
    id: 1,
    title: "2BHK Flat - Immediate Sale",
    location: "City Center, Durgapur",
    price: "₹42 L",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    tag: "Urgent",
  },
  {
    id: 2,
    title: "Commercial Shop - Owner Relocating",
    location: "Benachity Market",
    price: "₹28 L",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    tag: "Fast Move",
  },
  {
    id: 3,
    title: "3BHK House - Quick Deal",
    location: "Bidhannagar",
    price: "₹68 L",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
    tag: "Urgent",
  },
  {
    id: 4,
    title: "Residential Plot - Need Funds",
    location: "Muchipara",
    price: "₹22 L",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    tag: "Fast Move",
  },
];

export default function UrgentExitSection() {
  const [selected, setSelected] = useState(null);

  return (
    <Section>
      <Container>
        {/* HEADER */}
        <Header
          tag="Urgent Exit"
          title="Fast"
          highlight="Closers"
          subtitle="Sellers in a hurry = Better deals for you. Make an offer today!"
          buttonText="View All Urgent Deals"
          onButtonClick="/buy"
        />

        {/* MOBILE SWIPE + DESKTOP GRID */}
        <div
          className="
            flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar
            md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:mx-0 md:px-0
          "
        >
          {urgentDeals.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="
                min-w-[280px] sm:min-w-[320px] snap-center mr-4 last:mr-0
                md:min-w-0 md:mr-0
                group cursor-pointer rounded-2xl overflow-hidden bg-white 
                border border-red-200/60
                shadow-[0_0_0_1px_rgba(239,68,68,0.15),0_10px_25px_-5px_rgba(239,68,68,0.15)]
                hover:shadow-[0_0_0_1px_rgba(239,68,68,0.3),0_15px_35px_-5px_rgba(239,68,68,0.25)]
                transition-all duration-300
              "
            >
              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* URGENT BADGE */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-md text-[8px] font-black uppercase shadow">
                  <Clock size={10} />
                  {item.tag}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <MapPin size={12} className="text-red-500" />
                  {item.location}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-black text-slate-900">
                    {item.price}
                  </span>

                  <div className="flex items-center gap-1 text-xs font-bold text-red-600 group-hover:gap-2 transition-all">
                    Make Offer
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
