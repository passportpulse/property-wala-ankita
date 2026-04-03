import { useState } from "react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import AllServices from "./sections/AllServices";
import Hero from "./sections/Hero";
import BundleTable from "./sections/BundleTable";
import BundleModal from "../../components/modals/BundleModal";
import PricingPanel from "./sections/PricingPanel";

const Services = () => {
  const [activeBundle, setActiveBundle] = useState(null);

  return (
    <Section
      className="bg-[#f8fafc] font-poppins text-slate-800 py-10"
      size="small"
    >
      <Container>
        <Hero />
        <AllServices />
        <BundleTable onOpen={setActiveBundle} />
        <BundleModal
          active={activeBundle}
          onClose={() => setActiveBundle(null)}
        />
        <PricingPanel />
      </Container>
    </Section>
  );
};

export default Services;
