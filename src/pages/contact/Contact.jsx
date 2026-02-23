import { Phone, Mail, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

// Main Component
export default function Contact() {
  return (
    <Section className="bg-white">
      <Container>
        {/* Soft Header */}
        <div className="mb-10 text-center">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-dark-orange/70">
            Get in touch
          </span>
          <h1 className="text-2xl lg:text-3xl font-bold mt-2 text-slate-800">
            Talk to a <span className="text-dark-orange italic font-medium">Bhaiya</span>
          </h1>
          <p className="text-[11px] lg:text-sm text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">
            Quick support for property owners and tenants in Durgapur.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
          
          {/* MAP - Softened Corners */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative h-48 lg:h-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6!2d87.2!3d23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzAwLjAiTiA4N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v123456789"
                className="w-full h-full border-0 grayscale-[20%] contrast-[0.9]"
                loading="lazy"
                title="Office Location"
              />
              {/* Soft Location Label Over Map */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3 border border-white/20 shadow-lg">
                <div className="p-2 bg-dark-orange/10 rounded-lg text-dark-orange">
                   <MapPin size={14} />
                </div>
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">Suhatta Mall, Durgapur</span>
              </div>
            </div>
          </div>

          {/* CONTACT OPTIONS - High Density */}
          <div className="lg:col-span-7 space-y-3 order-1 lg:order-2">
            <ContactCard
              icon={<Phone size={18} />}
              label="Quick Call"
              value="+91 76999 88876"
              link="tel:+917699988876"
              colorClass="bg-orange-50 text-dark-orange border-orange-100"
            />

            <ContactCard
              icon={<MessageSquare size={18} />}
              label="WhatsApp"
              value="Chat with us"
              link="https://wa.me/917699988876"
              colorClass="bg-green-50 text-green-600 border-green-100"
            />

            <ContactCard
              icon={<Mail size={18} />}
              label="Email us"
              value="propertywalabhaiya@gmail.com"
              link="mailto:propertywalabhaiya@gmail.com"
              colorClass="bg-blue-50 text-blue-600 border-blue-100"
            />
            
            {/* Soft Info Note */}
            <p className="text-[9px] text-center lg:text-left text-slate-400 font-medium px-2 italic">
              * Average response time: Under 15 minutes
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* Compact Contact Card Component */
function ContactCard({ icon, label, value, link, colorClass }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between p-4 rounded-2xl border transition-all active:scale-[0.98] ${colorClass}`}
    >
      <div className="flex items-center gap-4">
        <div className="p-2.5 rounded-xl bg-white/80 shadow-sm">
          {icon}
        </div>
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-wider opacity-70">
            {label}
          </span>
          <span className="text-xs md:text-sm font-bold tracking-tight">
            {value}
          </span>
        </div>
      </div>
      <ArrowRight size={14} className="opacity-40" />
    </a>
  );
}