import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Section from "../../../../components/layout/Section";

export default function SellFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How to post a property on Property Wala Bhaiya?",
      a: "Simply fill out the form above with your property details, location, and photos. Once you agree to the terms and click 'Post', our team verifies the details before making it live.",
    },
    {
      q: "Can I post a property for free?",
      a: "Yes! We offer a Free Basic Plan that allows you to list your property in our search results at no cost.",
    },
    {
      q: "What type of property can I post for selling/renting?",
      a: "You can post residential flats, houses, plots, and commercial spaces including offices, warehouses, and industrial land.",
    },
    {
      q: "What are the benefits of posting a property here?",
      a: "You get direct access to local buyers in West Bengal, professional lead management, and high visibility through our targeted regional marketing.",
    },
    {
      q: "When do I start getting enquiries on my property?",
      a: "Enquiries usually start coming in within 24-48 hours after your property listing is verified and goes live on the platform.",
    },
  ];

  return (
    <Section>
      <div className="relative mb-10 border-l-4 border-orange-500 pl-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
          Support
        </span>
        <h2 className="text-2xl lg:text-4xl font-black text-slate-800">
          Frequently Asked <span className="italic text-orange-500">Questions</span>
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-xs font-bold text-slate-700">{faq.q}</span>
              <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
              </div>
            </button>
            
            <div 
              className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}