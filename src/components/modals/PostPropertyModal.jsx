import { X } from "lucide-react";
import { useState } from "react";

const propertyTypes = [
  "Flats",
  "Plots",
  "Joint Ventures",
  "House/Duplex",
  "Office/Retail",
  "Factory",
  "Industrial Plots",
  "Ware House",
  "Hospital",
  "Hotels/Resort",
  "Petrol Pump",
  "Institutes",
  "Investment",
];

export default function PostPropertyModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    title: "",
    type: "",
    location: "",
    googleLocation: "",
    price: "",
    purpose: "Sell",
    owner: "",
    phone: "",
    whatsapp: "",
    email: "",
    details: "",
    photos: [],
    video: null,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photos") {
      setForm({ ...form, photos: files });
    } else if (name === "video") {
      setForm({ ...form, video: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-500 flex items-start sm:items-center 
                justify-center bg-black/40 backdrop-blur-sm 
                px-3 pt-20 sm:pt-0">


      {/* overlay */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* modal */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg 
                      p-5 sm:p-8 shadow-2xl 
                      max-h-[90vh] overflow-y-auto">

        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl sm:text-2xl font-black uppercase mb-4 sm:mb-6">
          Property Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

          {/* title */}
          <input
            name="title"
            placeholder="Property Title"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm"
          />

          {/* type */}
          <select
            name="type"
            value={form.type}
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm"
          >
            <option value="">Select Property Type</option>
            {propertyTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* location */}
          <input
            name="location"
            placeholder="Location"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm"
          />

          {/* Google Map link */}
          <input
            name="googleLocation"
            placeholder="Google Map Location Link"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm"
          />

          {/* price */}
          <input
            name="price"
            placeholder="Expected Price"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm"
          />

          {/* purpose */}
          <select
            name="purpose"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm"
          >
            <option>Sell</option>
            <option>Rent</option>
          </select>

          {/* owner */}
          <input
            name="owner"
            placeholder="Owner Name"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm"
          />

          {/* phone */}
          <input
            name="phone"
            placeholder="Contact Number"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm"
          />

          {/* whatsapp */}
          <input
            name="whatsapp"
            placeholder="WhatsApp Number (optional)"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm"
          />

          {/* email */}
          <input
            name="email"
            placeholder="Email (optional)"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm"
          />

          {/* photo upload */}
          <div>
            <label className="text-xs font-semibold text-slate-600">
              Upload Property Photos
            </label>
            <input
              type="file"
              name="photos"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="w-full mt-1 text-sm"
            />
          </div>

          {/* video upload */}
          <div>
            <label className="text-xs font-semibold text-slate-600">
              Upload Property Video
            </label>
            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={handleChange}
              className="w-full mt-1 text-sm"
            />
          </div>

          {/* details (Resizable / Draggable) */}
          <textarea
            name="details"
            placeholder="Property Details"
            rows="3"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-2.5 sm:p-3 
                       text-sm resize-y min-h-[80px] max-h-[300px]"
          />

          {/* submit */}
          <button
            type="submit"
            className="w-full bg-dark-orange text-white py-2.5 sm:py-3 
                       rounded-xl font-bold uppercase tracking-wider 
                       hover:bg-slate-900 transition-all text-sm"
          >
            Submit Property
          </button>

        </form>
      </div>
    </div>
  );
}
