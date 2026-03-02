import BuyForm from "./sections/BuyForm";
import BuyResults from "./sections/BuyResults";
import { placesInWB } from "../../data/locations";
import { useState } from "react";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";

export default function Buy() {
  const [showResults, setShowResults] = useState(false);

  const [formData, setFormData] = useState({
    state: "West Bengal",
    city: "Kolkata",
    loc: "Salt Lake",
    minPrice: 0,
    maxPrice: 20000000,
  });

  const availablePlaces = placesInWB[formData.city] || [];

  return (
    <Section className="bg-[#f8fafc] min-h-screen py-10" size="small">
      <Container>
        {!showResults ? (
          <BuyForm
            formData={formData}
            setFormData={setFormData}
            availablePlaces={availablePlaces}
            onSubmit={() => setShowResults(true)}
          />
        ) : (
          <BuyResults
            formData={formData}
            onBack={() => setShowResults(false)}
          />
        )}
      </Container>
    </Section>
  );
}
