import { MapPin, Tag } from "lucide-react";

export default function SellPeerDeals() {
  const peerDeals = [
    {
      area: "City Center",
      price: "₹1.2 Cr",
      type: "3 BHK Flat",
      time: "Sold in 4 Days",
    },
    { area: "Riverside", price: "₹85 L", type: "Plot", time: "Sold in 1 Week" },
    {
      area: "Industrial Zone",
      price: "₹4.5 Cr",
      type: "Warehouse",
      time: "Sold in 12 Days",
    },
  ];

  return (
    <section className="py-24 px-6 bg-linear-to-b from-slate-50 to-white">
      <div className=" bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-xl border border-slate-100">
        <div className="lg:w-1/2 relative min-h-105">
          <img
            src="https://img.freepik.com/premium-photo/real-estate-agent-giving-house-keys-client-after-signing-contract_1421-7182.jpg"
            alt="Happy seller"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/60 via-white/50 to-transparent"></div>
        </div>

        <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white">
          <h2 className="text-2xl font-semibold text-slate-800 mb-10">
            Your Peers Secured{" "}
            <span className="text-emerald-600">Great Deals</span>
          </h2>

          <div className="space-y-5">
            {peerDeals.map((deal, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Tag size={18} />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm">
                      {deal.type}
                    </p>
                    <p className="text-slate-500 text-xs flex items-center gap-1 mt-1">
                      <MapPin size={12} /> {deal.area}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-emerald-600 font-semibold text-lg">
                    {deal.price}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">{deal.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
