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
    loginText: "Developer Login",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Section className="bg-[#fcfcfd] mt-0 pt-6 lg:mt-0 ">
      <Container>
        {/* HEADER */}
        <div className="relative mb-8 lg:mb-16 border-l-4 border-dark-orange pl-4 lg:pl-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 lg:space-y-2">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                Secure Access
              </span>

              <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                User{" "}
                <span className="bg-linear-to-r from-dark-orange to-dark-orange bg-clip-text text-transparent">
                  Service Portals
                </span>
              </h2>

              <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
                Select your specialized gateway to manage your real estate
                ecosystem.
              </p>

              <a
                href="#portals"
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
                {/* Shield icon style for security/login context */}
                <div className="flex items-center gap-0.5">
                  <ShieldCheck className="w-4 h-4 text-white group-hover:text-orange-600" />
                </div>

                {/* Rating text changed to status text */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] lg:text-[11px] font-black tracking-widest uppercase">
                    Encrypted Login Access
                  </span>
                </div>
              </a>
            </div>
          </div>
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
                  <span className="relative overflow-hidden text-sm text-white bg-green-700 px-2 py-1 rounded-lg">
                    {service.tag}

                    {/* SHINE LAYER */}
                    <span
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 25%, rgba(255, 255, 255, 0.3) 50%, transparent 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shine 2s linear infinite",
                      }}
                    />
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
                  bg-dark-orange text-white
                  text-[10px] font-black uppercase tracking-widest
                  hover:bg-lighter-orange transition-colors duration-300
                  group/btn
                "
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  {service.loginText}
                </span>

                <div className="bg-white/10 p-1.5 rounded-lg">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>

                {/* INTERACTIVE SHINE: Only runs once on hover */}
                <span
                  className="absolute inset-0 w-full h-full -translate-x-full group-hover/btn:animate-[shine_0.75s_ease-in-out] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)",
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
