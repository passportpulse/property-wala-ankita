import {
  Search,
  MapPin,
  Key,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  Filter,
} from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

export default function RentHero() {
  return (
    <Section className="relative pt-32 pb-24 overflow-hidden border-b border-slate-50">
      <div className="absolute top-0 right-0 w-125 h-125 bg-lighter-orange/5 blur-[120px] rounded-full -z-10" />
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full">
              <Zap size={14} className="text-warm-yellow" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Verified Rental Network
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-800 tracking-tighter uppercase leading-[0.85]">
              Rent with <br />
              <span className="text-dark-orange">Confidence.</span>
            </h1>

            <p className="text-slate-500 text-lg font-medium max-w-md leading-relaxed mx-auto lg:mx-0">
              Forget the endless search. Access pre-verified rental inventories
              with direct owner connections.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-dark-orange transition-all shadow-xl shadow-slate-200">
                Explore Inventory
              </button>

              <div className="flex items-center gap-3 px-6 py-5 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-all">
                <Filter size={18} className="text-dark-orange" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Advanced Filter
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2 relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-12 border-white relative z-10">
              <img
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Apartment Interior"
                className="w-full h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-50 flex items-center gap-4">
              <div className="w-12 h-12 bg-dark-orange/10 rounded-2xl flex items-center justify-center">
                <MapPin className="text-dark-orange" size={24} />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">
                  Local Focus
                </p>
                <p className="text-xl font-black italic tracking-tighter text-slate-900">
                  DURGAPUR
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
