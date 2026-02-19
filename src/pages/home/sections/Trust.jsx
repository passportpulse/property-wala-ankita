import React from "react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { ShieldCheck, Award, Zap, ArrowUpRight, Star } from "lucide-react";

export default function Trust() {
  const points = [
    {
      title: "Legal Transparency",
      text: "Scrutinized title deeds for total peace of mind.",
      tag: "Secure",
      icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      title: "Direct Brokerage",
      text: "Zero middleman markups. Lowest market price.",
      tag: "Direct",
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      title: "Local Expertise",
      text: "15+ years of deep-rooted experience in Durgapur.",
      tag: "Expert",
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
    },
  ];

  const dealAvatars = [
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  ];

  return (
    <Section>
      <Container>
        {/* HEADER: Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-dark-orange" />
              <span className="text-[10px] font-black uppercase tracking-widest text-dark-orange">
                Our Promise
              </span>
            </div>
            <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-none">
              Built on <span className="text-dark-orange">Pure Trust.</span>
            </h2>
          </div>

          {/* COMPACT VERIFIED TAG */}
          <div className="flex items-center gap-3 bg-lighter-orange p-2 pr-4 rounded-full border border-slate-100 w-fit">
            <div className="flex -space-x-2">
              {dealAvatars.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="client"
                  className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                />
              ))}
            </div>
            <p className="text-[9px] font-black text-white uppercase tracking-widest">
              1.2k+ Verified Deals
            </p>
          </div>
        </div>

        {/* TRUST CARDS: Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:mx-0 md:px-0">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="
                min-w-[85%] sm:min-w-75 snap-center mr-4 last:mr-0
                md:min-w-0 md:mr-0 group relative p-6 md:p-10 rounded-4xl
                bg-orange-50 border border-slate-100 transition-all duration-500
                hover:shadow-2xl hover:shadow-dark-orange/10
              "
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-dark-orange group-hover:bg-dark-orange group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* SHINING LUCKY ORANGE BADGE */}
                  <span className="relative overflow-hidden text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-dark-orange text-white rounded-lg">
                    {item.tag}
                    <span
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background: "linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shine 2s linear infinite",
                      }}
                    />
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-dark-orange transition-colors" />
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER: Minimalist & Centered */}
        <div className="mt-4 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
              5 Star Google Rated
            </span>
          </div>

          <button
            onClick={() => window.open("https://www.google.com/search?q=PROPERTY+WALA+BHAIYA+Reviews", "_blank")}
            className="text-dark-orange font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group"
          >
            Read Testimonials
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </Container>
    </Section>
  );
}