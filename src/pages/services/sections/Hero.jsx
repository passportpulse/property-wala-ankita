import { useState } from "react";
import Header from "../../../components/Header";
import { Shield, ChevronDown, ArrowRight, Home } from "lucide-react"; // Added Home icon

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

      {/* CORE CARD - NEW HOME SERVICE BUNDLE */}
      <div className="mt-10 bg-orange-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <button
          onClick={() => setCoreOpen(!coreOpen)}
          className="w-full flex justify-between items-center p-5 lg:p-8 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex p-2 bg-dark-orange text-white rounded-lg shadow-md shadow-orange-200">
              <Home size={20} />
            </div>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-dark-orange bg-white px-2 py-0.5 rounded border border-orange-100">
                🏷️ High-Value Package
              </span>
              <h2 className="text-sm lg:text-xl font-extrabold mt-1 text-slate-900">
                The "New Home" Service Bundle
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
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            coreOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 lg:px-8 pb-8 border-t border-slate-100 pt-6">
            <p className="text-xs lg:text-sm text-slate-500 font-medium mb-6 italic">
              "Combine these with your existing services for a high-value
              package:"
            </p>

            <h3 className="text-sm lg:text-base font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
              <span className="w-2 h-2 bg-dark-orange rounded-full"></span>
              The "Bhumipujan to Grah Pravesh" Pack
            </h3>

            {/* STEPS LIST */}
            <div className="space-y-0 ml-1">
              {[
                {
                  step: "01",
                  title: "Architectural Map & Sanction Support",
                  desc: "Foundational planning and legal approvals.",
                },
                {
                  step: "02",
                  title: "Structural Audit during construction",
                  desc: "Expert oversight to ensure building safety.",
                },
                {
                  step: "03",
                  title: "Full Interior Design & Wardrobe installation",
                  desc: "Turning a house into a functional home.",
                },
                {
                  step: "04",
                  title: "Final Vastu Audit before moving in",
                  desc: "Ensuring energy alignment for your new start.",
                },
              ].map((item, idx, array) => (
                <div
                  key={idx}
                  className="group flex gap-5 relative pb-8 last:pb-0"
                >
                  {/* Vertical Connector Line with Gradient */}
                  {idx !== array.length - 1 && (
                    <div className="absolute left-[15px] top-9 w-[2px] h-[calc(100%-32px)] bg-gradient-to-b from-orange-200 to-transparent group-hover:from-dark-orange transition-colors duration-500"></div>
                  )}

                  {/* Step Indicator */}
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:text-dark-orange group-hover:border-dark-orange group-hover:shadow-orange-100 transition-all duration-300 z-10">
                      {item.step}
                    </div>
                    {/* Subtle glow effect behind active step */}
                    <div className="absolute inset-0 bg-dark-orange/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col pt-1">
                    <h4 className="text-xs lg:text-base font-bold text-slate-800 group-hover:text-dark-orange transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-[11px] lg:text-xs text-slate-500 mt-1 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BENEFIT SECTION */}
            <div className="mt-8 p-4 bg-white rounded-xl border border-orange-100 border-l-4 border-l-dark-orange">
              <p className="text-xs lg:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-dark-orange">
                  Bundle Benefit:
                </span>{" "}
                A single point of contact (Bhaiya) for the entire 6–12 month
                journey.
              </p>
            </div>

            <a
              href="tel:+917699988876"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-dark-orange text-white text-[11px] font-bold rounded-xl shadow-lg shadow-orange-100 active:scale-95 transition-transform"
            >
              Consult with Bhaiya <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
