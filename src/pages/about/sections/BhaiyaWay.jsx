import React from "react";
import { Handshake, Ruler, FileSearch, TrendingDown, Map, Home, CheckCircle2 } from "lucide-react";

const BhaiyaWay = () => {
  const points = [
    { icon: <Ruler size={18} />, text: "We measure carpet area when no one is looking.", color: "text-orange-600" },
    { icon: <FileSearch size={18} />, text: "We read the fine print in bank auction notices.", color: "text-blue-600" },
    { icon: <TrendingDown size={18} />, text: "We tell the seller when their price is too high.", color: "text-red-600" },
    { icon: <Map size={18} />, text: "We are your boots on the ground.", color: "text-emerald-600" },
  ];

  return (
    <div className="my-4 py-4 font-poppins space-y-6">
      
      {/* THE BHAIYA WAY - LIGHT MINIMALIST CARD */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
             <div className="h-px w-6 bg-orange-500" />
            <span className="text-sm md:text-[16px] font-bold uppercase tracking-[0.3em] text-slate-500">
              The "Bhaiya" Way
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Main Statement */}
            <div className="lg:col-span-6">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                The bridge between <br />
                <span className="text-slate-400 font-medium italic">"As-is" and "What-should-be."</span>
              </h3>
            </div>

            {/* List of Points - Compact for Mobile */}
            <div className="lg:col-span-6 grid grid-cols-1 gap-4">
              {points.map((p, i) => (
                <div key={i} className="flex gap-4 items-start p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <span className={`${p.color} mt-0.5`}>{p.icon}</span>
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* OUR INVITATION - CLEAN SPLIT CARD */}
      <div className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-sm relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full mb-4">
              <Handshake size={14} className="text-orange-600" />
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Our Invitation</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              Let’s bring <br />
              <span className="text-orange-500">honesty home.</span>
            </h4>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-2">
                 <Home size={16} className="text-slate-400" />
                 <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                   — Team Property Wala Bhaiya 
                 </p>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="border-l-0 md:border-l border-slate-100 md:pl-10">
            <p className="text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed">
              Whether you are buying your first 2BHK, selling a plot, or hunting for 
              warehouses and bank auctions—welcome to a world where a 
              handshake still means something, even when it’s digital.
            </p>
            <div className="mt-6 flex items-center gap-2 text-emerald-600 bg-emerald-50 w-fit px-3 py-1 rounded-md">
               <CheckCircle2 size={14} />
               <span className="text-[10px] font-bold uppercase tracking-widest">Digital Trust • Human Touch</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BhaiyaWay;