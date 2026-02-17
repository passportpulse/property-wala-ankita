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
      <Container className="py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center lg:text-left">
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start space-y-3 sm:space-y-4">
            <Link to="/" className="flex flex-col items-center lg:items-start">
              <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                PROPERTY <span className="text-coral-red">WALA</span>{" "}
                <span className="text-slate-500 font-medium text-lg">
                  Bhaiya
                </span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 max-w-xs">
              Simplifying property journey with verified listings & expert
              guidance.
            </p>

            <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 text-xs sm:text-sm items-center lg:items-start justify-center lg:justify-start">
              <span className="text-coral-red text-lg">📍</span>
              <p className="text-slate-500 leading-tight max-w-45 sm:max-w-xs">
                5th Floor, Suhatta Commercial Complex, City Center, Durgapur, WB
                713216
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="sm:mt-0 mt-4 flex flex-col items-center lg:items-start">
            <h4 className="text-coral-red font-bold uppercase text-xs mb-4 sm:mb-6">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-soft-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="sm:mt-0 mt-4 flex flex-col items-center lg:items-start">
            <h4 className="text-coral-red font-bold uppercase text-xs mb-4 sm:mb-6">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li className="hover:text-soft-orange cursor-pointer">
                Market Trends
              </li>
              <li className="hover:text-soft-orange cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-soft-orange cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-soft-orange cursor-pointer">Sitemap</li>
            </ul>
          </div>

          {/* Connect Us + Social */}
          <div className="sm:mt-0 mt-4 flex flex-col items-center lg:items-start gap-2">
            <h4 className="text-coral-red font-bold uppercase text-xs mb-2 sm:mb-4">
              Connect Us
            </h4>
            <a
              href="mailto:propertywalabhaiya@gmail.com"
              className="block text-sm hover:text-soft-orange transition-colors"
            >
              propertywalabhaiya@gmail.com
            </a>
            <a
              href="tel:+917699988876"
              className="block text-sm hover:text-soft-orange transition-colors"
            >
              +91 76999 88876
            </a>

            {/* Talk Button */}
            <button
              onClick={() =>
                window.open("https://wa.me/917699988876", "_blank")
              }
              className="mt-2 py-2 px-4 bg-linear-to-r from-coral-red to-warm-yellow text-white rounded-full font-bold text-xs uppercase tracking-wider hover:scale-105 transition"
            >
              Talk to Advisor
            </button>

            {/* Social Icons */}
            <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-4 mb-2">
              Follow Us On
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
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
                    <Icon size={20} color={social.color} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="bg-white py-4 sm:py-6 border-t">
        <Container className="text-center">
          <p className="text-xs text-slate-400">
            © {currentYear}{" "}
            <span className="font-bold text-slate-900">
              PROPERTY WALA BHAIYA
            </span>
            . All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
