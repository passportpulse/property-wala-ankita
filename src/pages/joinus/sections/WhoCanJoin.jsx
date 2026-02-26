import React from "react";
import { ArrowUpDown, CheckCircle } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { ArrowDown } from "lucide-react";

export default function WhoCanJoin() {
  const criteria = [
    {
      title: "Independent Brokers",
      desc: "Individual agents or small firms looking to scale.",
    },
    {
      title: "Local Experts",
      desc: "Those with deep knowledge of their specific neighborhoods.",
    },
    {
      title: "Ethical Professionals",
      desc: "Partners who prioritize transparency and client trust.",
    },
    {
      title: "Growth Seekers",
      desc: "Brokers ready to adopt digital tools and unified systems.",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* COMPACT HEADER */}
          <div className="relative mb-8 lg:mb-16 border-l-4 border-dark-orange pl-4 lg:pl-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1 lg:space-y-2">
                <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                  Professional Services
                </span>

                <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                  Expert{" "}
                  <span className="bg-linear-to-r from-dark-orange to-lighter-orange bg-clip-text text-transparent">
                    Consultancy
                  </span>
                </h2>

                <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
                  We partner with ethical, local experts for lasting
                  relationships.
                </p>
              </div>

              <button
                // onClick={() => navigate("/buy")}
                className="
    cursor-pointer
    bg-dark-orange text-white
    flex items-center gap-2 group
    text-[10px] lg:text-[11px]
    font-black uppercase tracking-widest
    px-4 py-2 lg:px-5 lg:py-2.5
    border-2 border-white
    rounded-md
    hover:bg-white hover:text-orange-600 hover:border-orange-600
    transition-all duration-300
    shadow-sm hover:shadow-md
    w-fit
  "
              >
                Who Can Join ?
                <ArrowDown className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Criteria Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF9F2] border border-orange-100/50 shadow-xs hover:shadow-sm transition-shadow"
              >
                <div className="mt-0.5">
                  <CheckCircle className="w-5 h-5 text-dark-orange shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-[11px] md:text-sm text-slate-600 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
