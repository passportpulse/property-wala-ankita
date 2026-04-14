import { X, Phone } from "lucide-react";

export default function FeaturedPropertyModal({ property, onClose }) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-lg rounded-4xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full hover:bg-dark-orange hover:text-white transition-colors shadow-lg"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-black text-slate-900">
            {property.title}
          </h3>

          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            {property.description}
          </p>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 bg-dark-orange text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
              <Phone size={16} />
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
