import { bundleDetails } from "../../data/service-data";

const BundleModal = ({ active, onClose }) => {
  if (!active) return null;

  const data = bundleDetails[active];

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      {/* MODAL */}
      <div
        className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-none max-h-[90vh] flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* DRAG HANDLE */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-3 mb-2 sm:hidden" />

        {/* HEADER */}
        <div className="px-5 pt-2 sm:pt-8 pb-4 border-b border-slate-100 relative">
          <h2 className="text-lg font-extrabold text-slate-900 pr-8">
            {data.title}
          </h2>
          <p className="text-xs text-slate-500 mt-1">{data.target}</p>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-slate-400 text-lg"
          >
            ✕
          </button>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {/* SERVICES */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">
              What’s Included
            </h3>

            <div className="space-y-3">
              {data.points.map((p, i) => (
                <div key={i} className="flex gap-3">
                  {/* Add &#xFE0E; right after the tick */}
                  <span className="inline-block text-green-500 mt-1 text-xs leading-none">
                    ✔
                  </span>

                  <div className="text-sm leading-snug">
                    <span className="font-semibold text-slate-800">
                      {p.label}
                    </span>
                    <span className="text-slate-600"> – {p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BONUS + BENEFIT */}
          <div className="bg-slate-50 rounded-xl p-4 space-y-3 border">
            {data.bonus && (
              <div className="text-green-700 text-xs font-semibold">
                🎁 {data.bonus}
              </div>
            )}

            <div className="text-dark-orange text-xs font-bold border-t pt-2">
              💡 {data.benefit}
            </div>
          </div>
        </div>

        {/* STICKY FOOTER CTA */}
        <div className="p-4 border-t bg-white">
          <button className="w-full py-3 rounded-xl bg-dark-orange text-white font-bold active:scale-95 transition">
            Book This Bundle
          </button>

          <button
            onClick={onClose}
            className="w-full mt-2 text-xs text-slate-400"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default BundleModal;
