import { Database, ShieldCheck, Layers, Globe } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function OurSolution() {
  const solutions = [
    {
      icon: Database,
      title: "Centralized Lead Generation",
      text: "Qualified lead generation through our integrated CRM. Focus on nurturing leads instead of just capturing them.",
    },
    {
      icon: Layers,
      title: "Unified Inventory System",
      text: "Exclusive real-time inventory management system ensuring accuracy, transparency, and instant access.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Back-Office Support",
      text: "Mandatory compliance framework with automated documentation and complete back-office assistance.",
    },
    {
      icon: Globe,
      title: "Branding & Digital Presence",
      text: "Strong network branding, standardized service protocols, and powerful digital presence support.",
    },
  ];

  return (
    <Section
      size="default"
      className="bg-linear-to-b from-[#FFF9F2] via-white to-[#FFF5EC] font-poppins text-slate-900"
    >
      <Container>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-coral-red">
              Our Solution
            </span>

            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mt-3">
              Complete <span className="text-coral-red">Business Infrastructure</span>
            </h2>

            <p className="text-slate-600 mt-4">
              We provide technology, branding, compliance, and operational
              support so you can focus purely on closing deals and growing.
            </p>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    bg-white
                    border border-slate-100
                    rounded-3xl
                    p-8
                    shadow-sm
                    hover:shadow-lg
                    hover:border-coral-red/20
                    transition-all
                    duration-500
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-14 h-14
                      bg-coral-red/10
                      text-coral-red
                      flex items-center justify-center
                      rounded-2xl
                      mb-6
                      group-hover:bg-coral-red
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}
