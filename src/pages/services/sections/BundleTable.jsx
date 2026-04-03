import { bundleTable } from "../../../data/service-data";

const BundleTable = ({ onOpen }) => {
  return (
    <div className="mt-10">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 px-1">
        <span>📦</span> Bhaiya Service Bundles
      </h3>

      <div className="w-full border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full table-fixed border-collapse bg-white">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
              <th className="w-[35%] p-2 text-left">Bundle</th>
              <th className="w-[65%] p-2 text-left">Details & Promise</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {bundleTable.map((b, i) => (
              <tr 
                key={i} 
                onClick={() => onOpen(b.key)}
                className="hover:bg-slate-50 active:bg-orange-50 transition-colors cursor-pointer"
              >
                {/* Bundle Name Column */}
                <td className="p-2 sm:p-4 align-top">
                  <div className="text-dark-orange font-semibold text-xs sm:text-base leading-tight wrap-break-words">
                    {b.name}
                  </div>
                </td>

                {/* Combined Details Column to save width */}
                <td className="p-2 align-top">
                  <div className="text-[11px] sm:text-base text-slate-700 font-medium mb-1 line-clamp-2">
                    {b.bestFor}
                  </div>
                  <div className="text-[10px] sm:text-sm italic text-slate-400 leading-tight border-l-2 border-slate-100 pl-2">
                    "{b.promise}"
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[10px] text-slate-400 mt-2 px-1 italic">
        * Tap any row to view full details.
      </p>
    </div>
  );
};

export default BundleTable;