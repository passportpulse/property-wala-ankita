export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center bg-white overflow-hidden font-poppins">
      
      {/* 1. Background Visual */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full z-0">
        {/* Desktop Overlay: Left-to-Right white fade */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/60 to-transparent z-10 hidden lg:block" />
        
        {/* MOBILE OVERLAY: Enhanced Readability 
            Added a solid white-to-white/20 gradient and a backdrop blur 
            so the text "sits" on a clean surface.
        */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/90 to-white/20 lg:hidden z-10 backdrop-blur-[1px]" />
        
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
          alt="Modern Real Estate"
          className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Subtle Theme Tint (Keep as is) */}
        <div className="absolute inset-0 bg-coral-red/5 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-20">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          
          {/* 2. Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 py-12 lg:py-0">
            <div className="space-y-4">
              {/* Added a subtle shadow on text for mobile to pop it further */}
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter drop-shadow-sm lg:drop-shadow-none">
                Property <br />
                <span className="text-coral-red">Wala Bhaiya</span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-bold text-slate-800">
                Leading Property Dealer in Durgapur
              </h2>
              <p className="text-slate-600 max-w-md text-lg leading-relaxed font-medium lg:font-normal">
                Direct buying, selling, and renting for luxury apartments, prime
                lands, and commercial spaces.
              </p>
            </div>

            {/* 3. Search Option */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row bg-white/80 lg:bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-xl lg:shadow-xs max-w-xl backdrop-blur-md lg:backdrop-blur-none">
                <input
                  type="text"
                  placeholder="Locality, Project or Builder..."
                  className="w-full bg-transparent px-5 py-4 text-slate-900 outline-none text-base placeholder:text-slate-400"
                />
                <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-coral-red transition-all active:scale-95 shadow-lg">
                  Search
                </button>
              </div>

              {/* Quick Tags */}
              <div className="flex flex-wrap gap-3">
                {["City Center", "Benachity", "Bidhannagar"].map((place) => (
                  <button
                    key={place}
                    className="text-[11px] font-bold uppercase tracking-wider text-slate-500 lg:text-slate-400 hover:text-coral-red bg-white/50 lg:bg-transparent px-2 py-1 rounded-md lg:p-0 transition-colors"
                  >
                    + {place}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}