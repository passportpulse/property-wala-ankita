import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ChevronLeft,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  Phone,
  X,
  Maximize2,
  CheckCircle2,
  Search
} from "lucide-react";

// --- SUB-COMPONENT: DETAILED MODAL ---
const PropertyDetailsModal = ({ open, onClose, property }) => {
  if (!open || !property) return null;

  const propertyImage = property.images?.[0] || property.image || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600";
  const propertyPrice = property.price || (property.numericPrice ? `₹${property.numericPrice.toLocaleString()}` : "₹ --");
  const propertyOwnerName = property.owner?.name || property.dealer || "Owner";
  const propertyPhone = property.owner?.phone || property.phone || "+917699988876";
  const amenitiesList = Array.isArray(property.amenities) 
    ? property.amenities 
    : (typeof property.amenities === "string" ? property.amenities.split(/,\s*/) : []);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur p-2 rounded-full hover:bg-white transition-colors"
        >
          <X size={20} className="text-slate-800" />
        </button>

        <div className="flex flex-col">
          {/* Main Image */}
          <div className="h-64 w-full relative">
            <img src={propertyImage} alt={property.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              Verified Listing
            </div>
          </div>

          <div className="p-6 lg:p-10 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">{property.title}</h2>
                <p className="flex items-center gap-1 text-slate-500 font-medium mt-1">
                  <MapPin size={16} className="text-orange-600" /> {property.location}, {property.city}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-slate-900">{propertyPrice}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Per Month</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-100">
              <div className="space-y-1">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Area</p>
                <p className="font-bold text-slate-800 flex items-center gap-1"><Maximize2 size={12}/> {property.sqft || "N/A"}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Deposit</p>
                <p className="font-bold text-slate-800">{property.deposit || "2 Months"}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Owner/Dealer</p>
                <p className="font-bold text-slate-800">{propertyOwnerName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Status</p>
                <p className="font-bold text-green-600 flex items-center gap-1"><CheckCircle2 size={12}/> Ready</p>
              </div>
            </div>

            {amenitiesList.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Amenities & Features</h4>
                <div className="flex flex-wrap gap-2">
                  {amenitiesList.map((amenity) => (
                    <span key={amenity} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {property.description && (
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Description</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{property.description}</p>
              </div>
            )}

            <div className="pt-4 flex gap-3">
              <a 
                href={`tel:${propertyPhone}`}
                className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest text-center hover:bg-slate-800 transition shadow-lg shadow-slate-200"
              >
                Call Dealer
              </a>
              <a 
                href={`https://wa.me/${propertyPhone}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest text-center hover:bg-green-600 transition shadow-lg shadow-green-100"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function RentResults({ formData, onBack }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/properties`, {
          params: {
            city: formData.city,
            location: formData.loc,
            listingType: "rent",
            type: formData.type,
            beds: formData.bed,
            minPrice: formData.minBud,
            maxPrice: formData.maxBud
          }
        });
        setListings(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rent properties:", error);
        setLoading(false);
      }
    };

    fetchListings();
  }, [formData]);

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
            {formData.city} • {formData.bed || "All BHK"}
          </h3>
        </div>
      </div>

      {loading ? (
        <div className="py-32 flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-dark-orange border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Loading Matches...</p>
        </div>
      ) : listings.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {listings.map((item) => {
            const itemImage = item.images?.[0] || item.image || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600";
            const itemPrice = item.price || (item.numericPrice ? `₹${item.numericPrice.toLocaleString()}` : "₹ --");
            const itemOwnerName = item.owner?.name || item.dealer || "Owner";
            const itemPhone = item.owner?.phone || item.phone || "+917699988876";

            return (
              <div
                key={item._id || item.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* IMAGE */}
                  <div className="relative sm:w-48 h-48 sm:h-auto overflow-hidden">
                    <img
                      src={itemImage}
                      alt="Property"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-full text-[8px] font-bold shadow">
                      {item.sqft || "N/A SQFT"}
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-[8px] flex items-center gap-1 font-bold">
                        <ShieldCheck size={10} /> Verified
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 p-5 space-y-4">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="text-sm font-black text-slate-900 leading-tight line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                          <MapPin size={10} className="text-orange-600" />
                          {item.location}, {item.city}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black text-slate-900 leading-none">
                          {itemPrice}
                        </p>
                        <p className="text-[8px] text-slate-400 uppercase mt-1">/Month</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-[10px] py-2 border-y border-slate-50">
                      <div>
                        <p className="text-slate-400 uppercase font-bold text-[8px]">Deposit</p>
                        <p className="font-bold text-slate-700">{item.deposit || "2 Months"}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 uppercase font-bold text-[8px]">Furnishing</p>
                        <p className="font-bold text-slate-700">{item.furnishing || "Semi-Furnished"}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-[9px] font-bold">
                          {itemOwnerName.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <p className="text-[10px] font-bold text-slate-700">{itemOwnerName}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* WHATSAPP */}
                        <a
                          href={`https://wa.me/${itemPhone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl border border-green-100 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center"
                        >
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.969c0 2.112.552 4.172 1.597 5.977L0 24l6.163-1.617a11.83 11.83 0 005.883 1.562h.004c6.604 0 11.967-5.363 11.969-11.969 0-3.201-1.242-6.21-3.498-8.466z"/>
                          </svg>
                        </a>

                        {/* CALL */}
                        <a
                          href={`tel:${itemPhone}`}
                          className="p-2 rounded-xl border border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                        >
                          <Phone size={14} />
                        </a>

                        {/* DETAILS BUTTON - Opens the Modal */}
                        <button
                          onClick={() => setSelectedProperty(item)}
                          className="bg-slate-900 text-white px-3 py-2 rounded-xl text-[9px] font-bold uppercase flex items-center gap-1 hover:bg-orange-600 transition shadow-sm shadow-slate-200"
                        >
                          Details <ArrowUpRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-32 flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 border-2 border-dashed border-slate-200">
            <Search size={40} />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">No Matches Found</h3>
            <p className="text-sm text-slate-400 font-medium max-w-xs mx-auto">We couldn't find any rental listings matching your filters. Try widening your budget or area.</p>
          </div>
          <button 
            onClick={onBack}
            className="px-10 py-4 bg-dark-orange text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl"
          >
            Reconfigure Filters
          </button>
        </div>
      )}

      {/* MODAL COMPONENT */}
      <PropertyDetailsModal
        open={!!selectedProperty}
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </>
  );
}
