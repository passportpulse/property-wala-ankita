import React from "react";
import { Ban, Mail, Phone, ArrowLeft } from "lucide-react";

export default function BannedScreen() {
  const sellerName = "Rajesh K."; // Mocked or from state
  const strikes = [
    { date: "12 April 2024", reason: "Incorrect Pricing" },
    { date: "28 April 2024", reason: "Sold Property marked as Active" },
    { date: "Today", reason: "Repeated Fake Photos" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden animate-fade-in">
        <div className="bg-red-600 p-10 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
          
          <div className="relative z-10 space-y-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center mx-auto border border-white/20">
              <Ban size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight">Account Deactivated</h1>
            <p className="text-red-100 font-bold uppercase tracking-widest text-xs">Property Wala Bhaiya Community Standards</p>
          </div>
        </div>

        <div className="p-10 space-y-8">
          <div className="space-y-4">
            <p className="text-lg font-bold text-slate-900 leading-tight">
              Namaste {sellerName}, <br/>
              <span className="text-slate-500 font-medium text-base">We regret to inform you that your account has been permanently deactivated effective immediately.</span>
            </p>
            
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Policy Violations</h3>
              <div className="space-y-3">
                {strikes.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[10px] font-black">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">{s.reason}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">{s.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-slate-600 leading-relaxed">
              Bhaiya believes in **trust and transparency**. Because of repeated policy violations regarding listing accuracy, your access to the portal has been restricted. 
              This ensures our community gets 100% genuine and live data.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="mailto:support@propertywalabhaiya.com" className="flex items-center justify-center gap-3 p-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all">
                <Mail size={16} /> Contact Support
              </a>
              <button className="flex items-center justify-center gap-3 p-4 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-200 transition-all">
                Submit Appeal
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 text-center">
             <a href="/" className="inline-flex items-center gap-2 text-[10px] font-black text-dark-orange uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">
               <ArrowLeft size={14} /> Return to Homepage
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
