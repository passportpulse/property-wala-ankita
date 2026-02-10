import { useState } from "react";
import {
  ShieldCheck,
  ArrowUpRight,
  Bed,
  Maximize2,
  MapPin,
  Sparkles,
  X,
  MessageSquare,
  Factory,
  Warehouse,
  Hospital,
  Hotel,
  TrendingUp,
} from "lucide-react";

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

        <div className="lg:w-1/2 relative">
          <img
            src={property.img}
            className="w-full h-full object-cover"
            alt={property.title}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent p-10 flex flex-col justify-end">
            <h2 className="text-4xl font-black text-white uppercase">
              {property.title}
            </h2>
            <div className="flex items-center gap-2 text-warm-yellow text-[10px] font-bold uppercase mt-2">
              <MapPin size={14} /> {property.area}
            </div>
          </div>
        </div>

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

          <button className="w-full bg-coral-red text-white py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest flex justify-center gap-2">
            <MessageSquare size={16} /> Get Details on WhatsApp
          </button>
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
      demo(
        "Dream Heritage",
        "City Center",
        "52.4 L",
        "3 BHK",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      ),
      demo(
        "Skyline Heights",
        "Bidhannagar",
        "65.0 L",
        "2 BHK",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      ),
      demo(
        "Elite Residency",
        "Benachity",
        "74.5 L",
        "3 BHK",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      ),
    ],

    Plots: [
      demo(
        "Greenwood Plots",
        "Muchipara",
        "18.0 L",
        "Residential",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      ),
      demo(
        "Sunrise Estate",
        "Fuljhore",
        "22.0 L",
        "Corner Plot",
        "https://www.jkcement.com/wp-content/uploads/2023/08/beautiful-landscape-with-small-village-1024x575.jpg",
      ),
      demo(
        "River View Land",
        "Andal",
        "30.0 L",
        "Open Plot",
        "https://d2kxmpreo9xzsw.cloudfront.net/PLOT8731109331/plot/uDJZI8E5.jpg",
      ),
    ],

    "House / Duplex": [
      demo(
        "Palm Villa",
        "City Center",
        "1.2 Cr",
        "Duplex",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      ),
      demo(
        "Green Nest",
        "Bamunara",
        "95.0 L",
        "Independent House",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      ),
      demo(
        "Urban Courtyard",
        "Benachity",
        "1.1 Cr",
        "Duplex",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      ),
    ],

    "Commercial Space": [
      demo(
        "Fortune Biz Hub",
        "Junction Mall",
        "1.2 Cr",
        "Office Space",
        "https://images.unsplash.com/photo-1497366216548-37526070297c",
      ),
      demo(
        "Trade Tower",
        "City Center",
        "95.0 L",
        "Retail",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      ),
      demo(
        "Corporate Point",
        "Benachity",
        "2.1 Cr",
        "IT Floor",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      ),
    ],

    Factory: [
      demo(
        "Industrial Shed",
        "Andal",
        "3.5 Cr",
        "Manufacturing",
        "https://www.m3mproperties.com/project_pics/m3m-industrial-plots-banner-34380.jpg",
      ),
      demo(
        "Steel Unit",
        "Panagarh",
        "4.2 Cr",
        "Heavy Industry",
        "https://realrupee.com/realestate-api/properties/3760736/images/3760766.jpg",
      ),
      demo(
        "Production Plant",
        "DPL Zone",
        "5.8 Cr",
        "Factory",
        "https://thumbs.dreamstime.com/b/aerial-view-large-power-plant-multiple-smokestacks-emitting-white-smoke-situated-rectangular-plot-surrounded-382297051.jpg",
      ),
    ],

    "Industrial Plots": [
      demo(
        "Logistics Land",
        "Panagarh",
        "1.6 Cr",
        "Industrial",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTHIsPxKgyDDY9JOPqQ_u0FcCF9PSYdtesg&s",
      ),
      demo(
        "Export Zone Plot",
        "Andal",
        "2.2 Cr",
        "SEZ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_X8B7Dj7rTbx_ARcRzUcYsnZ0jyR5k-EmA&s",
      ),
      demo(
        "Heavy Industry Plot",
        "DPL",
        "3.0 Cr",
        "Industrial",
        "https://cdrbharat.com/storage/brands/20240614063747.jpg",
      ),
    ],

    Warehouse: [
      demo(
        "Logistics Hub",
        "NH2",
        "2.8 Cr",
        "Warehouse",
        "https://www.squarefeetgroup.in/2/images/news/how-warehousing-and-logistics-hubs-are-impacting-neighbouring-residential-real-estate-markets-Jan-2022.jpg",
      ),
      demo(
        "Cold Storage",
        "Andal",
        "3.4 Cr",
        "Storage",
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      ),
      demo(
        "Distribution Center",
        "Panagarh",
        "4.1 Cr",
        "Warehouse",
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866",
      ),
    ],

    Hospital: [
      demo(
        "Care Hospital",
        "City Center",
        "6.5 Cr",
        "Multi-specialty",
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
      ),
      demo(
        "LifeCare Clinic",
        "Benachity",
        "2.8 Cr",
        "Clinic",
        "https://5.imimg.com/data5/SELLER/Default/2021/7/IC/VG/WK/913875/hospital-architect-services-500x500.jpg",
      ),
      demo(
        "Health Plaza",
        "Bidhannagar",
        "4.9 Cr",
        "Hospital",
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
      ),
    ],

    "Hotels / Resort": [
      demo(
        "Royal Stay",
        "City Center",
        "8.2 Cr",
        "Hotel",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      ),
      demo(
        "Green Valley Resort",
        "Andal",
        "12 Cr",
        "Resort",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ea/e9/87/lobby.jpg?w=900&h=500&s=1",
      ),
      demo(
        "Business Inn",
        "Benachity",
        "5.4 Cr",
        "Hotel",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      ),
    ],

    Investment: [
      demo(
        "Rental Block",
        "City Center",
        "2.4 Cr",
        "Yield Asset",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      ),
      demo(
        "Commercial Bundle",
        "NH2",
        "3.9 Cr",
        "ROI Property",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      ),
      demo(
        "Land Bank",
        "Andal",
        "1.8 Cr",
        "Long Term",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      ),
    ],
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-2 text-coral-red mb-12">
          <Sparkles size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Curated {activeTab} Inventory
          </span>
        </div>

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
      </main>

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
    <div className="relative aspect-4/3 m-4 overflow-hidden rounded-2xl">
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

      {/* Fixed View Details Button */}
      <button
        onClick={onClick}
        className="
          w-full 
          flex items-center justify-center gap-2
          text-coral-red 
          py-2.5
          text-[11px] font-semibold uppercase tracking-wide
          border border-coral-red/50 rounded-xl
          hover:bg-coral-red hover:text-white
          transition-all duration-300
          whitespace-nowrap
        "
      >
        View Details <ArrowUpRight size={14} />
      </button>
    </div>
  </div>
);
