import { ArrowUpRight, Phone, Landmark } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Container from "./layout/Container";
import Section from "./layout/Section";

export default function Cta() {
  return (
    <>
      {/* 3. CTA SECTION */}
      <Section className="pb-32">
        <Container>
          <div className="relative bg-white border border-slate-100 rounded-[3rem] p-8 lg:p-16 overflow-hidden group shadow-xs">
            {/* Clean, subtle background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-coral-red/3 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Side: Professional Hook */}
              <div className="max-w-xl space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-coral-red"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-coral-red">
                    Priority Concierge
                  </span>
                </div>

                <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none uppercase">
                  Private{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">
                    Showings
                  </span>{" "}
                  <br />
                  On Your Schedule.
                </h3>

                <p className="text-slate-500 font-medium text-base lg:text-lg max-w-md leading-relaxed">
                  Skip the paperwork. Connect directly with Property Wala Bhaiya
                  to arrange a private walkthrough of Durgapur's most exclusive
                  listings.
                </p>
              </div>

              {/* Right Side: Direct Contact Options */}
              <div className="w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917699988876"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900 text-white px-10 py-4 rounded-3xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-coral-red transition-all duration-500 flex items-center justify-center gap-2 active:scale-95"
                  >
                    <FaWhatsapp className="text-white text-lg" />
                    WhatsApp Now
                  </a>

                  {/* Call */}
                  <a
                    href="tel:+917699988876"
                    className="bg-white border border-slate-200 text-slate-900 px-10 py-4 rounded-3xl font-black uppercase text-[10px] tracking-widest hover:border-coral-red hover:text-coral-red transition-all duration-500 flex items-center justify-center gap-2 active:scale-95"
                  >
                    <FaPhoneAlt className="text-slate-900 text-lg" />
                    Call Now
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:propertywalabhaiya@gmail.com"
                    className="bg-white border border-slate-200 text-slate-900 px-10 py-4 rounded-3xl font-black uppercase text-[10px] tracking-widest hover:border-coral-red hover:text-coral-red transition-all duration-500 flex items-center justify-center gap-2 active:scale-95"
                  >
                    <FaEnvelope className="text-slate-900 text-lg" />
                    Email Us
                  </a>
                </div>

                <p className="mt-4 text-[9px] text-center lg:text-left text-slate-400 font-bold uppercase tracking-widest">
                  <span className="text-soft-orange">●</span> Property Wala
                  Bhaiya usually responds within 15 minutes
                </p>
              </div>
            </div>

            {/* Elegant corner watermark instead of giant icon */}
            <Landmark
              size={120}
              className="absolute -bottom-6 -right-6 text-slate-100 rotate-12 group-hover:text-coral-red/5 transition-colors duration-700"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
