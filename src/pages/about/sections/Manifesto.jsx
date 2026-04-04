import React from "react";
import { Ban, Sparkles, ShieldCheck } from "lucide-react";

const AboutManifesto = () => {
  return (
    <div className="my-3 py-3 font-poppins">
      <div
        className="bg-slate-900 rounded-xl md:rounded-2xl lg:rounded-[3rem] 
                   p-4 sm:p-5 md:p-8 lg:p-12 
                   overflow-hidden relative shadow-lg border border-slate-800/50"
      >
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-orange-500/10 blur-[80px] lg:blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-blue-500/5 blur-[80px] lg:blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4 md:mb-6 lg:mb-10">
            {/* Vertical Line */}
            <div className="w-0.5 h-4 md:h-5 lg:h-6 bg-linear-to-b from-orange-400 to-orange-300 rounded-full" />

            <span className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] text-orange-400">
              Manifesto
            </span>
          </div>

          {/* Responsive Grid: Stacked on mobile, 2-cols on Tab, 3-cols on Laptop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 items-stretch">
            {/* POINT 1 */}
            {/* POINT 1 */}
            <div className="flex flex-row lg:flex-col gap-3 group h-full items-start">
              {/* Icon Box: "w-fit h-fit" ensures it only takes necessary space */}
              <div
                className="bg-slate-800 p-2 lg:p-3 rounded-lg md:rounded-xl text-orange-400 
                 group-hover:bg-orange-500/10 transition shrink-0 shadow w-fit h-fit"
              >
                <ShieldCheck
                  size={18}
                  className="md:w-5 md:h-5 lg:w-6 lg:h-6"
                />
              </div>

              {/* Glass Finish Box */}
              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 lg:p-6 shadow-lg transition-all hover:bg-white/10 flex-1 flex flex-col">
                {/* Subtle Inner Glow */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-500/5 blur-2xl lg:blur-3xl rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold lg:font-extrabold text-white leading-tight">
                    We didn’t build a portal; we built a{" "}
                    <span className="text-orange-400">shield of trust</span>.
                  </h2>
                  <p className="mt-2 text-xs lg:text-sm text-slate-400 italic leading-relaxed">
                    Because your life’s savings deserve more than a 'maybe'.
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 2 */}
            <div className="flex flex-row lg:flex-col gap-3 group h-full items-start">
              <div
                className="bg-slate-800 p-2 lg:p-3 rounded-lg md:rounded-xl text-red-400 
                 group-hover:bg-red-500/10 transition shrink-0 shadow w-fit h-fit"
              >
                <Ban size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </div>

              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 lg:p-6 shadow-lg transition-all hover:bg-white/10 flex-1 flex flex-col justify-center">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-red-500/5 blur-2xl lg:blur-3xl rounded-full pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold lg:font-extrabold text-white leading-tight">
                    Brokerage is a{" "}
                    <span className="text-red-400">tax on your dreams</span>.
                  </h2>
                  <p className="mt-2 text-xs lg:text-sm text-slate-400 italic leading-relaxed">
                    We’re here to abolish it. Direct. Honest. Bhaiya-Verified.
                  </p>
                </div>
              </div>
            </div>

            {/* POINT 3 */}
            <div className="flex flex-row lg:flex-col gap-3 group h-full md:col-span-2 lg:col-span-1 items-start">
              <div
                className="bg-slate-800 p-2 lg:p-3 rounded-lg md:rounded-xl text-blue-400 
                 group-hover:bg-blue-500/10 transition shrink-0 shadow w-fit h-fit"
              >
                <Sparkles size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </div>

              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 lg:p-6 shadow-lg transition-all hover:bg-white/10 flex-1 flex flex-col justify-center">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500/5 blur-2xl lg:blur-3xl rounded-full pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold lg:font-extrabold text-white leading-tight">
                    Unlocking{" "}
                    <span className="text-blue-400">Hidden Value</span>.
                  </h2>
                  <p className="mt-2 text-xs lg:text-sm text-slate-400 italic leading-relaxed">
                    Turning Bank Auctions into Family Ambitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutManifesto;
