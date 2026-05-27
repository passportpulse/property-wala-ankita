import React from "react";
import { ArrowUpDown, CheckCircle } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { ArrowDown } from "lucide-react";
import Header from "../../../components/Header";

export default function WhoCanJoin() {
  const criteria = [
    {
      title: "Independent Brokers",
      desc: "Individual agents or small firms looking to scale.",
    },
    {
      title: "Local Experts",
      desc: "Those with deep knowledge of their specific neighborhoods.",
    },
    {
      title: "Ethical Professionals",
      desc: "Partners who prioritize transparency and client trust.",
    },
    {
      title: "Growth Seekers",
      desc: "Brokers ready to adopt digital tools and unified systems.",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* COMPACT HEADER */}
          <Header
            tag="Professional Services"
            title="Expert"
            highlight="Consultancy"
            subtitle="The West Bengal first digital platform for property
                  management. We take care of all your property needs, bringing
                  property owners, buyers, and tenants all together on one
                  platform. We partner with ethical, local experts for lasting
                  relationships."
            buttonText="Who Can Join ?"
          />

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
