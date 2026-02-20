import { Star, Quote, StarHalf } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { ArrowUpRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Durgapur",
      image:
        "https://media.istockphoto.com/id/628330148/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=3HlVTzZA4mFWonZtxu7xCYamgLxcb8zE3YMU9AGYXAc=",
      text: "Property Wala Bhaiya helped me find my dream flat within my budget. The process was smooth and completely transparent.",
      rating: 4.5,
    },
    {
      name: "Sneha Mukherjee",
      location: "Kolkata",
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-indian-person-posing-front-camera_482257-122324.jpg?semt=ais_user_personalization&w=740&q=80",
      text: "Very professional service. I scheduled a visit and finalized my property within 3 days. Highly recommended.",
      rating: 4,
    },
    {
      name: "Amit Das",
      location: "Asansol",
      image:
        "https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s=",
      text: "Best platform for buying property without brokers. Genuine listings and excellent support.",
      rating: 4.2,
    },
  ];

  return (
    <Section>
      <Container>
        {/* HEADER */}
        <div className="relative mb-8 lg:mb-16 border-l-4 border-dark-orange pl-4 lg:pl-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 lg:space-y-2">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                Success Stories
              </span>

              <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                What Our{" "}
                <span className="bg-linear-to-r from-dark-orange to-lighter-orange bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>

              <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
                Read how our clients found the right property opportunities.
              </p>

              <a
                href="https://share.google/b2tgAKDzKDyHl73fI"
                target="_blank"
                rel="noopener noreferrer"
                className="
        cursor-pointer
    bg-dark-orange text-white
    flex items-center gap-2 group
    text-[10px] lg:text-[11px]
    font-black uppercase tracking-widest
    px-4 py-2 lg:px-5 lg:py-2.5
    border-2 border-white
    rounded-md
    hover:bg-white hover:text-orange-600 hover:border-orange-600
    transition-all duration-300
    shadow-sm hover:shadow-md
    w-fit
      "
              >
                {/* Google style stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FFC107] stroke-[#FFC107]"
                    />
                  ))}
                </div>

                {/* Rating text */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] lg:text-[11px] font-black tracking-widest uppercase">
                    5.0 Google Reviews
                  </span>

                  <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
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
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => {
                  const fullStars = Math.floor(t.rating);
                  const hasHalfStar = t.rating - fullStars >= 0.5;

                  if (index < fullStars) {
                    // full star
                    return (
                      <Star
                        key={index}
                        size={14}
                        className="fill-[#FFC107] text-[#FFC107]"
                      />
                    );
                  } else if (index === fullStars && hasHalfStar) {
                    // half star
                    return (
                      <StarHalf
                        key={index}
                        size={14}
                        className="fill-[#FFC107] text-[#FFC107]"
                      />
                    );
                  } else {
                    // empty star
                    return (
                      <Star key={index} size={14} className="text-slate-300" />
                    );
                  }
                })}

                {/* Numeric rating like Google */}
                <span className="ml-2 text-xs font-bold text-slate-600">
                  {t.rating.toFixed(1)}
                </span>
              </div>

              {/* Text: Constrained for better vertical rhythm */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 italic">
                “{t.text}”
              </p>

              {/* User Info with Lucky Orange Detail */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-dark-orange/20 shadow-md group-hover:border-dark-orange transition-all">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                      background:
                        "linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
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
