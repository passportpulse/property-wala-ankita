import { Shield, BadgePercent, Database, Landmark } from "lucide-react";

const OurResolve = () => {
  const resolvePoints = [
    {
      icon: Shield,
      title: "Truth is Non-Negotiable",
      desc: "If it’s on our map, it’s real. If the tap leaks or the view is blocked, we tell you before you even start your engine.",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: BadgePercent,
      title: "No More 'Middleman Tax'",
      desc: "Transparency shouldn't cost a 2% commission. We connect hearts to hearths, directly.",
      color: "text-orange-600 bg-orange-50",
    },
    {
      icon: Database,
      title: "Data Belongs to You",
      desc: "You deserve to know if you're overpaying. Our Heat Maps aren't just colors; they protect your hard-earned money.",
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: Landmark,
      title: "Auctions Shouldn't Be a Secret Club",
      desc: "Wealth-building through distressed assets should be accessible to a teacher in Sabujnagar, not just a tycoon in a boardroom.",
      color: "text-green-600 bg-green-50",
    },
  ];

  return (
    <div className="my-6 md:my-10">
      <div className="bg-orange-50/40 border border-slate-200 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 lg:p-12 shadow-sm">

        {/* Label */}
        <div className="mb-6 md:mb-8">
          <span className="text-sm md:text-[16px] font-bold uppercase tracking-[0.25em] text-dark-orange">
            Our Resolve
          </span>
        </div>

        {/* Intro */}
        <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed mb-8 md:mb-12">
          We didn't build{" "}
          <span className="font-semibold text-slate-900">
            Property Wala Bhaiya
          </span>{" "}
          to be a billboard. We built it to be a{" "}
          <span className="text-dark-orange font-semibold">shield</span>. We believe:
        </p>

        {/* Wrapper */}
        <div className="relative">

          {/* 🔥 Vertical Line (Desktop only) */}
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-slate-300" />

          {/* Grid → Mobile grid / Desktop single column */}
          <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-10">

            {resolvePoints.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className={`
                    flex gap-3 md:gap-6 items-start relative

                    /* 📱 MOBILE card */
                    p-4 rounded-xl border border-slate-200 bg-white shadow-sm
                    hover:shadow-md transition

                    /* 💻 DESKTOP remove card */
                    md:p-0 md:border-0 md:bg-transparent md:shadow-none md:hover:shadow-none
                  `}
                >
                  {/* Icon (aligned to line) */}
                  <div
                    className={`
                      p-2 md:p-3 rounded-xl shrink-0 ${item.color}

                      /* position on line */
                      md:relative md:left-[2px] md:z-10 md:bg-white md:border md:border-slate-200
                    `}
                  >
                    <Icon size={20} className="md:w-6 md:h-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold text-slate-900 mb-1">
                      <span className="text-slate-400 mr-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.title}
                    </h3>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default OurResolve;
