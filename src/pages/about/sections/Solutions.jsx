import {
  Database,
  Layers,
  ShieldCheck,
  Globe,
} from "lucide-react";
import React from "react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
const InfraRow = ({ icon, number, title, text }) => (
  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
    <div className="col-span-2 md:col-span-1">
      <div className="text-xl lg:text-3xl font-bold text-slate-200 leading-none">
        {number}
      </div>
    </div>
    <div className="col-span-10 md:col-span-11 border-l-2 border-dark-orange pl-4 lg:pl-6">
      <div className="flex items-center gap-2 text-dark-orange mb-1 lg:mb-2">
        {React.cloneElement(icon, { size: 18 })}
        <h4 className="text-sm lg:text-lg font-bold text-slate-800">{title}</h4>
      </div>
      <p className="text-[11px] lg:text-sm text-slate-500 leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);
export default function Solutions() {
  return (
    <>
      <Section>
        {/* SOLUTION SECTION - Refactored for Compactness */}
        <Container>
          <div className="mb-8">
            <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase bg-linear-to-r from-dark-orange to-orange-400 text-white px-4 py-1 rounded-full shadow-sm">
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
        </Container>
      </Section>
    </>
  );
}
