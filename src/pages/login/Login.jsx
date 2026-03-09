import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, ChevronRight, ArrowLeft, ShieldCheck } from "lucide-react";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) return;
    navigate(`/verify-otp?mobile=${mobile}`);
  };

  return (
    <div className="min-h-screen bg-orange-50 font-poppins flex flex-col lg:items-center lg:justify-center">

      {/* Background decoration for desktop */}
      <div className="hidden lg:block absolute top-0 left-0 w-96 h-96 bg-orange-200/30 blur-3xl rounded-full -z-10"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 blur-3xl rounded-full -z-10"></div>

      {/* Desktop Container */}
      <div className="w-full lg:max-w-md">

        {/* Top Navigation */}
        <div className="flex items-center p-4 lg:p-0 lg:mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 active:scale-95"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 pt-4 flex flex-col lg:px-0 lg:pt-0">

          {/* Header */}
          <div className="mb-8 text-left lg:text-center">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-orange-100 mb-4">
              <ShieldCheck size={12} className="text-dark-orange" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-dark-orange">
                Secure Access
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-semibold text-slate-800 leading-tight">
              Welcome <span className="text-dark-orange">Back</span>
            </h1>

            <p className="text-sm text-slate-500 mt-2">
              Enter your mobile number to continue.
            </p>

          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-md lg:shadow-xl p-6 lg:p-8">

            <form onSubmit={handleSendOtp} className="space-y-5">

              {/* Phone Input */}
              <div>

                <label className="text-[11px] font-bold uppercase text-slate-400 tracking-widest ml-1">
                  Phone Number
                </label>

                <div
                  className={`mt-2 relative flex items-center transition ${
                    isFocused ? "scale-[1.02]" : ""
                  }`}
                >

                  {/* +91 */}
                  <div className="absolute left-4 flex items-center border-r border-slate-200 pr-3 h-6">
                    <span className="text-base font-bold text-slate-800">
                      +91
                    </span>
                  </div>

                  {/* Input */}
                  <input
                    type="tel"
                    value={mobile}
                    required
                    maxLength={10}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="00000 00000"
                    className={`w-full pl-20 pr-12 py-3 rounded-xl bg-white text-base font-semibold text-slate-800 border transition outline-none ${
                      isFocused
                        ? "border-dark-orange shadow-lg shadow-orange-100"
                        : "border-slate-200"
                    }`}
                  />

                  <Phone
                    size={18}
                    className={`absolute right-4 ${
                      isFocused ? "text-dark-orange" : "text-slate-300"
                    }`}
                  />

                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={mobile.length !== 10}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white text-xs font-black uppercase tracking-widest transition active:scale-95 ${
                  mobile.length === 10
                    ? "bg-dark-orange shadow-md"
                    : "bg-slate-300 cursor-not-allowed"
                }`}
              >
                Get Secure OTP
                <ChevronRight size={18} />
              </button>

            </form>

            {/* Register */}
            <div className="text-center mt-6">
              <p className="text-xs text-slate-400">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate("/register")}
                  className="text-dark-orange font-bold hover:underline"
                >
                  Register
                </button>
              </p>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-6 text-center flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-slate-400 uppercase">
            System Operational
          </span>
        </div>

      </div>

    </div>
  );
}
