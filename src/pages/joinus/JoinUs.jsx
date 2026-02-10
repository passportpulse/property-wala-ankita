import React from "react";
import { Briefcase, IndianRupee, Users, ArrowRight } from "lucide-react";

const JoinUs = () => {
  return (
    <section className="min-h-screen bg-white font-poppins text-slate-900 px-6 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="text-xs uppercase tracking-widest font-semibold text-coral-red">
            Join Our Network
          </span>
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mt-2 max-w-3xl">
            Become a <span className="text-coral-red">Property Wala Bhaiya</span> & grow your real estate business with us.
          </h1>
          <p className="text-slate-500 mt-4 max-w-2xl">
            We partner with independent property brokers who want more leads, brand value, and professional growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">

          {/* Image */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-6 duration-700">
            <div className="relative h-full min-h-[340px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                alt="Real estate professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[11px] uppercase tracking-widest opacity-80">
                  Trusted Network
                </p>
                <p className="font-medium">
                  Independent Brokers Welcome
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 border border-slate-100 rounded-2xl p-8 animate-in fade-in slide-in-from-right-6 duration-700 delay-100">

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <Benefit
                icon={<IndianRupee />}
                title="Better Earnings"
                desc="Transparent commission structure with no hidden cuts."
              />
              <Benefit
                icon={<Users />}
                title="Verified Leads"
                desc="Get genuine buyer & seller inquiries from our platform."
              />
              <Benefit
                icon={<Briefcase />}
                title="Zero Office Cost"
                desc="Work independently with full brand and backend support."
              />
              <Benefit
                icon={<Users />}
                title="Brand Support"
                desc="Use Property Wala Bhaiya name to build client trust."
              />
            </div>

            {/* Who Can Join */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">
                Who Can Join?
              </h3>
              <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
                <li>Independent property brokers or agents</li>
                <li>People with local area property knowledge</li>
                <li>Professionals with honest work ethics</li>
                <li>Those who want long-term growth</li>
              </ul>
            </div>

            {/* CTA */}
            <button
              className="group inline-flex items-center justify-between bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-coral-red transition-all duration-300 active:scale-95"
            >
              Apply to Join
              <ArrowRight
                size={18}
                className="ml-3 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-xs text-slate-400 border-t border-peach-glow/40 pt-4">
          © {new Date().getFullYear()} Property Wala Bhaiya. Building trust in real estate.
        </div>
      </div>
    </section>
  );
};

/* -------- Components -------- */

const Benefit = ({ icon, title, desc }) => (
  <div className="flex gap-4 bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-soft-orange transition">
    <div className="text-coral-red mt-1">{icon}</div>
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-slate-500 mt-1">{desc}</p>
    </div>
  </div>
);

export default JoinUs;
