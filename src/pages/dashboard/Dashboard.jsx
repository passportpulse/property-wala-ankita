import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";

const services = [
  {
    title: "Buying & Renting",
    desc: "Browse verified homes across Durgapur.",
    tag: "Buyers",
    icon: "🏠",
    loginText: "Buyer Login",
  },
  {
    title: "Selling & Listing",
    desc: "List your property to genuine buyers.",
    tag: "Owners",
    icon: "💰",
    loginText: "Seller Login",
  },
  {
    title: "Partner Hub",
    desc: "Access inventory & collaborate on deals.",
    tag: "Network",
    icon: "🤝",
    loginText: "Partner Login",
  },
  {
    title: "Developer Portal",
    desc: "Strategic sales support for builders.",
    tag: "Builders",
    icon: "🏗️",
    loginText: "Dev Login",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Section className="bg-[#fcfcfd] mt-0 pt-6 lg:mt-0 ">
      <Container>
        {/* SOBER HEADER */}
        <div className="max-w-4xl mb-12 md:mb-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-1 w-8 bg-emerald-600 rounded-full" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Service Directory
            </span>
          </div>

          <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight leading-[0.9] mb-4">
            Professional <span className="text-emerald-600">Portals.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-lg">
            Select your specialized gateway to access the ecosystem.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-4xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="text-3xl">{service.icon}</div>
                  <span className="text-[9px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded uppercase tracking-tighter">
                    {service.tag}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              {/* SOBER GREEN BUTTON */}
              <button
                onClick={() => navigate(`/login?role=${service.loginText}`)}
                className="
                  relative overflow-hidden
                  w-full flex items-center justify-between
                  pl-5 pr-2 py-3 rounded-xl
                  bg-emerald-600 text-white
                  text-[10px] font-black uppercase tracking-widest
                  hover:bg-emerald-700 transition-colors duration-300
                  group/btn
                "
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-200/50" />
                  {service.loginText}
                </span>

                <div className="bg-white/10 p-1.5 rounded-lg">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>

                {/* INTERACTIVE SHINE: Only runs once on hover */}
                <span
                  className="absolute inset-0 w-full h-full -translate-x-full group-hover/btn:animate-[shine_0.75s_ease-in-out] pointer-events-none"
                  style={{
                    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)",
                  }}
                />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}