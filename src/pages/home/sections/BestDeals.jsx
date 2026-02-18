import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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
  const [activeDot, setActiveDot] = useState(0);

  // Calculate which dot is active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (el) {
        // Calculate which item is currently centered/most visible
        const scrollPos = el.scrollLeft;
        const cardWidth = el.scrollWidth / categories.length;
        const index = Math.round(scrollPos / cardWidth);
        setActiveDot(index);
      }
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === "left" ? -260 : 260;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToItem = (index) => {
    const el = scrollRef.current;
    if (el) {
      const cardWidth = el.scrollWidth / categories.length;
      el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
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
    <Section>
      <Container>
        {/* ENHANCED HEADING DESIGN */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 lg:gap-6 mb-2 md:mb-10">
          <div className="relative">
            <div className="absolute -top-4 -left-2 w-12 h-12 bg-orange-100 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange mb-4 relative z-10 bg-orange-50 px-3 py-1 rounded-full">
              Explore Intent
            </span>
            <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
              Our{" "}
              <span className="bg-linear-to-r from-dark-orange to-lighter-orange bg-clip-text text-transparent">
                Best Deals
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 self-end md:self-center">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft size={20} className="text-slate-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ChevronRight size={20} className="text-slate-600" />
            </button>
          </div>
        </div>

        {/* COMPACT SWIPE AREA */}
        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
        >
          {categories.map((item, i) => (
            <div
              key={i}
              onClick={() => handleClick(item.name)}
              className="group relative min-w-45 md:min-w-60 aspect-3/4 rounded-2xl overflow-hidden cursor-pointer snap-start bg-slate-100 border border-slate-50"
            >
              {/* Image with subtle zoom */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Deal Info Pill (Floating on Image) */}
              <div className="absolute top-3 left-3 z-20">
                <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-lg shadow-sm">
                  <p className="text-[10px] font-black text-dark-orange tracking-tight">
                    {item.count}
                  </p>
                </div>
              </div>

              {/* Glassmorphism Bottom Content */}
              <div className="absolute inset-x-2 bottom-2 z-20">
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-3 transform transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-widest text-white/80 mb-0.5">
                        {item.tag}
                      </p>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    <div className="bg-white rounded-full p-1.5 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <ArrowRight
                        size={14}
                        className="text-dark-orange"
                        strokeWidth={3}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Darker Bottom Gradient for legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* DOT INDICATORS */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToItem(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeDot === index
                  ? "w-6 bg-dark-orange"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
