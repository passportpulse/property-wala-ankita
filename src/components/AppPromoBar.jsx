import { X, Star } from "lucide-react";
import logo from "../assets/logo_img.png";

export default function AppPromoBar({ show, onClose }) {

  if (!show) return null; // when closed, nothing renders

  return (
    <div className="fixed top-0 left-0 w-full z-[1000] md:hidden animate-slideDown">
      <div className="flex items-center justify-between bg-white shadow-md px-3 py-2 border-b">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-coral-red flex items-center justify-center rounded-sm p-1">
            <img
              src={logo}
              alt="Property Wala Bhaiya"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center leading-tight">
            <p className="text-[10px] font-semibold text-slate-800 whitespace-nowrap">
              Property Wala Bhaiya
            </p>
            <div className="flex items-center gap-1 text-[9px] text-slate-500">
              <Star size={10} className="text-orange-500 fill-orange-500" />
              <span>4.8</span>
              <span>|</span>
              <span>1Cr+ Downloads</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1">
          <button className="bg-coral-red text-white text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap">
            Open App
          </button>
          <button onClick={onClose}>
            <X size={14} className="text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
