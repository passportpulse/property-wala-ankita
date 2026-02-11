import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Camera,
  FileCheck,
  Megaphone,
  Handshake,
  X,
  MapPin,
  Tag,
} from "lucide-react";
import Cta from "../../components/Cta";

// --- FAQ COMPONENT ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span
          className={`font-bold text-sm uppercase tracking-wider transition-colors ${isOpen ? "text-coral-red" : "text-slate-700 group-hover:text-coral-red"}`}
        >
          {question}
        </span>
        {isOpen ? (
          <ChevronUp size={18} className="text-coral-red" />
        ) : (
          <ChevronDown size={18} className="text-slate-300" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default function Sell() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const steps = [
    {
      icon: <FileCheck />,
      title: "List Property",
      desc: "Share basic details and legal status of your asset.",
    },
    {
      icon: <Camera />,
      title: "Site Audit",
      desc: "Our team visits for professional photography & verification.",
    },
    {
      icon: <Megaphone />,
      title: "Premium Blast",
      desc: "We promote your property to 2Mn+ verified investors.",
    },
    {
      icon: <Handshake />,
      title: "Close Deal",
      desc: "Direct interaction with buyers. Zero broker interference.",
    },
  ];

  const peerDeals = [
    {
      area: "City Center",
      price: "₹1.2 Cr",
      type: "3 BHK Flat",
      time: "Sold in 4 Days",
    },
    { area: "Riverside", price: "₹85 L", type: "Plot", time: "Sold in 1 Week" },
    {
      area: "Industrial Zone",
      price: "₹4.5 Cr",
      type: "Warehouse",
      time: "Sold in 12 Days",
    },
  ];

  const faqs = [
    {
      question: "Is there a listing fee?",
      answer:
        "Basic listing is free. We only charge a nominal fee for premium verification and professional photography.",
    },
    {
      question: "How long does verification take?",
      answer:
        "Once you submit, our team usually conducts the site audit within 24 to 48 hours.",
    },
    {
      question: "Will my contact number be public?",
      answer:
        "No. Your privacy is paramount. We filter leads and only connect you with verified, serious buyers.",
    },
  ];

  const options = [
    "Flats",
    "Plots",
    "House/Duplex",
    "Commercial Space",
    "Factory",
    "Industrial Plots",
    "Ware House",
    "Hospital",
    "Hotels/Resort",
    "Investment",
  ];

  return (
    <div className="bg-white text-slate-900 relative">
      {/* --- LISTING MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="bg-white w-full max-w-xl rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl animate-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">
              Post <span className="text-coral-red">Property</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium mb-8 uppercase tracking-widest">
              Enter details to get started
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-coral-red/20"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-coral-red/20"
                />
              </div>

              {/* FIXED DROPDOWN LOGIC */}
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-coral-red/20 flex justify-between items-center cursor-pointer"
                >
                  <span className={selectedType ? "text-slate-900 font-bold" : "text-slate-400"}>
                    {selectedType || "Select Property Type"}
                  </span>
                  <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden z-20 max-h-60 overflow-y-auto">
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setSelectedType(option);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:bg-slate-50 hover:text-coral-red cursor-pointer transition-colors"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <textarea
                placeholder="Property Address & Key Details"
                rows="3"
                className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-coral-red/20"
              ></textarea>
              <button className="w-full bg-coral-red text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-lg shadow-coral-red/20 mt-4">
                Submit Listing Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left space-y-6">
              <p className="text-coral-red font-black text-[10px] uppercase tracking-[0.4em]">
                Direct-to-Buyer Marketplace
              </p>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-slate-900">
                Sell or Rent <br />
                <span className="text-slate-300">Effortlessly.</span>
              </h1>
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-coral-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-coral-red/20 hover:bg-slate-900 transition-all"
                >
                  Post Property Free
                </button>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                  Why 2Mn+ owners choose us
                </p>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="w-80 h-auto rounded-[3rem] border border-slate-100 overflow-hidden flex flex-col items-center justify-center p-10 text-center relative">
                <img
                  src="https://img.staticmb.com/mbcontent/images/crop/uploads/2025/7/trust-owned-property_0_1200.jpg.webp"
                  alt="background"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/80 via-white/50 to-white/40"></div>
                <div className="absolute top-0 right-0 p-4">
                  <CheckCircle2 className="text-coral-red" size={24} />
                </div>
                <span className="text-5xl font-black text-slate-900 mb-2 relative z-10">
                  2M+
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 leading-tight relative z-10">
                  Trusted Property Owners
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PEER DEALS SECTION --- */}
      <section className="py-24 px-6 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-xl border border-slate-100">
          <div className="lg:w-1/2 relative min-h-105">
            <img
              src="https://img.freepik.com/premium-photo/real-estate-agent-giving-house-keys-client-after-signing-contract_1421-7182.jpg"
              alt="Happy seller"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-white/60 via-white/50 to-transparent"></div>
            <div className="absolute bottom-12 left-12 max-w-sm">
              <div className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full inline-block text-xs font-semibold mb-4">
                Success Story
              </div>
              <h2 className="text-3xl font-bold text-slate-800 leading-tight mb-3">
                Closed in Record Time
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Property owners are achieving up to 15% better valuations
                compared to traditional listings.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white">
            <h2 className="text-2xl font-semibold text-slate-800 mb-10">
              Your Peers Secured{" "}
              <span className="text-emerald-600">Great Deals</span>
            </h2>
            <div className="space-y-5">
              {peerDeals.map((deal, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Tag size={18} />
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold text-sm">
                        {deal.type}
                      </p>
                      <p className="text-slate-500 text-xs flex items-center gap-1 mt-1">
                        <MapPin size={12} /> {deal.area}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-600 font-semibold text-lg">
                      {deal.price}
                    </p>
                    <p className="text-slate-400 text-xs mt-1">{deal.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-coral-red mb-2">
                Protocol
              </h2>
              <p className="text-3xl font-black tracking-tighter uppercase">
                How it works
              </p>
            </div>
            <p className="text-slate-500 text-sm font-medium max-w-xs">
              4 easy steps to list & promote your properties to our exclusive
              network.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-coral-red group-hover:bg-coral-red group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <div className="text-4xl font-black text-slate-100 mb-4 group-hover:text-coral-red/10 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tighter mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">
                Common <br /> <span className="text-slate-300">Doubts</span>
              </h2>
              <p className="text-slate-500 font-medium mb-8">
                Kindly find answers to some common doubts. We believe in 100%
                transparency with our sellers.
              </p>
              <div className="inline-flex items-center gap-4 p-6 bg-slate-50 rounded-4xl border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="text-coral-red" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">
                    Total Trust
                  </p>
                  <p className="text-sm font-bold">2M+ Satisfied Owners</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-sm">
                {faqs.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </div>
  );
}