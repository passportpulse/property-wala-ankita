import { 
  Database, ShieldCheck, Layers, Globe, 
  IndianRupee, Users, Briefcase, Award 
} from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function OurSolution() {
  const features = [
    {
      icon: Database,
      title: "Centralized Leads",
      text: "Qualified lead generation through our integrated CRM.",
      benefit: "Better Earnings",
      benefitIcon: IndianRupee
    },
    {
      icon: Layers,
      title: "Unified Inventory",
      text: "Real-time access to exclusive property listings.",
      benefit: "Verified Leads",
      benefitIcon: Users
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Support",
      text: "Automated documentation and back-office assistance.",
      benefit: "Zero Office Cost",
      benefitIcon: Briefcase
    },
    {
      icon: Globe,
      title: "Digital Presence",
      text: "Powerful branding and digital marketing support.",
      benefit: "Brand Trust",
      benefitIcon: Award
    },
  ];

  return (
    <Section className="bg-white font-poppins py-10">
      <Container>
        {/* Header */}
        <div className="mb-10 px-2">
          <h2 className="text-2xl font-bold text-slate-900 leading-tight">
            The Infrastructure for <br />
            <span className="text-dark-orange underline decoration-orange-200 underline-offset-4">
              Modern Brokers
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Everything you need to scale your real estate business without the overhead.
          </p>
        </div>

        {/* Mobile-First Timeline List */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {features.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Dot on the line */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 text-dark-orange shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <item.icon size={18} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-linear-to-br from-slate-50 to-white p-5 rounded-2xl border border-slate-100 shadow-xs">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-800 text-sm md:text-base">
                    {item.title}
                  </h3>
                  {/* Small tag for the Benefit */}
                  <div className="flex items-center gap-1 bg-orange-100/50 px-2 py-0.5 rounded-full">
                    <item.benefitIcon size={10} className="text-dark-orange" />
                    <span className="text-[9px] font-bold uppercase text-dark-orange tracking-tight">
                      {item.benefit}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Bottom Action (Compact) */}
        <div className="mt-12 p-6 bg-dark-orange rounded-3xl text-center shadow-lg shadow-orange-200">
           <p className="text-white/80 text-xs font-medium uppercase tracking-widest">Ready to grow?</p>
           <h4 className="text-white text-lg font-semibold mb-4">Start your journey today</h4>
           <button className="w-full bg-white text-dark-orange font-bold py-3 rounded-xl shadow-sm active:scale-95 transition-transform text-sm">
             Apply to Join
           </button>
        </div>
      </Container>
    </Section>
  );
}