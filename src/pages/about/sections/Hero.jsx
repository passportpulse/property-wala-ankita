import React from "react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import founder from "../../../assets/founder.jpeg";

export default function Hero() {
  return (
    <>
      <Section className="mt-0 pt-4 lg:pt-8 mb-0">
        <Container>
          {/* MAIN TOP SECTION: Text Left (8 cols), Image Right (4 cols) on Mobile */}
          <div className="grid grid-cols-12 gap-2 md:gap-16 items-start mb-8">
            {/* LEFT SIDE: Text Content */}
            <div className="col-span-8 md:col-span-7">
              <p className="text-[9px] md:text-sm uppercase tracking-widest text-orange-600 font-black mb-1">
                From the Desk of Founder
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 mb-2 leading-tight">
                Built on a
                <span className="text-orange-600"> Foundation of Strength</span>
              </h2>

              <p className="text-[11px] sm:text-base md:text-lg text-slate-600 leading-relaxed pr-2">
                Our founder’s journey didn’t start with just property. With a
                <span className="font-bold text-slate-800 tracking-tight">
                  {" "}
                  21-year legacy
                </span>{" "}
                spanning the Steel, Logistics, and Real Estate industries, we
                bring a unique "Ground-to-Growth" perspective to the market.
              </p>

              {/* Desktop-only Quote */}
              <div className="hidden md:block mt-6 border-l-4 border-orange-500 pl-4">
                <p className="text-slate-500 italic text-sm">
                  "In the steel industry, if the quality isn't 100%, the
                  structure fails. In logistics, if the timing is off, the
                  business fails. I brought that same 'Zero-Error' philosophy to
                  Real Estate. After 21 years, our goal remains the same: to
                  build a platform where trust is the primary currency."
                </p>
                <p className="text-slate-900 font-bold mt-1 text-sm">
                  — Shashi Shekhar
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: Small Image on Mobile */}
            <div className="col-span-4 md:col-span-5 flex justify-center mt-6 ">
              <div className="relative">
                <div className="relative z-10 bg-white p-0.5 rounded-full shadow-lg border border-slate-100 w-24 h-24 sm:w-42 sm:h-42 md:w-64 md:h-64 overflow-hidden">
                  <img
                    src={founder}
                    alt="Founder Shashi Shekhar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
              </div>
            </div>
          </div>

          {/* BOTTOM CARDS: High Density */}
          <div className="bg-slate-50/50 rounded-2xl p-4 md:p-10 border border-slate-100">
            <h3 className="text-xs md:text-xl font-black text-slate-800 mb-4 uppercase tracking-tighter">
              Why Our{" "}
              <span className="text-orange-600">Multi-Industry Expertise</span>{" "}
              Matters to You:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
              <div className="flex gap-3 md:flex-col items-start">
                <span className="text-xl">🏗️</span>
                <div>
                  <h4 className="text-[11px] md:text-base font-bold text-slate-900">
                    Steel-Strong Integrity
                  </h4>
                  <p className="text-[10px] md:text-sm text-slate-500">
                    Coming from the steel industry, we understand the value of a
                    solid foundation. We apply that same standard of strength to
                    every property we verify.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:flex-col items-start">
                <span className="text-xl">🚛</span>
                <div>
                  <h4 className="text-[11px] md:text-base font-bold text-slate-900">
                    Logistics-Driven Insight
                  </h4>
                  <p className="text-[10px] md:text-sm text-slate-500">
                    Our roots in logistics mean we don't just see a warehouse or
                    a plot; we see a strategic hub. We help you choose locations
                    that optimize movement and profitability.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:flex-col items-start">
                <span className="text-xl">🏢</span>
                <div>
                  <h4 className="text-[11px] md:text-base font-bold text-slate-900">
                    16 Years of Mastery
                  </h4>
                  <p className="text-[10px] md:text-sm text-slate-500">
                    We bridge the gap between industrial grit and residential
                    luxury, providing a 360-degree ecosystem for buyers,
                    sellers, and investors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Mobile Quote */}
          <div className="md:hidden mt-6 text-center border-t border-slate-100 pt-4">
            <p className="text-slate-400 italic text-[10px] px-6">
              "In the steel industry, if the quality isn't 100%, the structure
              fails. In logistics, if the timing is off, the business fails. I
              brought that same 'Zero-Error' philosophy to Real Estate. After 21
              years, our goal remains the same: to build a platform where trust
              is the primary currency."
            </p>
            <p className="text-slate-900 font-bold text-[9px] mt-1 uppercase">
              — Shashi Shekhar
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
