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
    <Section className=" bg-orange-50 overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-slate-900">
              Why Join <span className="text-dark-orange">Our Network?</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 px-6 max-w-2xl mx-auto leading-relaxed">
              Empowering independent brokers with the tools, leads, and authority 
              needed to dominate the local market.
            </p>
          </div>

          {/* Benefits Grid - Compact 2-column mobile layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-5 md:p-8 rounded-[2rem] bg-white border border-orange-100 shadow-sm shadow-orange-200/50 hover:shadow-md transition-all duration-300"
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