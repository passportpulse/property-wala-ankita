import { useState } from "react";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import Header from "../../../components/Header";

const freshListings = [
  {
    id: 1,
    title: "2BHK Flat - Newly Listed",
    location: "City Center, Durgapur",
    price: "₹41 L",
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Premium Office Space",
    location: "Suhatta Complex",
    price: "₹1.1 Cr",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Residential Plot",
    location: "Bidhannagar",
    price: "₹29 L",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "1BHK Budget Flat",
    location: "Muchipara",
    price: "₹22 L",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FreshArrivals() {
  const [selected, setSelected] = useState(null);

  return (
    <Section>
      <Container>
        {/* HEADER */}
        <Header
          tag="Fresh Arrivals"
          title="New Listings"
          highlight="Today"
          subtitle="Be the first to see! New properties added today."
          buttonText="Explore New"
          onButtonClick="/buy"
        />

        {/* MOBILE SWIPE + DESKTOP GRID */}
        <div
          className="
            flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar
            md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:mx-0 md:px-0
          "
        >
          {freshListings.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="
                min-w-[280px] sm:min-w-[320px] snap-center mr-4 last:mr-0
                md:min-w-0 md:mr-0
                group cursor-pointer rounded-2xl overflow-hidden bg-white 
                border border-slate-100 shadow-sm hover:shadow-xl 
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

                {/* NEW RIBBON */}
                <div className="absolute top-3 left-[-35px] rotate-[-45deg] bg-purple-600 text-white text-[8px] font-black uppercase px-10 py-1 shadow-md">
                  Just In
                </div>

                {/* OPTIONAL ICON BADGE */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md flex items-center gap-1 shadow">
                  <Sparkles size={10} className="text-purple-600" />
                  <span className="text-[8px] font-black text-purple-600 uppercase">
                    New
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <MapPin size={12} className="text-purple-500" />
                  {item.location}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-black text-slate-900">
                    {item.price}
                  </span>

                  <div className="flex items-center gap-1 text-xs font-bold text-purple-600 group-hover:gap-2 transition-all">
                    View First
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
