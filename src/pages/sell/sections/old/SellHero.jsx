import { ShieldCheck, Users, Zap } from "lucide-react";
import Container from "../../../../components/layout/Container";
import Section from "../../../../components/layout/Section";

export default function SellHero({ setIsModalOpen }) {
  return (
    <Section className="py-8 bg-[#fcd8be]/20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-6">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left space-y-3">

            {/* Badge */}
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#fcd8be] text-[#6f286c] text-[10px] font-bold uppercase tracking-wider">
              <Zap size={12} />
              Direct Buyer Platform
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-black leading-tight text-[#6f286c]">
              Sell or Rent Your
              <br />
              Property Fast
            </h1>

            {/* Trust points */}
            <div className="flex justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-[#6f286c]" />
                0% Brokerage
              </span>

              <span className="flex items-center gap-1">
                <Users size={14} className="text-[#6f286c]" />
                Direct Buyers
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#6f286c] text-white px-6 py-3 rounded-lg text-sm font-bold shadow-sm active:scale-95 transition"
            >
              Post Property Free
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 max-w-sm">
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="https://img.staticmb.com/mbcontent/images/crop/uploads/2025/7/trust-owned-property_0_1200.jpg.webp"
                alt="property owners"
                className="w-full h-44 object-cover"
              />
            </div>

            <p className="text-center text-xs mt-2 font-semibold text-[#6f286c]">
              2M+ Trusted Property Owners
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}
