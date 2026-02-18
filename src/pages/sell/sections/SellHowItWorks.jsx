import { FileCheck, Camera, Megaphone, Handshake } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

export default function SellHowItWorks() {
  const steps = [
    {
      icon: <FileCheck />,
      title: "List Property",
      desc: "Share basic details and legal status.",
    },
    {
      icon: <Camera />,
      title: "Site Audit",
      desc: "Professional photography & verification.",
    },
    {
      icon: <Megaphone />,
      title: "Premium Blast",
      desc: "Promote to verified investors.",
    },
    {
      icon: <Handshake />,
      title: "Close Deal",
      desc: "Direct buyer interaction.",
    },
  ];

  return (
    <Section className="bg-slate-50/50">
      <Container>
        <h2 className="text-3xl font-black uppercase mb-16">How it works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-dark-orange">
                {step.icon}
              </div>

              <h3 className="text-lg font-black uppercase mb-2">
                0{i + 1}. {step.title}
              </h3>

              <p className="text-slate-500 text-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
