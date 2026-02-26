import { CheckCircle } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import logo from "../../../assets/logo_img.png";

const JoinHero = () => {
  return (
    <Section className="bg-linear-to-b from-[#FFF9F2] via-white to-[#FFF5EC] text-slate-900">
      <Container>
        {/* Header - Compact margins for mobile */}
        <div className="relative mb-8 lg:mb-16 border-l-4 border-dark-orange pl-4 lg:pl-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 lg:space-y-2">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                Partner With Us
              </span>

              <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                Become A{" "}
                <span className="bg-linear-to-r from-dark-orange to-lighter-orange bg-clip-text text-transparent">
                  Property Wala Bhaiya
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 items-stretch">
          {/* LEFT SIDE */}
          <div className="col-span-6 flex">
            <div className="bg-white rounded-l-lg md:rounded-xl p-3 md:p-6 shadow-sm h-full flex items-center">
              <p className="text-xs md:text-base text-slate-700 leading-snug md:leading-relaxed">
                Join a trusted real estate network for independent brokers who
                value credibility and long-term success.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-6 flex">
            <div className="rounded-r-lg md:rounded-xl bg-dark-orange shadow-md h-full w-full flex items-center justify-center p-2 md:p-4">
              <img
                src={logo}
                alt="Real estate professionals"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <p className="text-xs uppercase tracking-wider text-dark-orange text-center mt-6">
          Be A Part Of Our Network
        </p>
      </Container>
    </Section>
  );
};

export default JoinHero;
