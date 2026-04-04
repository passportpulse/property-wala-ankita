import { Ban, Sparkles, ShieldCheck } from "lucide-react";

const AboutManifesto = () => {
  return (
    <div className="my-4 py-4">
      <div
        className="bg-slate-900 rounded-2xl md:rounded-3xl lg:rounded-[3rem] 
                      p-5 sm:p-6 md:p-10 lg:p-12 
                      overflow-hidden relative shadow-xl "
      >
        {/* Background Glow (reduced) */}
        <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 bg-orange-500/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-56 md:h-56 bg-blue-500/5 blur-[80px] rounded-full" />

        <div className="relative z-10">
          {/* Top Label */}
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            
            <span className="text-sm md:text-[16px] font-bold uppercase tracking-[0.3em] text-orange-400">
              Manifesto
            </span>
          </div>

          <div className="space-y-8 md:space-y-10">
            {/* Headline */}
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
                "We didn’t build a portal; we built a{" "}
                <span className="text-orange-400">shield of trust</span>."
              </h2>

              <p className="text-slate-400 mt-3 text-sm md:text-base lg:text-lg">
                Because your life’s savings deserve more than a 'maybe'.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-linear-to-r from-slate-800 via-slate-700 to-slate-800" />

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Point 1 */}
              <div className="flex gap-3 items-start group">
                <div
                  className="bg-slate-800 p-2 md:p-3 rounded-xl text-red-400 
                                group-hover:bg-red-500/10 transition shrink-0"
                >
                  <Ban size={20} className="md:w-6 md:h-6" />
                </div>

                <div>
                  <p className="text-white text-base md:text-lg font-semibold italic mb-1">
                    "Brokerage is a tax on your dreams."
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    We’re here to abolish it. Direct. Honest.{" "}
                    <span className="text-white font-medium">
                      Bhaiya-Verified.
                    </span>
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-3 items-start group">
                <div
                  className="bg-slate-800 p-2 md:p-3 rounded-xl text-blue-400 
                                group-hover:bg-blue-500/10 transition shrink-0"
                >
                  <Sparkles size={20} className="md:w-6 md:h-6" />
                </div>

                <div>
                  <p className="text-white text-base md:text-lg font-semibold italic mb-1">
                    "Unlocking Hidden Value."
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    Turning Bank Auctions into{" "}
                    <span className="text-white font-medium">
                      Family Ambitions.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Badge */}
            <div className="pt-4">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 
                              bg-slate-800/50 border border-slate-700 rounded-full"
              >
                <ShieldCheck size={14} className="text-orange-400" />
                <span className="text-[9px] md:text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                  100% Direct Property Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutManifesto;
