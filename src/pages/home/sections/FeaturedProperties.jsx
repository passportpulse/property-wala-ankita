import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { useState, useEffect } from "react";
import { Bed, Bath, Maximize, MapPin, Eye, Clock, ShieldCheck, AlertCircle, Star } from "lucide-react";
import { useProperties } from "../../../hooks/useProperties";

import FeaturedPropertyModal from "../../../components/modals/FeaturedPropertyModal";
import ReportListingModal from "../../../components/modals/ReportListingModal";
import Header from "../../../components/Header";
import PropertyStatusBadge from "../../../components/PropertyStatusBadge";
import PropertyCard from "../../../components/PropertyCard";

export default function FeaturedProperties() {
  const { properties: dynamicProperties, loading } = useProperties();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [reportingProperty, setReportingProperty] = useState(null);
  const [propertyOverrides, setPropertyOverrides] = useState({});

  useEffect(() => {
    const loadOverrides = () => {
      const overrides = {};
      dynamicProperties.forEach(p => {
        const savedStatus = localStorage.getItem(`status_${p._id}`);
        if (savedStatus) overrides[p._id] = savedStatus;
      });
      setPropertyOverrides(overrides);
    };

    if (dynamicProperties.length > 0) loadOverrides();
    window.addEventListener("propertyStatusUpdate", loadOverrides);
    return () => window.removeEventListener("propertyStatusUpdate", loadOverrides);
  }, [dynamicProperties]);

  useEffect(() => {
    document.body.style.overflow = (selectedProperty || reportingProperty) ? "hidden" : "unset";
  }, [selectedProperty, reportingProperty]);

  const properties = dynamicProperties.map(p => ({
    ...p,
    id: p._id, // Map MongoDB _id to id for component compatibility
    status: propertyOverrides[p._id] || p.status
  })).filter(p => p.status !== "pending_verification" && p.isSpotlight); // Show spotlight properties

  return (
    <Section>
      <Container>
        {/* HEADER */}
        <Header
          tag="Bhaiya’s Featured"
          title="Spotlight"
          highlight="Listings"
          subtitle="Don't miss the best of the best. Handpicked for maximum visibility."
          buttonText="Browse All"
          onButtonClick="/buy"
        />

        {/* PROPERTY GRID */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto md:overflow-visible no-scrollbar pb-6 px-1 lg:px-0 snap-x snap-mandatory">
          {properties.map((item) => (
            <div key={item.id} className="snap-center shrink-0 w-[85%] sm:w-80 md:w-auto">
              <PropertyCard 
                item={item} 
                onSelect={setSelectedProperty} 
                onReport={setReportingProperty} 
              />
            </div>
          ))}
        </div>
      </Container>

      {/* MODALS */}
      <FeaturedPropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      <ReportListingModal 
        isOpen={!!reportingProperty}
        onClose={() => setReportingProperty(null)}
        propertyId={reportingProperty?.id}
        propertyTitle={reportingProperty?.title}
      />
    </Section>
  );
}
