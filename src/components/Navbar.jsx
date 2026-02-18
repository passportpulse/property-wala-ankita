import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { navigationLinks } from "../constants/navigation";
import { Sparkles } from "lucide-react";
import logo1 from "../assets/logo_img.png";
import logo2 from "../assets/logo_text.png";
import Container from "./layout/Container";

/* =========================
   LOGO COMPONENT
========================= */
function NavbarLogo({ scrolled }) {
  const logoStyle = `transition-all duration-300 ${
    scrolled ? "filter brightness-0" : "filter brightness-100"
  }`;

  return (
    <Link to="/" className="flex items-end lg:items-center gap-2">
      <img
        src={logo1}
        alt="Logo"
        className={`h-12 lg:h-16 w-auto ${logoStyle}`}
      />
      <img
        src={logo2}
        alt="Logo"
        className={`h-8 lg:h-9 w-auto ${logoStyle}`}
      />
    </Link>
  );
}

/* =========================
   DESKTOP NAV LINKS (VERTICALLY CENTERED)
========================= */
function DesktopNav({ scrolled }) {
  return (
    <nav className="hidden lg:flex items-center gap-10 h-full">
      {navigationLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className={({ isActive }) =>
            `relative text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
              scrolled
                ? "text-slate-600 hover:text-dark-orange"
                : "text-white hover:text-warm-yellow"
            } ${
              isActive
                ? "after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-current"
                : ""
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

/* =========================
   JOIN BUTTON
========================= */
function JoinButton({ scrolled }) {
  return (
    <Link
      to="/property-wala-bhaiya"
      className={`hidden lg:flex items-center gap-2 px-8 py-3 rounded-full font-black text-sm uppercase tracking-[0.25em] transition-all duration-300 shadow-lg active:scale-95 ${
        scrolled
          ? "bg-linear-to-r from-dark-orange via-lighter-orange) to-warm-yellow text-white"
          : "bg-white text-dark-orange"
      }`}
    >
      <Sparkles
        size={14}
        className={scrolled ? "text-warm-yellow" : "text-soft-orange"}
      />
      Join Our Network
    </Link>
  );
}

/* =========================
   HAMBURGER BUTTON
========================= */
function Hamburger({ open, setOpen, scrolled }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={`lg:hidden flex items-end h-full pb-1 transition-colors ${
        scrolled ? "text-slate-800" : "text-orange-700"
      }`}
    >
      <div className="w-8 h-6 relative flex items-center justify-center">
        <span
          className={`absolute h-0.75 w-full bg-current rounded-full transition-all duration-300 origin-center ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute h-0.75 w-full bg-current rounded-full transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`absolute h-0.75 w-full bg-current rounded-full transition-all duration-300 origin-center ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </div>
    </button>
  );
}

function MobileMenu({ open, setOpen }) {
  return (
    <div className="lg:hidden absolute top-full left-0 w-full z-100">
      <div
        className={`
          bg-gray-50 shadow-lg border border-gray-200 rounded-b-4xl
          flex flex-col items-start pl-4 gap-5
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${open ? "max-h-125 py-6 opacity-100" : "max-h-0 py-0 opacity-0"}
        `}
      >
        {navigationLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `text-gray-900 text-base uppercase tracking-wide transition-colors duration-200 hover:text-dark-orange ${
                isActive ? "text-dark-orange" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}

        <Link
          to="/property-wala-bhaiya"
          onClick={() => setOpen(false)}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-dark-orange via-lighter-orange) to-warm-yellow text-white rounded-full font-bold text-[12px] uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
        >
          <Sparkles size={14} className="text-warm-yellow" />
          Join Our Network
        </Link>
      </div>
    </div>
  );
}

/* =========================
   MAIN NAVBAR
========================= */
export default function Navbar({ promoVisible }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = `sticky z-50 transition-all duration-300 font-poppins ${
    scrolled
      ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
      : "bg-linear-to-r from-dark-orange via-lighter-orange to-warm-yellow py-4"
  } ${promoVisible ? "md:top-0 top-10 mb-8 lg:mb-0" : "top-0"}`;

  return (
    <header className={headerStyle}>
      <Container className="flex items-end lg:items-center justify-between">
        <NavbarLogo scrolled={scrolled} />
        <DesktopNav scrolled={scrolled} />
        <div className="flex items-end gap-4">
          <JoinButton scrolled={scrolled} />
          <Hamburger open={open} setOpen={setOpen} scrolled={scrolled} />
        </div>
      </Container>

      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
