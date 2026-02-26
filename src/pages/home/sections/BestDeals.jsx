import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

const categories = [
  {
    name: "Flats",
    count: "40+ Listings",
    tag: "Ready to Move",
    image:
      "https://www.manglamgroup.com/wp-content/uploads/2024/01/swimmingpool-Corner-Night_cc.jpg",
  },
  {
    name: "Plots",
    count: "15+ Locations",
    tag: "High Growth",
    image:
      "https://media.istockphoto.com/id/1320071761/photo/land-plot-in-aerial-view-for-development-or-investment.jpg?s=612x612&w=0&k=20&c=LuUFrl_Nf7Pj5P2yvjW-0N8lcWS2723IcjDOai8jKDo=",
  },
  {
    name: "House/Duplex",
    count: "25+ Homes",
    tag: "Family Choice",
    image:
      "https://i.pinimg.com/1200x/ff/8e/ae/ff8eaee8da94da4342c043ab97ae32ad.jpg",
  },
  {
    name: "Office/Retail",
    count: "10+ Spaces",
    tag: "Business Ready",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },
  {
    name: "Factory",
    count: "5+ Units",
    tag: "Industrial",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
  },
  {
    name: "Industrial Plots",
    count: "8+ Zones",
    tag: "Manufacturing",
    image: "https://4.imimg.com/data4/NQ/FU/GLADMIN-13125230/rr3-500x500.jpg",
  },
  {
    name: "Ware House",
    count: "6+ Options",
    tag: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
  {
    name: "Hospital",
    count: "3+ Properties",
    tag: "Healthcare",
    image:
      "https://media.istockphoto.com/id/157187378/photo/modern-building.jpg?s=612x612&w=0&k=20&c=uv2GYmOUDRpAL2vEnrdNxnlerEvC3K2OXTk3nyP6V64=",
  },
  {
    name: "Hotels/Resort",
    count: "4+ Projects",
    tag: "Hospitality",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG97ucLlIYIGqCpwVfMtDPOzcWhZQXi-r5GA&s",
  },
  {
    name: "Petrol Pump",
    count: "15+ Deals",
    tag: "High ROI",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/WaynePump-sm.jpg",
  },
  {
    name: "Institutes",
    count: "12+ Properties",
    tag: "Education Ready",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScK_NJHyOxk953m504vQgBbNKiziUIS6FVdQ&s",
  },
  {
    name: "Investment",
    count: "20+ Deals",
    tag: "High ROI",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
];

export default function BestDeals() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (el) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        const progress = maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
        setScrollProgress(progress);

        const cardWidth = el.scrollWidth / categories.length;
        const index = Math.round(el.scrollLeft / cardWidth) + 1;
        setCurrentIndex(index);
      }
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === "left" ? -el.offsetWidth : el.offsetWidth;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleClick = (name) => {
    const sectionId = name.toLowerCase().replace(/\s+|\/+/g, "-");
    navigate(`/buy#${sectionId}`);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <Section
      className="bg-[#f0bd52] text-white lg:bg-linear-to-br lg:from-slate-900 lg:via-slate-800 lg:to-slate-900 transition-all duration-500"
    >
      <Container>
        {/* HEADING AREA - Contained and Single Line */}
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-10 w-full">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3 md:gap-4 py-2 md:py-4 w-fit">
            <h2 className="text-xl lg:text-5xl uppercase text-dark-orange whitespace-nowrap tracking-tight">
              Our Best Deals
            </h2>
            <Sparkles
              size={24}
              strokeWidth={1}
              className="text-dark-orange animate-[yellow-glow-shine_2s_ease-in-out_infinite] fill-dark-orange shrink-0 lg:w-8 lg:h-8"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-2 md:p-3 rounded-xl border border-dark-orange hover:bg-white/10 transition-colors shadow-sm active:scale-95"
            >
              <ChevronLeft size={24} className="text-dark-orange" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 md:p-3 rounded-xl border border-dark-orange hover:bg-white/10 transition-colors shadow-sm active:scale-95"
            >
              <ChevronRight size={24} className="text-dark-orange" />
            </button>
          </div>
        </div>

        {/* SWIPE AREA - Contained within Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6"
        >
          {categories.map((item, i) => (
            <div
              key={i}
              onClick={() => handleClick(item.name)}
              className="group relative min-w-50 md:min-w-70 aspect-3/4 rounded-2xl overflow-hidden cursor-pointer snap-start border border-white/10"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Count Tag */}
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <p className="text-[10px] font-black text-orange-300 uppercase tracking-wider">
                    {item.count}
                  </p>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-3 bottom-3 z-20">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 transform transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-orange-200 mb-1">
                        {item.tag}
                      </p>
                      <h3 className="text-sm md:text-lg font-black text-white leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    <div className="bg-white rounded-full p-2 transform transition-all duration-300 group-hover:bg-orange-500">
                      <ArrowRight size={16} className="text-black group-hover:text-white transition-colors" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
            </div>
          ))}
        </div>

        {/* PROGRESS & COUNTER UI - Contained */}
        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="w-40 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-400 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(251,146,60,0.5)]"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div className="flex items-center gap-4 font-black text-xs tracking-[0.3em] text-white">
            <span>{currentIndex.toString().padStart(2, "0")}</span>
            <span className="w-8 h-px bg-white/20" />
            <span>{categories.length.toString().padStart(2, "0")}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
