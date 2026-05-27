import React, { useState, useEffect } from "react";
import { X, AlertTriangle, CheckCircle2, MessageSquare, Send, ArrowRight, ExternalLink } from "lucide-react";

export default function ReportListingModal({ isOpen, onClose, propertyId, propertyTitle }) {
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [isReporting, setIsReporting] = useState(false);

  const reasons = [
    { 
      label: "🏠 Already Sold/Rented", 
      value: "sold", 
      sub: "The seller told me it's no longer available.",
      impact: "Saves 15+ buyers today"
    },
    { 
      label: "📞 Wrong Contact Info", 
      value: "contact", 
      sub: "I can't reach the owner/agent.",
      impact: "Fixes communication gap"
    },
    { 
      label: "📸 Fake Photos", 
      value: "fake", 
      sub: "The property looks nothing like the pictures.",
      impact: "Prevents site-visit waste"
    },
    { 
      label: "💰 Incorrect Price", 
      value: "price", 
      sub: "The price on the call was different from the website.",
      impact: "Enforces price integrity"
    },
    { 
      label: "🚫 Spam/Fraud", 
      value: "spam", 
      sub: "This listing looks suspicious or is a duplicate.",
      impact: "Removes bad actors"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsReporting(true);
    
    // Simulate API logic
    setTimeout(() => {
      const reports = JSON.parse(localStorage.getItem(`reports_${propertyId}`) || "[]");
      const newReport = { reason, details, timestamp: new Date().toISOString() };
      const updatedReports = [...reports, newReport];
      localStorage.setItem(`reports_${propertyId}`, JSON.stringify(updatedReports));

      // 2. The Seller Ping (Simulation)
      console.log(`%c[WhatsApp Simulation] To Seller: "Hey! Users are reporting your property in ${propertyTitle} as 'Sold.' Is it still available? Reply YES to keep it live or NO to mark it as sold. 🙏"`, "color: #25D366; font-weight: bold; font-size: 12px;");

      const soldReports = updatedReports.filter(r => r.reason === "sold").length;
      if (soldReports >= 3) {
        localStorage.setItem(`status_${propertyId}`, "pending_verification");
        window.dispatchEvent(new Event("propertyStatusUpdate"));
      }

      setIsReporting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 bg-slate-900/40 backdrop-blur-xl animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border border-white/20 flex flex-col max-h-[95vh] sm:max-h-[90vh]">
        <div className="relative p-6 sm:p-10 overflow-y-auto custom-scrollbar flex-1">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2.5 rounded-full hover:bg-slate-100 transition-all active:scale-90 z-10 bg-white/80 backdrop-blur-sm shadow-sm"
          >
            <X size={18} className="text-slate-400" />
          </button>

          {!submitted ? (
            <div className="space-y-6 sm:y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-[9px] sm:text-[10px] font-black uppercase tracking-wider border border-red-100">
                  <AlertTriangle className="w-3 h-3" /> 🚩 Report This Listing
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  Help Bhaiya <br className="hidden sm:block"/>keep it real! <br/>
                  <span className="text-dark-orange">Notice something wrong?</span>
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-sm font-medium leading-relaxed">
                  We verify every report to ensure the community gets the best data. <br className="hidden sm:block"/>
                  Reporting: <span className="text-slate-900 font-bold underline decoration-orange-300 underline-offset-4">{propertyTitle}</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">
                <div className="space-y-3">
                  <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Select Reason</label>
                  <div className="grid gap-2 sm:gap-3">
                    {reasons.map((r) => (
                      <button
                        key={r.value}
                        type="button"
                        onClick={() => setReason(r.value)}
                        className={`flex flex-col items-start p-4 sm:p-5 rounded-2xl sm:rounded-3xl border-2 transition-all text-left group relative
                          ${reason === r.value 
                            ? "bg-orange-50 border-orange-500 shadow-lg shadow-orange-100 -translate-y-0.5" 
                            : "bg-slate-50 border-slate-50 hover:border-slate-200 hover:bg-white hover:shadow-md"}
                        `}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="text-xs sm:text-sm font-black text-slate-900">{r.label}</span>
                          {reason === r.value && <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"/>}
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 group-hover:text-slate-600 mt-1">{r.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Any extra details? (Optional)</label>
                  <textarea 
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="e.g., 'The owner said the price is actually 5 Lakhs higher'"
                    className="w-full px-5 py-4 sm:py-5 bg-slate-50 border-2 border-slate-50 rounded-2xl sm:rounded-3xl text-xs sm:text-sm font-bold focus:border-orange-500 focus:bg-white focus:outline-none min-h-[100px] sm:min-h-[120px] resize-none transition-all placeholder:text-slate-300"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={!reason || isReporting}
                  className={`w-full flex items-center justify-center gap-3 py-4 sm:py-6 rounded-2xl sm:rounded-3xl font-black uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl text-[10px] sm:text-xs
                    ${!reason || isReporting 
                      ? "bg-slate-100 text-slate-300 cursor-not-allowed" 
                      : "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200"}
                  `}
                >
                  {isReporting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Verifying...
                    </div>
                  ) : (
                    <>Submit Report <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="py-6 sm:py-12 text-center space-y-8 sm:space-y-10 animate-fade-in">
              <div className="relative mx-auto w-20 h-20 sm:w-28 sm:h-28">
                <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-20" />
                <div className="relative w-full h-full bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10 sm:w-14 sm:h-14" />
                </div>
              </div>
              
              <div className="space-y-3 max-w-sm mx-auto">
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">Thanks for <br className="sm:hidden"/>the heads-up!</h3>
                <p className="text-slate-500 text-[11px] sm:text-sm font-medium leading-relaxed">
                  Bhaiya is looking into this right now. We’ve flagged this listing to save other buyers' time.
                </p>
              </div>

              <div className="bg-orange-50/50 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-orange-100 space-y-5 sm:space-y-6">
                <p className="text-[10px] sm:text-[11px] text-orange-600 font-bold leading-tight uppercase tracking-widest">
                  Market Integrity Reward
                </p>
                <div className="flex items-center justify-center gap-2">
                   <div className="px-5 py-2.5 bg-white text-slate-900 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-md border border-orange-100 flex items-center gap-2">
                     <Star className="w-3 h-3 text-orange-500 fill-orange-500" /> Trust Badge Earned
                   </div>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-bold uppercase tracking-tighter">
                    Check out these verified properties instead:
                  </p>
                  <a 
                    href="/buy"
                    className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-slate-900 text-white rounded-2xl sm:rounded-3xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-dark-orange transition-all shadow-xl active:scale-95 group"
                  >
                    Verified Listings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="w-full py-2 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] hover:text-slate-900 transition-all"
              >
                Close & Return
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
