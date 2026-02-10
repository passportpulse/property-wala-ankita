import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Flats",
    count: "40+ Listings",
    tag: "Ready to Move",
    image: "https://www.manglamgroup.com/wp-content/uploads/2024/01/swimmingpool-Corner-Night_cc.jpg",
  },
  {
    name: "Plots",
    count: "15+ Locations",
    tag: "High Growth",
    image: "https://media.istockphoto.com/id/1320071761/photo/land-plot-in-aerial-view-for-development-or-investment.jpg?s=612x612&w=0&k=20&c=LuUFrl_Nf7Pj5P2yvjW-0N8lcWS2723IcjDOai8jKDo=",
  },
  {
    name: "House/Duplex",
    count: "25+ Homes",
    tag: "Family Choice",
    image: "https://i.pinimg.com/1200x/ff/8e/ae/ff8eaee8da94da4342c043ab97ae32ad.jpg",
  },
  {
    name: "Commercial Space",
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
    image: "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
  },
  {
    name: "Investment",
    count: "20+ Deals",
    tag: "High ROI",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
];

export default function Categories() {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  /* 🔁 AUTO SCROLL */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let direction = 1;
    const speed = 1;

    const interval = setInterval(() => {
      if (paused) return;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) direction = -1;
      else if (el.scrollLeft <= 5) direction = 1;

      el.scrollLeft += speed * direction;
    }, 16);

    return () => clearInterval(interval);
  }, [paused]);

  const scrollByAmount = (amount) => {
    setPaused(true);
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(() => setPaused(false), 2500);
  };

  return (
    <section className="py-16 lg:py-32 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
              Browse by Intent
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-dark-slate tracking-tight">
              What are you{" "}
              <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
                looking for ?
              </span>
              
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollByAmount(-320)}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollByAmount(320)}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* SCROLLABLE ROW */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="flex gap-4 lg:gap-6 overflow-x-auto no-scrollbar pb-4"
        >
          {categories.map((item, i) => (
            <div
              key={i}
              className="group relative min-w-65 lg:min-w-75 h-90 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="
                  absolute inset-0 w-full h-full object-cover
                  opacity-75 brightness-[0.95]
                  group-hover:opacity-90
                  transition-all duration-500
                "
              />

              {/* CONTENT */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                <div className="bg-white/75 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-coral-red">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold text-dark-slate mt-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-muted-slate mt-1">
                    {item.count}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[11px] font-black uppercase tracking-widest text-dark-slate">
                      Explore
                    </span>
                    <span className="w-10 h-0.5 bg-linear-to-r from-coral-red to-warm-yellow scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
