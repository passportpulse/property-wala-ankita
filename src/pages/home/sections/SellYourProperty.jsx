import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { ArrowRight, Home, IndianRupee, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    name: "Zero Brokerage",
    count: "Direct Listing",
    icon: <Home className="w-5 h-5 lg:w-7 lg:h-7" />,
    color: "from-dark-orange to-lighter-orange",
    desc: "Create your listing in minutes and reach verified buyers without paying heavy commission.",
  },
  {
    name: "Verified Leads",
    count: "Genuine Buyers",
    icon: <Users className="w-5 h-5 lg:w-7 lg:h-7" />,
    color: "from-lighter-orange to-soft-orange",
    desc: "Get direct inquiries from serious buyers looking in your locality and budget range.",
  },
  {
    name: "Market Value",
    count: "Smart Pricing",
    icon: <IndianRupee className="w-5 h-5 lg:w-7 lg:h-7" />,
    color: "from-soft-orange to-warm-yellow",
    desc: "Our demand analytics help you close deals faster at the right market price.",
  },
];

export default function SellYourProperty() {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        {/* HEADER - More compact margins */}
        <div className="mb-8 lg:mb-14 text-center px-4">
          <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange mb-4 relative bg-orange-50 px-3 py-1 rounded-full">
            For Property Owners
          </span>
          <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
            Sell Your{" "}
            <span className="bg-linear-to-r from-dark-orange to-lighter-orange bg-clip-text text-transparent">
              Own Property
            </span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-500 text-sm lg:text-lg leading-relaxed">
            List with Property Wala Bhaiya. We handle visibility and leads
            end-to-end.
          </p>
        </div>

        {/* CARDS - Swiper on mobile, Grid on Desktop */}
        <div className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto no-scrollbar pb-6 px-4 lg:px-0 snap-x snap-mandatory">
          {features.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate("/sell")}
              className="
                snap-center shrink-0
                w-70 lg:w-auto
                group relative p-6 lg:p-8
                rounded-4xl lg:rounded-[2.5rem]
                bg-slate-50/50 border border-slate-100
                hover:bg-white transition-all duration-500
                cursor-pointer overflow-hidden
              "
            >
              <div className="relative z-10">
                {/* ICON - Smaller on mobile */}
                <div
                  className={`
                  w-10 h-10 lg:w-14 lg:h-14
                  rounded-xl lg:rounded-2xl mb-4 lg:mb-6
                  flex items-center justify-center
                  bg-linear-to-br ${item.color}
                  text-white shadow-sm
                  group-hover:scale-110 transition-transform
                `}
                >
                  {item.icon}
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-base lg:text-xl tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-[9px] lg:text-[11px] font-black text-dark-orange uppercase tracking-widest">
                    {item.count}
                  </p>
                  <p className="mt-2 text-xs lg:text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-dark-orange transition-colors">
                  <span>List Now</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div
                className={`absolute bottom-0 inset-x-0 h-1 bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </div>
          ))}
        </div>

        {/* CTA BUTTON - Smaller padding for mobile */}
        <div className="mt-4 lg:mt-16 text-center">
          <button
            onClick={() => navigate("/sell")}
            className="
              cursor-pointer group
              inline-flex items-center gap-2
              px-8 py-3 lg:px-10 lg:py-4
              rounded-full
              bg-linear-to-r from-dark-orange to-lighter-orange text-white
              text-sm lg:text-base font-bold
              hover:bg-dark-orange
              transition-all duration-300
              shadow-xl shadow-slate-200
            "
          >
            List Your Property
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Container>
    </Section>
  );
}
