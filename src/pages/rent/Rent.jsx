import RentForm from "./sections/RentForm";
import RentResults from "./sections/RentResults";
import { placesInWB } from "../../data/locations";
import { useState } from "react";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";

export default function Rent() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    state: "West Bengal",
    city: "Kolkata",
    loc: "Salt Lake",
    // type: "Flat",
    // bed: "2 BHK",
    minBud: 0,
    maxBud: 80000,
    // fur: "Semi-furnished",
  });

  // Calculate available places here in the parent
  const availablePlaces = placesInWB[formData.city] || [];

  return (
    <Section className="bg-[#f8fafc] min-h-screen py-10" size="small">
      <Container>
        {!showResults ? (
          <>
            <RentForm
              formData={formData}
              setFormData={setFormData}
              availablePlaces={availablePlaces}
              onSubmit={() => setShowResults(true)}
            />
          </>
        ) : (
          <RentResults
            formData={formData}
            onBack={() => setShowResults(false)}
          />
        )}
      </Container>
    </Section>
  );
}
