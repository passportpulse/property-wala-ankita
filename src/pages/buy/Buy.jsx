import { useState, useEffect } from "react";
import FilterHeader from "./sections/FilterHeader";
import PropertyGrid from "./sections/PropertyGrid";
import Cta from "../../components/Cta";

export default function Buy() {
  const tabsLabels = [
    "Flats",
    "Plots",
    "Joint Ventures",
    "House / Duplex",
    "Office / Retail",
    "Factory",
    "Industrial Plots",
    "Warehouse",
    "Hospital",
    "Hotels / Resort",
    "Petrol Pump",
    "Institutes",
    "Investment",
  ];

  // 1. Initialize state by checking the URL immediately
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = tabsLabels.find(
          (label) =>
            label
              .toLowerCase()
              .trim()
              .replace(/\s+|\/+/g, "-")
              .replace(/-+/g, "-") === hash,
        );
        return found || "Flats";
      }
    }
    return "Flats";
  });

  // 2. Sync if user clicks browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const found = tabsLabels.find(
        (label) =>
          label
            .toLowerCase()
            .trim()
            .replace(/\s+|\/+/g, "-")
            .replace(/-+/g, "-") === hash,
      );
      if (found) setActiveTab(found);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [tabsLabels]);

  return (
    <>
      <FilterHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <PropertyGrid activeTab={activeTab} />
      <Cta />
    </>
  );
}
