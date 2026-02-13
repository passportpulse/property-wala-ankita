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
    <Section className="bg-white py-20">
      <Container>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-coral-red mb-3">
              Testimonials
            </p>

            <h2 className="text-3xl lg:text-4xl font-black uppercase text-slate-900">
              What Our Clients Say
            </h2>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-6">

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative bg-slate-50 border border-slate-100 p-6 rounded-3xl hover:shadow-xl transition duration-500 group"
              >
                {/* Quote Icon */}
                <Quote
                  size={40}
                  className="text-coral-red/10 absolute top-4 right-4"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-peach-glow text-peach-glow"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>

                {/* User */}
                <div>
                  <p className="font-black text-slate-900 text-sm uppercase">
                    {t.name}
                  </p>

                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    {t.location}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </Container>
    </Section>
  );
}
