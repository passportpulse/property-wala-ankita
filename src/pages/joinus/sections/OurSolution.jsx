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
    <Section>
      {/* 1. The Global CSS for the Text Shine */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes textShine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .shining-text {
          background: linear-gradient(
            to right, 
            #EA580C 20%, 
            #FB923C 40%, 
            #FFFFFF 50%, 
            #FB923C 60%, 
            #EA580C 80%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShine 4s linear infinite;
        }
      `}} />

      <Container>
        <div className="mb-10 px-2">
          <h2 className="text-xl font-bold text-slate-900 leading-tight">
            The Infrastructure for <br />
            <span className="text-dark-orange underline decoration-orange-200 underline-offset-4">
              Modern Brokers
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Everything you need to scale your real estate business without the overhead.
          </p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {features.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 text-dark-orange shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <item.icon size={18} />
              </div>

              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-linear-to-br from-slate-50 to-white p-5 rounded-2xl border border-slate-100 shadow-xs">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-800 text-sm md:text-base">
                    {item.title}
                  </h3>
                  
                  {/* 2. The Shining Benefit Pill */}
                  <div className="flex items-center gap-1 bg-orange-50 px-2 py-0.5 rounded-full ring-1 ring-orange-200/30">
                    <item.benefitIcon size={10} className="text-dark-orange" />
                    
                    {/* The SHINING TEXT specifically */}
                    <span className="shining-text text-[9px] font-bold uppercase tracking-tight relative z-10">
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
      </Container>
    </Section>
  );
}