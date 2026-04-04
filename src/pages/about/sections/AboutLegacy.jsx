import React from "react";
import { Clock, CheckCircle, Rocket, Building2 } from "lucide-react";

const AboutTrustSection = () => {
  return (
    <div className="my-6 md:my-10 font-poppins">
      <div className="bg-slate-900 rounded-xl md:rounded-2xl lg:rounded-[3rem] p-5 md:p-8 lg:p-12 border border-slate-800/50 relative overflow-hidden shadow-lg">

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 blur-[100px] rounded-full" />

        <div className="relative z-10">

          {/* Label */}
          <div className="flex items-center gap-3 mb-5 md:mb-8">
            <div className="w-[2px] h-5 md:h-6 bg-gradient-to-b from-orange-400 to-orange-300 rounded-full" />
            <span className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-orange-400">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-3 md:mb-4">
            21 Years of Trust, Powered by{" "}
            <span className="text-orange-400">Future Tech</span>
          </h2>

          {/* Subtext */}
          <p className="text-slate-400 text-xs md:text-sm lg:text-base max-w-3xl leading-relaxed mb-6 md:mb-10">
            Legacy meets innovation. For over two decades, we’ve been more than just a property portal—we’ve been your trusted partner in real estate. From helping families find homes to enabling businesses to scale, our journey is built on trust, transparency, and results.
          </p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">

            {/* Point 1 */}
            <div className="flex gap-3 items-start group">
              <div className="bg-slate-800 p-2.5 rounded-lg text-orange-400 group-hover:bg-orange-500/10 transition shadow">
                <Clock size={18} />
              </div>

              <div>
                <p className="text-white text-sm md:text-base font-semibold mb-1">
                  21 Years of Excellence
                </p>
                <p className="text-slate-400 text-xs md:text-sm">
                  Deep market expertise across residential, commercial, and industrial sectors.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-3 items-start group">
              <div className="bg-slate-800 p-2.5 rounded-lg text-green-400 group-hover:bg-green-500/10 transition shadow">
                <CheckCircle size={18} />
              </div>

              <div>
                <p className="text-white text-sm md:text-base font-semibold mb-1">
                  Verified Gold Standard
                </p>
                <p className="text-slate-400 text-xs md:text-sm">
                  Every listing is verified for transparency and trust.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-3 items-start group">
              <div className="bg-slate-800 p-2.5 rounded-lg text-blue-400 group-hover:bg-blue-500/10 transition shadow">
                <Rocket size={18} />
              </div>

              <div>
                <p className="text-white text-sm md:text-base font-semibold mb-1">
                  2026 Tech-Ready
                </p>
                <p className="text-slate-400 text-xs md:text-sm">
                  AI insights, 4K virtual tours, and instant digital processes.
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex gap-3 items-start group">
              <div className="bg-slate-800 p-2.5 rounded-lg text-purple-400 group-hover:bg-purple-500/10 transition shadow">
                <Building2 size={18} />
              </div>

              <div>
                <p className="text-white text-sm md:text-base font-semibold mb-1">
                  End-to-End Solutions
                </p>
                <p className="text-slate-400 text-xs md:text-sm">
                  From first homes to large investments, we guide you at every step.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrustSection;
