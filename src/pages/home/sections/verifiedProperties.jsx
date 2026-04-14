import { useState } from "react";
import { ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import Header from "../../../components/Header";

const verifiedProperties = [
  {
    id: 1,
    title: "3BHK Verified Apartment",
    location: "City Center, Durgapur",
    price: "₹62 L",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Verified Commercial Space",
    location: "Benachity Market",
    price: "₹95 L",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Verified Residential Plot",
    location: "Bidhannagar",
    price: "₹38 L",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Verified 2BHK Flat",
    location: "Muchipara",
    price: "₹44 L",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function VerifiedSection() {
  const [selected, setSelected] = useState(null);

  return (
    <Section>
      <Container>
        {/* HEADER */}
        <Header
          tag="Bhaiya Verified"
          title="Trusted"
          highlight="Homes"
          subtitle="100% Genuine. 0% Stress. Verified personally by the Bhaiya team."
          buttonText="View Verified Listings"
          onButtonClick="/buy"
        />

        {/* MOBILE SWIPE + DESKTOP GRID */}
        <div
          className="
            flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar
            md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:mx-0 md:px-0
          "
        >
          {verifiedProperties.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="
                min-w-[280px] sm:min-w-[320px] snap-center mr-4 last:mr-0
                md:min-w-0 md:mr-0
                group cursor-pointer rounded-2xl overflow-hidden bg-white 
                border border-emerald-200/60
                transition-all duration-300
              "
            >
              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* VERIFIED BADGE */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-500 text-white px-2 py-1 rounded-md text-[8px] font-black uppercase shadow">
                  <ShieldCheck size={10} />
                  Verified
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <MapPin size={12} className="text-emerald-500" />
                  {item.location}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-black text-slate-900">
                    {item.price}
                  </span>

                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 group-hover:gap-2 transition-all">
                    View Verified
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
