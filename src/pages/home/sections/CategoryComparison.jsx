import { useState } from "react";
import { X, BarChart3 } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import Header from "../../../components/Header";
import { useContent } from "../../../hooks/useContent";

export default function CategoryComparison() {
  const [open, setOpen] = useState(false);
  const { data, loading } = useContent('comparison');

  if (loading) return null;

  return (
    <>
      {/* NEW SECTION WRAPPER */}
      <Section className="relative bg-[#022c22] overflow-hidden py-24 border-y border-emerald-900/50">
        {/* Subtle Visual Interest */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1)_0%,transparent_50%)] pointer-events-none" />
        
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05]" 
          style={{ 
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", 
            backgroundSize: "32px 32px" 
          }}
        />

        <Container className="relative z-10">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-lg lg:text-4xl font-bold tracking-tight">
              <span className="text-white">Filters for </span> <span className="text-orange-500">Intent</span>
            </h2>
            <p className="text-emerald-100/70 text-xs lg:text-sm max-w-2xl mx-auto leading-relaxed font-medium">
              Not every buyer is looking for the same thing—some want a bargain, while others want a trophy home
            </p>
          </div>
          
          {/* BUTTON */}
          <div className="flex justify-center pt-2 pb-12">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-emerald-900 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95"
            >
              <BarChart3 size={18} />
              Category Comparison
            </button>
          </div>
        </Container>
      </Section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">

            {/* HEADER */}
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-wide">
                📊 Category Comparison
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* RESPONSIVE LAYOUT: TABLE FOR DESKTOP, CARDS FOR MOBILE */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[10px] uppercase font-black text-slate-500 tracking-[0.2em]">
                    <th className="p-6">Category</th>
                    <th className="p-6">Targeted User</th>
                    <th className="p-6">Seller Benefit</th>
                    <th className="p-6">Buyer Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr
                      key={i}
                      className="border-t border-slate-100 text-[11px] font-black text-slate-700 hover:bg-slate-50 transition uppercase tracking-tight"
                    >
                      <td className="p-6 text-dark-orange">
                        {row.category}
                      </td>
                      <td className="p-6">{row.user}</td>
                      <td className="p-6 text-emerald-600">{row.seller}</td>
                      <td className="p-6 text-blue-600">{row.buyer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE CARD LAYOUT */}
            <div className="lg:hidden p-6 space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {data.map((row, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                    <h3 className="text-sm font-black text-dark-orange uppercase tracking-tight">{row.category}</h3>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">{row.user}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-1">Seller Win</p>
                      <p className="text-[11px] font-bold text-slate-700">{row.seller}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1">Buyer Win</p>
                      <p className="text-[11px] font-bold text-slate-700">{row.buyer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 text-center">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">
                Property Wala Bhaiya • The Real-Time Standard
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
