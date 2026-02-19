import React from "react";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

const services = [
  {
    title: "Buying & Renting",
    desc: "Browse verified homes across Durgapur.",
    tag: "Buyers",
    icon: "🏠",
    loginText: "Buyer Login",
    helper: "View prices & owner details",
  },
  {
    title: "Selling & Listing",
    desc: "List your property to genuine buyers.",
    tag: "Owners",
    icon: "💰",
    loginText: "Seller Login",
    helper: "Manage listings & leads",
  },
  {
    title: "Partner Hub",
    desc: "Access inventory & collaborate on deals.",
    tag: "Network",
    icon: "🤝",
    loginText: "Partner Login",
    helper: "Get partner tools",
  },
  {
    title: "Developer Portal",
    desc: "Strategic sales support for builders.",
    tag: "Builders",
    icon: "🏗️",
    loginText: "Dev Login",
    helper: "Sales dashboards",
  },
];

export default function ServiceHub() {
  const navigate = useNavigate();

  const handleLogin = (roleText) => {
    navigate(`/login?role=${encodeURIComponent(roleText)}`);
  };

  return (
    <Section className="bg-white font-poppins py-12 md:py-24 overflow-hidden">
      <Container>
        {/* HEADER: Tightened for mobile */}
        <div className="max-w-2xl mb-10 md:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-dark-orange" />
            <span className="text-[10px] font-black uppercase tracking-widest text-dark-orange">
              Our Services
            </span>
          </div>

          <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-none">
            Real Estate <span className="text-dark-orange">Ecosystem.</span>
          </h2>
        </div>

        {/* SERVICES GRID: 2-columns on mobile for compactness */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group relative 
                p-5 md:p-10
                rounded-2xl md:rounded-[2.5rem]
                bg-orange-50 border border-slate-100
                hover:border-dark-orange/20
                hover:shadow-2xl hover:shadow-dark-orange/5
                transition-all duration-500
                flex flex-col justify-between
                overflow-hidden
              "
            >
              {/* Floating Icon: Sized down for mobile */}
              <div className="absolute -right-2 -top-2 text-4xl md:text-7xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                {service.icon}
              </div>

              <div className="relative z-10 space-y-4">
                <span className="inline-block px-2 py-1 rounded-md bg-slate-50 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-500">
                  {service.tag}
                </span>

                <div>
                  <h3 className="text-sm md:text-2xl font-black text-slate-900 tracking-tight group-hover:text-dark-orange transition-colors leading-tight">
                    {service.title}
                  </h3>
                  {/* Description: Hidden or simplified on tiny screens if needed */}
                  <p className="mt-2 text-slate-500 text-[10px] md:text-base leading-snug md:leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* ACTION AREA: Compact buttons */}
              <div className="mt-6 space-y-3 relative z-10">
                <p className="hidden md:block text-[11px] text-slate-400 leading-relaxed">
                  {service.helper}
                </p>

                <button
                  onClick={() => handleLogin(service.loginText)}
                  className="
                    w-full 
                    flex items-center justify-center gap-2
                    py-2.5 md:py-4
                    rounded-lg md:rounded-xl
                    bg-slate-900 text-white
                    text-[9px] md:text-[10px] font-black uppercase tracking-widest
                    hover:bg-dark-orange
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <Lock className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="truncate">{service.loginText}</span>
                </button>
              </div>

              {/* Bottom Accent Bar: Shine Effect */}
              <div className="absolute bottom-0 inset-x-0 h-1 overflow-hidden">
                <div className="w-full h-full bg-dark-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background: "linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shine 2s linear infinite",
                      }}
                    />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}