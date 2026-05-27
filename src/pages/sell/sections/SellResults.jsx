import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Share2, 
  LayoutDashboard, 
  Plus, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Clock, 
  AlertCircle,
  TrendingUp,
  FileText,
  Check
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SellResults({ formData, onBack }) {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 85 ? prev + 1 : prev));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const handleShare = () => {
    const text = `Hi! I just listed my ${formData.category} at ${formData.locality}, ${formData.city} on Property Wala Bhaiya! 🏠\n\nPrice: ${formData.price}\nBHK: ${formData.bhk}\n\nCheck it out here: [Link]`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: TRUST VERIFICATION DASHBOARD (Span 8) */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[4rem] p-8 lg:p-14 border border-slate-100 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col justify-between min-h-[600px] group">
            
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] -mr-48 -mt-48 transition-all group-hover:bg-orange-500/10" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
              <div className="flex items-center gap-5">
                 <div className="w-14 h-14 rounded-2xl bg-orange-50 text-dark-orange flex items-center justify-center border border-orange-100 shadow-sm animate-bounce-slow">
                    <ShieldCheck size={32} strokeWidth={2.5} />
                 </div>
                 <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none font-serif">Trust Verification</h3>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mt-2">Bhaiya Integrity Protocol v4.2</p>
                 </div>
              </div>
              <div className="bg-slate-900 text-white text-[11px] font-black italic uppercase tracking-[0.25em] px-8 py-3 rounded-2xl shadow-2xl shadow-slate-200 flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Scanning Accuracy: 99.8%
              </div>
            </div>

            <div className="relative z-10 space-y-20">
               <div className="space-y-6">
                  <div className="flex justify-between items-end px-2">
                    <div className="space-y-1">
                        <span className="text-[12px] font-black uppercase tracking-[0.4em] text-dark-orange block">Authenticity Scan</span>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter italic">Validating property coordinates & owner records</p>
                    </div>
                    <span className="text-4xl font-black text-slate-900 tracking-tighter font-serif">{progress}%</span>
                  </div>
                  <div className="h-6 bg-slate-50 rounded-full border border-slate-100 overflow-hidden p-1.5 shadow-inner">
                    <motion.div 
                      className="h-full bg-linear-to-r from-dark-orange to-orange-400 rounded-full shadow-[0_0_25px_rgba(221,87,28,0.5)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 2, ease: "circOut" }}
                    />
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                  <StatusCheck label="Price Range" done icon={<Check size={24} />} />
                  <StatusCheck label="Geolocation" done icon={<Check size={24} />} />
                  <StatusCheck label="Title Deed" done icon={<Check size={24} />} />
                  <StatusCheck label="Visuals" icon={<Clock size={24} className="animate-spin-slow text-slate-300" />} />
               </div>
            </div>

            <div className="relative z-10 mt-20 pt-10 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform">
                        <TrendingUp size={32} />
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase text-dark-orange tracking-[0.2em]">Listing Performance</p>
                        <h4 className="text-lg font-black text-slate-900 leading-none font-serif tracking-tight">Active Reach Optimization</h4>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-[2rem] border border-slate-100">
                    <div className="flex -space-x-4">
                        {[1,2,3,4,5].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                                <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <p className="text-[11px] font-black text-slate-500 uppercase tracking-tighter">+12 Agents Notified</p>
                </div>
            </div>
          </div>
        </div>

        {/* RIGHT: INTEGRITY RECAP (Span 4) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-900 rounded-[4rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)] min-h-[600px] flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-dark-orange/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-dark-orange flex items-center gap-3">
                      <Zap size={18} fill="currentColor" /> Summary
                    </h4>
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-pulse">
                        <FileText size={24} className="text-dark-orange" />
                    </div>
                </div>
                
                <div className="space-y-10">
                   <RecapItem label="Category" value={formData.category || "Residential"} />
                   <RecapItem label="Listing Value" value={formData.price ? `₹${parseInt(formData.price).toLocaleString('en-IN')}` : "₹ --"} />
                   <RecapItem label="Core Location" value={`${formData.locality || "Primary Locality"}, ${formData.city || "WB"}`} />
                </div>
            </div>

            <div className="relative z-10 space-y-8 mt-16 pt-10 border-t border-white/5">
               <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 backdrop-blur-md">
                  <p className="text-[11px] font-bold text-slate-400 leading-relaxed italic opacity-80 text-center">
                    "I solemnly swear that all data provided is 100% accurate. Bhaiya's trust is my guarantee."
                  </p>
               </div>
               <div className="text-center">
                  <p className="text-[10px] font-black text-dark-orange uppercase tracking-[0.5em] mb-2">Digital Stamp</p>
                  <p className="text-2xl font-black text-white font-serif italic tracking-tighter opacity-90">— RAJESH KUMAR</p>
               </div>
            </div>
          </div>

          <button 
            onClick={handleShare}
            className="w-full group flex items-center justify-between p-8 rounded-[3rem] bg-emerald-50 border-2 border-emerald-100 hover:bg-emerald-600 hover:text-white transition-all shadow-2xl shadow-emerald-100 active:scale-95"
          >
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-emerald-600 text-white flex items-center justify-center shadow-xl group-hover:bg-white group-hover:text-emerald-600 group-hover:rotate-12 transition-all">
                    <MessageCircle size={32} />
                </div>
                <div className="text-left">
                    <p className="text-[10px] font-black uppercase text-emerald-500 group-hover:text-emerald-100 tracking-[0.2em] leading-none mb-2">Network Boost</p>
                    <h4 className="text-xl font-black leading-none font-serif tracking-tight">Share to WhatsApp</h4>
                </div>
            </div>
            <ArrowRight size={28} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
          </button>
        </div>
      </div>

      {/* FOOTER ACTIONS: REPOSITIONED & REFINED */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12 border-t border-slate-100">
        <button 
          onClick={() => navigate("/dashboard")}
          className="w-full md:w-auto flex items-center justify-center gap-5 px-16 py-7 bg-slate-900 text-white rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-[12px] hover:bg-dark-orange transition-all shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] active:scale-95 group"
        >
          <LayoutDashboard size={22} className="group-hover:rotate-12 transition-transform" /> Dashboard Access
        </button>
        <button 
          onClick={onBack}
          className="w-full md:w-auto flex items-center justify-center gap-5 px-16 py-7 bg-white border-2 border-slate-200 text-slate-400 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-[12px] hover:border-dark-orange hover:text-dark-orange transition-all active:scale-95 shadow-sm"
        >
          <Plus size={22} /> List New Property
        </button>
      </div>
    </div>
  );
}

function StatusCheck({ label, done, icon }) {
  return (
    <div className="flex flex-col items-center gap-6 group">
      <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-700 shadow-2xl border-4 ${
        done ? 'bg-emerald-500 text-white border-white scale-110' : 'bg-slate-50 text-slate-300 border-slate-100'
      }`}>
        {icon}
      </div>
      <div className="text-center space-y-1">
        <span className={`text-[11px] font-black uppercase tracking-[0.2em] block ${done ? 'text-slate-900' : 'text-slate-300'}`}>{label}</span>
        {done && <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest leading-none">Verified</span>}
      </div>
    </div>
  );
}

function RecapItem({ label, value }) {
  return (
    <div className="space-y-3">
      <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em]">{label}</span>
      <p className="text-3xl font-black text-white tracking-tighter font-serif border-b border-white/10 pb-4 leading-none">{value}</p>
    </div>
  );
}
