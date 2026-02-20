import { Link } from "react-router-dom";
import { navigationLinks } from "../constants/navigation";
import Container from "./layout/Container";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "Facebook", icon: FaFacebook, link: "#", color: "#1877F2" },
    { name: "Instagram", icon: FaInstagram, link: "#", color: "#d62976" },
    { name: "LinkedIn", icon: FaLinkedin, link: "#", color: "#0A66C2" },
    { name: "YouTube", icon: FaYoutube, link: "#", color: "#FF0000" },
    { name: "X", icon: FaXTwitter, link: "#", color: "#000000" },
  ];

  return (
    <footer className="bg-slate-50 text-slate-700 font-poppins border-t border-slate-200">
      <Container className="py-8 sm:py-16">
        {/* Main Grid: 1 col on tiny, 2 col on mobile, 4 col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-8 text-left">
          
          {/* Brand Section - Spans 2 columns on mobile for better width */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start space-y-3">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-lg sm:text-xl font-black tracking-tighter text-slate-900 leading-none uppercase">
                PROPERTY <span className="text-dark-orange">WALA</span>{" "}
                <span className="text-slate-500 font-medium text-base sm:text-lg uppercase">
                  Bhaiya
                </span>
              </span>
            </Link>

            <p className="text-[11px] sm:text-sm text-slate-500 max-w-xs leading-relaxed">
              Simplifying property journey with verified listings & expert guidance.
            </p>

            <div className="flex gap-2 text-xs sm:text-sm items-start">
              <span className="text-dark-orange text-base sm:text-lg shrink-0">📍</span>
              <p className="text-slate-500 leading-tight">
                5th Floor, Suhatta Commercial Complex, City Center, Durgapur, WB
              </p>
            </div>
          </div>

          {/* Navigation - Compact on mobile */}
          <div className="col-span-1 flex flex-col items-start">
            <h4 className="text-dark-orange font-black uppercase text-[10px] sm:text-xs mb-3 sm:mb-6 tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-dark-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Compact on mobile */}
          <div className="col-span-1 flex flex-col items-start">
            <h4 className="text-dark-orange font-black uppercase text-[10px] sm:text-xs mb-3 sm:mb-6 tracking-widest">
              Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li className="hover:text-dark-orange cursor-pointer">Market Trends</li>
              <li className="hover:text-dark-orange cursor-pointer">Privacy Policy</li>
              <li className="hover:text-dark-orange cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-dark-orange cursor-pointer">Sitemap</li>
            </ul>
          </div>

          {/* Connect Us - Spans 2 columns on mobile */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start gap-1 sm:gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200">
            <h4 className="text-dark-orange font-black uppercase text-[10px] sm:text-xs mb-1 sm:mb-4 tracking-widest">
              Connect Us
            </h4>
            <a
              href="mailto:propertywalabhaiya@gmail.com"
              className="text-[11px] sm:text-sm hover:text-dark-orange transition-colors font-medium"
            >
              propertywalabhaiya@gmail.com
            </a>
            <a
              href="tel:+917699988876"
              className="text-[11px] sm:text-sm hover:text-dark-orange transition-colors font-bold"
            >
              +91 76999 88876
            </a>

            {/* Talk Button - Full width on mobile for easier tapping */}
            <button
              onClick={() =>
                window.open("https://wa.me/917699988876", "_blank")
              }
              className="mt-3 w-fit py-2.5 px-6 bg-dark-orange text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-lighter-orange transition-all duration-300"
            >
              Talk to Advisor
            </button>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 items-center">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <Icon size={18} color={social.color} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="bg-white py-4 border-t border-slate-100">
        <Container className="text-center">
          <p className="text-[10px] sm:text-xs text-slate-400">
            © {currentYear}{" "}
            <span className="font-bold text-slate-900 uppercase">
              Property Wala Bhaiya
            </span>
            . All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}