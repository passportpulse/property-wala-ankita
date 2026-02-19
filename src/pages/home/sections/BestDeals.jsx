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
        // Calculate progress percentage for the bar
        const maxScroll = el.scrollWidth - el.clientWidth;
        const progress = (el.scrollLeft / maxScroll) * 100;
        setScrollProgress(progress);

        // Calculate current "page" or item index for the counter
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
      const scrollAmount =
        direction === "left" ? -el.offsetWidth : el.offsetWidth;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleClick = (name) => {
    const sectionId = name.toLowerCase().replace(/\s+|\/+/g, "-");
    navigate(`/buy#${sectionId}`);
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <Section className="
bg-linear-to-br 
from-orange-500 
via-amber-400 
to-orange-500
text-white

lg:bg-linear-to-br
lg:from-slate-900
lg:via-slate-800
lg:to-slate-900

transition-all duration-500
">

      <Container>
        {/* HEADING AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between lg:gap-6 mb-2 md:mb-10">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl lg:text-5xl uppercase text-white">
              Our Best Deals
            </h2>
            <Sparkles
              size={28}
              strokeWidth={1}
              className="text-white animate-[yellow-glow-shine_2s_ease-in-out_infinite] fill-yellow-300/30"
            />
          </div>

          <div className="flex items-center gap-3 self-end md:self-center mt-4 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-xl border border-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-xl border border-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* SWIPE AREA */}
        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6"
        >
          {categories.map((item, i) => (
            <div
              key={i}
              onClick={() => handleClick(item.name)}
              className="group relative min-w-45 md:min-w-60 aspect-3/4 rounded-2xl overflow-hidden cursor-pointer snap-start border border-white/10"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 z-20">
                <div className="bg-black/50 backdrop-blur px-2 py-1 rounded-lg shadow-sm">
                  <p className="text-[10px] font-black text-orange-300 tracking-tight">
                    {item.count}
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-2 bottom-2 z-20">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-3 transform transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-widest text-orange-200 mb-0.5">
                        {item.tag}
                      </p>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    <div className="bg-white rounded-full p-1.5 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <ArrowRight
                        size={14}
                        className="text-orange-500"
                        strokeWidth={3}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* NEW PROGRESS & COUNTER UI */}
        <div className="mt-4 flex flex-col items-center gap-3">
          {/* Progress Bar Track */}
          <div className="w-32 md:w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-200 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Fractional Counter */}
          <div className="flex items-center gap-2 font-black text-[10px] tracking-[0.2em] uppercase text-white/80">
            <span className="text-white">
              {currentIndex.toString().padStart(2, "0")}
            </span>
            <span className="w-4 h-px bg-white/30" />
            <span>{categories.length.toString().padStart(2, "0")}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
