import { Clock, AlertCircle } from "lucide-react";

const ExpertPricingTable = () => {
  const pricingData = [
    {
      cat: "Legal",
      task: "Title Search (30 Yrs)",
      base: 3500,
      fee: 525,
      final: 4025,
      tat: "4 Working Days",
    },
    {
      cat: "Legal",
      task: "Agreement Drafting",
      base: 2000,
      fee: 300,
      final: 2300,
      tat: "24 Hours",
    },
    {
      cat: "Technical",
      task: "Market Valuation",
      base: 2500,
      fee: 375,
      final: 2875,
      tat: "2 Working Days",
    },
    {
      cat: "Technical",
      task: "DPR Preparation",
      base: 15000,
      hasNote: true,
      fee: 2250,
      final: 17250,
      tat: "10 Working Days",
    },
    {
      cat: "Compliance",
      task: "Property Registration",
      base: 5000,
      fee: 750,
      final: 5750,
      tat: "Appt. Date",
    },
    {
      cat: "Consultancy",
      task: "Vastu Audit (1 Visit)",
      base: 3000,
      fee: 450,
      final: 3450,
      tat: "3 Working Days",
    },
    {
      cat: "Financial",
      task: "Home Loan Support",
      base: "0 (Bank Paid)",
      fee: "0",
      final: "FREE",
      tat: "48 Hours Login",
    },
  ];

  return (
    <div className="mt-8 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Header Section */}
      <div className="p-4 border-b border-slate-100 bg-slate-50/50">
        <h3 className="text-sm lg:text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="text-emerald-600">💰</span> Bhaiya Expert Panel:
          Master Pricing
        </h3>
        <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">
          Standardized Costs & TAT Schedule (INR)
        </p>
      </div>

      {/* Table Container - Mobile Optimized Scroll */}
      {/* MOBILE TABLE (UNCHANGED) */}
      <div className="block md:hidden overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase font-bold text-slate-500 border-b border-slate-200">
              <th className="p-3 pl-5 sticky left-0 bg-slate-50 z-10">
                Specific Task
              </th>
              <th className="p-3">Partner Base</th>
              <th className="p-3 text-dark-orange text-center">Platform Fee</th>
              <th className="p-3 font-extrabold text-slate-900">Final Price</th>
              <th className="p-3 pr-5 text-right">TAT</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {pricingData.map((row, i) => (
              <tr key={i}>
                <td className="p-3 pl-5 sticky left-0 bg-white">
                  <div className="text-[11px] font-bold">{row.task}</div>
                  <div className="text-[9px] text-slate-400 uppercase">
                    {row.cat}
                  </div>
                </td>

                <td className="p-3 text-xs">
                  {typeof row.base === "number"
                    ? `₹${row.base.toLocaleString()}`
                    : row.base}
                  {row.hasNote && (
                    <span className="text-dark-orange ml-1">*</span>
                  )}
                </td>

                <td className="p-3 text-xs text-center">
                  {typeof row.fee === "number"
                    ? `₹${row.fee.toLocaleString()}`
                    : row.fee}
                </td>

                <td className="p-3 text-xs font-bold">
                  {typeof row.final === "number"
                    ? `₹${row.final.toLocaleString()}`
                    : row.final}
                </td>

                <td className="p-3 pr-5 text-right text-[10px]">{row.tat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DESKTOP FULL TABLE */}
      <div className="hidden md:block">
        <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
          <thead className="bg-slate-100 text-slate-600 uppercase text-xs">
            <tr>
              <th className="p-4 text-left">Service Category</th>
              <th className="p-4 text-left">Specific Task</th>
              <th className="p-4">Partner Base Fee</th>
              <th className="p-4 text-dark-orange">
                Bhaiya Platform Fee (15%)
              </th>
              <th className="p-4 font-bold text-slate-900">
                Final Price to User
              </th>
              <th className="p-4 text-right">Standard TAT</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {pricingData.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition">
                {/* CATEGORY */}
                <td className="p-4 font-medium text-slate-700">{row.cat}</td>

                {/* TASK */}
                <td className="p-4 font-semibold text-slate-800">{row.task}</td>

                {/* BASE */}
                <td className="p-4 text-center">
                  {typeof row.base === "number"
                    ? `₹${row.base.toLocaleString()}`
                    : row.base}
                  {row.hasNote && (
                    <span className="text-dark-orange ml-1">*</span>
                  )}
                </td>

                {/* PLATFORM */}
                <td className="p-4 text-center text-slate-500">
                  {typeof row.fee === "number"
                    ? `₹${row.fee.toLocaleString()}`
                    : row.fee}
                </td>

                {/* FINAL */}
                <td className="p-4 text-center font-bold">
                  {typeof row.final === "number"
                    ? `₹${row.final.toLocaleString()}`
                    : row.final}
                </td>

                {/* TAT */}
                <td className="p-4 text-right font-medium text-slate-600">
                  {row.tat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="p-3 bg-orange-50/50 flex items-start gap-2 border-t border-orange-100">
        <AlertCircle
          size={14}
          className="text-dark-orange mt-0.5 flex-shrink-0"
        />
        <p className="text-[10px] text-slate-600 leading-relaxed italic">
          *Base price for projects up to{" "}
          <span className="font-bold text-slate-900">₹5 Cr</span>. Larger
          projects to be quoted on a case-by-case basis.
        </p>
      </div>
    </div>
  );
};

export default ExpertPricingTable;
