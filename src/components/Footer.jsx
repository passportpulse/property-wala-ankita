import { Link } from "react-router-dom";
import { navigationLinks } from "../constants/navigation";
import Container from "./layout/Container";

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "#",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "#",
      color: "#d62976",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "#",
      color: "#0A66C2",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      link: "#",
      color: "#FF0000",
    },
    {
      name: "X",
      icon: FaXTwitter,
      link: "#",
      color: "#000000",
    },
  ];

  return (
    <footer className="bg-slate-50 text-slate-600 font-poppins border-t border-slate-200">
      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                PROPERTY <span className="text-coral-red">WALA</span>{" "}
                <span className="text-slate-500 font-medium text-lg">
                  Bhaiya
                </span>
              </span>
            </Link>

            <h5 className="text-sm font-bold text-slate-700">
              Real estate consultant in Durgapur
            </h5>

            <p className="text-xs text-slate-500 max-w-xs">
              Simplifying the property journey with verified listings and expert
              guidance. Your dream space is just a click away.
            </p>

            <div className="flex gap-3 text-xs pt-2">
              <span className="text-coral-red text-lg">📍</span>
              <p className="text-slate-500">
                5th Floor, Suhatta Commercial Complex, City Center, Durgapur,
                West Bengal 713216
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase text-xs mb-6">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-coral-red transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-slate-900 font-bold uppercase text-xs mb-6">
              Resources
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-coral-red cursor-pointer">
                Market Trends
              </li>
              <li className="hover:text-coral-red cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-coral-red cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-coral-red cursor-pointer">Sitemap</li>
            </ul>
          </div>

          {/* Contact Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col justify-between">
            <div>
              <h4 className="text-slate-900 font-bold uppercase text-xs mb-4">
                Connect Us
              </h4>

              <div className="space-y-3 text-sm">
                <a
                  href="mailto:propertywalabhaiya@gmail.com"
                  className="block hover:text-coral-red transition-colors"
                >
                  propertywalabhaiya@gmail.com
                </a>

                <a
                  href="tel:+917699988876"
                  className="block hover:text-coral-red transition-colors"
                >
                  +91 76999 88876
                </a>
              </div>
            </div>

            {/* Talk Button */}
            <button
              onClick={() =>
                window.open("https://wa.me/917699988876", "_blank")
              }
              className="w-full mt-6 py-3 bg-gradient-to-r from-coral-red to-soft-orange text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition"
            >
              Talk to Advisor
            </button>

            {/* Social Icons Section */}
            <div className="flex flex-col items-center mt-6">
              {/* Follow Us Text */}
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Follow Us On
              </p>

              {/* Icons */}
              <div className="flex justify-center gap-6">
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
                      <Icon size={22} color={social.color} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="bg-white py-6 border-t">
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
