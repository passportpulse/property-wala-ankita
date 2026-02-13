import { Phone, Mail, MessageSquare } from "lucide-react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

const Contact = () => {
  return (
    <Section
      size="default"
      className="min-h-screen bg-slate-50 font-poppins text-slate-800 overflow-hidden"
    >
      <Container>
        {/* Header */}
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="text-xs font-semibold tracking-widest uppercase text-coral-red">
            Get in Touch
          </span>

          <h1 className="text-lg lg:text-4xl font-bold mt-2 max-w-2xl mx-auto">
            Connect with Property Wala Bhaiya
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Professional property consultation built on trust.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
         {/* LIVE GOOGLE MAP */}
<div className="lg:col-span-5 animate-in fade-in slide-in-from-left-6 duration-700">
  
  <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg">

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.4658695682033!2d87.29401877793462!3d23.53741219906622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f773512cae0f7f%3A0x6a966398f055b10f!2sSuhatta%20Mall!5e0!3m2!1sen!2sin!4v1770967169384!5m2!1sen!2sin"
      className="w-full h-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Suhatta Mall Location"
    />

    {/* Overlay gradient */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

    {/* Label */}
    <div className="absolute bottom-5 left-5 text-white pointer-events-none">
      <p className="text-[11px] uppercase tracking-widest opacity-80">
        Office Location
      </p>
      <p className="font-medium">
        Suhatta Mall, Durgapur
      </p>
    </div>

  </div>

</div>


          {/* Contact Cards */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl py-10 px-6 animate-in fade-in slide-in-from-right-6 duration-700 delay-100">
            <p className="mb-6 text-slate-600">
              We’re available through call, WhatsApp, or email.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ContactCard
                icon={<Phone size={24} />}
                label="Call Us"
                value="+91 76999 88876"
                link="tel:+917699988876"
                bgColor="bg-coral-red/10"
                textColor="text-coral-red"
              />

              <ContactCard
                icon={<MessageSquare size={24} />}
                label="WhatsApp"
                value="+91 76999 88876"
                link="https://wa.me/917699988876"
                bgColor="bg-green-100"
                textColor="text-green-600"
              />

              <ContactCard
                icon={<Mail size={24} />}
                label="Email"
                value="propertywalabhaiya@gmail.com"
                link="mailto:propertywalabhaiya@gmail.com"
                bgColor="bg-blue-100"
                textColor="text-blue-600"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

/* Contact Card */
const ContactCard = ({ icon, label, value, link, bgColor, textColor }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border border-slate-100 hover:shadow-lg transition bg-white"
  >
    <div className={`p-4 rounded-full ${bgColor}`}>{icon}</div>

    <span className={`font-bold text-sm ${textColor}`}>{label}</span>

    <span className="text-xs text-slate-500 text-center break-words">
      {value}
    </span>
  </a>
);

export default Contact;
