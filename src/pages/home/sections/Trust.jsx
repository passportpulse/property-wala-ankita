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
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Direct Brokerage",
      text: "Zero middleman markups. Lowest market price.",
      tag: "Direct",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Local Expertise",
      text: "15+ years of deep-rooted experience in Durgapur.",
      tag: "Expert",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const dealAvatars = [
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  ];

  return (
    <Section className="bg-white font-poppins overflow-hidden">
      <Container>

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-coral-red" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
                Our Promise
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              Built on{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">
                Pure Trust.
              </span>
            </h2>
          </div>

          {/* VERIFIED DEALS */}
          <div className="flex items-center gap-4 bg-warm-yellow/10 px-5 py-2.5 rounded-2xl border border-warm-yellow/20">
            <div className="flex -space-x-2">
              {dealAvatars.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Verified client"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                />
              ))}
            </div>

            <p className="text-[11px] font-black text-slate-900 uppercase tracking-widest">
              1.2k+ Verified Deals
            </p>
          </div>
        </div>


        {/* TRUST CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-8 lg:p-10 rounded-3xl lg:rounded-[2.5rem] bg-white border border-slate-100 hover:border-peach-glow/30 hover:shadow-xl hover:shadow-peach-glow/10 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">

                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-warm-yellow/20 to-peach-glow/30 flex items-center justify-center text-coral-red group-hover:from-coral-red group-hover:to-soft-orange group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-warm-yellow/20 text-slate-900 rounded-lg">
                    {item.tag}
                  </span>
                </div>

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

              {/* ACCENT BAR */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 bg-linear-to-r from-coral-red via-soft-orange to-peach-glow opacity-0 group-hover:opacity-100 transition-opacity" />

            </div>
          ))}
        </div>


        {/* FOOTER */}
        <div className="mt-12 pt-10 border-t border-slate-50 flex flex-wrap justify-center gap-x-12 gap-y-6">

          <div className="flex items-center gap-2">
            <Star className="w-3.5 h-3.5 fill-warm-yellow text-warm-yellow" />

            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              5 Star Google Rated
            </span>
          </div>


          <div
            onClick={() =>
              window.open(
                "https://www.google.com/search?q=PROPERTY+WALA+BHAIYA+Reviews",
                "_blank"
              )
            }
            className="flex items-center gap-2 text-coral-red font-black text-[10px] uppercase tracking-[0.2em] hover:text-soft-orange transition-colors cursor-pointer group"
          >
            View Client Testimonials

            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>

        </div>

      </Container>
    </Section>
  );
}
