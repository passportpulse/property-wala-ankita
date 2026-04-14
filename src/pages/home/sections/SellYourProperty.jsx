import Header from "../../../components/Header";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { ArrowRight, Scissors, Users, Map, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    name: 'No more "Wrong Number" calls! 📵',
    count: "Verified Leads (For Sellers)",
    icon: <CheckCircle className="w-5 h-5 lg:w-7 lg:h-7" />,
    color: "from-green-600 to-emerald-400",
    desc: `Tired of picking up calls from people who aren't even looking to buy? Bhaiya has cleaned up the mess! 🧹

Every lead on Property Wala Bhaiya is verified via OTP and intent-checked. When your phone rings, you know it’s a serious buyer ready to talk business.`,
    benefits: [
      "100% Verified Phone Numbers",
      "Genuine Interest Only",
      "No Time-Wasters",
    ],
    hashtags: [
      "#VerifiedLeads",
      "#SellerSuccess",
      "#PropertyWalaBhaiya",
      "#NoSpam",
      "#SellFaster",
    ],
    cta: "List your property and get quality leads today!",
    path: "/sell",
  },
  {
    name: "Keep your lakhs in your pocket! 💰💸",
    count: "Zero Brokerage (For Buyers & Renters)",
    icon: <Scissors className="w-5 h-5 lg:w-7 lg:h-7" />,
    color: "from-orange-600 to-orange-400",
    desc: `Why pay 1 month’s rent or 2% of your home value to a middleman when you can do the deal yourself?

At Property Wala Bhaiya, we connect you directly with owners. That means:
🚫 ZERO Brokerage.
🚫 ZERO Hidden Fees.
🚫 ZERO Stress.

Use that saved money for your new sofa or a housewarming party instead! 🥳`,
    benefits: [],
    hashtags: [
      "#ZeroBrokerage",
      "#DirectToOwner",
      "#SaveMoney",
      "#HomeBuyingIndia",
      "#BhaiyaAdvantage",
    ],
    cta: "Find Zero-Brokerage homes here:",
    path: "/buy",
  },
  {
    name: 'Don\'t pay "Emotional Prices." Pay Market Value. 📈',
    count: "Market Value (Using Heat Map)",
    icon: <Map className="w-5 h-5 lg:w-7 lg:h-7" />,
    color: "from-blue-600 to-cyan-500",
    desc: `Is that 2BHK really worth 80 Lakhs? Don't guess—check the Bhaiya Heat Map! 🗺️

We track thousands of real-time transactions to show you exactly what properties in your sector are worth.

📍 See trending hotspots.
📉 Spot areas with price drops.
🤝 Negotiate with confidence.

Knowledge is power. Bhaiya gives you both.`,
    benefits: [],
    hashtags: [
      "#RealEstateData",
      "#PriceTrends",
      "#SmartInvestor",
      "#MarketValue",
      "#PropertyWalaBhaiya",
    ],
    cta: "Check the live Market Value of any area:",
    path: "/market-trends",
  },
];

export default function SellYourProperty() {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Header
          tag="Sell Your Property Faster & Smarter"
          title="Owner"
          highlight="Dashboard"
          subtitle="Connect with genuine buyers, manage your listings easily, and track enquiries directly."
          buttonText="Start Selling"
          onButtonClick="/sell"
        />

        {/* FULL WIDTH MOBILE WRAPPER */}
        <div className="relative w-screen lg:w-full left-1/2 lg:left-0 right-1/2 lg:right-0 -ml-[50vw] lg:ml-0 -mr-[50vw] lg:mr-0">
          {/* CARDS */}
          <div className="flex lg:grid lg:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto no-scrollbar pb-6 px-4 lg:px-0 snap-x snap-mandatory">
            {features.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(item.path)}
                className="
                  snap-center shrink-0 w-[85%] sm:w-[65%] lg:w-full
                  group relative overflow-hidden
                  rounded-3xl lg:rounded-4xl
                  bg-white border border-slate-200
                  shadow-sm hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all duration-500
                  cursor-pointer flex flex-col
                "
              >
                {/* TOP STRIP */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${item.color}`}
                />

                {/* CONTENT */}
                <div className="p-6 lg:p-8 flex flex-col grow">
                  {/* ICON */}
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center bg-slate-50 border shadow mb-5 group-hover:scale-110 transition">
                    <div
                      className={`text-white p-2.5 rounded-lg bg-gradient-to-br ${item.color}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* LABEL */}
                  <p className="text-[10px] lg:text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">
                    {item.count}
                  </p>

                  {/* TITLE */}
                  <h4 className="font-extrabold text-slate-900 text-lg lg:text-xl leading-tight mb-3">
                    {item.name}
                  </h4>

                  {/* DESCRIPTION (MULTILINE SUPPORT) */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 whitespace-pre-line">
                    {item.desc}
                  </p>

                  {/* BENEFITS */}
                  {item.benefits.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.benefits.map((b, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
                        >
                          ✅ {b}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* HASHTAGS */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.hashtags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <div
                      className={`
                        flex items-center justify-between
                        px-4 py-3 rounded-xl
                        bg-gradient-to-r ${item.color}
                        text-white font-bold text-xs uppercase
                      `}
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
