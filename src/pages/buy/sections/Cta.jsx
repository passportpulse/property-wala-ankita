import { ArrowUpRight, Phone, Landmark } from "lucide-react";
export default function Cta() {
  return (
    <>
      {/* 3. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative bg-white border border-slate-100 rounded-[3rem] p-8 lg:p-16 overflow-hidden group shadow-xs">
          {/* Clean, subtle background element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-coral-red/3 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side: Professional Hook */}
            <div className="max-w-xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-coral-red"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-coral-red">
                  Priority Concierge
                </span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none uppercase">
                Private{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">
                  Showings
                </span>{" "}
                <br />
                On Your Schedule.
              </h3>

              <p className="text-slate-500 font-medium text-base lg:text-lg max-w-md leading-relaxed">
                Skip the paperwork. Connect directly with Property Wala Bhaiya
                to arrange a private walkthrough of Durgapur's most exclusive
                listings.
              </p>
            </div>

            {/* Right Side: Sophisticated Input Group */}
            <div className="w-full lg:w-auto">
              <div className="bg-slate-50 p-3 rounded-[2.5rem] border border-slate-100 flex flex-col sm:flex-row items-center gap-3 shadow-inner">
                <div className="flex items-center gap-3 px-5 py-2">
                  <Phone size={18} className="text-coral-red" />
                  <input
                    type="tel"
                    placeholder="Enter WhatsApp"
                    className="bg-transparent border-none outline-none font-bold text-slate-700 placeholder:text-slate-300 w-full sm:w-48"
                  />
                </div>
                <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-4xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-coral-red transition-all duration-500 flex items-center justify-center gap-2 active:scale-95">
                  Book Site Visit <ArrowUpRight size={14} />
                </button>
              </div>

              <p className="mt-4 text-[9px] text-center lg:text-left text-slate-400 font-bold uppercase tracking-widest ml-4">
                <span className="text-soft-orange">●</span> Property Wala Bhaiya
                usually responds in 15 mins
              </p>
            </div>
          </div>

          {/* Elegant corner watermark instead of giant icon */}
          <Landmark
            size={120}
            className="absolute -bottom-6 -right-6 text-slate-100 rotate-12 group-hover:text-coral-red/5 transition-colors duration-700"
          />
        </div>
      </section>
    </>
  );
}
