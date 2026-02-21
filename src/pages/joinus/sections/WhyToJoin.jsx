import React from 'react';
import { IndianRupee, Users, Briefcase, Award } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function WhyToJoin() {
  const benefits = [
    {
      icon: IndianRupee,
      title: "Better Earnings",
      desc: "Transparent commission structure with no hidden fees."
    },
    {
      icon: Users,
      title: "Verified Leads",
      desc: "Connect with genuine buyers and sellers in your area."
    },
    {
      icon: Briefcase,
      title: "Zero Office Cost",
      desc: "Work independently using our professional infrastructure."
    },
    {
      icon: Award,
      title: "Brand Trust",
      desc: "Leverage the 'Property Wala Bhaiya' credibility instantly."
    }
  ];

  return (
    <Section className="py-10 md:py-16 bg-slate-900 overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Why Join <span className="text-dark-orange">Our Network?</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 px-6">
              Empowering independent brokers with tools, leads, and authority.
            </p>
          </div>

          {/* Benefits Grid - 2 columns on mobile for compactness */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-dark-orange/20 flex items-center justify-center mb-3 md:mb-4">
                    <Icon className="text-dark-orange w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-white font-bold text-xs md:text-base leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-[10px] md:text-sm leading-snug">
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