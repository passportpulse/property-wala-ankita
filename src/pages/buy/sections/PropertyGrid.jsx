import { useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Sparkles,
  X,
  MessageSquare,
} from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

/* ---------------- MODAL ---------------- */

const PropertyDossier = ({ isOpen, onClose, property }) => {
  if (!isOpen || !property) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:text-coral-red"
        >
          <X size={20} />
        </button>

        {/* LEFT IMAGE */}
        <div className="lg:w-1/2 relative">
          <img
            src={property.img}
            className="w-full h-full object-cover"
            alt={property.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-10 flex flex-col justify-end">
            <h2 className="text-4xl font-black text-white uppercase">
              {property.title}
            </h2>
            <div className="flex items-center gap-2 text-warm-yellow text-[10px] font-bold uppercase mt-2">
              <MapPin size={14} /> {property.area}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:w-1/2 p-10">
          <p className="text-sm text-slate-500 mb-6">
            Verified property details, layout, valuation and documentation.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-6 bg-slate-50 rounded-2xl">
              <p className="text-[9px] font-black uppercase text-slate-400">
                Price
              </p>
              <p className="text-2xl font-black text-coral-red">
                ₹{property.price}
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <p className="text-[9px] font-black uppercase text-slate-400">
                Type
              </p>
              <p className="text-xl font-black text-slate-900">
                {property.tag}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/917699988876?text=${encodeURIComponent(
              `Hi Property Wala Bhaiya,

I'm interested in this property:

• Price: ₹${property.price}
• Type: ${property.tag}

Please share more details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-coral-red text-white py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest flex justify-center gap-2 hover:bg-soft-orange transition-all"
          >
            <MessageSquare size={16} /> Get Details on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

/* ---------------- MAIN GRID ---------------- */

export default function PropertyGrid({ activeTab }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const propertyData = {
    Flats: [
      demo("Dream Heritage", "City Center", "52.4 L", "3 BHK", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"),
      demo("Skyline Heights", "Bidhannagar", "65.0 L", "2 BHK", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"),
      demo("Elite Residency", "Benachity", "74.5 L", "3 BHK", "https://images.unsplash.com/photo-1505691938895-1758d7feb511"),
    ],
  };

  return (
    <>
      <Section className="py-20">
        <Container>
          {/* HEADER */}
          <div className="flex items-center gap-2 text-coral-red mb-12">
            <Sparkles size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Curated {activeTab} Inventory
            </span>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {propertyData[activeTab]?.map((item) => (
              <PropertyCard
                key={item.id}
                item={item}
                onClick={() => {
                  setSelectedProperty(item);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        </Container>
      </Section>

      <PropertyDossier
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={selectedProperty}
      />
    </>
  );
}

/* ---------------- HELPERS ---------------- */

function demo(title, area, price, tag, img) {
  return {
    id: title,
    title,
    area,
    price,
    tag,
    img,
    status: "Verified",
  };
}

const PropertyCard = ({ item, onClick }) => (
  <div className="group bg-white rounded-[3rem] border border-slate-100 overflow-hidden hover:-translate-y-2 transition-all">
    <div className="relative aspect-[4/3] m-4 overflow-hidden rounded-2xl">
      <img
        src={item.img}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        alt={item.title}
      />
      <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-xl text-[9px] font-black uppercase shadow-sm">
        {item.status}
      </span>
    </div>

    <div className="p-8">
      <p className="text-[10px] uppercase font-black text-soft-orange mb-1">
        {item.area}
      </p>
      <h3 className="text-xl font-black mb-6 group-hover:text-coral-red transition-colors">
        {item.title}
      </h3>

      <button
        onClick={onClick}
        className="w-full flex items-center justify-center gap-2 text-coral-red py-2.5 text-[11px] font-semibold uppercase tracking-wide border border-coral-red/50 rounded-xl hover:bg-coral-red hover:text-white transition-all duration-300 whitespace-nowrap"
      >
        View Details <ArrowUpRight size={14} />
      </button>
    </div>
  </div>
);
