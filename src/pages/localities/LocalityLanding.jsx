import React from "react";
import { useParams, Link } from "react-router-dom";
import { 
  MapPin, 
  TrendingUp, 
  ShoppingBag, 
  Coffee, 
  School, 
  Plus,
  ChevronRight,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

const neighborhoodData = {
  "city-center": {
    name: "City Center",
    tagline: "The Heart of Durgapur's Modern Pulse",
    description: "City Center is the commercial and administrative hub of Durgapur. Known for its wide avenues, premium malls, and executive housing, it's the #1 choice for professionals and businesses.",
    avgPrice: "₹5,500 - ₹7,500 per sqft",
    demand: "Extremely High",
    highlights: [
      { icon: <ShoppingBag size={20} />, title: "Retail Hub", desc: "Home to Junction Mall and Fortune Plaza." },
      { icon: <TrendingUp size={20} />, title: "High ROI", desc: "15% year-on-year capital appreciation." },
      { icon: <Coffee size={20} />, title: "Lifestyle", desc: "Best restaurants and cafes in the city." },
      { icon: <School size={20} />, title: "Education", desc: "Top-tier schools and coaching institutes nearby." }
    ],
    stats: {
      residencies: "450+",
      commercial: "120+",
      rating: "4.9/5"
    }
  },
  "bidhannagar": {
    name: "Bidhannagar",
    tagline: "The Green & Serene Executive Enclave",
    description: "Bidhannagar offers a peaceful residential experience with lush greenery and low-density housing. Preferred by doctors, engineers, and retirees.",
    avgPrice: "₹4,000 - ₹5,800 per sqft",
    demand: "Steady Growth",
    highlights: [
      { icon: <ShieldCheck size={20} />, title: "Secure", desc: "Planned residential colony with high safety." },
      { icon: <TrendingUp size={20} />, title: "Appreciation", desc: "Steady growth due to medical hub proximity." },
      { icon: <Zap size={20} />, title: "Connectivity", desc: "10 mins from the National Highway." },
      { icon: <Plus size={20} />, title: "Healthcare", desc: "Surrounded by the city's best private hospitals." }
    ],
    stats: {
      residencies: "320+",
      commercial: "45+",
      rating: "4.7/5"
    }
  }
};

export default function LocalityLanding() {
  const { id } = useParams();
  const area = neighborhoodData[id] || neighborhoodData["city-center"];

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* SEO Optimized Hero */}
      <section className="relative pt-32 pb-48 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,102,0,0.05),transparent)]" />
        <Container className="relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-dark-orange text-[10px] font-black uppercase tracking-[0.4em]">
               <MapPin size={16} /> Durgapur Neighborhood Guide
            </div>
            <h1 className="text-5xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
               Explore <br />
               <span className="text-dark-orange">{area.name}</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl uppercase tracking-wide">
               {area.tagline}
            </p>
            <div className="flex flex-wrap gap-8 pt-8">
               <StatBox label="Avg. Price" value={area.avgPrice} />
               <StatBox label="Demand Pulse" value={area.demand} />
               <StatBox label="Bhaiya Rating" value={area.stats.rating} />
            </div>
          </div>
        </Container>
      </section>

      {/* Overview & Highlights */}
      <Section className="-mt-24 pb-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-slate-100">
               <div className="space-y-12">
                  <div className="space-y-4">
                     <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Locality Intelligence</h2>
                     <p className="text-slate-500 leading-relaxed font-medium">{area.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                     {area.highlights.map((h, i) => (
                        <div key={i} className="flex gap-6 group">
                           <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-dark-orange group-hover:text-white transition-all shadow-inner">
                              {h.icon}
                           </div>
                           <div className="space-y-1">
                              <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">{h.title}</h4>
                              <p className="text-xs text-slate-500 leading-relaxed font-medium uppercase tracking-wide">{h.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
               {/* Listings Shortcut */}
               <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-dark-orange/20 rounded-full blur-3xl -mr-16 -mt-16" />
                  <div className="relative z-10 space-y-8">
                     <div className="space-y-2">
                        <h3 className="text-xl font-black uppercase tracking-tight">Available Inventory</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Handpicked for {area.name}</p>
                     </div>
                     <div className="space-y-4">
                        <ListingMiniCard type="Featured" title="3BHK Luxury Flat" price="₹65 Lakhs" />
                        <ListingMiniCard type="Verified" title="Commercial Showroom" price="₹1.2 Cr" />
                     </div>
                     <button className="w-full py-5 rounded-2xl bg-dark-orange text-white text-[11px] font-black uppercase tracking-widest shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3">
                        View All {area.name} Listings <ChevronRight size={16} />
                     </button>
                  </div>
               </div>

               {/* Trust Note */}
               <div className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-emerald-500 shrink-0 shadow-sm">
                     <ShieldCheck size={24} />
                  </div>
                  <div className="space-y-1">
                     <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-tight italic">Steel-Standard Guarantee</h4>
                     <p className="text-[9px] text-emerald-700 leading-relaxed font-medium uppercase tracking-wider">
                        Every property in {area.name} is personally audited for structural integrity before appearing here.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="space-y-1">
       <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
       <p className="text-2xl font-black text-white italic">{value}</p>
    </div>
  );
}

function ListingMiniCard({ type, title, price }) {
  return (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer">
       <div>
          <p className="text-[8px] font-black text-dark-orange uppercase tracking-widest mb-1">{type}</p>
          <h4 className="text-xs font-black text-white uppercase tracking-tight">{title}</h4>
       </div>
       <div className="text-right">
          <p className="text-xs font-black text-white">{price}</p>
       </div>
    </div>
  );
}
