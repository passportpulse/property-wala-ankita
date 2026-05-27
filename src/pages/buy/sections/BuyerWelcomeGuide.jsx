import React from "react";
import { Search, Bell, Activity, ShieldCheck, CheckCircle2, MessageSquare, Compass } from "lucide-react";

export default function BuyerWelcomeGuide() {
  const steps = [
    {
      title: "1. Smart Searching: Filter Like a Boss 🔍",
      description: "Don't get lost in thousands of listings. Use our smart filters to narrow it down:",
      tips: [
        "Location & Landmarks: Search by society name or nearby metro stations.",
        "Budget Range: Set your minimum and maximum to see only what fits your pocket.",
        "Verified Only: Toggle the 'Bhaiya Verified' switch for extra peace of mind."
      ],
      icon: <Search className="w-6 h-6 text-orange-500" />
    },
    {
      title: "2. Never Miss a Deal: Set 'Alerts' 🔔",
      description: "The best properties go fast. Don't wait to check the app every hour.",
      tips: [
        "Save Your Search: Save your criteria if you don't find what you like today.",
        "Real-Time WhatsApp: We’ll ping you the second a match hits the portal.",
        "Shortlist: Hit the ❤️ icon. If the price drops, you’ll be the first to know!"
      ],
      icon: <Bell className="w-6 h-6 text-blue-500" />
    },
    {
      title: "3. Decoding the 'Live Status' 🚦",
      description: "Keep an eye on the status badges to know where the deal stands:",
      tips: [
        "🟢 Live & Available: Go ahead and contact the seller!",
        "🟠 Under Negotiation: Deal isn't closed yet. You can still express interest.",
        "🔴 Sold/Rented: Off market, but check 'Similar Properties' nearby."
      ],
      icon: <Activity className="w-6 h-6 text-emerald-500" />
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-slate-200 shadow-sm overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-blue-500/5 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32 blur-3xl" />
      
      <div className="relative space-y-10 md:space-y-12">
        <div className="space-y-4 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tight">
            🔑 Your Home-Buying <span className="text-blue-600">Journey Starts Here!</span>
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base max-w-2xl leading-relaxed">
            Namaste! Welcome to Property Wala Bhaiya. We know that finding the perfect home or investment isn't just a transaction—it’s a milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50 transition-colors text-left">
              <div className="p-3 bg-white rounded-xl shadow-sm w-fit">{step.icon}</div>
              <h3 className="text-base md:text-lg font-black text-slate-900 leading-tight">{step.title}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium">{step.description}</p>
              <ul className="space-y-2 pt-2">
                {step.tips.map((tip, j) => (
                  <li key={j} className="flex gap-2 text-[10px] md:text-xs font-semibold text-slate-700 leading-relaxed text-left">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500 shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-10 text-white text-left">
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-black flex items-center gap-2 uppercase tracking-tight">
                <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-emerald-400" /> Safety First: The "Bhaiya" Rules
              </h3>
              <div className="space-y-3 text-slate-400 text-xs md:text-sm leading-relaxed">
                <p>• Verify Before Paying: Never transfer "token money" without seeing the property in person.</p>
                <p>• Check Documents: Always ask for the RERA number or title deed during your visit.</p>
                <p>• Report Spoilers: Hit the Report button if a listing is fake or already sold.</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-blue-400">🚀 Your Search Checklist:</p>
              <div className="space-y-2">
                {["Verify your phone number", "Set up a 'Saved Search'", "Look for the 'Verified' badge", "Compare at least 3 properties"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs md:text-sm font-bold">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded border-2 border-slate-700 flex items-center justify-center text-slate-700"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/10 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center font-black text-lg md:text-xl text-white">B</div>
              <div>
                <p className="text-xs md:text-sm font-black uppercase tracking-wider">Bhaiya’s Pro Tip</p>
                <p className="text-[10px] md:text-xs text-slate-400 font-bold italic uppercase">Expert Buyer Consultant</p>
              </div>
            </div>
            <p className="text-xs md:text-sm italic leading-relaxed text-slate-300">
              "Location is permanent, but interiors can be changed. Look at the structure and the neighborhood first—everything else can be renovated later!"
            </p>
            <div className="flex flex-col gap-2">
              <button className="w-full flex items-center justify-center gap-2 py-3 md:py-4 bg-blue-600 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-blue-700 transition-all text-white">
                <Compass className="w-4 h-4" /> Start Exploration
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3 md:py-4 bg-emerald-500 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all text-white">
                <MessageSquare className="w-4 h-4" /> Chat with a Bhaiya Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
