import React from "react";
import { useNavigate } from "react-router-dom";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { ArrowUpRight, Database, Layers, ShieldCheck, Globe } from "lucide-react";

const TransformCard = ({ beforeTitle, beforeDesc, afterTitle, afterDesc }) => (
  <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
    <div className="grid grid-cols-2">
      <div className="p-4 border-r border-slate-100">
        <span className="text-[9px] font-bold uppercase tracking-wider text-red-500">Before</span>
        <h4 className="text-xs font-semibold text-slate-700 mt-2">{beforeTitle}</h4>
        <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{beforeDesc}</p>
      </div>
      <div className="p-4 bg-orange-50">
        <span className="text-[9px] font-bold uppercase tracking-wider text-dark-orange">After</span>
        <h4 className="text-xs font-semibold text-slate-900 mt-2">{afterTitle}</h4>
        <p className="text-[11px] text-slate-600 mt-2 leading-relaxed font-medium">{afterDesc}</p>
      </div>
    </div>
  </div>
);

const InfraRow = ({ icon, number, title, text }) => (
  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
    <div className="col-span-2 md:col-span-1">
      <div className="text-xl lg:text-3xl font-bold text-slate-200 leading-none">{number}</div>
    </div>
    <div className="col-span-10 md:col-span-11 border-l-2 border-dark-orange pl-4 lg:pl-6">
      <div className="flex items-center gap-2 text-dark-orange mb-1 lg:mb-2">
        {React.cloneElement(icon, { size: 18 })}
        <h4 className="text-sm lg:text-lg font-bold text-slate-800">{title}</h4>
      </div>
      <p className="text-[11px] lg:text-sm text-slate-500 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default function About() {
  const navigate = useNavigate();

  return (
    <Section className="mt-0 pt-6 lg:mt-0">
      <Container>
        {/* HEADER SECTION */}
        <div className="relative mb-8 lg:mb-12 border-l-4 border-dark-orange pl-4 lg:pl-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 lg:space-y-2">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                Durgapur's Digital Backbone
              </span>
              <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                About <span className="bg-linear-to-r from-dark-orange to-orange-400 bg-clip-text text-transparent italic">Property Wala Bhaiya</span>
              </h2>
              <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
                Bringing trust, structure, and transparency to Durgapur’s real estate market.
              </p>
            </div>
            <button
              onClick={() => navigate("/join-us")}
              className="cursor-pointer bg-dark-orange text-white flex items-center gap-2 group text-[10px] lg:text-[11px] font-black uppercase tracking-widest px-4 py-2 lg:px-5 lg:py-2.5 border-2 border-white rounded-md hover:bg-white hover:text-orange-600 hover:border-orange-600 transition-all duration-300 shadow-sm hover:shadow-md w-fit"
            >
              Join Us <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* TRANSFORMATION CARDS */}
        <div className="space-y-3 mb-4 pb-4">
          <TransformCard
            beforeTitle="Manual Hustle"
            beforeDesc="Chasing unconfirmed leads & verbal promises."
            afterTitle="Tech Certainty"
            afterDesc="Verified inventory with real-time digital tracking."
          />
          <TransformCard
            beforeTitle="Unstable Income"
            beforeDesc='Risky deals and unpredictable "hit-or-miss" months.'
            afterTitle="Predictable NEER"
            afterDesc="Legal protection with higher net earnings."
          />
          <TransformCard
            beforeTitle="Independent Broker"
            beforeDesc="Working alone without structured support."
            afterTitle="Network Partner"
            afterDesc="Part of Durgapur’s trusted professional network."
          />
        </div>

        {/* SOLUTION SECTION - Refactored for Compactness */}
        <div className="my-4 py-4 border-t border-slate-100">
          <div className="mb-8">
            <span className="text-[10px] font-bold tracking-widest uppercase text-dark-orange bg-orange-50 px-2 py-0.5 rounded">
              Our Solution
            </span>
            <h3 className="text-xl lg:text-3xl font-black mt-3 text-slate-800 tracking-tight">
              Operational Infrastructure Stack
            </h3>
          </div>

          <div className="space-y-6 lg:space-y-8 max-w-4xl">
            <InfraRow
              icon={<Database />}
              number="01"
              title="Qualified Lead Generation"
              text="Nurturing high-intent leads to improve long-term conversion performance."
            />
            <InfraRow
              icon={<Layers />}
              number="02"
              title="Real-Time Inventory"
              text="Exclusive and verified inventory system ensuring transparency and certainty."
            />
            <InfraRow
              icon={<ShieldCheck />}
              number="03"
              title="Compliance & Automation"
              text="Structured documentation and full back-office operational support."
            />
            <InfraRow
              icon={<Globe />}
              number="04"
              title="Network Branding"
              text="Standardized service protocols and a unified professional digital identity."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}