import { useState } from "react";
import { ArrowRight, MapPin, Tag } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import BestBuyModal from "../../../components/modals/BestBuyModal";
import Header from "../../../components/Header";
import { useProperties } from "../../../hooks/useProperties";

export default function BestBuySection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const { properties, loading } = useProperties();

  const bestBuys = properties
    .filter(p => p.isBestBuy)
    .slice(0, 4);

  if (loading || bestBuys.length === 0) return null;

  return (
    <>
      <Section>
        <Container>
          <Header
            tag="Best Buy"
            title="Value"
            highlight="Deals"
            subtitle="Paisa Vasool deals! Properties priced below market average for a limited time."
            buttonText="Explore Deals"
            onButtonClick="/buy"
          />

          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:mx-0 md:px-0">
            {bestBuys.map((item, i) => (
              <div
                key={item._id}
                onClick={() => setSelectedItem(item)}
                className="min-w-70 sm:min-w-[320px] snap-center mr-4 last:mr-0 md:min-w-0 md:mr-0 group cursor-pointer rounded-2xl overflow-hidden bg-white transition-all duration-300 border border-slate-400/40"
              >
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest shadow-sm">
                    {item.type}
                  </div>
                  <div className="absolute top-3 right-3 bg-emerald-500 text-white px-2 py-1 rounded-md text-[8px] font-black uppercase shadow-sm flex items-center gap-1">
                    <Tag size={10} />
                    Value
                  </div>
                </div>

                <div className="p-4 lg:p-6">
                  <h3 className="text-base lg:text-lg font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin size={12} className="text-dark-orange" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-black text-slate-900">
                      {item.price}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 transition-all duration-300 group-hover:gap-2">
                      View Details
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <BestBuyModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
