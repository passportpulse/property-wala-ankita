import React from "react";
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from "lucide-react";

const properties = [
  {
    id: 1,
    type: "Apartment",
    title: "Luxury 3BHK in City Center",
    location: "City Center, Durgapur",
    price: "₹65,00,000",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=600&q=80",
    beds: 3,
    baths: 2,
    sqft: "1450",
  },
  {
    id: 2,
    type: "Commercial",
    title: "Prime Office Space",
    location: "Suhatta Complex, Durgapur",
    price: "₹1,20,00,000",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    beds: 0,
    baths: 1,
    sqft: "2200",
  },
  {
    id: 3,
    type: "Land",
    title: "Residential Plot",
    location: "Bidhannagar, Durgapur",
    price: "₹45,00,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    beds: 0,
    baths: 0,
    sqft: "1800",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-24 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SLEEK PROFESSIONAL HEADER */}
        <div className="relative mb-16 border-l-4 border-coral-red pl-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Curated Marketplace
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">
                Featured <span className="text-coral-red">Listings</span>
              </h2>
              <p className="text-slate-500 max-w-md text-sm lg:text-base leading-relaxed font-medium">
                Verified high-yield properties handpicked for quality and direct deal transparency.
              </p>
            </div>
            
            <button className="flex items-center gap-2 group text-[11px] font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-100 pb-2 hover:border-coral-red transition-all">
              Browse All Inventory
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Property Grid - Your Layout Maintained */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-100 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-[10px] font-black uppercase tracking-widest text-coral-red">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 space-y-5">
                <div className="space-y-1">
                  <p className="text-2xl font-black text-slate-900 tracking-tight">
                    {item.price}
                  </p>
                  <h3 className="text-lg font-bold text-slate-700 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-soft-orange" /> {item.location}
                  </p>
                </div>

                {/* Property Details Bar */}
                <div className="flex items-center justify-between py-4 border-t border-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-coral-red/60" /> {item.beds > 0 ? `${item.beds} Bed` : "N/A"}
                  </div>
                  <div className="flex items-center gap-1.5 border-x border-slate-50 px-4">
                    <Bath className="w-4 h-4 text-coral-red/60" /> {item.baths > 0 ? `${item.baths} Bath` : "N/A"}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize className="w-4 h-4 text-coral-red/60" /> {item.sqft} sqft
                  </div>
                </div>

                {/* Final Button with Clean Brand Gradient */}
                <button className="w-full py-4 bg-slate-50 group-hover:bg-linear-to-r group-hover:from-coral-red group-hover:to-soft-orange text-slate-900 group-hover:text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}