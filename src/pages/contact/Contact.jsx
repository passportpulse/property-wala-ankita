import { Phone, Mail, MessageSquare, ArrowRight, MapPin } from "lucide-react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

export default function Contact() {
  return (
    <Section className="mt-0 pt-6 lg:mt-0">
      <Container>
        {/* PROFESSIONAL HEADER */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-orange border border-orange-100 shadow-sm mb-2 lg:mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-white">
              Available Now | 24/7 Priority Support
            </span>
          </div>
          <h1
            className="text-xl lg:text-6xl leading-tight mt-1 lg:mt-4 font-bold text-dark-orange"
            style={{ fontFamily: "'Tangerine', cursive" }}
          >
            We’re Here Anytime
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
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-6 duration-700">
            <div className="relative h-[320px] lg:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.4658695682033!2d87.29401877793462!3d23.53741219906622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f773512cae0f7f%3A0x6a966398f055b10f!2sSuhatta%20Mall!5e0!3m2!1sen!2sin!4v1770967169384!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Suhatta Mall Location"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white pointer-events-none">
                <p className="text-[11px] uppercase tracking-widest opacity-80 flex items-center gap-1">
                  <MapPin size={12} className="text-dark-orange" /> Office
                  Location
                </p>
                <p className="font-medium text-lg">Suhatta Mall, Durgapur</p>
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
          <span className="text-sm md:text-base font-bold text-slate-800">
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
