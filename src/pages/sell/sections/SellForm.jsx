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
  ShieldCheck,
  FileText,
  Check,
} from "lucide-react";

import { states, citiesInWB, placesInWB } from "../../../data/locations";
import Header from "../../../components/Header";

export default function SellForm({ formData, setFormData, onSubmit }) {
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

  const availablePlaces =
    formData && formData.city ? placesInWB[formData.city] || [] : [];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // --- Media Handlers ---
  const handleFileChange = (e, type, id = null) => {
    const files = Array.from(e.target.files);

    // DOCUMENTS (single file)
    if (type === "documents" && id) {
      const file = files[0];
      if (!file) return;

      const preview = URL.createObjectURL(file);

      setFormData({
        ...formData,
        documents: {
          ...formData.documents,
          [id]: {
            file,
            name: file.name,
            type: file.type,
            preview,
          },
        },
      });

      return;
    }

    // IMAGES / VIDEOS
    const currentMedia = formData[type] || [];

    const newMedia = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9),
    }));

    setFormData({
      ...formData,
      [type]: [...currentMedia, ...newMedia],
    });
  };

  const removeMedia = (type, id) => {
    if (type === "documents") {
      const updatedDocs = { ...formData.documents };
      delete updatedDocs[id];

      setFormData({
        ...formData,
        documents: updatedDocs,
      });

      return;
    }

    const filtered = formData[type].filter((item) => item.id !== id);

    setFormData({
      ...formData,
      [type]: filtered,
    });
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
      <Header 
        tag="Property Listing"
        title="Post Your"
        highlight="Property"
        subtitle="List your property on Property Wala Bhaiya digital platform and connect directly with genuine buyers."
      />

      <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-5 lg:p-8 space-y-8">
          {/* LOCATION */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <MapPin size={14} /> Property Location
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* STATE */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
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
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
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
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 ">
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

          {/* AREA SIZE */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <Ruler size={14} /> Property Size
            </div>

            <div className="flex gap-3">
              {/* Area Input */}
              <div className="flex-1 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <input
                  type="number"
                  placeholder="Total Area"
                  value={formData.area || ""}
                  onChange={(e) => handleChange("area", e.target.value)}
                  className="w-full bg-transparent text-xs outline-none"
                />
              </div>

              {/* Unit Dropdown */}
              <div className="w-32 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <select
                  value={formData.unit || ""}
                  onChange={(e) => handleChange("unit", e.target.value)}
                  className="w-full bg-transparent text-xs outline-none"
                >
                  <option value="">Unit</option>
                  <option value="sqft">Sq.ft</option>
                  <option value="katha">Katha</option>
                  <option value="decimal">Decimal</option>
                  <option value="yard">Yard</option>
                  <option value="acre">Acre</option>
                </select>
              </div>
            </div>
          </section>

          {/* PROPERTY DETAILS */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <Settings2 size={14} /> Property Details
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <select
                className="bg-slate-50 p-3 rounded-xl text-xs font-bold border border-slate-200"
                value={formData.type || ""}
                onChange={(e) => handleChange("type", e.target.value)}
              >
                <option value="">Property Type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {isResidential && (
                <select
                  className="bg-slate-50 p-3 rounded-xl text-xs font-bold border border-slate-200"
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
                className="bg-slate-50 p-3 rounded-xl text-xs font-bold border border-slate-200"
                value={formData.fur || ""}
                onChange={(e) => handleChange("fur", e.target.value)}
              >
                <option value="">Furnishing</option>
                <option>Unfurnished</option>
                <option>Semi-Furnished</option>
                <option>Fully Furnished</option>
              </select>

              <select
                className="bg-slate-50 p-3 rounded-xl text-xs font-bold border border-slate-200"
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
          {/* LANDMARK */}
          <section className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Nearest Landmark
            </label>

            <input
              type="text"
              placeholder="Example: Near City Centre Mall / Metro Station"
              value={formData.landmark || ""}
              onChange={(e) => handleChange("landmark", e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 
               text-xs outline-none focus:border-orange-400 
               focus:ring-2 focus:ring-orange-100 transition"
            />
          </section>

          {/* DESCRIPTION */}
          <section className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Property Description
              </label>

              <span className="text-[10px] text-slate-400 font-bold">
                {(formData.desc || "").length}/500
              </span>
            </div>
            <textarea
              rows="5"
              maxLength={500}
              placeholder="Describe the property... (size, amenities, location benefits, etc.)"
              value={formData.desc || ""}
              onChange={(e) => handleChange("desc", e.target.value)}
              className="w-full border border-slate-200 rounded-2xl p-4 text-sm 
             outline-none focus:border-orange-400 focus:ring-2 
             focus:ring-orange-100 transition
             resize-y min-h-[140px] max-h-[500px] overflow-auto"
            />

            <p className="text-[10px] text-slate-400">
              Tip: Mention nearby schools, metro, hospitals, and property
              highlights.
            </p>
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
          {/* PROPERTY PRICE */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <Wallet size={14} /> Expected Price
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <input
                type="number"
                placeholder="Enter Expected Price (₹)"
                value={formData.price || ""}
                onChange={(e) => handleChange("price", e.target.value)}
                className="w-full bg-transparent text-xs outline-none"
              />
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
          {/* --- DOCUMENT VERIFICATION SECTION --- */}
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <ShieldCheck size={14} /> Upload Documents
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { label: "Parcha", id: "parcha" },
                { label: "Mutation", id: "mutation" },
                { label: "Site Plan", id: "sitePlan" },
                { label: "Sale Deed", id: "sellDeed" },
                { label: "Aadhar Card", id: "aadhar" },
                { label: "PAN Card", id: "pan" },
              ].map((doc) => {
                const fileData = formData.documents?.[doc.id];
                const isImage = fileData?.type?.startsWith("image/");

                return (
                  <div key={doc.id} className="relative group">
                    <label
                      className={`aspect-[4/3] flex flex-col items-center justify-center border rounded-xl cursor-pointer transition overflow-hidden
            ${
              fileData
                ? "border-green-200 bg-green-50"
                : "border-dashed border-slate-200 bg-slate-50 hover:border-orange-300 hover:bg-orange-50"
            }`}
                    >
                      {fileData ? (
                        <div className="w-full h-full flex flex-col items-center justify-center relative p-2">
                          {/* Preview */}
                          {isImage ? (
                            <img
                              src={fileData.preview}
                              alt={doc.label}
                              className="absolute inset-0 w-full h-full object-cover opacity-25"
                            />
                          ) : (
                            <FileText
                              size={24}
                              className="text-orange-500 mb-1"
                            />
                          )}

                          {/* File Name */}
                          <span className="text-[10px] font-semibold text-slate-700 text-center line-clamp-1 px-2 z-10">
                            {fileData.name}
                          </span>

                          {/* Uploaded Badge */}
                          <div className="flex items-center gap-1 mt-1 z-10">
                            <Check size={12} className="text-green-600" />
                            <span className="text-[9px] font-bold text-green-600 uppercase">
                              Uploaded
                            </span>
                          </div>

                          {/* Preview Button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(fileData.preview, "_blank");
                            }}
                            className="mt-2 text-[9px] font-semibold text-orange-600 bg-white px-2 py-1 rounded shadow-sm hover:bg-orange-50 z-10"
                          >
                            Preview
                          </button>

                          {/* Hover Change */}
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                            <span className="text-[10px] font-semibold bg-white px-2 py-1 rounded shadow">
                              Change File
                            </span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition">
                            <Plus size={16} className="text-orange-500" />
                          </div>
                          <span className="text-[10px] font-semibold text-slate-400 mt-2 uppercase text-center px-2">
                            {doc.label}
                          </span>
                        </>
                      )}

                      <input
                        type="file"
                        accept=".pdf,image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleFileChange(e, "documents", doc.id)
                        }
                      />
                    </label>

                    {/* Remove Button */}
                    {fileData && (
                      <button
                        type="button"
                        onClick={() => removeMedia("documents", doc.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600"
                      >
                        <X size={10} />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
          {/* --- PREMIUM PROMOTION PLANS --- */}
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                <ShieldCheck size={14} /> Choose Your Listing's Priority
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Select a plan to boost your visibility and get faster enquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                {
                  id: "free",
                  label: "Basic Free",
                  price: "₹0",
                  validity: "7 Days",
                  desc: "Basic listing in search results for casual sellers.",
                  features: ["Standard Search", "3 Photos", "Owner Contact"],
                },
                {
                  id: "best-deals",
                  label: "Best Deals",
                  price: "₹499",
                  validity: "30 Days",
                  badge: "Popular",
                  desc: "Featured in the 'Best Deals' collection for quick visibility.",
                  features: ["Verified Tag", "Social Media Blast", "10 Photos"],
                },
                {
                  id: "feature",
                  label: "Top Feature",
                  price: "₹999",
                  validity: "45 Days",
                  badge: "Fast Sale",
                  desc: "Pinned to the top of category pages to beat the competition.",
                  features: ["Top of Search", "Google Indexing", "HD Video"],
                },
                {
                  id: "high-value",
                  label: "High Value",
                  price: "₹1499",
                  validity: "60 Days",
                  badge: "Save 15%",
                  desc: "Priority for institutional investors and high-budget buyers.",
                  features: [
                    "Investor Network",
                    "Legal Advice",
                    "Email Blasts",
                  ],
                },
                {
                  id: "best-buy",
                  label: "Elite Buy",
                  price: "₹1999",
                  validity: "90 Days",
                  badge: "Best Value",
                  desc: "Maximum visibility + Homepage Banner for ultimate exposure.",
                  features: [
                    "Home Page Ads",
                    "Pro Photoshoot",
                    "Personal Manager",
                  ],
                },
              ].map((plan) => {
                const isSelected = formData.plan === plan.id;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => handleChange("plan", plan.id)}
                    className={`relative p-4 rounded-3xl border-2 text-left transition-all flex flex-col h-full group ${
                      isSelected
                        ? "border-orange-500 bg-orange-50 ring-4 ring-orange-100/50"
                        : "border-slate-100 bg-slate-50 hover:border-slate-200"
                    }`}
                  >
                    {/* Header Section */}
                    <div className="mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span
                          className={`text-[7px] font-black uppercase px-2 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-orange-500 text-white"
                              : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          {plan.validity}
                        </span>
                        {plan.badge && (
                          <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 uppercase tracking-tighter">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <div className="mt-2">
                        <span className="text-[10px] font-black text-slate-800 block uppercase tracking-tight">
                          {plan.label}
                        </span>
                        <span className="text-xl font-black text-orange-600 block">
                          {plan.price}
                        </span>
                      </div>
                    </div>

                    {/* The Descriptive Paragraph */}
                    <p className="text-[9px] text-slate-400 font-medium leading-relaxed mb-4 min-h-[24px]">
                      {plan.desc}
                    </p>

                    {/* Feature List - Single Line & Green Ticks */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mt-auto pt-3 border-t border-slate-200/60">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <div
                            className={`flex-shrink-0 p-0.5 rounded-full ${
                              isSelected
                                ? "bg-emerald-500 text-white"
                                : "bg-emerald-100 text-emerald-600"
                            }`}
                          >
                            <Check size={6} strokeWidth={6} />
                          </div>
                          <span className="text-[7.5px] font-bold text-slate-500 whitespace-nowrap leading-none uppercase tracking-tighter group-hover:text-slate-900 transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Selection Icon */}
                    {isSelected && (
                      <div className="absolute -top-2 -right-1">
                        <div className="bg-orange-500 text-white rounded-full p-1 shadow-lg ring-2 ring-white">
                          <Check size={10} strokeWidth={4} />
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2 pt-4 text-xs">
            <input
              type="checkbox"
              checked={formData.terms || false}
              onChange={(e) => handleChange("terms", e.target.checked)}
              className="mt-1 accent-orange-600"
            />

            <label className="text-slate-600 leading-relaxed">
              I agree to the{" "}
              <span className="text-orange-600 font-semibold cursor-pointer">
                Terms & Conditions
              </span>
            </label>
          </div>

          {/* Post Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={onSubmit}
              disabled={!formData.terms}
              className={`px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] 
    flex items-center gap-3 transition-colors
    ${
      formData.terms
        ? "bg-orange-600 text-white hover:bg-orange-700"
        : "bg-slate-300 text-slate-500 cursor-not-allowed"
    }`}
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
