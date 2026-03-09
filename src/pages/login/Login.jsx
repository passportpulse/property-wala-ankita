import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Phone, ChevronRight, ArrowLeft, ShieldCheck } from "lucide-react";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Extract role from URL (e.g., "Partner Login")
  const roleQuery = searchParams.get("role") || "User Login";
  const portalName = roleQuery.split(" ")[0]; // "Partner", "Buyer", etc.

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) return;
    // Pass mobile and role forward
    navigate(`/verify-otp?mobile=${mobile}&role=${roleQuery}`);
  };

  return (
    <div className="min-h-screen bg-orange-50 font-poppins flex flex-col lg:items-center lg:justify-center relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="hidden lg:block absolute top-0 left-0 w-96 h-96 bg-orange-200/30 blur-3xl rounded-full -z-10"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 blur-3xl rounded-full -z-10"></div>

      <div className="w-full lg:max-w-md">
        {/* Navigation */}
        <div className="flex items-center p-4 lg:p-0 lg:mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 active:scale-95 transition-all"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        <div className="flex-1 px-6 pt-4 flex flex-col lg:px-0 lg:pt-0">
          {/* Header */}
          <div className="mb-8 text-left lg:text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-orange-100 mb-4">
              <ShieldCheck size={12} className="text-dark-orange" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-dark-orange">
                Secure Access
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
              {portalName} <span className="text-dark-orange">Portal</span>
            </h1>

            <p className="text-sm text-slate-500 mt-3 font-medium">
              Enter your registered mobile number.
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-[2rem] shadow-xl shadow-orange-100/50 p-6 lg:p-8 border border-white">
            <form onSubmit={handleSendOtp} className="space-y-5">
              <div>
                <label className="text-[11px] font-black uppercase text-slate-400 tracking-[0.2em] ml-1">
                  Mobile Number
                </label>

                <div className={`mt-2 relative flex items-center transition-all duration-300 ${isFocused ? "scale-[1.01]" : ""}`}>
                  <div className="absolute left-4 flex items-center border-r border-slate-100 pr-3 h-6">
                    <span className="text-sm font-bold text-slate-400">+91</span>
                  </div>

                  <input
                    type="tel"
                    value={mobile}
                    required
                    maxLength={10}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                    placeholder="00000 00000"
                    className={`w-full pl-16 pr-12 py-3.5 rounded-xl bg-slate-50 text-base font-bold text-slate-800 border transition-all outline-none ${
                      isFocused ? "border-dark-orange bg-white shadow-lg shadow-orange-50" : "border-slate-100"
                    }`}
                  />
                  <Phone size={18} className={`absolute right-4 transition-colors ${isFocused ? "text-dark-orange" : "text-slate-300"}`} />
                </div>
              </div>

              <button
                type="submit"
                disabled={mobile.length !== 10}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${
                  mobile.length === 10 ? "bg-dark-orange shadow-lg shadow-orange-200" : "bg-slate-200 cursor-not-allowed text-slate-400"
                }`}
              >
                Get Secure OTP <ChevronRight size={18} />
              </button>
            </form>

            <div className="text-center mt-8">
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                New to the platform?{" "}
                <button
                  onClick={() => navigate(`/register?role=${roleQuery}`)}
                  className="text-dark-orange border-b-2 border-dark-orange/20 hover:border-dark-orange transition-all ml-1"
                >
                  Join Now
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="p-8 text-center flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Identity Server Active
          </span>
        </div>
      </div>
    </div>
  );
}