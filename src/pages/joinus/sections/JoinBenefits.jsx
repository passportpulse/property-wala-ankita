import { IndianRupee, Users, Briefcase } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

const BenefitCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
    <div className="text-coral-red mb-3">{icon}</div>
    <p className="font-medium mb-1">{title}</p>
    <p className="text-sm text-slate-600">{desc}</p>
  </div>
);

const JoinBenefits = () => {
  return (
    <Section className="pb-20 bg-linear-to-b from-[#FFF5EC] to-white">
      <Container>
        <div className="bg-linear-to-r from-[#FFF1E6] to-[#FFF7F1] rounded-3xl p-12 border border-peach-glow/40">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<IndianRupee />}
              title="Better Earnings"
              desc="Clear and transparent commission structure."
            />
            <BenefitCard
              icon={<Users />}
              title="Verified Leads"
              desc="Only serious buyer & seller connections."
            />
            <BenefitCard
              icon={<Briefcase />}
              title="No Office Cost"
              desc="Operate independently with full support."
            />
            <BenefitCard
              icon={<Users />}
              title="Brand Credibility"
              desc="Leverage Property Wala Bhaiya trust."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default JoinBenefits;
