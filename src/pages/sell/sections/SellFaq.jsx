import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span
          className={`font-bold text-sm uppercase tracking-wider transition-colors ${
            isOpen
              ? "text-coral-red"
              : "text-slate-700 group-hover:text-coral-red"
          }`}
        >
          {question}
        </span>

        {isOpen ? (
          <ChevronUp size={18} className="text-coral-red" />
        ) : (
          <ChevronDown size={18} className="text-slate-300" />
        )}
      </button>

      {isOpen && (
        <div className="pb-6">
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default function SellFaq() {
  const faqs = [
    {
      question: "Is there a listing fee?",
      answer:
        "Basic listing is free. We only charge a nominal fee for premium verification and professional photography.",
    },
    {
      question: "How long does verification take?",
      answer:
        "Once you submit, our team usually conducts the site audit within 24 to 48 hours.",
    },
    {
      question: "Will my contact number be public?",
      answer:
        "No. Your privacy is paramount. We filter leads and only connect you with verified, serious buyers.",
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">
              Common <br />
              <span className="text-slate-300">Doubts</span>
            </h2>

            <p className="text-slate-500 font-medium mb-8">
              Kindly find answers to some common doubts. We believe in 100%
              transparency with our sellers.
            </p>

            {/* Trust Card */}
            <div className="inline-flex items-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <CheckCircle2 className="text-coral-red" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">
                  Total Trust
                </p>
                <p className="text-sm font-bold">2M+ Satisfied Owners</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-sm">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
