/* sections/ContactCTA.js */
export default function ContactCTA() {
  return (
    <section className="py-16 lg:py-32 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        {/* DESIGN: Swapped loud background for a clean, bordered "Glass" look */}
        <div className="relative group rounded-[3rem] p-10 lg:p-20 text-center bg-slate-50 border border-slate-100 overflow-hidden">
          {/* Subtle Background Accents - Not loud, just premium */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-peach-glow/10 blur-[100px] rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral-red/5 blur-[100px] rounded-full -ml-20 -mb-20" />

          <div className="relative z-10 space-y-8">
            {/* Universal Label Style */}
            <div className="flex items-center justify-center gap-2">
              <span className="w-8 h-[1.5px] bg-coral-red"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
                Get Started
              </span>
              <span className="w-8 h-[1.5px] bg-coral-red"></span>
            </div>

            {/* Universal Heading Style - Using Gradient on Text instead of Background */}
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1]">
              Ready to find your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red via-soft-orange to-peach-glow">
                place in Durgapur?
              </span>
            </h2>

            <p className="text-slate-500 max-w-lg mx-auto text-sm lg:text-base font-medium leading-relaxed">
              Get a curated list of properties that aren't even on the market
              yet. Connect directly with{" "}
              <span className="text-slate-900 font-bold">
                Property Wala Bhaiya
              </span>{" "}
              today.
            </p>

            {/* Action Buttons - Refined & Balanced */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-coral-red hover:shadow-2xl hover:shadow-coral-red/30 transition-all active:scale-95">
                WhatsApp Now
              </button>
              <a
                href="tel:+91 76999 88876"
                className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:border-coral-red hover:text-coral-red transition-all active:scale-95"
              >
                Speak With Expert
              </a>
            </div>
          </div>

          {/* Signature Brand Accent Bar */}
          <div className="absolute bottom-0 inset-x-0 h-2 bg-linear-to-r from-coral-red via-soft-orange to-peach-glow" />
        </div>
      </div>
    </section>
  );
}
