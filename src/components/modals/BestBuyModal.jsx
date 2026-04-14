import { X, Phone, MessageSquare, MapPin } from "lucide-react";

export default function BestBuyModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* MODAL CARD */}
      <div
        className="
          relative bg-white w-full max-w-lg 
          rounded-[2.5rem] 
          overflow-hidden shadow-2xl 
          animate-in zoom-in-95 duration-300
          z-10
        "
      >
        {/* IMAGE SECTION */}
        <div className="relative h-56 md:h-64">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-dark-orange hover:text-white transition-all active:scale-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-7 md:p-10">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className="text-[10px] font-black text-dark-orange uppercase tracking-[0.2em]">
                {item.type}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1 leading-tight">
                {item.title}
              </h3>
            </div>
            <p className="text-2xl font-black text-slate-900 whitespace-nowrap">
              {item.price}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2 text-slate-500 font-medium text-sm">
            <MapPin size={16} className="text-dark-orange" />
            {item.location}
          </div>

          <p className="mt-6 text-slate-600 text-sm leading-relaxed">
            {item.description}
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <a
              href="tel:+917699988876"
              className="flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-dark-orange transition-all active:scale-95"
            >
              <Phone size={14} /> Call Agent
            </a>
            <a
              href="https://wa.me/917699988876"
              className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95"
            >
              <MessageSquare size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}