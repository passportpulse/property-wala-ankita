import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { useState, useEffect } from "react";
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    description:
      "This premium 3BHK apartment offers modern living with a spacious balcony, 24/7 security, and proximity to major shopping hubs.",
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
    description:
      "High-visibility commercial space ideal for corporate offices or retail outlets in the heart of Durgapur's business district.",
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
    description:
      "A well-positioned residential plot in the peaceful neighborhood of Bidhannagar. Perfect for building your dream family home.",
  },
];

export default function FeaturedProperties() {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProperty ? "hidden" : "unset";
  }, [selectedProperty]);

  return (
    <Section>
      <Container>
        {/* COMPACT HEADER */}
        <Header
          tag="Curated Marketplace"
          title="Featured"
          highlight="Listings"
          subtitle="Handpicked properties with direct deal transparency."
          buttonText="Browse All"
          onButtonClick="/buy"
        />

        {/* PROPERTY GRID / MOBILE SWIPER */}
        <div className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto no-scrollbar pb-6 px-1 lg:px-0 snap-x snap-mandatory">
          {properties.map((item) => (
            <div
              key={item.id}
              className="
                snap-center shrink-0 
                w-70 lg:w-auto
                group bg-white rounded-3xl overflow-hidden 
                shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 
                border border-slate-100 transition-all duration-500
              "
            >
              {/* Image */}
              <div className="relative h-48 lg:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2 lg:px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-dark-orange">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Content */}
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

                {/* Details Bar */}
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

                {/* View Button */}
                <button
                  onClick={() => setSelectedProperty(item)}
                  className="w-full cursor-pointer py-3.5 bg-orange-50 border border-dark-orange group-hover:bg-linear-to-r group-hover:from-dark-orange group-hover:to-lighter-orange text-slate-900 group-hover:text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-95"
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
