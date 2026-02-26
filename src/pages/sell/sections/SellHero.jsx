import { CheckCircle2, Zap, ShieldCheck, Users } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

export default function SellHero({ setIsModalOpen }) {
  return (
    <Section className="py-6 md:py-16 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* CONTENT */}
          <div className="w-full text-center lg:text-left space-y-4">

            {/* Compact Premium Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full 
            bg-linear-to-r from-orange-50 to-orange-100 
            border border-orange-200 mx-auto lg:mx-0">

              <Zap size={10} className="text-dark-orange" />
              <p className="text-dark-orange font-bold text-[9px] uppercase tracking-[0.2em]">
                Direct Buyer Platform
              </p>
            </div>

            {/* Headline – tighter */}
            <h1 className="text-3xl md:text-6xl font-black tracking-tight uppercase leading-[1] text-slate-900">
              Sell or Rent
              <br />
              <span className="text-slate-300">Fast & Free</span>
            </h1>

            {/* Trust Indicators – tighter spacing */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-[10px] font-bold uppercase tracking-wide">
              <span className="flex items-center gap-1 text-slate-600">
                <ShieldCheck size={13} className="text-dark-orange" />
                0% Brokerage
              </span>

              <span className="flex items-center gap-1 text-slate-600">
                <Users size={13} className="text-dark-orange" />
                Direct Buyers
              </span>
            </div>

            {/* CTA + Trust */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-fit bg-dark-orange text-white 
                px-8 py-3 md:py-4 rounded-xl font-bold 
                uppercase tracking-wider text-[11px] 
                shadow-md active:scale-95 transition"
              >
                Post Property Free
              </button>

              <div className="flex flex-col items-center sm:items-start">
                <p className="text-slate-400 font-semibold text-[9px] uppercase tracking-widest">
                  2M+ Owners Joined
                </p>

                <div className="flex -space-x-2 mt-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/50?u=${i}`}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* TRUST CARD */}
          <div className="w-full lg:w-auto">
            <div className="mx-auto max-w-[280px] lg:max-w-none">
              <div className="relative w-full lg:w-80 h-40 lg:h-96 
              rounded-2xl overflow-hidden shadow-lg flex items-end justify-center p-5">

                <img
                  src="https://img.staticmb.com/mbcontent/images/crop/uploads/2025/7/trust-owned-property_0_1200.jpg.webp"
                  alt="background"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-linear-to-t 
                from-white via-white/50 to-transparent 
                lg:from-slate-900 lg:to-transparent"></div>

                <div className="absolute top-3 right-3 bg-white rounded-full p-1">
                  <CheckCircle2 size={18} className="text-dark-orange" />
                </div>

                <div className="relative z-10 text-center">
                  <span className="text-3xl lg:text-6xl font-black text-slate-900 lg:text-white block">
                    2M+
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-700 lg:text-slate-300">
                    Trusted Owners
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
