import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    name: "Hotels/Resort",
    count: "4+ Projects",
    tag: "Hospitality",
    image:
      "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScK_NJHyOxk953m504vQgBbNKiziUIS6FVdQ&s",
  },

  {
    name: "Investment",
    count: "20+ Deals",
    tag: "High ROI",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
];

export default function Categories() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const CARD_WIDTH = 300;

  /* Manual arrow scroll */
  const scrollByAmount = (amount) => {
    scrollRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  /* Update dots based on scroll */
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const index = Math.round(el.scrollLeft / CARD_WIDTH);
    setCurrentIndex(index);
  };

  /* Dot click scroll */
  const scrollToIndex = (index) => {
    scrollRef.current?.scrollTo({
      left: index * CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const handleClick = (name) => {
    const sectionId = name.toLowerCase().replace(/\s+|\/+/g, "-");

    navigate(`/buy#${sectionId}`);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <section className="pb-16 lg:pb-32 pt-6 lg:pt-10 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
              Browse by Intent
            </span>

            <h2 className="text-3xl lg:text-5xl font-black text-dark-slate tracking-tight">
              <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
                Our Best Deals
              </span>
            </h2>
          </div>

          {/* ARROWS */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollByAmount(-CARD_WIDTH)}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scrollByAmount(CARD_WIDTH)}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* DRAG HINT */}
        <div className="text-center text-xs text-slate-400 mb-3 md:hidden">
          ← Swipe to explore →
        </div>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-4 lg:gap-6
            overflow-x-auto
            no-scrollbar
            pb-4
            scroll-smooth
            cursor-grab
            active:cursor-grabbing
          "
        >
          {categories.map((item, i) => (
            <div
              key={i}
              onClick={() => handleClick(item.name)}
              className="
                group
                relative
                min-w-[280px]
                lg:min-w-[300px]
                h-[360px]
                rounded-3xl
                overflow-hidden
                cursor-pointer
                shadow-md
                hover:shadow-xl
                transition
              "
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* CONTENT */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                  <span className="text-[10px] font-black uppercase tracking-widest text-coral-red">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold text-dark-slate mt-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-muted-slate mt-1">{item.count}</p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[11px] font-black uppercase tracking-widest">
                      Explore
                    </span>

                    <span
                      className="
                      w-10 h-0.5
                      bg-linear-to-r from-coral-red to-warm-yellow
                      scale-x-0 group-hover:scale-x-100
                      origin-left transition-transform
                    "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOT INDICATORS */}
        <div className="flex justify-center gap-2 mt-4">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`
                transition-all duration-300
                ${
                  currentIndex === i
                    ? "w-6 h-2 bg-coral-red rounded-full"
                    : "w-2 h-2 bg-slate-300 rounded-full hover:bg-slate-400"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
