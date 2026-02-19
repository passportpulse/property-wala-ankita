import { Star, Quote } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Durgapur",
      text: "Property Wala Bhaiya helped me find my dream flat within my budget. The process was smooth and completely transparent.",
      rating: 5,
    },
    {
      name: "Sneha Mukherjee",
      location: "Kolkata",
      text: "Very professional service. I scheduled a visit and finalized my property within 3 days. Highly recommended.",
      rating: 5,
    },
    {
      name: "Amit Das",
      location: "Asansol",
      text: "Best platform for buying property without brokers. Genuine listings and excellent support.",
      rating: 5,
    },
  ];

  return (
    <Section>
      <Container>
        {/* HEADER: Compact & Left-Aligned */}
        <div className="max-w-xl mb-10 md:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-dark-orange" />
            <span className="text-[10px] font-black uppercase tracking-widest text-dark-orange">
              Success Stories
            </span>
          </div>
          <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-none">
            Client <span className="text-dark-orange">Stories.</span>
          </h2>
        </div>

        {/* TESTIMONIAL SNAP CAROUSEL */}
        <div className="flex overflow-x-auto pb-10 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:mx-0 md:px-0">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                min-w-[85%] sm:min-w-[320px] snap-center mr-4 last:mr-0
                md:min-w-0 md:mr-0 group relative 
                bg-white border border-lighter-orange
                p-6 md:p-10 
                rounded-4xl md:rounded-[2.5rem]
                hover:border-dark-orange/20
                hover:shadow-2xl hover:shadow-dark-orange/5
                transition-all duration-500
              "
            >
              {/* Floating Quote Icon */}
              <Quote
                size={32}
                className="absolute top-6 right-8 text-dark-orange/10 group-hover:text-dark-orange/30 transition-all duration-500 group-hover:rotate-12"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Text: Constrained for better vertical rhythm */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 italic">
                “{t.text}”
              </p>

              {/* User Info with Lucky Orange Detail */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-6">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-dark-orange text-xs border border-slate-200">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-slate-900 text-[12px] uppercase tracking-wide group-hover:text-dark-orange transition-colors">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    {t.location}
                  </p>
                </div>
              </div>

              {/* Bottom Accent: Lucky Orange Shine */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 overflow-hidden rounded-b-[2.5rem]">
                <div className="w-full h-full bg-dark-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative">
                  <span
                    className="absolute inset-0 w-full h-full"
                    style={{
                      background: "linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
                      backgroundSize: "200% 100%",
                      animation: "shine 2s linear infinite",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}