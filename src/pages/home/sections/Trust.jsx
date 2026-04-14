import React from "react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { ShieldCheck, Award, Zap, ArrowUpRight, Star } from "lucide-react";
import Header from "../../../components/Header";

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

  return (
    <Section>
      <Container>
        {/* HEADER */}
        <Header
          tag="Our Promise"
          title="Built on"
          highlight="Pure Trust"
          subtitle="Prime Durgapur properties with verified documentation"
          buttonText="1.2k+ Verified Deals"
        />

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
                {/* Changed justify-between to justify-start and added gap-4 */}
                <div className="flex items-center justify-start gap-2 mb-6">
                  {/* ICON CONTAINER */}
                  <div className="w-12 h-12 rounded-2xl bg-dark-orange flex items-center justify-center text-white group-hover:bg-dark-orange group-hover:text-white transition-all duration-500 shrink-0">
                    {item.icon}
                  </div>

                  {/* SHINING LUCKY ORANGE BADGE */}
                  <span className="relative overflow-hidden text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white text-dark-orange rounded-lg h-fit border border-orange-100">
                    {item.tag}
                    <span
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 25%, rgba(255, 140, 0, 0.3) 50%, transparent 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shine 2s linear infinite",
                      }}
                    />
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 text-green-600 group-hover:text-green-800 transition-colors" />
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
