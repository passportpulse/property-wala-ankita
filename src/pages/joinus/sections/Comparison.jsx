import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

const TransformCard = ({ beforeTitle, beforeDesc, afterTitle, afterDesc }) => (
  <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
    <div className="grid grid-cols-2">
      
      {/* LEFT - BEFORE */}
      <div className="p-3 border-r border-slate-100">
        <span className="text-[8px] font-bold uppercase tracking-wide text-red-500">
          Current Status
        </span>

        <h4 className="text-[11px] font-semibold text-slate-700 mt-1 leading-tight">
          {beforeTitle}
        </h4>

        <p className="text-[10px] text-slate-500 mt-1 leading-snug">
          {beforeDesc}
        </p>
      </div>

      {/* RIGHT - AFTER */}
      <div className="p-3 bg-orange-50">
        <span className="text-[8px] font-bold uppercase tracking-wide text-dark-orange">
          Network Benefit
        </span>

        <h4 className="text-[11px] font-semibold text-slate-900 mt-1 leading-tight">
          {afterTitle}
        </h4>

        <p className="text-[10px] text-slate-600 mt-1 leading-snug font-medium">
          {afterDesc}
        </p>
      </div>
    </div>
  </div>
);

export default function Comparison() {
  return (
    <Section className="py-4 md:py-10">
      <Container>
        <div className="space-y-2 md:space-y-3">
          
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
      </Container>
    </Section>
  );
}
