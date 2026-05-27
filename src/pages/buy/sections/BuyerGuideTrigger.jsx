import React, { useState } from "react";
import { BookOpen, X, Sparkles } from "lucide-react";
import BuyerWelcomeGuide from "./BuyerWelcomeGuide";

export default function BuyerGuideTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-10 text-center space-y-6">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-wider">
          <Sparkles className="w-3 h-3" /> Search Smarter
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
          New to Property <span className="text-blue-600">Searching?</span>
        </h2>
        <p className="text-slate-500 font-medium text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Building trust is our priority. Our guide focuses on transparency, speed, and safety <br className="hidden md:block" />
          to help you find your dream space without the overwhelm.
        </p>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="group relative inline-flex items-center gap-3 bg-white border-2 border-blue-600 text-blue-600 px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl shadow-blue-100 active:scale-95 text-xs"
      >
        <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        Open Buyer's Guide
        <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[8px] px-2 py-1 rounded-full animate-bounce">
          Recommended
        </div>
      </button>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl no-scrollbar animate-in zoom-in-95 duration-300 pb-20 md:pb-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-10 p-2 bg-slate-100 hover:bg-blue-100 text-slate-500 hover:text-blue-600 rounded-full transition-colors active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            <BuyerWelcomeGuide />
          </div>
        </div>
      )}
    </div>
  );
}
