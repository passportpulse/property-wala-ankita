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
    <Section className="bg-white font-poppins">
      <Container>

        {/* HEADER */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-coral-red" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
            What Our Clients{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">
              Say.
            </span>
          </h2>

        </div>


        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                group relative 
                bg-white border border-slate-100
                p-8 lg:p-10 
                rounded-3xl lg:rounded-[2.5rem]
                hover:border-peach-glow/30
                hover:shadow-xl hover:shadow-peach-glow/10
                transition-all duration-500
                overflow-hidden
              "
            >

              {/* Quote Icon */}
              <Quote
                size={42}
                className="absolute top-6 right-6 text-coral-red/10 group-hover:text-coral-red/20 transition-colors"
              />


              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="fill-warm-yellow text-warm-yellow"
                  />
                ))}
              </div>


              {/* Text */}
              <p className="text-slate-500 text-sm lg:text-base leading-relaxed mb-6">
                “{t.text}”
              </p>


              {/* User */}
              <div className="border-t border-slate-50 pt-4">

                <p className="font-black text-slate-900 text-sm uppercase tracking-wide">
                  {t.name}
                </p>

                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                  {t.location}
                </p>

              </div>


              {/* Accent Bar */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 bg-linear-to-r from-coral-red via-soft-orange to-peach-glow opacity-0 group-hover:opacity-100 transition-opacity" />

            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}
