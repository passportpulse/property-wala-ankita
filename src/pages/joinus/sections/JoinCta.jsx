import { ArrowRight } from "lucide-react";

const JoinCta = () => {
  return (
    <section className="px-6 pb-24 bg-white">
      <div className="max-w-6xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        
        <a
          href="https://wa.me/917699988876"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-coral-red text-white px-10 py-4 rounded-xl font-medium hover:bg-soft-orange transition-all active:scale-95 shadow-md"
        >
          Chat on WhatsApp
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="tel:+91 76999 88876"
          className="inline-flex items-center gap-3 border border-coral-red text-coral-red px-10 py-4 rounded-xl font-medium hover:bg-coral-red hover:text-white transition-all"
        >
          Call Now
        </a>

      </div>
    </section>
  );
};

export default JoinCta;
