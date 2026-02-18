import { useState } from "react";
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
  ChevronDown,
} from "lucide-react";

import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

const servicesData = [
  {
    icon: <Shield size={20} />,
    title: "Property Due Diligence",
    content:
      "Thorough verification of property ownership, legal history, and regulatory compliance to eliminate risks and ensure secure transactions.",
  },
  {
    icon: <FileCheck size={20} />,
    title: "Title Verification",
    content:
      "Professional examination of title records, ownership chain, and legal validity to confirm clear and dispute-free property ownership.",
  },
  {
    icon: <Landmark size={20} />,
    title: "Property Registration Support",
    content:
      "Complete assistance with property registration, stamp duty processing, and coordination with registration authorities.",
  },
  {
    icon: <FileText size={20} />,
    title: "Legal Documentation Drafting",
    content:
      "Preparation and review of sale agreements, contracts, and legal documents to ensure compliance and legal protection.",
  },
  {
    icon: <Scale size={20} />,
    title: "Property Valuation Services",
    content:
      "Accurate market valuation based on location, demand, regulatory framework, and professional assessment standards.",
  },
  {
    icon: <Users size={20} />,
    title: "Joint Venture Documentation",
    content:
      "Structured drafting and compliance management for joint development agreements and partnership property projects.",
  },
  {
    icon: <ClipboardList size={20} />,
    title: "DPR Preparation Services",
    content:
      "Creation of Detailed Project Reports including feasibility, compliance, financial projections, and regulatory readiness.",
  },
  {
    icon: <Building size={20} />,
    title: "Government Liaison Services",
    content:
      "Coordination with municipal and regulatory authorities for approvals, permits, and statutory clearances.",
  },
  {
    icon: <CreditCard size={20} />,
    title: "Home Loan Assistance",
    content:
      "Support with loan documentation, eligibility evaluation, and coordination with financial institutions for faster approvals.",
  },
];

const Services = () => {
  const [coreOpen, setCoreOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section className="bg-slate-50 font-poppins text-slate-800" size="small">
      <Container>
        {/* HERO (UNCHANGED AS PROVIDED) */}
        <span className="text-xs font-semibold tracking-widest uppercase text-dark-orange">
          Our Services
        </span>

        <h1 className="text-lg lg:text-4xl font-bold mt-3 leading-tight">
          Comprehensive Legal & Property
          <span className="block">Consultancy Infrastructure</span>
        </h1>

        <p className="text-sm lg:text-base text-slate-600 mt-6 leading-relaxed max-w-3xl">
          Property Wala Bhaiya provides complete regulatory, legal, and
          operational support across the entire property lifecycle — ensuring
          security, compliance, and professional execution.
        </p>

        {/* CORE OFFERING ACCORDION (Premium Card Style) */}
        <div className="mt-12 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <button
            onClick={() => setCoreOpen(!coreOpen)}
            className="w-full flex justify-between items-center p-6 lg:p-8 text-left"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-dark-orange">
                Core Offering
              </span>

              <h2 className="text-base lg:text-2xl font-semibold mt-2">
                End-to-End Compliance for New Properties
              </h2>
            </div>

            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                coreOpen ? "rotate-180 text-dark-orange" : "text-slate-400"
              }`}
            />
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              coreOpen ? "max-h-96 px-6 lg:px-8 pb-8" : "max-h-0"
            }`}
          >
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              Complete regulatory and legal support including building plan
              approvals, licences, mutation processing, and all statutory
              compliance requirements.
            </p>

            <a
              href="tel:+917699988876"
              className="inline-flex items-center mt-6 px-6 py-3 bg-dark-orange text-white text-sm font-semibold rounded-xl hover:opacity-90 transition"
            >
              Contact our Experts
            </a>
          </div>
        </div>

        {/* SERVICES ACCORDION (Minimal List Style) */}
        <div className="mt-16 border-t border-slate-200">
          {servicesData.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-slate-200">
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center py-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-dark-orange/10 text-dark-orange">
                      {service.icon}
                    </div>

                    <span className="text-sm lg:text-base font-semibold">
                      {service.title}
                    </span>
                  </div>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-dark-orange" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-5 pl-14 pr-4" : "max-h-0"
                  }`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Services;
