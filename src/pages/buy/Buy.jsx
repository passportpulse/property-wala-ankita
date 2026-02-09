import { useState } from "react";
import FilterHeader from "./sections/FilterHeader";
import PropertyGrid from "./sections/PropertyGrid"; 
import Cta from "./sections/Cta";

export default function Buy() {
  const [activeTab, setActiveTab] = useState("Flats");

  return (
    <>
      <FilterHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <PropertyGrid activeTab={activeTab} />
      <Cta />
    </>
  );
}