import React from "react";
import { ShieldCheck, Award, Zap, ArrowUpRight, Star } from "lucide-react";

export default function Trust() {
  const points = [
    {
      title: "Legal Transparency",
      text: "Scrutinized title deeds for total peace of mind.",
      tag: "Secure",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Direct Brokerage",
      text: "Zero middleman markups. Lowest market price.",
      tag: "Direct",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Local Expertise",
      text: "15+ years of deep-rooted experience in Durgapur.",
      tag: "Expert",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Compact Header - Layout Maintained with Universal Fonts */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-coral-red"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">Our Promise</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              Built on <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">Pure Trust.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-warm-yellow/10 px-5 py-2.5 rounded-2xl border border-warm-yellow/20">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-peach-glow shadow-sm" />
              ))}
            </div>
            <p className="text-[11px] font-black text-slate-900 uppercase tracking-widest">1.2k+ Verified Deals</p>
          </div>
        </div>

        {/* Horizontal Bento Grid - Layout Maintained */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {points.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 lg:p-10 rounded-3xl lg:rounded-[2.5rem] bg-white border border-slate-100 hover:border-peach-glow/30 hover:shadow-xl hover:shadow-peach-glow/10 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-warm-yellow/20 to-peach-glow/30 flex items-center justify-center text-coral-red group-hover:from-coral-red group-hover:to-soft-orange group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-warm-yellow/20 text-slate-900 rounded-lg">
                    {item.tag}
                  </span>
                </div>
                
                {/* Content - Updated with Universal Typo */}
                <div className="space-y-3">
                  <h4 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 group-hover:text-coral-red transition-colors">
                    {item.title}
                    <ArrowUpRight className="w-5 h-5 text-slate-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h4>
                  <p className="text-slate-500 text-sm lg:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Signature Integrated Bottom Accent Bar */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 bg-linear-to-r from-coral-red via-soft-orange to-peach-glow opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Minimal Bottom Bar - Standardized Fonts */}
        <div className="mt-12 pt-10 border-t border-slate-50 flex flex-wrap justify-center gap-x-12 gap-y-6">
           <div className="flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-warm-yellow text-warm-yellow" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">5 Star Google Rated</span>
           </div>
           
           <div className="flex items-center gap-2 text-coral-red font-black text-[10px] uppercase tracking-[0.2em] hover:text-soft-orange transition-colors cursor-pointer group">
              View Verified Certificates 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
           </div>
        </div>
      </div>
    </section>
  );
}