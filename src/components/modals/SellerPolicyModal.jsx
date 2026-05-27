import React from "react";
import { X, ShieldCheck, AlertCircle, Trash2, Clock, CheckCircle2 } from "lucide-react";

export default function SellerPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-2 sm:p-4 bg-slate-900/40 backdrop-blur-xl animate-fade-in text-slate-900">
      <div className="bg-white w-full max-w-2xl rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border border-white/20 flex flex-col max-h-[95vh] sm:max-h-[90vh]">
        
        {/* Header - Sticky */}
        <div className="relative p-6 sm:p-10 border-b border-slate-100 bg-slate-50/50 backdrop-blur-sm shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2.5 rounded-full hover:bg-white hover:shadow-md transition-all active:scale-90 bg-white/50"
          >
            <X size={18} className="text-slate-400" />
          </button>

          <div className="flex items-center gap-3 sm:gap-5 mb-2 sm:mb-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-100 rounded-xl sm:rounded-2xl text-dark-orange flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase">Seller Fair-Play Policy</h2>
              <p className="text-slate-400 text-[9px] sm:text-[11px] font-black uppercase tracking-widest mt-1">Version 2.0 • Real-Time Integrity</p>
            </div>
          </div>
          <p className="text-slate-500 text-[11px] sm:text-sm font-medium leading-relaxed max-w-lg">By listing on Property Wala Bhaiya, you agree to keep the marketplace "Real-Time" and reliable.</p>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-10 sm:space-y-14 custom-scrollbar">
          
          {/* Section 1 */}
          <div className="group">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 size={18} />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-sm sm:text-lg font-black text-slate-900 uppercase tracking-tight">1. The "Truth in Listing" Rule</h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                   <PolicyItem icon="✓" title="Accuracy" desc="All details (Price, Sqft, Floor, and Amenities) must be 100% accurate." />
                   <PolicyItem icon="✓" title="Current Photos" desc="Photos must be of the actual property. Using 'Sample' photos without disclosure is not permitted." />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="group">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock size={18} />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-sm sm:text-lg font-black text-slate-900 uppercase tracking-tight">2. Mandatory Status Updates</h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                   <PolicyItem icon="⏰" title="The 24-Hour Rule" desc="Once a token is received, the seller must update status to 'Booked' or 'Sold' within 24 hours." />
                   <PolicyItem icon="📞" title="Availability" desc="Repeatedly telling callers 'It’s sold' while keeping it 'Active' will result in account flags." />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="group">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <AlertCircle size={18} />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-sm sm:text-lg font-black text-slate-900 uppercase tracking-tight">3. Community Reporting System</h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                   <PolicyItem icon="🚩" title="Verification Check" desc="3+ reports (e.g. 'Sold') will auto-hide your listing for verification." />
                   <PolicyItem icon="📱" title="Re-Activation" desc="Repeat false listings after re-activation will lead to a permanent ban." />
                </div>
              </div>
            </div>
          </div>

          {/* Penalties Card */}
          <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] space-y-6 sm:space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] -mr-32 -mt-32"/>
            <h3 className="text-sm sm:text-xl font-black flex items-center gap-3 uppercase tracking-tight relative z-10">
              <AlertCircle className="text-red-500" /> 4. Penalties for Misinformation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
              <StrikeCard label="First Strike" desc="Warning and temporary hidden listing." />
              <StrikeCard label="Second Strike" desc="30-day suspension from the platform." />
              <StrikeCard label="Third Strike" desc="Permanent Blacklist of phone & account." isExtreme />
            </div>
          </div>

          {/* Bhaiya's Note */}
          <div className="p-6 sm:p-12 border-2 border-dashed border-orange-200 rounded-[2rem] sm:rounded-[3.5rem] bg-orange-50/50 relative">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white border border-orange-100 rounded-full text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-dark-orange shadow-sm">
                Owner's Pride
             </div>
             <p className="text-xs sm:text-[15px] font-bold text-slate-700 italic text-center leading-relaxed">
               "A clean platform brings serious buyers. By keeping your status updated, you're not just following rules—you're building a reputation that helps you close deals faster!"
               <span className="block mt-4 text-dark-orange font-black not-italic uppercase tracking-[0.25em] text-[10px] sm:text-[12px]">— Bhaiya’s Note to Sellers</span>
             </p>
          </div>
        </div>

        {/* Footer - Sticky */}
        <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-100 text-center shrink-0">
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-12 py-4 sm:py-5 bg-slate-900 text-white rounded-2xl sm:rounded-3xl font-black uppercase tracking-widest text-[10px] sm:text-xs hover:bg-dark-orange transition-all active:scale-95 shadow-xl hover:shadow-orange-200"
          >
            I Accept & Understand
          </button>
        </div>
      </div>
    </div>
  );
}

function PolicyItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl border border-slate-50 hover:bg-slate-50/50 transition-colors">
      <div className="text-lg pt-0.5">{icon}</div>
      <div className="space-y-1">
        <p className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-tight">{title}</p>
        <p className="text-[11px] sm:text-[13px] text-slate-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function StrikeCard({ label, desc, isExtreme }) {
  return (
    <div className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 ${isExtreme ? 'bg-red-500/10 border-red-500/20' : 'bg-white/5 border-white/10'}`}>
      <span className={`block text-[9px] font-black uppercase mb-2 tracking-widest ${isExtreme ? 'text-red-400' : 'text-slate-500'}`}>{label}</span>
      <p className="text-[11px] sm:text-[12px] font-black leading-tight uppercase">{desc}</p>
    </div>
  );
}
