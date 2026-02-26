import { CheckCircle } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import logo from "../../../assets/logo_img.png";

const JoinHero = () => {
  return (
    <Section className="bg-linear-to-b from-[#FFF9F2] via-white to-[#FFF5EC] text-slate-900">
      <Container>
        {/* Header - Compact margins for mobile */}
        <div className="text-center max-w-2xl mx-auto mb-4 md:mb-10">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-dark-orange">
            Partner With Us
          </span>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mt-2 leading-tight">
            Become a <br className="sm:hidden" />
            <span className="text-dark-orange">Property Wala Bhaiya</span>
          </h1>
          <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed px-4 md:px-0">
            Join a trusted real estate network designed for independent brokers
            who value credibility and long-term success.
          </p>
        </div>

        {/* Image + Why Section */}
        <div className="grid lg:grid-cols-12 gap-4 md:gap-12 items-center mb-4 md:mb-20">
          {/* Image - Aspect ratio controlled for mobile */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl shadow-md bg-dark-orange aspect-video md:aspect-auto flex items-center justify-center">
              <img
                src={logo}
                alt="Real estate professionals"
                /* object-contain: ensures the whole logo is visible without cropping.
       p-8: keeps the logo from touching the edges of the orange box.
    */
                className="w-full h-full object-contain p-1 md:h-80 md:w-auto"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                
              </div>
            </div>
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-wider opacity-90">
                  Be A Part Of Our Network
                </p>
      </Container>
    </Section>
  );
};

export default JoinHero;
