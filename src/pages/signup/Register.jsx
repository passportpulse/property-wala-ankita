import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Mail, Eye, EyeOff, User } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-poppins flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-dark-orange transition-colors"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-dark-orange">
            Join the Network
          </span>
          <h2 className="mt-2 text-3xl font-black text-slate-900 tracking-tight">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Become part of the Durgapur Real Estate Ecosystem.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-2xl shadow-slate-200/50 sm:rounded-[2.5rem] border border-slate-100 sm:px-10">
          
          <form className="space-y-6">
            
            {/* FULL NAME */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="block w-full px-4 py-4 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-dark-orange/20 focus:border-dark-orange transition-all"
                />
                <User className="absolute right-4 top-4 text-slate-300 w-5 h-5" />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="block w-full px-4 py-4 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-dark-orange/20 focus:border-dark-orange transition-all"
                />
                <Mail className="absolute right-4 top-4 text-slate-300 w-5 h-5" />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Create Password"
                  className="block w-full px-4 py-4 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-dark-orange/20 focus:border-dark-orange transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-slate-300 hover:text-slate-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* SUBMIT */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center gap-3 py-4 px-4 rounded-xl shadow-lg shadow-dark-orange/20 bg-linear-to-r from-dark-orange to-lighter-orange text-white text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Lock size={14} /> Sign Up
              </button>
            </div>
          </form>

          {/* LOGIN LINK */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-black">
                <span className="px-4 bg-white text-slate-400">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigate("/login")}
                className="w-full flex justify-center py-4 px-4 border-2 border-slate-100 rounded-xl text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all"
              >
                Log In Instead
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
