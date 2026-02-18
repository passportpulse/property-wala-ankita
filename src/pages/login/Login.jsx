import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Mail, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get("role") || "User";
  
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
            Secure Portal
          </span>
          <h2 className="mt-2 text-3xl font-black text-slate-900 tracking-tight">
            {role.replace("Login", "")} Login
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Welcome back to the Durgapur Real Estate Ecosystem.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-2xl shadow-slate-200/50 sm:rounded-[2.5rem] border border-slate-100 sm:px-10">
          <form className="space-y-6">
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
                  placeholder="••••••••"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-dark-orange border-slate-300 rounded focus:ring-dark-orange" />
                <label className="ml-2 block text-xs font-bold text-slate-500 uppercase tracking-tighter">Remember me</label>
              </div>
              <div className="text-xs">
                <a href="#" className="font-bold text-dark-orange hover:text-lighter-orange uppercase tracking-tighter">Forgot password?</a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center gap-3 py-4 px-4 rounded-xl shadow-lg shadow-dark-orange/20 bg-linear-to-r from-dark-orange to-lighter-orange text-white text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Lock size={14} /> Log In
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-black">
                <span className="px-4 bg-white text-slate-400">New here?</span>
              </div>
            </div>

            <div className="mt-6">
              <button 
                onClick={() => navigate("/register")}
                className="w-full flex justify-center py-4 px-4 border-2 border-slate-100 rounded-xl text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}