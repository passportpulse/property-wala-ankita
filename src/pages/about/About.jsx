import React from "react";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import {
  ArrowUpRight,
  Database,
  Layers,
  ShieldCheck,
  Globe,
} from "lucide-react";
import Header from "../../components/Header";

const TransformCard = ({ beforeTitle, beforeDesc, afterTitle, afterDesc }) => (
  <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
    <div className="grid grid-cols-2">
      <div className="p-4 border-r border-slate-100">
        <span className="text-[9px] font-bold uppercase tracking-wider text-red-500">
          Current Status
        </span>
        <h4 className="text-xs font-semibold text-slate-700 mt-2">
          {beforeTitle}
        </h4>
        <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
          {beforeDesc}
        </p>
      </div>
      <div className="p-4 bg-orange-50">
        <span className="text-[9px] font-bold uppercase tracking-wider text-dark-orange">
          Network Benefit
        </span>
        <h4 className="text-xs font-semibold text-slate-900 mt-2">
          {afterTitle}
        </h4>
        <p className="text-[11px] text-slate-600 mt-2 leading-relaxed font-medium">
          {afterDesc}
        </p>
      </div>
    </div>
  </div>
);

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

export default function About() {

  return (
    <Section className="mt-0 pt-6 lg:mt-0">
      <Container>
        {/* HEADER SECTION */}
        <Header
          tag="Durgapur's Digital Backbone"
          title="About"
          highlight="Property Wala Bhaiya"
          subtitle="Bringing trust, structure, and transparency to Durgapur’s real
                estate market."
          buttonText="Join Us"
          onButtonClick="/join-us"
        />

        {/* TRANSFORMATION CARDS */}
        <div className="space-y-3 mb-4 pb-4">
          <TransformCard
            beforeTitle="Manual Hustle"
            beforeDesc="Chasing unconfirmed leads & verbal promises."
            afterTitle="Tech Certainty"
            afterDesc="Verified inventory with real-time digital tracking."
          />
          <TransformCard
            beforeTitle="Independent Broker"
            beforeDesc="Working alone without structured support."
            afterTitle="Network Partner"
            afterDesc="Part of Durgapur’s trusted professional network."
          />
          <TransformCard
            beforeTitle="Fractured Market"
            beforeDesc="Fragmented, Conflicting pricing, high deal fallout rate."
            afterTitle="Inventory Certainty"
            afterDesc="Exclusive, verified, real time central inventory. Commitment to 'No Multiple price range'"
          />
          <TransformCard
            beforeTitle="Unstable Earnings"
            beforeDesc="Volatile income, high marketing burn rate, and payout uncertainty."
            afterTitle="Higher Net Effective Earning Rate (NEER)"
            afterDesc="Guaranteed qualified leads with an optimized cost-sharing model and 70-30 payout structure."
          />
          <TransformCard
            beforeTitle="Legal Risk"
            beforeDesc="High RERA compliance risk and low inherent trust from clients."
            afterTitle="Total Compliance"
            afterDesc="Mandatory WBRERA compliance, full legal support, and the backing of an established network reputation."
          />
        </div>

        {/* SOLUTION SECTION - Refactored for Compactness */}
        <div className="my-4 py-4 border-t border-slate-100">
          <div className="mb-8">
            <span
              className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase 
bg-linear-to-r from-dark-orange to-orange-400 
text-white px-4 py-1 rounded-full shadow-sm"
            >
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
