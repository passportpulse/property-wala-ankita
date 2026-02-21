import React from 'react';
import { CheckCircle } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function WhoCanJoin() {
  const criteria = [
    {
      title: "Independent Brokers",
      desc: "Individual agents or small firms looking to scale."
    },
    {
      title: "Local Experts",
      desc: "Those with deep knowledge of their specific neighborhoods."
    },
    {
      title: "Ethical Professionals",
      desc: "Partners who prioritize transparency and client trust."
    },
    {
      title: "Growth Seekers",
      desc: "Brokers ready to adopt digital tools and unified systems."
    }
  ];

  return (
    <Section size="default" className="bg-white py-12 md:py-20 border-t border-slate-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Who Can Join?
            </h2>
            <p className="text-slate-500 text-sm md:text-base px-4">
              We collaborate with professionals who value ethics, local expertise, 
              and long-term relationships.
            </p>
          </div>

          {/* Criteria Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
            {criteria.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF9F2] border border-orange-100/50 shadow-xs hover:shadow-sm transition-shadow"
              >
                <div className="mt-0.5">
                  <CheckCircle className="w-5 h-5 text-dark-orange shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-[11px] md:text-sm text-slate-600 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}