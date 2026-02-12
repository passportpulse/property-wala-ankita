import { CheckCircle2 } from "lucide-react";

export default function SellHero({ setIsModalOpen }) {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left space-y-6">
          <p className="text-coral-red font-black text-[10px] uppercase tracking-[0.4em]">
            Direct-to-Buyer Marketplace
          </p>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-slate-900">
            Sell or Rent <br />
            <span className="text-slate-300">Effortlessly.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-coral-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-coral-red/20 hover:bg-slate-900 transition-all"
            >
              Post Property Free
            </button>

            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
              Why 2M+ owners choose us
            </p>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="w-80 rounded-3xl border border-slate-100 overflow-hidden flex flex-col items-center justify-center p-10 text-center relative">
            <img
              src="https://img.staticmb.com/mbcontent/images/crop/uploads/2025/7/trust-owned-property_0_1200.jpg.webp"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white/50 via-white/30 to-transparent"></div>

            <div className="absolute top-0 right-0 p-4">
              <CheckCircle2 className="text-coral-red" size={24} />
            </div>

            <span className="text-5xl font-black text-slate-900 mb-2 relative z-10">
              2M+
            </span>

            <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 leading-tight relative z-10">
              Trusted Property Owners
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
