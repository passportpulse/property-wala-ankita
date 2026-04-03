import { useState } from "react";
import Header from "../../../components/Header";
import { Shield, ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const [coreOpen, setCoreOpen] = useState(true);
  return (
    <>
      {/* HEADER */}
      <Header
        tag="Professional Infrastructure"
        title="Our"
        highlight="Services"
        subtitle="Scale your business without increasing your stress."
        buttonText=" Login to avail services"
        onButtonClick="/dashboard"
      />

      {/* CORE CARD (UNCHANGED) */}
      <div className="mt-10 bg-orange-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <button
          onClick={() => setCoreOpen(!coreOpen)}
          className="w-full flex justify-between items-center p-5 lg:p-8 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex p-2 bg-dark-orange text-white rounded-lg">
              <Shield size={20} />
            </div>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-dark-orange">
                Premium Service
              </span>
              <h2 className="text-sm lg:text-xl font-bold mt-0.5 text-slate-900">
                End-to-End Compliance
              </h2>
            </div>
          </div>

          <ChevronDown
            size={18}
            className={`transition-transform duration-500 ${
              coreOpen ? "rotate-180 text-dark-orange" : "text-slate-400"
            }`}
          />
        </button>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            coreOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 lg:px-8 pb-6 border-t border-slate-50 pt-4">
            <p className="text-xs lg:text-base text-slate-600 leading-relaxed italic">
              "Complete building plan approvals, licences, mutation processing,
              and all statutory compliance requirements handled by experts."
            </p>

            <a
              href="tel:+917699988876"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-dark-orange text-white text-[11px] font-bold rounded-lg"
            >
              Call Experts <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
