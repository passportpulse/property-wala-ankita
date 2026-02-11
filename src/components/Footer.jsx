import { Link } from "react-router-dom";
import { navigationLinks } from "../constants/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-600 mt-20 font-poppins border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Brand & Designation Column */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                PROPERTY <span className="text-coral-red">WALA</span>{" "}
                <span className="text-slate-500 font-medium text-lg">
                  Bhaiya
                </span>
              </span>
            </Link>

            <div className="space-y-2">
              <h5 className="text-sm font-bold text-slate-700 leading-snug">
                Real estate consultant in Durgapur
              </h5>
              <p className="text-xs leading-relaxed text-slate-500 max-w-xs">
                Simplifying the property journey with verified listings and
                expert guidance. Your dream space is just a click away.
              </p>
            </div>

            {/* Address Section */}
            <div className="flex gap-3 text-xs leading-relaxed pt-2">
              <span className="text-coral-red text-lg shrink-0">📍</span>
              <p className="text-slate-500">
                5th Floor, Suhatta Commercial Complex, 5/18, City Center,
                Durgapur, West Bengal 713216
              </p>
            </div>
          </div>

          {/* Updated Navigation Links */}
          <div className="lg:pl-8">
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">
              Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-4 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-coral-red transition-colors flex items-center group"
                  >
                    <span className="h-1 w-1 rounded-full bg-soft-orange mr-2 group-hover:w-3 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">
              Resources
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                "Market Trends",
                "Privacy Policy",
                "Terms & Conditions",
                "Sitemap",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-soft-orange transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card - Fixed Email Overflow */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-full min-w-0">
            <div className="min-w-0">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-4">
                Connect Us
              </h4>
              <div className="space-y-4 text-sm min-w-0">
                <div className="flex items-start gap-3 min-w-0">
                  {/* Email Icon */}
                  <span className="text-coral-red shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>

                  {/* Email Address with smart wrapping */}
                  <div className="flex flex-col min-w-0">
                    <a
                      href="mailto:propertywalabhaiya@gmail.com"
                      className="text-slate-600 hover:text-coral-red text-sm break-all md:wrap-break-words leading-snug transition-colors"
                    >
                      propertywalabhaiya@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-soft-orange text-lg shrink-0">📞</span>
                  <a
                    href="tel:+917699988876"
                    className="text-slate-600 hover:text-coral-red transition-colors"
                  >
                    +91 76999 88876
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/917699988876?text=Hi, I'm interested in a property. Please call me back.",
                  "_blank",
                )
              }
              className="w-full mt-8 py-3 bg-linear-to-r from-coral-red to-soft-orange text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:brightness-110 transition-all active:scale-95"
            >
              Talk to Advisor
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white py-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs font-medium text-slate-400">
            © {currentYear}{" "}
            <span className="text-slate-900 font-bold">
              PROPERTY WALA BHAIYA
            </span>
            . All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["facebook", "instagram", "linkedin"].map((social) => (
              <span
                key={social}
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-coral-red cursor-pointer transition-colors"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
