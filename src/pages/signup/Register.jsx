import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, MapPin, Hash, Calendar, ChevronRight, ShieldCheck, CreditCard } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Info, 2: Subscription
  const [selectedPlan, setSelectedPlan] = useState("Silver");

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-orange-50 font-poppins flex flex-col lg:items-center lg:justify-center py-10 antialiased">
      
      {/* Shared Background Decoration */}
      <div className="hidden lg:block absolute top-0 left-0 w-96 h-96 bg-orange-200/30 blur-3xl rounded-full -z-10" />
      <div className="hidden lg:block absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 blur-3xl rounded-full -z-10" />

      <div className="w-full lg:max-w-2xl px-6">
        
        {/* Navigation */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => (step === 1 ? navigate(-1) : setStep(1))}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 active:scale-95 transition-all"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        {step === 1 ? (
          /* --- STEP 1: COMPACT REGISTRATION FORM --- */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 text-left lg:text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-orange-100 mb-4">
                <ShieldCheck size={12} className="text-dark-orange" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-dark-orange">
                  Secure Onboarding
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-semibold text-slate-800 leading-tight">
                Create <span className="text-dark-orange">Account</span>
              </h1>
              <p className="text-sm text-slate-500 mt-2">Join the Durgapur real estate ecosystem.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md lg:shadow-xl p-6 lg:p-10">
              <form onSubmit={handleNext} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label="Full Name" icon={<User size={16}/>} placeholder="John Doe" />
                  <InputField label="Phone" icon={<Phone size={16}/>} placeholder="9876543210" type="tel" />
                  <InputField label="Email" icon={<Mail size={16}/>} placeholder="john@example.com" type="email" />
                  <InputField label="Date of Birth" icon={<Calendar size={16}/>} type="date" />
                  <InputField label="Age" icon={<Hash size={16}/>} placeholder="25" type="number" />
                  
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase text-slate-400 tracking-widest ml-1">Gender</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold outline-none focus:ring-2 focus:ring-dark-orange/20 transition-all">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <InputField label="Street Address" icon={<MapPin size={16}/>} placeholder="123, Luxury Row, Durgapur" />
                  </div>
                  <InputField label="Pincode" icon={<Hash size={16}/>} placeholder="713201" />
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-dark-orange text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-100 active:scale-95 transition-all">
                  Choose Subscription <ChevronRight size={18} />
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* --- STEP 2: SUBSCRIPTION PLANS --- */
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="mb-10 text-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-slate-800 leading-tight">
                Choose <span className="text-dark-orange">Plan</span>
              </h1>
              <p className="text-sm text-slate-500 mt-2">Premium tools for your property journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PlanCard 
                title="Bronze" price="1100" discount="70% OFF" 
                selected={selectedPlan === "Bronze"} 
                onClick={() => setSelectedPlan("Bronze")}
                features={["Unlock 4 contacts", "Valid for 90 days", "See all properties", "See premium filters"]}
              />
              <PlanCard 
                title="Silver" price="2000" discount="70% OFF" popular
                selected={selectedPlan === "Silver"} 
                onClick={() => setSelectedPlan("Silver")}
                features={["Unlock 10 contacts", "Valid for 90 days", "See all properties", "See premium filters"]}
              />
              <PlanCard 
                title="Gold" price="2500" discount="80% OFF" 
                selected={selectedPlan === "Gold"} 
                onClick={() => setSelectedPlan("Gold")}
                features={["Unlock 20 contacts", "Valid for 90 days", "See all properties", "See premium filters"]}
              />
            </div>

            <div className="mt-8 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-dashed border-orange-200 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="text-green-500" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Secure Payment Powered by Razorpay</span>
                </div>
                <button className="w-full max-w-sm flex items-center justify-center gap-2 py-4 rounded-xl bg-dark-orange text-white text-xs font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all">
                  <CreditCard size={18} className="text-white" />
                  Pay ₹{selectedPlan === "Bronze" ? "1100" : selectedPlan === "Silver" ? "2000" : "2500"}
                </button>
            </div>
          </div>
        )}

        {/* System Footer */}
        <div className="mt-8 text-center flex items-center justify-center gap-2 opacity-60">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            System Operational
          </span>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Component (Vibe-Matched)
function InputField({ label, icon, ...props }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold uppercase text-slate-400 tracking-widest ml-1">{label}</label>
      <div className="relative flex items-center group">
        <input 
          {...props} 
          className="w-full pl-4 pr-11 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-800 outline-none focus:bg-white focus:border-dark-orange focus:ring-4 focus:ring-orange-50 transition-all placeholder:text-slate-300" 
        />
        <div className="absolute right-4 text-slate-300 group-focus-within:text-dark-orange transition-colors">
          {icon}
        </div>
      </div>
    </div>
  );
}

// Reusable Plan Card (Vibe-Matched)
function PlanCard({ title, price, discount, features, selected, onClick, popular }) {
  return (
    <div 
      onClick={onClick}
      className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
        selected 
        ? "bg-white border-dark-orange shadow-xl shadow-orange-100 scale-[1.02]" 
        : "bg-white/60 border-transparent hover:border-orange-100 shadow-sm"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dark-orange text-white text-[8px] font-black uppercase tracking-tighter px-3 py-1 rounded-full">
          Best Value
        </span>
      )}
      <div className="text-center mb-4">
        <h3 className={`text-[10px] font-black uppercase tracking-[0.2em] ${selected ? 'text-dark-orange' : 'text-slate-400'}`}>{title}</h3>
        <div className="mt-2 flex items-center justify-center gap-1">
          <span className="text-2xl font-black text-slate-800">₹{price}</span>
        </div>
        <span className="text-[9px] font-black text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-1 inline-block border border-green-100">
          {discount}
        </span>
      </div>
      <ul className="space-y-2 mb-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-[10px] font-medium text-slate-500">
            <div className="w-1 h-1 rounded-full bg-dark-orange" /> {f}
          </li>
        ))}
      </ul>
      <div className={`w-full py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-center transition-all ${
        selected ? 'bg-dark-orange text-white' : 'bg-slate-100 text-slate-400'
      }`}>
        {selected ? "Selected" : "Select"}
      </div>
    </div>
  );
}