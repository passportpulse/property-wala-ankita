import React from "react";
import { Lock } from "lucide-react";

const services = [
  {
    title: "Buying & Renting",
    desc: "Browse verified homes and commercial spaces across Durgapur with trusted local insights.",
    tag: "For Buyers & Tenants",
    icon: "🏠",
    link: "/buy",
    loginText: "Buyer Login",
    helper: "Login to view prices, owner details & schedule visits",
  },
  {
    title: "Selling & Listing",
    desc: "List your property confidently and attract genuine buyers through our verified network.",
    tag: "For Property Owners",
    icon: "💰",
    link: "/sell",
    loginText: "Seller Login",
    helper: "Login to manage listings, leads & negotiations",
  },
  {
    title: "Brokers Zone",
    desc: "Access verified inventory, collaborate on deals, and grow faster with Property Wala Bhaiya.",
    tag: "For Brokers & Agents",
    icon: "🤝",
    link: "/brokers",
    loginText: "Broker Login",
    helper: "Login to access inventory & partner tools",
  },
  {
    title: "Developer Portal",
    desc: "Strategic sales and marketing support for residential and commercial developments.",
    tag: "For Developers & Builders",
    icon: "🏗️",
    link: "/developers",
    loginText: "Developer Login",
    helper: "Login to manage projects & sales dashboards",
  },
];

export default function ServiceHub() {
  const handleLogin = (role) => {
    console.log("Login clicked for:", role);
    // later: open login modal or navigate(`/login?role=${role}`)
  };

  return (
    <section className="pb-16 lg:pb-32 bg-white font-poppins relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-[1.5px] bg-coral-red" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
              Our Services
            </span>
            <span className="w-8 h-[1.5px] bg-coral-red" />
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
            A Complete <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">
              Real Estate Ecosystem
            </span>
          </h2>

          <p className="text-slate-500 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            Built for buyers, sellers, brokers, and developers — all powered by local expertise in Durgapur.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-peach-glow/10 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Background Icon */}
              <div className="absolute -right-4 -top-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                {service.icon}
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <span className="inline-block px-3 py-1 rounded-lg bg-white text-[9px] font-black uppercase tracking-[0.15em] text-coral-red border border-slate-100">
                    {service.tag}
                  </span>

                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-coral-red transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* ACTION AREA */}
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {service.helper}
                  </p>

                  <button
                    onClick={() => handleLogin(service.loginText)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 hover:border-coral-red hover:text-coral-red transition-all"
                  >
                    <Lock className="w-4 h-4" />
                    {service.loginText}
                  </button>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-linear-to-r from-coral-red to-soft-orange opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
