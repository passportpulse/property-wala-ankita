import React from "react";
import { Search, ShieldCheck, Clock, Key } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

export default function RentHowItWorks() {
  const rentSteps = [
    {
      icon: <Search />,
      title: "Browse Listings",
      desc: "Explore verified flats and commercial spaces in Durgapur.",
    },
    {
      icon: <ShieldCheck />,
      title: "Verify Dossier",
      desc: "Access legal documents and owner details via WhatsApp.",
    },
    {
      icon: <Clock />,
      title: "Book Visit",
      desc: "Schedule a physical walkthrough at your convenience.",
    },
    {
      icon: <Key />,
      title: "Move In",
      desc: "Standardized rent agreements and hassle-free onboarding.",
    },
  ];

  return (
    <Section size="default" className="bg-white">
      <Container>
        <div className="mb-16">
          <h2 className="text-dark-orange font-black text-[10px] uppercase tracking-[0.4em] mb-4">
            Tenant Guide
          </h2>
          <p className="text-4xl font-black tracking-tighter uppercase text-slate-900">
            Your journey to <br /> a new home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {rentSteps.map((step, i) => (
            <div key={i} className="group space-y-6">
              <div className="text-6xl font-black text-slate-100 group-hover:text-dark-orange/10 leading-none">
                0{i + 1}
              </div>

              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-dark-orange group-hover:bg-dark-orange group-hover:text-white transition-all">
                {React.cloneElement(step.icon, { size: 18 })}
              </div>

              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">
                {step.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
