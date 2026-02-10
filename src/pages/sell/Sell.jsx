import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
  Camera,
  FileCheck,
  Megaphone,
  Handshake,
} from "lucide-react";
import Cta from "../buy/sections/Cta";

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

  const faqs = [
    {
      question: "Is there a listing fee?",
      answer:
        "Basic listing is free. We only charge a nominal fee for premium verification and professional photography services.",
    },
    {
      question: "How long does verification take?",
      answer:
        "Once you submit your details, our team usually conducts the site audit within 24 to 48 hours.",
    },
    {
      question: "Will my contact number be public?",
      answer:
        "No. Your privacy is paramount. We filter leads and only connect you with verified, serious buyers.",
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-24 px-6 border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left space-y-6">
              {/* Consistency: Matching your sub-header style */}
              <p className="text-coral-red font-black text-[10px] uppercase tracking-[0.4em]">
                Direct-to-Buyer Marketplace
              </p>

              {/* Consistency: Matching your navbar/grid heading style */}
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-slate-900">
                Sell or Rent <br />
                <span className="text-slate-300">Effortlessly.</span>
              </h1>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button className="bg-coral-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-coral-red/20 hover:bg-slate-900 transition-all">
                  Post Property Free
                </button>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                  Why 2Mn+ owners choose us
                </p>
              </div>
            </div>

            {/* Visual Trust Element */}
            <div className="hidden lg:block relative">
  <div className="w-80 h-auto rounded-[3rem] border border-slate-100 overflow-hidden flex flex-col items-center justify-center p-10 text-center relative">
    
    {/* Background Image */}
    <img
      src="https://img.staticmb.com/mbcontent/images/crop/uploads/2025/7/trust-owned-property_0_1200.jpg.webp"
      alt="background"
      className="absolute inset-0 w-full h-full object-cover opacity-90"
    />

    {/* Optional linear overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-white/80 via-white/50 to-white/40"></div>

    {/* Icon */}
    <div className="absolute top-0 right-0 p-4">
      <CheckCircle2 className="text-coral-red" size={24} />
    </div>

    {/* Text */}
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
                  <p className="text-sm font-bold">2Mn+ Satisfied Owners</p>
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
