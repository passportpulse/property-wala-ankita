import { CheckCircle } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

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
            <div className="relative overflow-hidden rounded-2xl shadow-md bg-white aspect-video md:aspect-auto">
              <img
                src="https://cdn.corporatefinanceinstitute.com/assets/brokerage-1024x576.jpeg"
                alt="Real estate professionals"
                className="w-full h-full object-cover md:h-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[10px] uppercase tracking-wider opacity-90">
                  Trusted Network
                </p>
                <p className="text-xs md:text-sm font-medium">
                  Local Brokers & Genuine Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default JoinHero;
