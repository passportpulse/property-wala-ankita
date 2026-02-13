import { X } from "lucide-react";
import { useState } from "react";

export default function PostPropertyModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    title: "",
    type: "",
    location: "",
    price: "",
    purpose: "Sell",
    owner: "",
    phone: "",
    whatsapp: "",
    email: "",
    details: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      {/* overlay click close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* modal */}
      <div className="relative bg-white rounded-4xl w-full max-w-lg p-8 shadow-2xl max-h-[90vh] overflow-y-auto">

        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* heading */}
        <h2 className="text-2xl font-black uppercase mb-6">
          Post Property
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* property title */}
          <input
            name="title"
            placeholder="Property Title"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          />

          {/* property type */}
          <select
            name="type"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          >
            <option value="">Property Type</option>
            <option>Flat</option>
            <option>Plot</option>
            <option>House</option>
            <option>Office</option>
            <option>Warehouse</option>
          </select>

          {/* location */}
          <input
            name="location"
            placeholder="Location"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          />

          {/* price */}
          <input
            name="price"
            placeholder="Expected Price"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          />

          {/* purpose */}
          <select
            name="purpose"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          >
            <option>Sell</option>
            <option>Rent</option>
          </select>

          {/* owner name */}
          <input
            name="owner"
            placeholder="Owner Name"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          />

          {/* phone */}
          <input
            name="phone"
            placeholder="Contact Number"
            required
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          />

          {/* whatsapp */}
          <input
            name="whatsapp"
            placeholder="WhatsApp Number (optional)"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          />

          {/* email */}
          <input
            name="email"
            placeholder="Email (optional)"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          />

          {/* details */}
          <textarea
            name="details"
            placeholder="Property Details (optional)"
            rows="3"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl p-3"
          />

          {/* submit */}
          <button
            type="submit"
            className="w-full bg-coral-red text-white py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-slate-900 transition-all"
          >
            Submit Property
          </button>

        </form>
      </div>
    </div>
  );
}
