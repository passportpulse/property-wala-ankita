import {
  FileCheck,
  Shield,
  FileText,
  Scale,
  Landmark,
  Users,
  ClipboardList,
  Building,
  CreditCard,
} from "lucide-react";

import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

const Services = () => {
  return (
    <Section className="bg-slate-50 font-poppins text-slate-800" size="small">
      <Container>
        {/* HERO */}

        <span className="text-xs font-semibold tracking-widest uppercase text-coral-red">
          Our Services
        </span>

        <h1 className="text-lg lg:text-4xl font-bold mt-3 leading-tight">
          Comprehensive Legal & Property
          <span className="block">Consultancy Infrastructure</span>
        </h1>

        <p className="text-sm lg:text-base text-slate-600 mt-6 leading-relaxed">
          Property Wala Bhaiya provides complete regulatory, legal, and
          operational support across the entire property lifecycle — ensuring
          security, compliance, and professional execution.
        </p>

        {/* FEATURED SERVICE */}
        <div className="my-12 border border-slate-200 rounded-3xl p-8 lg:p-12 bg-white">
          <span className="text-xs font-semibold uppercase tracking-widest text-coral-red">
            Core Offering
          </span>

          <h2 className="text-base lg:text-3xl font-semibold mt-3 leading-snug">
            End-to-End Compliance for New Properties
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl leading-relaxed">
            Complete regulatory and legal support including building plan
            approvals, licences, mutation processing, and all statutory
            compliance requirements.
          </p>

          <button className="mt-6 px-6 py-3 bg-coral-red text-white text-sm font-semibold rounded-xl hover:opacity-90 transition">
            Contact our Experts
          </button>
        </div>

        {/* SERVICES LIST */}
        <div className="pb-16">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <ServiceItem
              icon={<Shield size={20} />}
              title="Property Due Diligence"
            />

            <ServiceItem
              icon={<FileCheck size={20} />}
              title="Title Verification"
            />

            <ServiceItem
              icon={<Landmark size={20} />}
              title="Property Registration Support"
            />

            <ServiceItem
              icon={<FileText size={20} />}
              title="Legal Documentation Drafting"
            />

            <ServiceItem
              icon={<Scale size={20} />}
              title="Property Valuation Services"
            />

            <ServiceItem
              icon={<Users size={20} />}
              title="Joint Venture Documentation"
            />

            <ServiceItem
              icon={<ClipboardList size={20} />}
              title="DPR Preparation Services"
            />

            <ServiceItem
              icon={<Building size={20} />}
              title="Government Liaison Services"
            />

            <ServiceItem
              icon={<CreditCard size={20} />}
              title="Home Loan Assistance"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

/* SERVICE ITEM — CLEAN PROFESSIONAL ROW */
const ServiceItem = ({ icon, title }) => {
  return (
    <div className="flex items-start gap-4 group">
      <div className="p-2 rounded-lg bg-coral-red/10 text-coral-red group-hover:bg-coral-red group-hover:text-white transition">
        {icon}
      </div>

      <div>
        <h3 className="text-sm lg:text-base font-semibold">{title}</h3>

        <div className="w-0 group-hover:w-full h-0.5 bg-coral-red transition-all duration-300 mt-1" />
      </div>
    </div>
  );
};

export default Services;
