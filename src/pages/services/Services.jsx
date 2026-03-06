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
  ArrowRight,
  ArrowUpRight,
  Compass,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import Header from "../../components/Header";

const servicesData = [
  {
    icon: <Shield size={18} />,
    title: "Property Due Diligence",
    content:
      "Thorough verification of property ownership, legal history, and regulatory compliance to eliminate risks and ensure secure transactions.",
  },
  {
    icon: <FileCheck size={18} />,
    title: "Title Verification",
    content:
      "Professional examination of title records, ownership chain, and legal validity to confirm clear and dispute-free property ownership.",
  },
  {
    icon: <Landmark size={18} />,
    title: "Property Registration",
    content:
      "Complete assistance with property registration, stamp duty processing, and coordination with authorities.",
  },
  {
    icon: <FileText size={18} />,
    title: "Documentation Drafting",
    content:
      "Preparation and review of sale agreements, contracts, and legal documents to ensure compliance and legal protection.",
  },
  {
    icon: <Scale size={18} />,
    title: "Valuation Services",
    content:
      "Accurate market valuation based on location, demand, regulatory framework, and professional assessment standards.",
  },
  {
    icon: <Users size={18} />,
    title: "JV Documentation",
    content:
      "Structured drafting and compliance management for joint development agreements and partnership projects.",
  },
  {
    icon: <ClipboardList size={18} />,
    title: "DPR Preparation",
    content:
      "Creation of Detailed Project Reports including feasibility, compliance, financial projections, and regulatory readiness.",
  },
  {
    icon: <Building size={18} />,
    title: "Government Liaison",
    content:
      "Coordination with municipal and regulatory authorities for approvals, permits, and statutory clearances.",
  },
  {
    icon: <CreditCard size={18} />,
    title: "Home Loan Assistance",
    content:
      "Support with loan documentation, eligibility evaluation, and coordination with financial institutions.",
  },
  {
    icon: <Compass size={18} />,
    title: "Vastu Consultancy",
    content:
      "Professional guidance to align your property with Vastu principles for positive energy and prosperity.",
  },
];

const Services = () => {
  const [coreOpen, setCoreOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <Section
      className="bg-[#f8fafc] font-poppins text-slate-800 py-10"
      size="small"
    >
      <Container>
        {/* HEADER SECTION */}
        <Header
          tag="Professional Infrastructure"
          title="Our"
          highlight="Services"
          subtitle="Scale your business without increasing your stress."
          buttonText=" Login to avail services"
          onButtonClick="/dashboard"
        />

        {/* CORE OFFERING CARD (Sleeker Mobile Design) */}
        <div className="mt-10 bg-orange-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() => setCoreOpen(!coreOpen)}
            className="w-full flex justify-between items-center p-5 lg:p-8 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex p-2 bg-dark-orange text-white rounded-lg">
                <Shield size={20} />
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-dark-orange">
                  Premium Service
                </span>
                <h2 className="text-sm lg:text-xl font-bold mt-0.5 text-slate-900">
                  End-to-End Compliance
                </h2>
              </div>
            </div>

            <ChevronDown
              size={18}
              className={`transition-transform duration-500 ${
                coreOpen ? "rotate-180 text-dark-orange" : "text-slate-400"
              }`}
            />
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              coreOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 lg:px-8 pb-6 border-t border-slate-50 pt-4">
              <p className="text-xs lg:text-base text-slate-600 leading-relaxed italic">
                "Complete building plan approvals, licences, mutation
                processing, and all statutory compliance requirements handled by
                experts."
              </p>

              <a
                href="tel:+917699988876"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-dark-orange text-white text-[11px] font-bold rounded-lg hover:bg-dark-orange transition-colors"
              >
                Call Experts <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* SERVICES ACCORDION (High Density List) */}
        <div className="mt-12">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 px-1">
            Browse All Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-2">
            {servicesData.map((service, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-xl ${
                    isOpen
                      ? "bg-white border border-slate-200 shadow-sm"
                      : "bg-transparent border border-transparent"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-3 lg:p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          isOpen
                            ? "bg-dark-orange text-white"
                            : "bg-white border border-slate-100 text-dark-orange shadow-sm"
                        }`}
                      >
                        {service.icon}
                      </div>

                      <span
                        className={`text-[13px] lg:text-base font-bold transition-colors ${
                          isOpen ? "text-slate-900" : "text-slate-600"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-dark-orange"
                          : "text-slate-300"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-4 ml-11">
                      <p className="text-[11px] lg:text-sm text-slate-500 leading-relaxed border-l-2 border-orange-100 pl-3">
                        {service.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
