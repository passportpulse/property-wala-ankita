import { Phone, Mail, MessageSquare, ArrowRight, MapPin } from "lucide-react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

export default function Contact() {
  return (
    <Section className="mt-0 pt-6 lg:mt-0">
      <Container>
        {/* PROFESSIONAL HEADER */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 shadow-sm mb-2 lg:mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-[11px] uppercase tracking-widest text-slate-800">
              Available Now | 24/7 Priority Support
            </span>
          </div>
          <h1 className="text-xs lg:text-sm text-dark-orange">
            We’re Here Anytime For You
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 items-stretch">
          {/* LEFT: CONTACT CARDS */}
          <div className="lg:col-span-7 space-y-4">
            <ContactCard
              icon={<MessageSquare size={20} fill="currentColor" />}
              label="WhatsApp"
              value="Chat with Bhaiya"
              link="https://wa.me/917699988876"
              color="green"
            />
            <ContactCard
              icon={<Phone size={20} fill="currentColor" />}
              label="Call Now"
              value="+91 76999 88876"
              link="tel:+917699988876"
              color="orange"
            />
            <ContactCard
              icon={<Mail size={20} />}
              label="Email Support"
              value="propertywalabhaiya@gmail.com"
              link="mailto:propertywalabhaiya@gmail.com"
              color="blue"
            />
          </div>

          {/* RIGHT: LIVE GOOGLE MAP */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-6 duration-700 h-full flex flex-col">
            {/* SECTION HEADING */}
            <div className="mb-4 flex items-center gap-2 px-1">
              <div className="h-px flex-1 bg-slate-200 hidden lg:block"></div>
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                Our Registered Office
              </h2>
              <div className="h-px w-8 bg-slate-200 lg:hidden"></div>
            </div>

            <div className="relative flex-1 h-80 lg:h-full min-h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.4658695682033!2d87.29401877793462!3d23.53741219906622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f773512cae0f7f%3A0x6a966398f055b10f!2sSuhatta%20Mall!5e0!3m2!1sen!2sin!4v1770967169384!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Suhatta Mall Location"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-5 left-5 text-white pointer-events-none">
                <p className="text-[10px] uppercase tracking-widest opacity-80 flex items-center gap-1 mb-1">
                  <MapPin size={12} className="text-dark-orange" /> Office
                  Location
                </p>
                <p className="font-bold text-lg leading-none">
                  Suhatta Mall, Durgapur
                </p>
                <p className="text-[11px] opacity-60 mt-1.5 font-medium">
                  City Center, West Bengal
                </p>
              </div>

              {/* Professional "Open in Maps" Tag */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-bold text-slate-600 shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Large Map
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* REUSABLE PROFESSIONAL CONTACT CARD WITH ICON COLORS */
function ContactCard({ icon, label, value, link, color }) {
  const colorStyles = {
    green: {
      border: "hover:border-green-200 hover:bg-green-50/50",
      iconBg: "bg-green-50 text-[#25D366]", // Official WhatsApp Green
    },
    orange: {
      border: "hover:border-orange-200 hover:bg-orange-50/50",
      iconBg: "bg-orange-50 text-[#F97316]", // Brand Orange
    },
    blue: {
      border: "hover:border-blue-200 hover:bg-blue-50/50",
      iconBg: "bg-blue-50 text-[#3B82F6]", // Professional Blue
    },
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl transition-all duration-300 active:scale-[0.98] hover:shadow-md ${colorStyles[color].border}`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${colorStyles[color].iconBg}`}>
          {icon}
        </div>
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {label}
          </span>
          <span className="text-sm md:text-base font-semibold text-slate-700">
            {value}
          </span>
        </div>
      </div>
      <ArrowRight
        size={18}
        className="text-slate-300 group-hover:text-slate-500 transition-colors"
      />
    </a>
  );
}
