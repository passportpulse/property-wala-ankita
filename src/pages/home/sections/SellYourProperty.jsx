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
        {/* HEADER */}
        <div className="mb-8 lg:mb-14 text-center px-4 max-w-3xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Owner Dashboard
          </h1>

          {/* Sub Heading */}
          <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
            <span className="bg-linear-to-r from-dark-orange to-warm-yellow bg-clip-text text-transparent">
              Sell Your Property Faster and Smarter
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-3 text-sm lg:text-base font-medium text-slate-600 leading-relaxed">
            Connect with genuine buyers, manage your listings easily, and track
            enquiries.
          </p>
        </div>

        {/* CARDS - Swipe on mobile, Grid on Desktop */}
        <div className="flex lg:grid lg:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto no-scrollbar pb-6 px-4 lg:px-0 snap-x snap-mandatory">
          {features.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate("/sell")}
              className="
    snap-center shrink-0 w-70 lg:w-auto
    group relative overflow-hidden
    rounded-3xl lg:rounded-4xl
    bg-orange-50 border border-slate-200
    shadow-sm hover:shadow-xl
    hover:-translate-y-2
    transition-all duration-500
    cursor-pointer

    flex flex-col   /* IMPORTANT */
  "
            >
              {/* Gradient Glow Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-5`}
                />
              </div>

              {/* Top Strip */}
              <div className={`h-1 w-full bg-linear-to-r ${item.color}`} />

              {/* CONTENT */}
              <div className="relative z-10 p-6 lg:p-8 flex flex-col grow">
                {/* ICON */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center bg-linear-to-br from-white to-slate-100 border border-slate-200 shadow-sm mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <div
                    className={`text-white p-2 rounded-lg bg-linear-to-br ${item.color}`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* TEXT */}
                <h4 className="font-bold text-slate-900 text-lg lg:text-xl tracking-tight">
                  {item.name}
                </h4>

                <p className="text-[10px] lg:text-xs font-bold text-dark-orange uppercase tracking-widest mt-1">
                  {item.count}
                </p>

                <p className="mt-3 text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>

                {/* CTA — pushed to bottom */}
                <div className="mt-auto pt-6">
                  <div
                    className="
        relative flex items-center justify-between
        px-3 py-2
        rounded-xl
        bg-linear-to-r from-dark-orange to-orange-400
        text-white
        font-bold text-xs uppercase tracking-wider
        shadow-md hover:shadow-lg
        hover:scale-[1.03]
        transition-all duration-300
        overflow-hidden
      "
                  >
                    <span className="relative z-10">
                      List Your Property Now
                    </span>

                    <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white group-hover:text-dark-orange group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
