import React from "react";

const services = [
  {
    title: "Buying & Renting",
    desc: "Find your dream home or office with verified listings and direct owner deals.",
    tag: "For Seekers",
    icon: "🏠",
    link: "/buy",
  },
  {
    title: "Selling & Listing",
    desc: "List your property with us and get the best market value through our network.",
    tag: "For Owners",
    icon: "💰",
    link: "/sell",
  },
  {
    title: "Brokers Zone",
    desc: "Collaborate with Property Wala Bhaiya to expand your reach and close deals faster.",
    tag: "For Agents",
    icon: "🤝",
    link: "/brokers",
  },
  {
    title: "Developer Portal",
    desc: "Strategic marketing and sales partnership for your upcoming luxury projects.",
    tag: "For Builders",
    icon: "🏗️",
    link: "/developers",
  },
];

export default function ServiceHub() {
  return (
    <section className="py-16 lg:py-24 bg-white font-poppins relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header - Standardized Fonts */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1.5px] bg-coral-red"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
              Our Services
            </span>
            <span className="w-8 h-[1.5px] bg-coral-red"></span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
            A Complete <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">
              Real Estate Ecosystem
            </span>
          </h2>
          <p className="text-slate-500 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you are looking to move in, sell out, or build big, Property
            Wala Bhaiya is Durgapur's trusted partner for every stakeholder.
          </p>
        </div>

        {/* Services Grid - Layout Maintained */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-4xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-peach-glow/10 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Subtle Background Pattern */}
              <div className="absolute -right-4 -top-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                {service.icon}
              </div>

              <div className="relative z-10 space-y-6">
                <span className="inline-block px-3 py-1 rounded-lg bg-white text-[9px] font-black uppercase tracking-[0.15em] text-coral-red shadow-sm border border-slate-50">
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

                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:gap-4 transition-all">
                  Explore More
                  <span className="text-coral-red text-lg">→</span>
                </div>
              </div>

              {/* Universal Bottom Accent Bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-linear-to-r from-coral-red to-soft-orange opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Quick Help Banner - Layout Maintained */}
        <div className="relative mt-20 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-coral-red/5 blur-3xl" />
          <div className="absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-soft-orange/10 blur-2xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex gap-8 items-center">
              {/* Universal Gradient Vertical Line */}
              <div className="hidden md:block w-1.5 h-20 bg-linear-to-b from-coral-red to-soft-orange rounded-full" />

              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter">
                  Not sure <span className="text-coral-red">where to start?</span>
                </h4>
                <p className="max-w-md text-sm lg:text-base font-medium leading-relaxed text-slate-500">
                  Our lead consultants provide a <span className="text-slate-900 font-bold">free market analysis</span> for your property or investment plan.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-4">
              <button className="group relative overflow-hidden rounded-2xl bg-slate-900 px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-coral-red hover:shadow-[0_20px_40px_rgba(250,92,92,0.3)] active:scale-95">
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 z-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </button>

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                No obligations • 100% Confidential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}