import { Database, Layers, ShieldCheck, Globe } from "lucide-react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

const About = () => {
  return (
    <Section className="bg-white font-poppins text-slate-800">
      <Container>
        {/* HERO — LARGE LEFT ALIGNED */}

        <span className="text-xs font-semibold tracking-widest uppercase text-dark-orange">
          Property Wala Bhaiya Network
        </span>

        <h1 className="text-lg lg:text-6xl font-bold mt-4 leading-[1.1]">
          Transforming Local Brokers Into
          <span className="block">Structured Real Estate Professionals</span>
        </h1>

        <p className="text-base text-slate-600 mt-8 leading-relaxed max-w-3xl">
          The ' Property Wala Bhaiya ' network is designed to offer a systemic
          and professional solution, transforming the local market from one
          defined by insecure, high-hustle competition to one characterized by
          unified operational excellence. This transformation is achieved by
          deploying a shared, technologically advanced platform that guarantees
          inventory certainty and provides comprehensive legal security.
        </p>

        <p className="text-base text-slate-600 mt-6 leading-relaxed max-w-3xl">
          The core value promise to Durgapur's independent agents is the
          transition from an unstable, manual business model to a secure,
          professional consultancy model, guaranteeing a demonstrably higher Net
          Effective Earning Rate ( NEER) and predictable income stream.
        </p>

        {/* SOLUTION — VERTICAL STRUCTURED LIST (NO CARDS) */}
        <div className="py-4">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-dark-orange">
              Our Solution
            </span>

            <h3 className="text-lg lg:text-4xl font-bold mt-3">
              The Operational Infrastructure Stack
            </h3>
          </div>

          <div className="space-y-10">
            <InfraRow
              icon={<Database size={24} />}
              number="01"
              title="Centralized Qualified Lead Generation"
              text="Focus on nurturing high-intent leads instead of simple capture, improving long-term conversion performance."
            />

            <InfraRow
              icon={<Layers size={24} />}
              number="02"
              title="Unified Real-Time Inventory Management"
              text="Exclusive and verified inventory system ensuring transparency, certainty, and professional confidence."
            />

            <InfraRow
              icon={<ShieldCheck size={24} />}
              number="03"
              title="Mandatory Compliance & Automation"
              text="Structured documentation workflows, verification, and full back-office operational support."
            />

            <InfraRow
              icon={<Globe size={24} />}
              number="04"
              title="Network Branding & Digital Identity"
              text="Standardized service protocols, high-tech presence, and a unified professional brand ecosystem."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

/* INFRA ROW — Minimal, Structured, Elegant */
const InfraRow = ({ icon, number, title, text }) => {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-start">
      {/* Number Column */}
      <div className="md:col-span-2">
        <div className="text-4xl font-bold text-slate-200">{number}</div>
      </div>

      {/* Content Column */}
      <div className="md:col-span-10 border-l-2 border-dark-orange pl-6">
        <div className="flex items-center gap-3 text-dark-orange mb-3">
          {icon}
        </div>

        <h4 className="text-lg font-semibold mb-3">{title}</h4>

        <p className="text-slate-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default About;
