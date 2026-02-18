import React from "react";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

const services = [
  {
    title: "Buying & Renting",
    desc: "Browse verified homes and commercial spaces across Durgapur with trusted local insights.",
    tag: "For Buyers & Tenants",
    icon: "🏠",
    loginText: "Buyer Login",
    helper: "Login to view prices, owner details & schedule visits",
  },
  {
    title: "Selling & Listing",
    desc: "List your property confidently and attract genuine buyers through our verified network.",
    tag: "For Property Owners",
    icon: "💰",
    loginText: "Seller Login",
    helper: "Login to manage listings, leads & negotiations",
  },
  {
    title: "Partner Hub",
    desc: "Access verified inventory, collaborate on deals, and grow faster with Property Wala Bhaiya.",
    tag: "Property Wala Bhaiya's Network",
    icon: "🤝",
    loginText: "Partner Login",
    helper: "Login to access inventory & partner tools",
  },
  {
    title: "Developer Portal",
    desc: "Strategic sales and marketing support for residential and commercial developments.",
    tag: "For Developers & Builders",
    icon: "🏗️",
    loginText: "Developer Login",
    helper: "Login to manage projects & sales dashboards",
  },
];

export default function ServiceHub() {
  const navigate = useNavigate();

  const handleLogin = (roleText) => {
    navigate(`/login?role=${encodeURIComponent(roleText)}`);
  };

  return (
    <Section className="bg-white font-poppins">
      <Container>

        {/* HEADER */}
        <div className="max-w-3xl mb-12 lg:mb-16">

          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-dark-orange" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-dark-orange">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
            A Complete{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-dark-orange to-lighter-orange">
              Real Estate Ecosystem
            </span>
          </h2>

          <p className="mt-4 text-slate-500 text-sm lg:text-base leading-relaxed max-w-2xl">
            Built for buyers, sellers, partners, and developers — powered by
            trusted local expertise and verified property networks.
          </p>

        </div>


        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                group relative 
                p-8 lg:p-10
                rounded-3xl lg:rounded-[2.5rem]
                bg-white border border-slate-100
                hover:border-soft-orange/30
                hover:shadow-xl hover:shadow-soft-orange/10
                transition-all duration-500
                overflow-hidden flex flex-col
              "
            >

              {/* Background Icon */}
              <div className="absolute -right-6 -top-6 text-7xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                {service.icon}
              </div>


              <div className="relative z-10 flex flex-col h-full justify-between">

                {/* TOP */}
                <div className="space-y-6">

                  <span className="
                    inline-block px-3 py-1.5 
                    rounded-lg 
                    bg-warm-yellow/20
                    text-[9px] font-black uppercase tracking-[0.2em]
                    text-slate-900
                  ">
                    {service.tag}
                  </span>


                  <div className="space-y-3">

                    <h3 className="
                      text-xl lg:text-2xl font-black 
                      text-slate-900 
                      tracking-tight
                      group-hover:text-dark-orange 
                      transition-colors
                    ">
                      {service.title}
                    </h3>

                    <p className="text-slate-500 text-sm lg:text-base leading-relaxed">
                      {service.desc}
                    </p>

                  </div>

                </div>


                {/* ACTION AREA */}
                <div className="mt-8 pt-6 border-t border-slate-50 space-y-4">

                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {service.helper}
                  </p>


                  <button
                    onClick={() => handleLogin(service.loginText)}
                    className="
                      w-full 
                      flex items-center justify-center gap-2
                      px-4 py-3
                      rounded-xl
                      bg-slate-900 text-white
                      text-[10px] font-black uppercase tracking-[0.2em]
                      hover:bg-dark-orange
                      transition-all duration-300
                      cursor-pointer
                      shadow-lg hover:shadow-dark-orange/20
                    "
                  >
                    <Lock className="w-4 h-4" />
                    {service.loginText}
                  </button>

                </div>

              </div>


              {/* Accent Bar */}
              <div className="
                absolute bottom-0 inset-x-0 h-1.5
                bg-linear-to-r from-dark-orange via-lighter-orange to-soft-orange
                opacity-0 group-hover:opacity-100
                transition-opacity
              "/>

            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}
