import { ArrowRight } from "lucide-react";

import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

export default function RentCategories() {
  const categories = ["Premium Flats", "Studio Units", "Office Spaces"];

  return (
    <Section size="default" className="bg-slate-50/50">
      <Container>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all cursor-pointer group"
            >

              <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">
                {cat}
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  View Listings
                </span>

                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-dark-orange group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
