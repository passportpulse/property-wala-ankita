import { CheckCircle } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import logo from "../../../assets/logo_img.png";
import Header from "../../../components/Header";

const JoinHero = () => {
  return (
    <Section className="bg-linear-to-b from-[#FFF9F2] via-white to-[#FFF5EC] text-slate-900">
      <Container>
        {/* Header - Compact margins for mobile */}
        <Header
          tag="Partner With Us"
          title="Become"
          highlight="Property Wala Bhaiya"
        />

        <div className="grid grid-cols-12 items-stretch">
          {/* LEFT SIDE */}
          <div className="col-span-6 flex">
            <div className="bg-white rounded-l-lg md:rounded-xl p-3 md:p-6 shadow-sm h-full flex items-center">
              <p className="text-xs md:text-base text-slate-700 leading-snug md:leading-relaxed">
                It is a purely digital shared platform for independent
                professionals and property inventory.Join us and collaborate
                under one roof to serve buyers and sellers.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-6 flex">
            <div className="rounded-r-lg md:rounded-xl bg-dark-orange shadow-md h-full w-full flex items-center justify-center p-2 md:p-4">
              <img
                src={logo}
                alt="Real estate professionals"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <p className="text-sm uppercase tracking-wider text-dark-orange text-center mt-6">
          Be A Part Of Our Network
        </p>
      </Container>
    </Section>
  );
};

export default JoinHero;
