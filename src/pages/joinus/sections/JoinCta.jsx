import React from 'react';
import { PhoneCall } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function JoinCta() {
  return (
    <Section>
      <Container>
        <div className="relative group overflow-hidden bg-dark-orange rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl shadow-orange-200">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-xl mx-auto">
            <span className="inline-block text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
              Direct Partnership
            </span>
            
            <h2 className="text-xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to scale your business? <br className="hidden md:block" /> 
              Speak with our team today.
            </h2>

            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:+91XXXXXXXXXX"
                className="
                  relative flex items-center justify-center gap-3
                  w-auto sm:px-12 bg-white text-dark-orange font-semibold px-4 py-3 md:py-5
                  rounded-2xl shadow-xl shadow-black/10
                  active:scale-95 transition-all duration-300
                  hover:bg-slate-900 hover:text-white
                  text-sm md:text-lg
                  animate-bounce-subtle
                "
              >
                <PhoneCall size={20} strokeWidth={2.5} />
                Call Us to Join
                
                {/* Subtle outer glow effect */}
                <span className="absolute inset-0 rounded-2xl ring-4 ring-white/30 animate-ping opacity-20 pointer-events-none" />
              </a>

              <div className="flex flex-col items-center gap-1">
                <p className="text-white/70 text-[11px] md:text-sm font-medium">
                  Available Mon — Sat, 10:00 AM - 7:00 PM
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider">Agents Online Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS for custom subtle bounce */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .animate-bounce-subtle {
            animation: bounce-subtle 3s ease-in-out infinite;
          }
        `}} />
      </Container>
    </Section>
  );
}