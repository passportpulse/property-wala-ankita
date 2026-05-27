import { X, Phone, MessageCircle, Eye, ShieldCheck, MapPin, Bed, Bath, Maximize, CheckCircle2, Star, Calendar, Info, Share2, Heart, Armchair, Compass, Layers } from "lucide-react";
import PropertyStatusBadge from "../PropertyStatusBadge";
import { useState } from "react";
import ReportListingModal from "./ReportListingModal";

export default function FeaturedPropertyModal({ property, onClose }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  
  if (!property) return null;

  // Use dynamic images or fallback
  const images = property.images && property.images.length > 0 
    ? property.images 
    : [property.image || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"];

  const amenities = property.amenities && property.amenities.length > 0 
    ? property.amenities 
    : ["Basic Utilities"];

  const specs = [
    { label: "Built-up Area", value: property.sqft ? `${property.sqft}` : "N/A", icon: <Maximize size={16} /> },
    { label: "Bedrooms", value: property.beds || "N/A", icon: <Bed size={16} /> },
    { label: "Bathrooms", value: property.baths || "N/A", icon: <Bath size={16} /> },
    { label: "Facing", value: property.facing || "N/A", icon: <Compass size={16} /> },
    { label: "Furnishing", value: property.furnishing || "N/A", icon: <Armchair size={16} /> },
    { label: "Floor", value: property.floor || "N/A", icon: <Layers size={16} /> }
  ];

  const handleWhatsApp = () => {
    const phone = property.owner?.phone || "911234567890";
    const text = `Hi, I am interested in your property: ${property.title} listed on Property Wala.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCall = () => {
    const phone = property.owner?.phone || "911234567890";
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity duration-500 animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-5xl sm:rounded-[3rem] shadow-2xl flex flex-col lg:flex-row h-full sm:h-auto max-h-[100vh] sm:max-h-[92vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
        
        {/* CLOSE BUTTON - Top Right Floating */}
        <div className="absolute top-4 right-4 z-[160] flex gap-2">
            <button className="p-3 bg-white/90 backdrop-blur-md rounded-full text-slate-400 hover:text-red-500 shadow-xl transition-all active:scale-90">
                <Heart size={20} />
            </button>
            <button className="p-3 bg-white/90 backdrop-blur-md rounded-full text-slate-400 hover:text-dark-orange shadow-xl transition-all active:scale-90">
                <Share2 size={20} />
            </button>
            <button
                onClick={onClose}
                className="p-3 bg-slate-900 text-white rounded-full hover:bg-dark-orange transition-all shadow-xl active:scale-90"
            >
                <X size={20} />
            </button>
        </div>

        {/* REPORT BUTTON - Floating Left */}
        <div className="absolute top-4 left-4 z-[160]">
            <button 
              onClick={() => setIsReportModalOpen(true)}
              className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-red-600 text-[10px] font-black uppercase tracking-wider shadow-xl border border-red-100 hover:bg-red-500 hover:text-white transition-all active:scale-90 flex items-center gap-2"
            >
              🚩 Report
            </button>
        </div>

        {/* LEFT SIDE: Media Gallery */}
        <div className="lg:w-[55%] h-72 sm:h-96 lg:h-auto bg-slate-100 relative group">
          <img
            src={images[activeImage]}
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-700"
          />
          
          {/* Status Overlay */}
          <div className="absolute top-6 left-6 flex flex-col gap-3">
            <PropertyStatusBadge status={property.status} />
            {property.isStarSeller && (
              <div className="flex items-center gap-2 bg-yellow-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                 <Star size={14} className="fill-slate-900" /> Star Seller
              </div>
            )}
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
            {images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(i)}
                className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-dark-orange scale-110 shadow-lg' : 'border-transparent opacity-60'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Details Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-white flex flex-col">
          <div className="p-8 sm:p-12 space-y-10">
            {/* Header Info */}
            <div className="space-y-4">
               <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">{property.price}</p>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-800 uppercase tracking-tight leading-tight">{property.title}</h2>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-lg">
                        <Eye size={14} className="text-slate-400" />
                        <span className="text-[10px] font-black text-slate-900 uppercase">{property.views24h || 0} Views</span>
                    </div>
                    <span className="text-[8px] font-bold text-slate-400 uppercase mt-1">Activity in last 24h</span>
                  </div>
               </div>
               <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                 <MapPin className="w-4 h-4 text-dark-orange" /> {property.location}, {property.city}
               </p>
            </div>

            {/* Verification Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.isVerified && (
                <div className="flex items-center gap-4 p-5 rounded-3xl bg-blue-50 border border-blue-100 group hover:bg-blue-600 hover:text-white transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-inner group-hover:scale-110 transition-transform">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase leading-none">Bhaiya Verified</p>
                    <p className="text-[9px] font-bold uppercase opacity-60 mt-1">Trust Shield Active</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-emerald-50 border border-emerald-100 group hover:bg-emerald-600 hover:text-white transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-inner group-hover:scale-110 transition-transform">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase leading-none">Real-Time Update</p>
                  <p className="text-[9px] font-bold uppercase opacity-60 mt-1">Confirmed Recently</p>
                </div>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {specs.map((spec, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex items-center gap-2 text-slate-400 uppercase font-black text-[9px] tracking-widest">
                            {spec.icon} {spec.label}
                        </div>
                        <p className="text-sm font-black text-slate-800 uppercase">{spec.value}</p>
                    </div>
                ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                    <Info size={16} className="text-dark-orange" /> About this property
                </h4>
                <p className="text-sm font-medium text-slate-500 leading-relaxed whitespace-pre-line">
                    {property.description || `This premium ${property.type} is located in the heart of ${property.location}. Featuring modern architecture and ample natural light, it offers the perfect balance of luxury and comfort. Strategically located near schools, hospitals, and markets.`}
                </p>
            </div>

            {/* Amenities */}
            {amenities.length > 0 && (
              <div className="space-y-6">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Elite Amenities</h4>
                  <div className="grid grid-cols-2 gap-4">
                      {amenities.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                              <span className="text-xs font-bold text-slate-600 uppercase">{item}</span>
                          </div>
                      ))}
                  </div>
              </div>
            )}

            {/* Spacer for bottom actions */}
            <div className="h-20 sm:h-0" />
          </div>

          {/* Sticky Actions Footer */}
          <div className="sticky bottom-0 left-0 right-0 p-6 sm:p-10 bg-white/80 backdrop-blur-xl border-t border-slate-100 grid grid-cols-2 gap-4">
            <button onClick={handleCall} className="flex items-center justify-center gap-3 py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-[11px] uppercase tracking-widest hover:bg-dark-orange transition-all shadow-xl active:scale-95">
              <Phone size={18} /> Call Owner
            </button>
            <button onClick={handleWhatsApp} className="flex items-center justify-center gap-3 py-5 bg-emerald-500 text-white rounded-[1.5rem] font-black text-[11px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl active:scale-95">
              <MessageCircle size={18} /> WhatsApp
            </button>
          </div>
        </div>
      </div>

      <ReportListingModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
        propertyId={property._id} 
        propertyTitle={property.title}
      />
    </div>
  );
}
