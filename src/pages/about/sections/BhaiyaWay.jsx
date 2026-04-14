import { Ruler, FileSearch, TrendingDown, Map } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

const BhaiyaWay = () => {
  const points = [
    {
      icon: <Ruler size={18} />,
      text: "We measure carpet area when no one is looking.",
      color: "text-orange-600",
    },
    {
      icon: <FileSearch size={18} />,
      text: "We read the fine print in bank auction notices.",
      color: "text-blue-600",
    },
    {
      icon: <TrendingDown size={18} />,
      text: "We tell the seller when their price is too high.",
      color: "text-red-600",
    },
    {
      icon: <Map size={18} />,
      text: "We are your boots on the ground.",
      color: "text-emerald-600",
    },
  ];

  return (
    <Section>
      <Container>
        {/* THE BHAIYA WAY - UNIFIED HEADER DESIGN */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            {/* Unified Header with Vertical Line */}
            <div className="flex gap-4 md:gap-6 mb-10 md:mb-12">
              <div className="w-0.5 md:w-1 bg-orange-500 rounded-full shrink-0" />
              <div className="space-y-2">
                <span className="text-sm md:text-[16px] font-bold uppercase tracking-[0.25em] text-dark-orange">
                  The "Bhaiya" Way
                </span>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                  The bridge between <br />
                  <span className="text-slate-400 font-medium italic e text-sm md:text-lg">
                    "As-is" and "What-should-be."
                  </span>
                </h3>
              </div>
            </div>

            {/* Body Content - Compact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {points.map((p, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-4 bg-white border border-slate-100 rounded-xl transition-all hover:shadow-md"
                >
                  <span className={`${p.color} mt-0.5 shrink-0`}>{p.icon}</span>
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BhaiyaWay;
