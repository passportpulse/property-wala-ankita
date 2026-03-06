import React from "react";
import {
  Upload,
  Users,
  MessageSquare,
  LineChart,
  ChevronRight,
} from "lucide-react";
import Section from "../../../components/layout/Section";
import Header from "../../../components/Header";

export default function SellHowItWorks() {
  const steps = [
    {
      icon: <Upload className="text-orange-500" size={24} />,
      title: "Upload your property in 3 quick steps",
      desc: "Tell us a few basic details about your property, add pricing & upload photos.",
    },
    {
      icon: <Users className="text-orange-500" size={24} />,
      title: "Reach 10 lacs+ tenants & buyers",
      desc: "As the largest property search platform, your property reaches maximum buyers online.",
    },
    {
      icon: <MessageSquare className="text-orange-500" size={24} />,
      title: "Start getting enquiries",
      desc: "Receive enquiries from interested buyers as soon as your property goes live.",
    },
    {
      icon: <LineChart className="text-orange-500" size={24} />,
      title: "Important insights",
      desc: "View property insights and track how your listing is performing.",
    },
  ];

  return (
    <Section>
      <Header tag="Process" title="How it" highlight="Works" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="bg-orange-50 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-800 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
