import React from "react";
import {
  Briefcase,
  IndianRupee,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const JoinUs = () => {
  return (
    <section className="bg-linear-to-b from-[#FFF9F2] via-white to-[#FFF5EC] font-poppins text-slate-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-coral-red">
            Partner With Us
          </span>
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mt-3">
            Become a{" "}
            <span className="text-coral-red">Property Wala Bhaiya</span>
          </h1>
          <p className="text-slate-600 mt-4">
            Join a trusted real estate network designed for independent brokers
            who value credibility, growth, and long-term success.
          </p>
        </div>

        {/* Image + Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Image */}
          <div className="lg:col-span-6 text-center">
            <div className="relative inline-block overflow-hidden rounded-3xl shadow-lg bg-white">
              <img
                src="https://cdn.corporatefinanceinstitute.com/assets/brokerage-1024x576.jpeg"
                alt="Real estate professionals"
                className="h-65 w-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/25 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white text-left">
                <p className="text-[11px] uppercase tracking-widest opacity-80">
                  Trusted Network
                </p>
                <p className="text-sm font-medium">
                  Local Brokers & Genuine Clients
                </p>
              </div>
            </div>
          </div>

          {/* Why Section */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Why Work With Us?</h3>

              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-coral-red mt-0.5" />
                  Verified buyers and sellers — no random inquiries
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-coral-red mt-0.5" />
                  Transparent process that builds lasting trust
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-coral-red mt-0.5" />
                  You stay independent, we support visibility and leads
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-coral-red mt-0.5" />
                  Ideal for brokers focused on long-term growth
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits (Soft Highlight Section) */}
        <div className="bg-linear-to-r from-[#FFF1E6] to-[#FFF7F1] rounded-3xl p-12 mb-20 border border-peach-glow/40">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Benefit
              icon={<IndianRupee />}
              title="Better Earnings"
              desc="Clear and transparent commission structure."
            />
            <Benefit
              icon={<Users />}
              title="Verified Leads"
              desc="Only serious buyer & seller connections."
            />
            <Benefit
              icon={<Briefcase />}
              title="No Office Cost"
              desc="Operate independently with full support."
            />
            <Benefit
              icon={<Users />}
              title="Brand Credibility"
              desc="Leverage Property Wala Bhaiya trust."
            />
          </div>
        </div>

        {/* Who Can Join */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-semibold mb-4">Who Can Join?</h3>
          <p className="text-slate-600 mb-8">
            We collaborate with professionals who value ethics, local expertise,
            and long-term relationships.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <JoinPoint text="Independent property brokers or agents" />
            <JoinPoint text="Strong local market understanding" />
            <JoinPoint text="Ethical and transparent work style" />
            <JoinPoint text="Looking for stable, long-term growth" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </div>
    </section>
  );
};

/* ---------- Components ---------- */

const Benefit = ({ icon, title, desc }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
    <div className="text-coral-red mb-3">{icon}</div>
    <p className="font-medium mb-1">{title}</p>
    <p className="text-sm text-slate-600">{desc}</p>
  </div>
);

const JoinPoint = ({ text }) => (
  <div className="flex gap-3">
    <CheckCircle className="w-5 h-5 text-coral-red mt-0.5" />
    <p className="text-slate-600 text-sm">{text}</p>
  </div>
);

export default JoinUs;
