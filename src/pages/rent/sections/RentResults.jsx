import React from "react";
import {
  ChevronLeft,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  Phone,
} from "lucide-react";

export default function RentResults({ formData, onBack }) {
const listings = [
  {
    id: 1,
    title: `Modern ${formData.bed} Flat for Rent`,
    location: `${formData.loc}, ${formData.city}`,
    sqft: "920 sqft",
    deposit: "2 Months",
    amenities: "Lift, Gym, AC, Parking",
    dealer: "Rajesh Kumar",
    phone: "+919876543210",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: `Premium ${formData.type} near Station`,
    location: "Salt Lake, Kolkata",
    sqft: "1150 sqft",
    deposit: "3 Months",
    amenities: "Security, Power Backup, Pool",
    dealer: "Suman Das",
    phone: "+919876543211",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Cozy 1 BHK near Metro",
    location: "New Town, Kolkata",
    sqft: "680 sqft",
    deposit: "1 Month",
    amenities: "Lift, Security, Parking",
    dealer: "Ankit Sharma",
    phone: "+919876543212",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Luxury 3 BHK Apartment",
    location: "Ballygunge, Kolkata",
    sqft: "1450 sqft",
    deposit: "3 Months",
    amenities: "Pool, Gym, Clubhouse, Parking",
    dealer: "Priya Sen",
    phone: "+919876543213",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "Affordable PG for Working Professionals",
    location: "Sector V, Salt Lake",
    sqft: "450 sqft",
    deposit: "1 Month",
    amenities: "WiFi, Food, Laundry",
    dealer: "Rahul Ghosh",
    phone: "+919876543214",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    title: "Spacious 2 BHK Family Apartment",
    location: "Dum Dum, Kolkata",
    sqft: "1020 sqft",
    deposit: "2 Months",
    amenities: "Lift, Parking, Security",
    dealer: "Amit Banerjee",
    phone: "+919876543215",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 7,
    title: "Fully Furnished Studio Apartment",
    location: "Park Street, Kolkata",
    sqft: "520 sqft",
    deposit: "2 Months",
    amenities: "AC, WiFi, Security",
    dealer: "Sneha Roy",
    phone: "+919876543216",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 8,
    title: "Modern Office Space",
    location: "Camac Street, Kolkata",
    sqft: "1350 sqft",
    deposit: "4 Months",
    amenities: "Conference Room, Lift, Security",
    dealer: "Vikram Agarwal",
    phone: "+919876543217",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 9,
    title: "Comfortable 2 BHK near Airport",
    location: "Kaikhali, Kolkata",
    sqft: "980 sqft",
    deposit: "2 Months",
    amenities: "Lift, Parking, Security",
    dealer: "Arjun Mehta",
    phone: "+919876543218",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 10,
    title: "Luxury Co-living Space",
    location: "Rajarhat, Kolkata",
    sqft: "700 sqft",
    deposit: "1 Month",
    amenities: "Gym, WiFi, Housekeeping",
    dealer: "Neha Kapoor",
    phone: "+919876543219",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=600",
  },
];


  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors"
        >
          <ChevronLeft size={16} /> Reconfigure
        </button>
        <div className="text-right">
          <span className="text-[8px] font-black text-orange-600 uppercase tracking-[0.2em] mb-1 block">
            Live Results
          </span>
          <h3 className="text-sm font-black text-slate-800 uppercase tracking-tighter">
            {formData.city} • {formData.bed}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {listings.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
          >
            <div className="flex flex-col sm:flex-row">
              {/* IMAGE */}
              <div className="relative sm:w-40 h-40 sm:h-auto overflow-hidden">
                <img
                  src={item.image}
                  alt="Property"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-full text-[8px] font-bold shadow">
                  {item.sqft}
                </div>

                <div className="absolute bottom-2 left-2">
                  <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-[8px] flex items-center gap-1">
                    <ShieldCheck size={10} /> Verified
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1 p-4 space-y-3">
                {/* TITLE + PRICE */}
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-sm font-black text-slate-900 leading-tight line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin size={10} className="text-orange-600" />
                      {item.location}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-black text-slate-900 leading-none">
                      ₹{(formData.maxBud - 1500).toLocaleString()}
                    </p>
                    <p className="text-[8px] text-slate-400 uppercase">/Month</p>
                  </div>
                </div>

                {/* INFO GRID */}
                <div className="grid grid-cols-2 gap-3 text-[10px]">
                  <div>
                    <p className="text-slate-300 uppercase font-bold">
                      Deposit
                    </p>
                    <p className="font-bold text-slate-700">{item.deposit}</p>
                  </div>

                  <div>
                    <p className="text-slate-300 uppercase font-bold">
                      Furnishing
                    </p>
                    <p className="font-bold text-slate-700">{formData.fur}</p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-slate-300 uppercase font-bold">
                      Amenities
                    </p>
                    <p className="font-bold text-slate-700 truncate">
                      {item.amenities}
                    </p>
                  </div>
                </div>

                {/* DEALER + ACTIONS */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-[9px] font-bold">
                      {item.dealer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <p className="text-[10px] font-bold text-slate-700">
                      {item.dealer}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* WHATSAPP */}
                    <a
                      href={`https://wa.me/${item.phone}`}
                      target="_blank"
                      className="p-2 rounded-xl border border-green-100 text-green-600 hover:bg-green-600 hover:text-white transition"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163..." />
                      </svg>
                    </a>

                    {/* CALL */}
                    <a
                      href={`tel:${item.phone}`}
                      className="p-2 rounded-xl border border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      <Phone size={12} />
                    </a>

                    {/* DETAILS */}
                    <button className="bg-slate-900 text-white px-3 py-2 rounded-xl text-[9px] font-bold uppercase flex items-center gap-1 hover:bg-orange-600">
                      Details <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
