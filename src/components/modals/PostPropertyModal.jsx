import { X, Camera, Video, MapPin, IndianRupee, User, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

const propertyTypes = ["Flats", "Plots", "Joint Ventures", "House/Duplex", "Office/Retail", "Factory", "Industrial Plots", "Ware House", "Hospital", "Hotels/Resort", "Petrol Pump", "Institutes", "Investment"];

export default function PostPropertyModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    title: "", type: "", location: "", googleLocation: "", price: "",
    purpose: "Sell", owner: "", phone: "", whatsapp: "", email: "", details: "",
    photos: [], video: null,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({ ...prev, [name]: files ? (name === "photos" ? files : files[0]) : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-sm p-0 sm:p-4">
      {/* Background Overlay */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-lg rounded-t-[2.5rem] sm:rounded-[2rem] shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-300">
        
        {/* Header - Sticky */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-black text-slate-800 leading-none">Post Property</h2>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold">Bhaiya Property Solutions</p>
          </div>
          <button onClick={onClose} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-black transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 custom-scrollbar">
          
          {/* Section: Basic Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-dark-orange mb-1">
              <div className="h-1 w-4 bg-dark-orange rounded-full"></div>
              <span className="text-[11px] font-black uppercase tracking-wider">Property Basics</span>
            </div>
            
            <input name="title" placeholder="Property Title (e.g. 3BHK Flat in City Center)" required onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-dark-orange/20 outline-none" />
            
            <div className="grid grid-cols-2 gap-3">
              <select name="type" value={form.type} required onChange={handleChange}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-dark-orange/20">
                <option value="">Type</option>
                {propertyTypes.map((t, i) => <option key={i} value={t}>{t}</option>)}
              </select>
              <select name="purpose" onChange={handleChange}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-dark-orange/20">
                <option>Sell</option>
                <option>Rent</option>
              </select>
            </div>
          </div>

          {/* Section: Location & Price */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-dark-orange mb-1">
              <div className="h-1 w-4 bg-dark-orange rounded-full"></div>
              <span className="text-[11px] font-black uppercase tracking-wider">Location & Pricing</span>
            </div>
            
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-3.5 text-slate-400" />
              <input name="location" placeholder="Area / Landmark" required onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-dark-orange/20" />
            </div>

            <div className="relative">
              <IndianRupee size={16} className="absolute left-3 top-3.5 text-slate-400" />
              <input name="price" placeholder="Expected Price" required onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-dark-orange/20" />
            </div>
          </div>

          {/* Section: Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-dark-orange mb-1">
              <div className="h-1 w-4 bg-dark-orange rounded-full"></div>
              <span className="text-[11px] font-black uppercase tracking-wider">Owner Contact</span>
            </div>
            
            <div className="relative">
              <User size={16} className="absolute left-3 top-3.5 text-slate-400" />
              <input name="owner" placeholder="Owner Name" required onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-dark-orange/20" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-3.5 text-slate-400" />
                <input name="phone" placeholder="Phone" required onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 pl-9 text-xs outline-none focus:ring-2 focus:ring-dark-orange/20" />
              </div>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-3 top-3.5 text-slate-400" />
                <input name="whatsapp" placeholder="WhatsApp" onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 pl-9 text-xs outline-none focus:ring-2 focus:ring-dark-orange/20" />
              </div>
            </div>
          </div>

          {/* Section: Media Uploads */}
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-200 rounded-2xl hover:bg-orange-50 hover:border-dark-orange transition-all cursor-pointer group">
              <Camera size={24} className="text-slate-400 group-hover:text-dark-orange mb-1" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Add Photos</span>
              <input type="file" name="photos" multiple accept="image/*" onChange={handleChange} className="hidden" />
            </label>

            <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-200 rounded-2xl hover:bg-orange-50 hover:border-dark-orange transition-all cursor-pointer group">
              <Video size={24} className="text-slate-400 group-hover:text-dark-orange mb-1" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Add Video</span>
              <input type="file" name="video" accept="video/*" onChange={handleChange} className="hidden" />
            </label>
          </div>

          {/* Details Area */}
          <textarea name="details" placeholder="Tell Bhaiya more about your property (Specific features, nearby landmarks, etc.)" rows="3" onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-dark-orange/20 min-h-[120px]" />
        </form>

        {/* Footer - Static */}
        <div className="p-5 border-t border-slate-100 bg-white">
          <button type="submit" onClick={handleSubmit}
            className="w-full bg-dark-orange text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-orange-200 hover:bg-slate-900 active:scale-95 transition-all text-sm">
            Post Listing Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Add this to your Global CSS for a cleaner look
/* .custom-scrollbar::-webkit-scrollbar { width: 4px; }
   .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; } */