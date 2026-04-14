/* sections/ContactCTA.js */

import Section from "./layout/Section";
import Container from "./layout/Container";
import { MessageCircle, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <Section className="bg-white font-poppins py-10 md:py-20">
      <Container>
        {/* COMPACT CTA CARD */}
        <div className="
          relative group
          rounded-4xl md:rounded-[3rem]
          p-8 md:p-20
          text-center
          bg-slate-50
          border border-slate-100
          overflow-hidden
        ">
          {/* Subtle Background Accents - Smaller on Mobile */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-dark-orange/10 blur-[80px] rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-orange/5 blur-[80px] rounded-full -ml-16 -mb-16" />

          <div className="relative z-10 space-y-6 md:space-y-8">
            
            {/* COMPACT LABEL */}
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[1.5px] bg-dark-orange"></span>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-dark-orange">
                Get Started
              </span>
              <span className="w-6 h-[1.5px] bg-dark-orange"></span>
            </div>

            {/* HEADING: Tighter leading and font-size for mobile */}
            <h2 className="text-2xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight md:leading-[1.1]">
              Ready to find your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-dark-orange via-lighter-orange to-soft-orange">
                place in Durgapur?
              </span>
            </h2>

            {/* DESCRIPTION: Shorter for quick reading */}
            <p className="text-slate-500 max-w-md mx-auto text-xs md:text-base leading-relaxed">
              Connect with <span className="text-slate-900 font-bold">Property Wala Bhaiya</span> for curated listings and personalized guidance.
            </p>

            {/* BUTTONS: Full width on mobile, side-by-side on desktop */}
            <div className="flex justify-center pt-4 md:pt-6">
              <a
                href="https://wa.me/917699988876"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  bg-[#25D366] text-white
                  px-4 py-1 rounded-l-lg
                  font-black text-[10px] uppercase tracking-widest
                  hover:bg-dark-orange transition-all duration-300
                  active:scale-95 shadow-lg hover:shadow-dark-orange/20
                "
              >
                <MessageCircle size={16} strokeWidth={3} />
                WhatsApp
              </a>

              <a
                href="tel:+917699988876"
                className="
                  flex items-center justify-center gap-2
                  bg-white text-slate-900
                  border border-slate-200
                  px-8 py-4 rounded-r-lg
                  font-black text-[10px] uppercase tracking-widest
                  hover:border-dark-orange hover:text-dark-orange
                  transition-all duration-300 active:scale-95
                "
              >
                <Phone size={16} strokeWidth={3} />

                Call
              </a>
            </div>
          </div>

          {/* BOTTOM SHINE BAR: Constant brand identity */}
          <div className="absolute bottom-0 inset-x-0 h-1 md:h-1.5 overflow-hidden">
             <div className="w-full h-full bg-linear-to-r from-dark-orange via-lighter-orange to-soft-orange">
                <span
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: "linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
                    backgroundSize: "200% 100%",
                    animation: "shine 3s linear infinite",
                  }}
                />
             </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}