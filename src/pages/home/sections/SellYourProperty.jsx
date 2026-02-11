import { ArrowRight, Home, IndianRupee, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    name: "List Without Brokerage",
    count: "Zero Commission",
    icon: <Home className="w-6 h-6 lg:w-7 lg:h-7" />,
    color: "from-coral-red to-soft-orange",
    desc:
      "Create your listing in minutes and reach verified buyers without paying heavy brokerage fees.",
  },
  {
    name: "Verified Buyer Leads",
    count: "Genuine Enquiries",
    icon: <Users className="w-6 h-6 lg:w-7 lg:h-7" />,
    color: "from-soft-orange to-peach-glow",
    desc:
      "Get direct inquiries from serious buyers looking in your locality and budget range.",
  },
  {
    name: "Best Market Value",
    count: "Smart Pricing",
    icon: <IndianRupee className="w-6 h-6 lg:w-7 lg:h-7" />,
    color: "from-peach-glow to-warm-yellow",
    desc:
      "Our pricing insights and demand analytics help you close deals faster at the right price.",
  },
];

export default function SellYourProperty() {
  const navigate = useNavigate();

  return (
    <section className="pb-16 lg:pb-32 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-coral-red">
            For Property Owners
          </span>

          <h2 className="mt-3 text-3xl lg:text-5xl font-black text-dark-slate tracking-tight">
            Sell Your{" "}
            <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
              Own Property
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-muted-slate text-base lg:text-lg">
            List your property with Property Wala Bhaiya and connect with genuine buyers.
            We handle visibility, leads, and negotiations — handled end-to-end by us.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate("/sell")}
              className="group relative p-6 lg:p-8 rounded-3xl lg:rounded-[2.5rem]
              bg-white border border-slate-100
              hover:border-peach-glow/30
              transition-all duration-500
              cursor-pointer shadow-sm hover:shadow-xl hover:shadow-peach-glow/10
              overflow-hidden"
            >
              <div className="relative z-10">
                {/* ICON */}
                <div
                  className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl mb-6
                  flex items-center justify-center
                  bg-linear-to-br ${item.color}
                  text-white shadow-md
                  transition-all duration-500
                  group-hover:scale-110 group-hover:rotate-3`}
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-lg lg:text-xl tracking-tight group-hover:text-coral-red transition-colors">
                    {item.name}
                  </h4>

                  <p className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    {item.count}
                  </p>

                  <p className="mt-3 text-sm text-muted-slate leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* HOVER CTA */}
                <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 text-coral-red -translate-x-2 group-hover:translate-x-0 transition-transform" />
                </div>
              </div>

              {/* BOTTOM ACCENT BAR */}
              <div
                className={`absolute bottom-0 inset-x-0 h-1.5
                bg-linear-to-r ${item.color}
                opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate("/sell")} 
            className="cursor-pointer group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-coral-red text-white font-semibold hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-coral-red/20"
          >
            List Your Property
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}