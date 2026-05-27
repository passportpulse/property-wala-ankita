import { Star, Quote, StarHalf, CheckCircle } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { ArrowUpRight } from "lucide-react";
import Header from "../../../components/Header";
import { useContent } from "../../../hooks/useContent";

export default function Testimonials() {
  const { data: dynamicTestimonials, loading } = useContent('testimonials');

  if (loading) return null;

  const testimonials = dynamicTestimonials.length > 0 ? dynamicTestimonials.map(t => ({
    ...t,
    text: t.content,
    location: t.role // mapping role to location for now or use role directly
  })) : [];

  return (
    <Section>
      <Container>
        {/* HEADER */}
        <Header
          tag="Success Stories"
          title="What Our"
          highlight="Clients Say"
          subtitle="Read how our clients found the right property opportunities."
        />

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
                  <div className="flex items-center gap-1">
                    <p className="font-black text-slate-900 text-[12px] uppercase tracking-wide group-hover:text-dark-orange transition-colors">
                      {t.name}
                    </p>

                    {/* Verification Badge */}
                    <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-[2px] rounded-full border border-green-200">
                      <CheckCircle
                        size={12}
                      />
                      Verified
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
