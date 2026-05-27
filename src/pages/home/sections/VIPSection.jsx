import React from "react";
import { ShieldCheck, TrendingUp, Handshake, Lock, PhoneCall, ChevronRight, Briefcase } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

export default function VIPSection() {
  return (
    <Section className="bg-linear-to-br from-dark-orange to-[#b34213] py-16 md:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/10 rounded-full blur-[120px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-black/10 rounded-full blur-[120px] -ml-40 -mb-40" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 md:space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] border border-white/30 backdrop-blur-md shadow-lg animate-pulse">
                <Briefcase className="w-3 h-3" /> <span className="luxury-text-gradient-shimmer">VIP EXECUTIVE SUITE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter uppercase drop-shadow-lg">
                Direct Access for <br className="hidden sm:block" />
                <span className="text-slate-900">High-Impact</span> Decisions.
              </h2>
              <p className="text-white/90 font-medium text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Leveraging 16 years of expertise in Steel, Logistics, and Real Estate to power your next big venture. Skip the queue and consult directly with our Founder’s Office.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="text-white font-black uppercase tracking-tight text-xs sm:text-sm flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-slate-900 rounded-full" /> Industrial DNA
                </h4>
                <p className="text-white/80 text-xs font-bold leading-relaxed">
                  Benefit from insights rooted in Steel and Logistics. We don't just see land; we see structural potential and supply chain efficiency.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-black uppercase tracking-tight text-xs sm:text-sm flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-white rounded-full" /> Strategic JVs
                </h4>
                <p className="text-white/80 text-xs font-bold leading-relaxed">
                  Access an exclusive network of Tier-1 developers and land owners vetted over 16 years with 0% litigation history.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-black uppercase tracking-tight text-xs sm:text-sm flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-slate-900 rounded-full" /> Regulatory Shield
                </h4>
                <p className="text-white/80 text-xs font-bold leading-relaxed">
                  Get direct guidance on complex industrial zoning, licensing, and compliance from experts who know the ground reality.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-black uppercase tracking-tight text-xs sm:text-sm flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-white rounded-full" /> Total Confidentiality
                </h4>
                <p className="text-white/80 text-xs font-bold leading-relaxed">
                  High-stake deals require 100% privacy. Your data stays in the Founder’s Executive Office, never shared with third parties.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <Lock size={40} className="text-white" />
              </div>
              <p className="text-[10px] font-black text-white uppercase tracking-widest mb-2">Bhaiya's Advantage</p>
              <p className="text-sm font-bold text-white italic">
                "Our VIP clients get complimentary Logistics Feasibility Reports for all industrial and warehouse acquisitions."
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <form className="space-y-6 relative z-10 text-left">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Request Private Consultation</h3>
                <p className="text-white/60 text-xs sm:text-sm font-medium">A senior executive will contact you within 4 hours.</p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm focus:border-white outline-none transition-all" placeholder="e.g. Aman Gupta" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Company</label>
                    <input type="text" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm focus:border-white outline-none transition-all" placeholder="Company Name" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Direct Contact</label>
                  <input type="tel" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm focus:border-white outline-none transition-all" placeholder="+91" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Investment Type</label>
                  <select className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm focus:border-white outline-none appearance-none cursor-pointer transition-all">
                    <option className="bg-slate-900">Joint Venture (JV)</option>
                    <option className="bg-slate-900">Industrial Plot / Factory</option>
                    <option className="bg-slate-900">Commercial Complex</option>
                    <option className="bg-slate-900">Petrol Pump Asset</option>
                  </select>
                </div>

                <button type="submit" className="w-full py-5 bg-white text-dark-orange rounded-[1.5rem] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-xl shadow-black/20 active:scale-95">
                  Request Priority Briefing <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-4">
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Need Immediate Help?</p>
                <button className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-white/70 transition-all">
                  <PhoneCall size={14} className="text-white" /> Speak with Founder's Office
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
