import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import AllServices from "./sections/AllServices";
import Hero from "./sections/Hero";
import BundleTable from "./sections/BundleTable";
import BundleModal from "../../components/modals/BundleModal";
import PricingPanel from "./sections/PricingPanel";

const Services = () => {
  const [activeBundleKey, setActiveBundleKey] = useState(null);
  const [bundles, setBundles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBundles = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/content/services`);
        setBundles(data);
      } catch (error) {
        console.error("Error fetching service bundles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBundles();
  }, []);

  const activeBundle = bundles.find(b => b.key === activeBundleKey);

  return (
    <Section
      className="bg-[#f8fafc] font-sans text-slate-800 py-10"
      size="small"
    >
      <Container>
        <Hero />
        <AllServices />
        <PricingPanel />
        {!loading && (
          <>
            <BundleTable bundles={bundles} onOpen={setActiveBundleKey} />
            <BundleModal
              activeBundle={activeBundle}
              onClose={() => setActiveBundleKey(null)}
            />
          </>
        )}
      </Container>
    </Section>
  );
};

export default Services;
