import React from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-white font-poppins text-slate-900 px-6 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="text-xs font-semibold tracking-widest uppercase text-coral-red">
            Get in Touch
          </span>
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mt-2 max-w-2xl">
            Professional property consultation, built on trust.
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">

          {/* Image Section */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-6 duration-700">
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80"
                alt="Professional real estate office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[11px] uppercase tracking-widest opacity-80">
                  Office Location
                </p>
                <p className="font-medium">Durgapur, West Bengal</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-8 animate-in fade-in slide-in-from-right-6 duration-700 delay-100">

            {/* Info Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <InfoItem icon={<Phone size={18} />} text="+91 98765 43210" />
              <InfoItem icon={<Mail size={18} />} text="contact@pwb.com" />
              <InfoItem icon={<MapPin size={18} />} text="West Bengal" />
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <Input placeholder="Full Name" />
              <Input placeholder="Email Address" />

              <Input
                placeholder="Phone Number"
                className="md:col-span-2"
              />

              <Textarea
                placeholder="Briefly describe your requirement"
                className="md:col-span-2"
              />

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-between w-full md:w-auto bg-slate-900 text-white px-7 py-4 rounded-xl font-medium hover:bg-coral-red transition-all duration-300 active:scale-95"
                >
                  Submit Inquiry
                  <ArrowRight
                    size={18}
                    className="ml-3 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-xs text-slate-400 border-t border-peach-glow/40 pt-4">
          © {new Date().getFullYear()} Property Wala Bhaiya
        </div>
      </div>
    </section>
  );
};

/* -------- Components -------- */

const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2 border border-slate-100 hover:border-soft-orange transition">
    <span className="text-coral-red">{icon}</span>
    <span className="font-medium truncate">{text}</span>
  </div>
);

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-coral-red focus:ring-1 focus:ring-coral-red transition ${className}`}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    {...props}
    rows={3}
    className={`w-full border border-slate-200 rounded-lg px-4 py-3 outline-none resize-none focus:border-coral-red focus:ring-1 focus:ring-coral-red transition ${className}`}
  />
);

export default ContactPage;
