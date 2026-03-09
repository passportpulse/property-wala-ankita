import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Hash,
  Calendar,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import ChoosePlan from "./ChoosePlan";

export default function Register() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("Silver");

  // NEW
  const [userType, setUserType] = useState("buyer");

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-orange-50 font-poppins flex flex-col lg:items-center lg:justify-center py-10">

      <div className="w-full lg:max-w-2xl px-6">

        {/* Back */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => (step === 1 ? navigate(-1) : setStep(1))}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        {step === 1 ? (
          <>
            {/* HEADER */}
            <div className="mb-8 text-left lg:text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-orange-100 mb-4">
                <ShieldCheck size={12} className="text-dark-orange" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-dark-orange">
                  Secure Onboarding
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-semibold text-slate-800">
                Create <span className="text-dark-orange">Account</span>
              </h1>

              <p className="text-sm text-slate-500 mt-2">
                Join the Durgapur real estate ecosystem.
              </p>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-2xl shadow-md p-6 lg:p-10">
              <form onSubmit={handleNext} className="space-y-6">

                {/* USER TYPE (NEW) */}
                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-400 tracking-widest ml-1">
                    I am a
                  </label>

                  <select
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="w-full mt-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-800 outline-none focus:border-dark-orange focus:ring-4 focus:ring-orange-50"
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                    <option value="partner">Partner</option>
                    <option value="developer">Developer</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <InputField label="Full Name" icon={<User size={16}/>}/>
                  <InputField label="Phone" icon={<Phone size={16}/>}/>
                  <InputField label="Email" icon={<Mail size={16}/>}/>
                  <InputField label="Date of Birth" icon={<Calendar size={16}/>} type="date"/>
                  <InputField label="Age" icon={<Hash size={16}/>}/>

                  <div className="md:col-span-2">
                    <InputField label="Street Address" icon={<MapPin size={16}/>}/>
                  </div>

                  <InputField label="Pincode" icon={<Hash size={16}/>}/>

                </div>

                <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-dark-orange text-white text-xs font-black uppercase tracking-widest shadow-lg">
                  Choose Subscription <ChevronRight size={18}/>
                </button>

              </form>
            </div>
          </>
        ) : (
          <ChoosePlan
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            userType={userType}   // ✅ PASSED HERE
          />
        )}

      </div>
    </div>
  );
}

function InputField({ label, icon, ...props }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold uppercase text-slate-400 tracking-widest ml-1">
        {label}
      </label>

      <div className="relative flex items-center group">

        <input
          {...props}
          className="w-full pl-4 pr-11 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-800 outline-none focus:border-dark-orange focus:ring-4 focus:ring-orange-50 transition-all"
        />

        <div className="absolute right-4 text-slate-300 group-focus-within:text-dark-orange">
          {icon}
        </div>

      </div>
    </div>
  );
}
