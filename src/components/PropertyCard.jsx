import { Bed, Bath, Maximize, MapPin, Eye, ShieldCheck, AlertCircle, Star } from "lucide-react";
import PropertyStatusBadge from "./PropertyStatusBadge";

export default function PropertyCard({ item, onSelect, onReport }) {
  return (
    <div
      className={`
        group bg-white rounded-[2.5rem] overflow-hidden 
        transition-all duration-500 relative flex flex-col h-full
        ${
          item.isSpotlight
            ? "border-2 border-yellow-400 shadow-[0_20px_50px_-20px_rgba(250,204,21,0.3)] hover:shadow-[0_30px_60px_-15px_rgba(250,204,21,0.4)]"
            : "border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]"
        }
      `}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* TOP BADGES */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <PropertyStatusBadge status={item.status} />
          {item.isStarSeller && (
            <div className="flex items-center gap-2 bg-yellow-400 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl border border-yellow-500">
               <Star size={12} className="fill-slate-900" /> Star Seller
            </div>
          )}
        </div>

        {/* REPORT ACTION */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onReport(item);
          }}
          className="absolute top-4 right-4 z-20 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-red-500 hover:text-white transition-all active:scale-90 group/report"
          title="Report this listing"
        >
          <AlertCircle className="w-4 h-4 text-slate-400 group-hover/report:text-white transition-colors" />
        </button>

        {/* ONLINE STATUS */}
        {item.isOnline && (
          <div className="absolute top-16 right-4 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[8px] font-black uppercase text-emerald-600 tracking-tighter">Online</span>
          </div>
        )}

        {/* PROPERTY TYPE */}
        <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-xl shadow-lg border border-white/10">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
            {item.type}
          </span>
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-7 lg:p-9 flex flex-col flex-1 space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-3xl font-black text-slate-900 tracking-tighter">
              {item.price}
            </p>
            <h3 className="text-lg font-bold text-slate-700 leading-tight line-clamp-2 min-h-[3rem]">
              {item.title}
            </h3>
          </div>
          
          <div className="flex flex-col items-end gap-1 shrink-0">
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg text-slate-400">
              <Eye className="w-3.5 h-3.5" />
              <span className="text-[10px] font-black">{item.views24h}</span>
            </div>
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Views / 24h</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 flex-1 line-clamp-1">
            <MapPin className="w-4 h-4 text-dark-orange" />
            {item.location}
          </p>
          
          {item.isVerified && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-100 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[9px] font-black text-blue-600 uppercase tracking-tighter">Verified</span>
            </div>
          )}
        </div>

        {/* DETAILS ROW */}
        <div className="grid grid-cols-3 gap-4 py-5 border-y border-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-dark-orange/60" />
            <span>{item.beds > 0 ? `${item.beds} BHK` : "N/A"}</span>
          </div>

          <div className="flex items-center gap-2 border-x border-slate-50 px-4 justify-center">
            <Bath className="w-4 h-4 text-dark-orange/60" />
            <span>{item.baths > 0 ? `${item.baths} B` : "N/A"}</span>
          </div>

          <div className="flex items-center gap-2 justify-end">
            <Maximize className="w-4 h-4 text-dark-orange/60" />
            <span>{item.sqft} ft</span>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <button
          onClick={() => onSelect(item)}
          className={`w-full mt-auto py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all active:scale-95 shadow-xl
          ${
            item.isSpotlight
              ? "bg-yellow-400 text-slate-900 hover:bg-slate-900 hover:text-white shadow-yellow-100"
              : "bg-slate-900 text-white hover:bg-dark-orange hover:shadow-orange-100"
          }`}
        >
          View Full Details
        </button>
      </div>
    </div>
  );
}
