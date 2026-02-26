import React from "react";
import { IndianRupee, Users, Briefcase, Award } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function WhyToJoin() {
  const benefits = [
    {
      icon: IndianRupee,
      title: "Better Earnings",
      desc: "Transparent commission structure with no hidden fees.",
    },
    {
      icon: Users,
      title: "Verified Leads",
      desc: "Connect with genuine buyers and sellers in your area.",
    },
    {
      icon: Briefcase,
      title: "Zero Office Cost",
      desc: "Work independently using our professional infrastructure.",
    },
    {
      icon: Award,
      title: "Brand Trust",
      desc: "Leverage the 'Property Wala Bhaiya' credibility instantly.",
    },
  ];

  return (
    <Section className=" bg-orange-50 overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header - Compact margins for mobile */}
          <div className="relative mb-8 lg:mb-16 border-l-4 border-dark-orange pl-4 lg:pl-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1 lg:space-y-2">
                <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                  Carrier Building
                </span>

                <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                  Why Join{" "}
                  <span className="bg-linear-to-r from-dark-orange to-lighter-orange bg-clip-text text-transparent">
                    Our Network?
                  </span>
                </h2>
                <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
                  Empowering independent brokers with tools and leads to
                  dominate locally.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Grid - Compact 2-column mobile layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-5 md:p-8 rounded-4xl bg-white border border-orange-100 shadow-sm shadow-orange-200/50 hover:shadow-md transition-all duration-300"
                >
                  {/* Icon Container */}
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-orange-100/80 flex items-center justify-center mb-3 md:mb-5">
                    <Icon className="text-dark-orange w-5 h-5 md:w-7 md:h-7" />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-slate-900 font-bold text-xs md:text-lg leading-tight mb-1.5 md:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[10px] md:text-sm leading-snug md:leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
