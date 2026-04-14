import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { useState, useEffect } from "react";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";

import FeaturedPropertyModal from "../../../components/modals/FeaturedPropertyModal";
import Header from "../../../components/Header";

const properties = [
  {
    id: 1,
    type: "Apartment",
    title: "Luxury 3BHK in City Center",
    location: "City Center, Durgapur",
    price: "₹65 L",
    image:
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=600&q=80",
    beds: 3,
    baths: 2,
    sqft: "1450",
    isSpotlight: true,
  },
  {
    id: 2,
    type: "Commercial",
    title: "Prime Office Space",
    location: "Suhatta Complex, Durgapur",
    price: "₹1.2 Cr",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    beds: 0,
    baths: 1,
    sqft: "2200",
    isSpotlight: true,
  },
  {
    id: 3,
    type: "Land",
    title: "Residential Plot",
    location: "Bidhannagar, Durgapur",
    price: "₹45 L",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    beds: 0,
    baths: 0,
    sqft: "1800",
    isSpotlight: true,
  },
];

export default function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProperty ? "hidden" : "unset";
  }, [selectedProperty]);

  return (
    <Section>
      <Container>
        {/* HEADER */}
        <Header
          tag="Bhaiya’s Featured"
          title="Spotlight"
          highlight="Listings"
          subtitle="Don't miss the best of the best. Handpicked for maximum visibility."
          buttonText="Browse All"
          onButtonClick="/buy"
        />

        {/* PROPERTY GRID */}
        <div className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto no-scrollbar pb-6 px-1 lg:px-0 snap-x snap-mandatory">
          {properties.map((item) => (
            <div
              key={item.id}
              className={`
                snap-center shrink-0 w-70 lg:w-auto
                group bg-white rounded-3xl overflow-hidden 
                transition-all duration-500 relative
                
                ${
                  item.isSpotlight
                    ? "border border-yellow-400/60 shadow-[0_0_0_1px_rgba(250,204,21,0.25),0_10px_25px_-5px_rgba(250,204,21,0.15)] hover:shadow-[0_0_0_1px_rgba(250,204,21,0.35),0_15px_35px_-5px_rgba(250,204,21,0.25)]"
                    : "border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50"
                }
              `}
            >
              {/* IMAGE */}
              <div className="relative h-48 lg:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* TYPE TAG */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2 lg:px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-dark-orange">
                    {item.type}
                  </span>
                </div>

                {/* SPOTLIGHT BADGE */}
                {item.isSpotlight && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-slate-900 px-2 py-1 rounded-lg shadow-sm">
                    <span className="text-[8px] font-black uppercase tracking-wide">
                      Spotlight
                    </span>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-4 lg:p-6 space-y-4 lg:space-y-5">
                <div className="space-y-1">
                  <p className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight">
                    {item.price}
                  </p>

                  <h3 className="text-sm lg:text-lg font-bold text-slate-700 leading-tight line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-[9px] lg:text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-lighter-orange" />
                    {item.location}
                  </p>
                </div>

                {/* DETAILS */}
                <div className="flex items-center justify-between py-3 border-y border-slate-50 text-slate-500 text-[9px] lg:text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5 text-dark-orange/60" />
                    {item.beds > 0 ? `${item.beds} B` : "N/A"}
                  </div>

                  <div className="flex items-center gap-1 border-x border-slate-50 px-3">
                    <Bath className="w-3.5 h-3.5 text-dark-orange/60" />
                    {item.baths > 0 ? `${item.baths} B` : "N/A"}
                  </div>

                  <div className="flex items-center gap-1">
                    <Maximize className="w-3.5 h-3.5 text-dark-orange/60" />
                    {item.sqft} ft
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedProperty(item)}
                  className={`w-full cursor-pointer py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95
                  ${
                    item.isSpotlight
                      ? "bg-yellow-400 text-slate-900 hover:bg-yellow-300"
                      : "bg-orange-50 border border-dark-orange text-slate-900 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* MODAL */}
      <FeaturedPropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </Section>
  );
}
