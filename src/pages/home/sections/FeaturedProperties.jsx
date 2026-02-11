import { useState, useEffect } from "react";
import { Bed, Bath, Maximize, MapPin, ArrowUpRight, X, Phone, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 1,
    type: "Apartment",
    title: "Luxury 3BHK in City Center",
    location: "City Center, Durgapur",
    price: "₹65 L",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=600&q=80",
    beds: 3,
    baths: 2,
    sqft: "1450",
    description: "This premium 3BHK apartment offers modern living with a spacious balcony, 24/7 security, and proximity to major shopping hubs.",
  },
  {
    id: 2,
    type: "Commercial",
    title: "Prime Office Space",
    location: "Suhatta Complex, Durgapur",
    price: "₹1.2 Cr",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    beds: 0,
    baths: 1,
    sqft: "2200",
    description: "High-visibility commercial space ideal for corporate offices or retail outlets in the heart of Durgapur's business district.",
  },
  {
    id: 3,
    type: "Land",
    title: "Residential Plot",
    location: "Bidhannagar, Durgapur",
    price: "₹45 L",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    beds: 0,
    baths: 0,
    sqft: "1800",
    description: "A well-positioned residential plot in the peaceful neighborhood of Bidhannagar. Perfect for building your dream family home.",
  },
];

export default function FeaturedProperties() {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProperty) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProperty]);

  return (
    <section className="pb-16 lg:pb-32 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="relative mb-16 border-l-4 border-coral-red pl-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
                Curated Marketplace
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">
                Featured <span className="text-coral-red">Listings</span>
              </h2>
              <p className="text-slate-500 max-w-md text-sm lg:text-base leading-relaxed font-medium">
                Verified high-yield properties handpicked for quality and direct deal transparency.
              </p>
            </div>
            
            <button onClick={() => navigate("/buy")} className="cursor-pointer flex items-center gap-2 group text-[11px] font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-100 pb-2 hover:border-coral-red transition-all">
              Browse All Inventory
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* PROPERTY GRID */}
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

                {/* Details Bar */}
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

                <button 
                  onClick={() => setSelectedProperty(item)}
                  className="w-full cursor-pointer py-4 bg-slate-50 group-hover:bg-linear-to-r group-hover:from-coral-red group-hover:to-soft-orange text-slate-900 group-hover:text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL COMPONENT */}
        {selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
              onClick={() => setSelectedProperty(null)}
            />
            
            {/* Modal Box */}
            <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full hover:bg-coral-red hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Modal Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={selectedProperty.image} 
                    alt={selectedProperty.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Content */}
                <div className="w-full md:w-1/2 p-8 space-y-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-coral-red">
                      {selectedProperty.type}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      {selectedProperty.title}
                    </h3>
                    <p className="text-xl font-bold text-coral-red mt-1">
                      {selectedProperty.price}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {selectedProperty.description || "No description provided."}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      <MapPin size={14} className="text-soft-orange" />
                      {selectedProperty.location}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-100">
                    <div className="text-center">
                      <p className="text-[10px] text-slate-400 font-black uppercase">Beds</p>
                      <p className="text-sm font-bold text-slate-900">{selectedProperty.beds || "—"}</p>
                    </div>
                    <div className="text-center border-x border-slate-100">
                      <p className="text-[10px] text-slate-400 font-black uppercase">Baths</p>
                      <p className="text-sm font-bold text-slate-900">{selectedProperty.baths || "—"}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-slate-400 font-black uppercase">Sqft</p>
                      <p className="text-sm font-bold text-slate-900">{selectedProperty.sqft}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-slate-900 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-coral-red transition-colors flex items-center justify-center gap-2">
                      <Phone size={14} /> Contact
                    </button>
                    <button className="flex-1 border-2 border-slate-100 text-slate-900 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-coral-red transition-colors flex items-center justify-center gap-2">
                      <Calendar size={14} /> Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}