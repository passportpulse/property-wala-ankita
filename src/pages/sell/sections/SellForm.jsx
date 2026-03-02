import React from "react";
import {
  MapPin,
  Wallet,
  Settings2,
  Ruler,
  LayoutGrid,
  ChevronRight,
  Camera,
  Video,
  X,
  Plus,
} from "lucide-react";

import { states, citiesInWB, placesInWB } from "../../../data/locations";

export default function SellForm({ formData, setFormData, onSubmit }) {
  const availablePlaces =
    formData && formData.city ? placesInWB[formData.city] || [] : [];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // --- Media Handlers ---
  const handleFileChange = (e, type) => {
    const files = Array.from(e.target.files);
    const currentMedia = formData[type] || [];

    const newMedia = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9),
    }));

    setFormData({ ...formData, [type]: [...currentMedia, ...newMedia] });
  };

  const removeMedia = (type, id) => {
    const filtered = formData[type].filter((item) => item.id !== id);
    setFormData({ ...formData, [type]: filtered });
  };

  const amenitiesList = [
    "Lift",
    "Gated Community",
    "Parking",
    "Power Backup",
    "WiFi",
    "AC",
    "Pet Allowed",
    "Purified Water",
  ];

  const isResidential = ["flat", "house", "duplex"].includes(
    formData?.type?.toLowerCase(),
  );

  return (
    <div className="max-w-4xl mx-auto px-2 pb-10">
      {/* HEADER */}
      <div className="relative mb-6 border-l-4 border-orange-500 pl-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
          Property Listing
        </span>

        <h2 className="text-2xl lg:text-4xl font-black text-slate-800">
          Post Your <span className="italic text-orange-500">Property</span>
        </h2>

        <p className="text-slate-500 text-xs lg:text-base max-w-md">
          List your property on Property Wala Bhaiya and connect directly with
          genuine buyers with verified listings and transparent dealings.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-5 lg:p-8 space-y-8">
          {/* LOCATION */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <MapPin size={14} /> Property Location
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* STATE */}
              <div className="bg-slate-50 p-3 rounded-2xl border">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  State
                </label>
                <select
                  className="w-full bg-transparent text-xs font-bold outline-none"
                  value={formData.state || "West Bengal"}
                  onChange={(e) => handleChange("state", e.target.value)}
                >
                  {states.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* CITY */}
              <div className="bg-slate-50 p-3 rounded-2xl border">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  City
                </label>
                <select
                  className="w-full bg-transparent text-xs font-bold outline-none"
                  value={formData.city || ""}
                  onChange={(e) => {
                    const newCity = e.target.value;
                    setFormData({
                      ...formData,
                      city: newCity,
                      loc: placesInWB[newCity]?.[0] || "",
                    });
                  }}
                >
                  <option value="">Select City</option>
                  {citiesInWB.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* AREA */}
              <div className="bg-slate-50 p-3 rounded-2xl border">
                <label className="text-[8px] font-black uppercase text-slate-400 block mb-1">
                  Area
                </label>
                <select
                  className="w-full bg-transparent text-xs font-bold outline-none"
                  value={formData.loc || ""}
                  onChange={(e) => handleChange("loc", e.target.value)}
                >
                  <option value="">Select Area</option>
                  {availablePlaces.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* PROPERTY PRICE */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <Wallet size={14} /> Expected Price
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border">
              <input
                type="number"
                placeholder="Enter Expected Price (₹)"
                value={formData.price || ""}
                onChange={(e) => handleChange("price", e.target.value)}
                className="w-full bg-transparent text-sm font-bold outline-none"
              />
            </div>
          </section>

          {/* AREA SIZE */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <Ruler size={14} /> Property Size
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border">
              <input
                type="number"
                placeholder="Total Area (Sq.ft)"
                value={formData.sqft || ""}
                onChange={(e) => handleChange("sqft", e.target.value)}
                className="w-full bg-transparent text-sm font-bold outline-none"
              />
            </div>
          </section>

          {/* PROPERTY DETAILS */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <Settings2 size={14} /> Property Details
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <select
                className="bg-slate-50 p-3 rounded-xl text-xs font-bold"
                value={formData.type || ""}
                onChange={(e) => handleChange("type", e.target.value)}
              >
                <option value="">Property Type</option>
                <option>Flat</option>
                <option>House</option>
                <option>Duplex</option>
                <option>Office</option>
                <option>Warehouse</option>
                <option>Retail Space</option>
                <option>Vacant Land</option>
              </select>

              {isResidential && (
                <select
                  className="bg-slate-50 p-3 rounded-xl text-xs font-bold"
                  value={formData.bed || ""}
                  onChange={(e) => handleChange("bed", e.target.value)}
                >
                  <option value="">BHK</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4 BHK</option>
                </select>
              )}

              <select
                className="bg-slate-50 p-3 rounded-xl text-xs font-bold"
                value={formData.fur || ""}
                onChange={(e) => handleChange("fur", e.target.value)}
              >
                <option value="">Furnishing</option>
                <option>Unfurnished</option>
                <option>Semi-Furnished</option>
                <option>Fully Furnished</option>
              </select>

              <select
                className="bg-slate-50 p-3 rounded-xl text-xs font-bold"
                value={formData.age || ""}
                onChange={(e) => handleChange("age", e.target.value)}
              >
                <option value="">Property Age</option>
                <option>0-1 Years</option>
                <option>1-5 Years</option>
                <option>5-10 Years</option>
                <option>10-20 Years</option>
              </select>
            </div>
          </section>

          {/* DESCRIPTION */}
          <section className="space-y-3">
            <textarea
              rows="3"
              placeholder="Property description"
              value={formData.desc || ""}
              onChange={(e) => handleChange("desc", e.target.value)}
              className="w-full border border-slate-200 rounded-xl p-3 text-sm resize-y"
            />
          </section>

          {/* AMENITIES */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <LayoutGrid size={14} /> Amenities
            </div>

            <div className="flex flex-wrap gap-2">
              {amenitiesList.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    const current = formData.amenities || [];
                    const next = current.includes(item)
                      ? current.filter((i) => i !== item)
                      : [...current, item];
                    handleChange("amenities", next);
                  }}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-colors ${
                    formData.amenities?.includes(item)
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white text-slate-500 border-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>
          {/* --- NEW MEDIA SECTION --- */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <Camera size={14} /> Photos & Videos
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Image Upload Trigger */}
              <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 hover:bg-orange-50 hover:border-orange-300 transition-all cursor-pointer group">
                <div className="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Plus size={16} className="text-orange-500" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase">
                  Add Photo
                </span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, "images")}
                />
              </label>

              {/* Video Upload Trigger */}
              <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 hover:bg-orange-50 hover:border-orange-300 transition-all cursor-pointer group">
                <div className="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Video size={16} className="text-orange-500" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase">
                  Add Video
                </span>
                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, "videos")}
                />
              </label>

              {/* Image Previews */}
              {formData.images?.map((img) => (
                <div
                  key={img.id}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
                >
                  <img
                    src={img.preview}
                    className="w-full h-full object-cover"
                    alt="preview"
                  />
                  <button
                    onClick={() => removeMedia("images", img.id)}
                    className="absolute top-1 right-1 bg-slate-900/80 text-white rounded-full p-1 hover:bg-red-500 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}

              {/* Video Previews */}
              {formData.videos?.map((vid) => (
                <div
                  key={vid.id}
                  className="relative aspect-square rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-100 shadow-sm"
                >
                  <Video size={24} className="text-white/40" />
                  <span className="absolute bottom-2 text-[8px] text-white/60 font-bold uppercase">
                    Video Added
                  </span>
                  <button
                    onClick={() => removeMedia("videos", vid.id)}
                    className="absolute top-1 right-1 bg-white text-slate-900 rounded-full p-1 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* SUBMIT */}
          <div className="flex justify-center pt-4">
            <button
              onClick={onSubmit}
              className="bg-orange-600 text-white px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-orange-700 transition-colors"
            >
              Post
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
