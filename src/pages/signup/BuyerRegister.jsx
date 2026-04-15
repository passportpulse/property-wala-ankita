import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Phone,
  User,
  Check,
  Search,
  Home,
  MapPin,
  Map,
  ShieldCheck,
  Flame,
  Star,
  Bell,
  Calendar,
  Mail,
  Hash,
  MessageSquare,
  Heart,
  ChevronRight,
  TrendingUp,
  PartyPopper
} from "lucide-react";

export default function BuyerRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    age: "",
    pincode: "",
    address: "",
    intent: [],
    city: "",
    budget: 50, // default 50L
    alerts: null
  });

  const cities = ["Delhi NCR", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Durgapur"];

  const handleIntentChange = (val) => {
    setFormData((prev) => {
      const newIntent = prev.intent.includes(val)
        ? prev.intent.filter((i) => i !== val)
        : [...prev.intent, val];
      return { ...prev, intent: newIntent };
    });
  };

  const nextStep = (e) => {
    if (e) e.preventDefault();
    setStep(step + 1);
  };

  // Format budget display
  const formatBudget = (val) => {
    if (val < 100) return `₹${val} Lacs`;
    const cr = (val / 100).toFixed(1);
    return `₹${cr} Cr`;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-poppins py-10 antialiased">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Navigation */}
        {step < 3 && (
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => (step === 1 ? navigate(-1) : setStep(1))}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-dark-orange active:scale-95 transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400">
              Buyer Onboarding • Step {step} of 2
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Flow */}
          <div className="lg:col-span-7">
            
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-xl">
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 mb-4 shadow-sm">
                    <Home size={12} className="text-dark-orange" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-dark-orange">
                      Find Your Home With Bhaiya
                    </span>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-none mb-4">
                    Join the community that values the <span className="text-dark-orange">truth.</span>
                  </h1>
                  <p className="text-[13px] text-slate-500 font-medium">
                    Your dream home is just a few clicks away. We've replaced long forms with a simple phone-first approach.
                  </p>
                </div>

                <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 border border-white">
                  <form onSubmit={nextStep} className="space-y-6">
                    
                    <InputField
                      label="Mobile Number (Primary)"
                      subLabel="OTP Verified"
                      icon={<Phone size={18} />}
                      placeholder="+91"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <InputField
                        label="Full Name"
                        icon={<User size={18} />}
                        placeholder="e.g. Aman Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                      
                      <InputField
                        label="Email Address"
                        icon={<Mail size={18} />}
                        placeholder="For documents"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />

                      <InputField
                        label="Date of Birth"
                        icon={<Calendar size={18} />}
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({...formData, dob: e.target.value})}
                        required
                      />

                      <InputField
                        label="Age"
                        icon={<Hash size={18} />}
                        placeholder="Years"
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                      />

                      <InputField
                        label="Pincode"
                        icon={<Hash size={18} />}
                        placeholder="713XXX"
                        value={formData.pincode}
                        onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                        required
                      />
                    </div>

                    <InputField
                      label="Permanent Address"
                      icon={<MapPin size={18} />}
                      placeholder="House No, Street, Landmark"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required
                    />

                    <div className="space-y-3 pt-2">
                      <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-1">
                        What are you looking for?
                      </label>
                      <div className="flex flex-wrap gap-3">
                        <IntentPill label="To Buy" isSelected={formData.intent.includes("To Buy")} onClick={() => handleIntentChange("To Buy")} />
                        <IntentPill label="To Rent" isSelected={formData.intent.includes("To Rent")} onClick={() => handleIntentChange("To Rent")} />
                        <IntentPill label="To Invest" isSelected={formData.intent.includes("To Invest")} onClick={() => handleIntentChange("To Invest")} />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 py-4 mt-8 rounded-xl bg-dark-orange text-white text-sm font-black uppercase tracking-[0.15em] shadow-xl hover:bg-orange-600 hover:shadow-orange-500/20 active:scale-[0.98] transition-all"
                    >
                      START MY SEARCH <Search size={18} />
                    </button>

                    {/* Social Logins */}
                    <div className="mt-8">
                      <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-slate-100"></div>
                        <span className="shrink-0 px-4 text-[10px] uppercase font-bold text-slate-400 tracking-widest">Or sign up with</span>
                        <div className="flex-grow border-t border-slate-100"></div>
                      </div>
                      <div className="flex justify-center gap-4 mt-6">
                        <SocialButton label="G" title="Google" />
                        <SocialButton label="A" title="Apple" />
                        <SocialButton label="F" title="Facebook" />
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-700 max-w-xl">
                <div className="mb-10">
                  <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-none mb-4">
                    The Setup. Let's personalize your feed.
                  </h1>
                  <p className="text-[13px] text-slate-500 font-medium">
                    We won't just dump you on the home page. Tell us exactly what you want.
                  </p>
                </div>

                <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 border border-white">
                  <form onSubmit={nextStep} className="space-y-8">
                    
                    {/* Q1: City */}
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-800">
                        1. Which city are you eyeing?
                      </label>
                      <div className="relative flex items-center group">
                        <select
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="w-full pl-4 pr-11 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange transition-all appearance-none cursor-pointer shadow-sm hover:border-slate-300"
                        >
                          <option value="">Choose a location...</option>
                          {cities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                        <MapPin size={18} className="absolute right-4 text-slate-400 pointer-events-none group-focus-within:text-dark-orange" />
                      </div>
                    </div>

                    {/* Q2: Budget */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-black text-slate-800">
                          2. What is your budget range?
                        </label>
                        <span className="px-3 py-1 bg-orange-100 text-dark-orange font-black text-sm rounded-lg">
                          Up to {formatBudget(formData.budget)}
                        </span>
                      </div>
                      <div className="pt-2 pb-4">
                        <input 
                          type="range" 
                          min="20" 
                          max="500" 
                          step="10"
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: Number(e.target.value)})}
                          className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-dark-orange"
                        />
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2">
                          <span>₹20L</span>
                          <span>₹5Cr+</span>
                        </div>
                      </div>
                    </div>

                    {/* Q3: Alerts */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <label className="text-sm font-black text-slate-800">
                        3. Bhaiya's Alerts
                      </label>
                      <div className="p-4 rounded-xl bg-orange-50 border border-orange-100 flex gap-4">
                        <div className="mt-1 shrink-0">
                          <Bell size={20} className="text-dark-orange" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-700 leading-relaxed mb-4">
                            "Would you like a WhatsApp notification the moment a Verified property in your area hits the market?"
                          </p>
                          <div className="flex gap-3">
                            <button 
                              type="button"
                              onClick={() => setFormData({...formData, alerts: true})}
                              className={`flex-1 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${formData.alerts === true ? 'bg-dark-orange text-white shadow-md' : 'bg-white border text-slate-600 hover:border-dark-orange'}`}
                            >
                              Yes, Keep Me Updated!
                            </button>
                            <button 
                              type="button"
                              onClick={() => setFormData({...formData, alerts: false})}
                              className={`flex-1 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${formData.alerts === false ? 'bg-slate-800 text-white shadow-md' : 'bg-white border text-slate-500 hover:border-slate-400'}`}
                            >
                              Maybe Later
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-slate-900 text-white text-sm font-black uppercase tracking-[0.15em] shadow-xl hover:bg-black active:scale-[0.98] transition-all"
                    >
                      Complete Setup <ChevronRight size={18} />
                    </button>
                    
                  </form>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in zoom-in-95 duration-700 flex flex-col items-center justify-center text-center h-full max-w-lg mx-auto py-20">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-orange-100/50">
                  <PartyPopper size={40} className="text-dark-orange" />
                </div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-4">
                  Welcome to the Family, <br/><span className="text-dark-orange text-4xl mt-2 block">{formData.name || "Buyer"}!</span>
                </h1>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                  Bhaiya is now officially on the hunt for your perfect home. Check your WhatsApp for a curated list of top-rated properties {formData.city && `in ${formData.city}`}!
                </p>
                <button 
                  onClick={() => navigate("/dashboard")}
                  className="px-8 py-4 rounded-xl bg-dark-orange text-white text-sm font-black uppercase tracking-[0.15em] shadow-xl hover:bg-black transition-all transform active:scale-95"
                >
                  GO TO MY DASHBOARD
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Benefits & Trust (Hidden on step 3) */}
          {step < 3 && (
            <div className="lg:col-span-5 hidden lg:block">
              <div className="sticky top-10 space-y-8">
                
                {/* Why Join */}
                <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
                  
                  <h3 className="text-lg font-black mb-6 tracking-tight">
                    Why Buyers Join Property Wala Bhaiya
                  </h3>
                  
                  <div className="space-y-6">
                    <BenefitRow icon={<ShieldCheck size={20}/>} title="100% Genuine Listings" desc="No more 'ghost' properties. If it's on the map, it's on the market." />
                    <BenefitRow icon={<Map size={20}/>} title="Price Heat Map Access" desc="See if a property is priced fairly or if you're overpaying." />
                    <BenefitRow icon={<Star size={20}/>} title="Star Seller Network" desc="Direct access to the most trusted owners and developers." />
                    <BenefitRow icon={<Bell size={20}/>} title="Real-Time Alerts" desc="Get notified the second a price drops on your shortlisted homes." />
                  </div>
                </div>

                {/* Dashboard Preview Mockup */}
                <div className="bg-white rounded-[2rem] p-6 border border-orange-100 shadow-xl shadow-orange-100/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Buyer Dashboard Preview</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0"><Heart size={14} className="fill-red-500" /></div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">Shortlist Manager</p>
                        <p className="text-[10px] text-slate-500">Save favorites for family discussion</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 shrink-0"><MessageSquare size={14} className="fill-blue-500" /></div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">Chat History</p>
                        <p className="text-[10px] text-slate-500">Keep owner conversations in one place</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 shrink-0"><Calendar size={14} className="fill-green-500" /></div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">Site Visit Tracker</p>
                        <p className="text-[10px] text-slate-500">Calendar view of your upcoming tours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Footer */}
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed px-2 text-center">
                  <ShieldCheck size={14} className="inline mr-1 text-slate-400 mb-0.5" />
                  <span className="font-bold text-slate-500">Your privacy is our priority.</span> We only share your contact details with a seller when YOU choose to 'Request a Callback.' No random spam calls, ever.
                </p>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

{/* Mini Components */}

function InputField({ label, subLabel, icon, ...props }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline mb-1">
        <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-1">
          {label}
        </label>
        {subLabel && <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded mr-1">{subLabel}</span>}
      </div>
      <div className="relative flex items-center group">
        <input
          {...props}
          className="w-full pl-4 pr-11 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange transition-all placeholder:text-slate-400 placeholder:font-medium shadow-sm hover:border-slate-300"
        />
        <div className="absolute right-4 text-slate-400 group-focus-within:text-dark-orange transition-colors">
          {icon}
        </div>
      </div>
    </div>
  );
}

function IntentPill({ label, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all border-2 flex items-center gap-2 ${
        isSelected 
        ? 'border-dark-orange bg-orange-50 text-dark-orange shadow-md' 
        : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
      }`}
    >
      <div className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-dark-orange bg-dark-orange' : 'border-slate-300'}`}>
        {isSelected && <Check size={8} strokeWidth={4} className="text-white" />}
      </div>
      {label}
    </button>
  );
}

function SocialButton({ label, title }) {
  return (
    <button type="button" className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 font-black text-xl hover:bg-slate-50 hover:border-slate-300 shadow-sm active:scale-95 transition-all">
      {label}
    </button>
  );
}

function BenefitRow({ icon, title, desc }) {
  return (
    <div className="flex gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-dark-orange group-hover:border-dark-orange/50 transition-all text-white">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-white mb-0.5">{title}</h4>
        <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}
