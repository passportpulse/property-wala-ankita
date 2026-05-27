import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Bot, ShieldCheck, Banknote, Calendar, Receipt, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Is the property price negotiable?",
    answer: "Most sellers are open to offers! Use our 'Make an Offer' button to start a direct conversation.",
    icon: <MessageCircle className="text-orange-500" size={20} />
  },
  {
    question: "How do I know a listing is genuine?",
    answer: "Look for the ✅ Verified Badge. Our team personally visits these sites to check documents and physical status.",
    icon: <ShieldCheck className="text-emerald-500" size={20} />
  },
  {
    question: "Does the app help with Home Loans?",
    answer: "Yes! Click on 'Check Eligibility' to get instant quotes from our 15+ banking partners at 2026's best rates.",
    icon: <Banknote className="text-blue-500" size={20} />
  },
  {
    question: "What is RERA and is it covered?",
    answer: "RERA ensures transparency. We only list RERA-registered projects (where applicable) to protect your investment.",
    icon: <ShieldCheck className="text-purple-500" size={20} />
  },
  {
    question: "Can I book a site visit online?",
    answer: "Absolutely. Pick a date/time in the 'Schedule Visit' calendar, and an agent will meet you at the location.",
    icon: <Calendar className="text-orange-600" size={20} />
  },
  {
    question: "Are there hidden charges?",
    answer: "Transparency is our priority. Your 'Cost Sheet' will clearly show taxes, registration, and maintenance fees.",
    icon: <Receipt className="text-slate-600" size={20} />
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-20 mb-10">
      {/* AI HIGHLIGHT BANNER */}
      <div className="mb-12 bg-linear-to-r from-dark-orange to-lighter-orange rounded-3xl p-8 shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg animate-bounce">
            <Bot className="text-dark-orange" size={32} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl lg:text-2xl font-black uppercase tracking-tight mb-2">Stop searching, start finding.</h3>
            <p className="text-white/90 font-bold text-sm lg:text-base leading-relaxed">
              Our AI Property Matchmaker learns your preferences and sends you only the best deals in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ CONTENT */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
            <HelpCircle className="text-dark-orange" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Common Questions</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Smart & Reassuring Answers</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-orange-200 hover:shadow-md transition-all cursor-pointer group"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-orange-50 transition-colors">
                    {faq.icon}
                  </div>
                  <h4 className="text-sm font-black text-slate-800 leading-tight">
                    {faq.question}
                  </h4>
                </div>
                {openIndex === index ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
              </div>
              
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-slate-50 animate-fade-in">
                  <p className="text-xs font-bold text-slate-600 leading-relaxed italic">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
