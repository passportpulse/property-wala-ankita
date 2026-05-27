import { Clock, CheckCircle, Rocket, Building2 } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

const AboutTrustSection = () => {
  return (
    <Section>
      <Container>
        <div className="bg-slate-900 rounded-xl md:rounded-2xl lg:rounded-[3rem] p-5 md:p-8 lg:p-12 border border-slate-800/50 relative overflow-hidden shadow-lg">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 blur-[100px] rounded-full" />

          <div className="relative z-10">
            {/* Label */}
            <div className="flex items-center gap-3 mb-5 md:mb-8">
              <div className="w-0.5 h-5 md:h-6 bg-linear-to-b from-orange-400 to-orange-300 rounded-full" />
              <span className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-orange-400">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-3 md:mb-4">
              21 Years of Trust, Powered by{" "}
              <span className="text-orange-400">Future Tech</span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-400 text-xs md:text-sm lg:text-base max-w-3xl leading-relaxed mb-6 md:mb-10">
              Legacy Meets Innovation. For over 21 years, we’ve been more than
              just a property portal—we’ve been your most trusted partner in
              real estate. With a track record spanning over a decade and a
              half, we have helped thousands of families find their homes and
              hundreds of businesses build their empires.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {/* Point 1 */}
              <div className="flex gap-3 items-start group">
                <div className="bg-slate-800 p-2.5 rounded-lg text-orange-400 group-hover:bg-orange-500/10 transition shadow">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-white text-sm md:text-base font-semibold mb-1">
                    21 Years of Excellence
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm">
                    Our deep market roots mean we know every corner of the
                    industry, from residential flats to complex industrial JVs.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-3 items-start group">
                <div className="bg-slate-800 p-2.5 rounded-lg text-green-400 group-hover:bg-green-500/10 transition shadow">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <p className="text-white text-sm md:text-base font-semibold mb-1">
                    Verified Gold Standard
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm">
                    We don’t just list properties; we verify them. Every listing
                    is backed by our decades-long commitment to transparency.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-3 items-start group">
                <div className="bg-slate-800 p-2.5 rounded-lg text-blue-400 group-hover:bg-blue-500/10 transition shadow">
                  <Rocket size={18} />
                </div>
                <div>
                  <p className="text-white text-sm md:text-base font-semibold mb-1">
                    2026 Tech-Ready
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm">
                    We combine our expertise with AI-driven analytics, Virtual
                    4K Tours, and Instant Digital Paperwork.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex gap-3 items-start group">
                <div className="bg-slate-800 p-2.5 rounded-lg text-purple-400 group-hover:bg-purple-500/10 transition shadow">
                  <Building2 size={18} />
                </div>
                <div>
                  <p className="text-white text-sm md:text-base font-semibold mb-1">
                    End-to-End Solutions
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm">
                    From first homes to high-yield investments, our consultants
                    guide you at every step.
                  </p>
                </div>
              </div>
            </div>

            {/* 🔥 NEW CTA / TRUST STATEMENT */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-800 text-center">
              <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-3">
                Your Vision.{" "}
                <span className="text-orange-400">Our Experience.</span>
              </h3>

              <p className="text-slate-400 text-xs md:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
                We don't just find you a property; we secure your future. Join
                the thousands of satisfied owners who have moved forward with us
                since 2005.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutTrustSection;
