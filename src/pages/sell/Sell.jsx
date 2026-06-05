import SellForm from "./sections/SellForm";
import SellFaq from "./sections/SellFaq";
import SellHowItWorks from "./sections/SellHowItWorks";
import SellResults from "./sections/SellResults";
import SellingPower from "./sections/SellingPower";
import { placesInWB } from "../../data/locations";
import { useState } from "react";
import axios from "axios";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";

export default function Sell() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    state: "West Bengal",
    city: "Kolkata",
    locality: "Salt Lake",
    listingType: "For Sale",
    category: "Flat",
    bhk: "2 BHK",
    floor: "",
    totalFloors: "",
    area: "",
    furnishing: "Semi-Furnished",
    bathrooms: "2",
    balconies: "1",
    parking: "Covered",
    facing: "East",
    price: "",
    maintenance: "",
    negotiable: "Slightly Negotiable",
    possession: "Ready to Move",
    amenities: [],
    images: [],
    videoLink: "",
    description: "",
    rera: "",
    ownership: "Registry (Freehold)",
    honestyCheck: false,
    unit: "Sq.Ft",
    view: "Garden",
    kitchen: "Modular",
    utility: "Yes",
    gas: "Pipeline",
    availableFrom: ""
  });

  // Calculate available places here in the parent
  const availablePlaces = placesInWB[formData.city] || [];

  const handleFormSubmit = async () => {
    try {
      const bhkNum = parseInt(formData.bhk.replace(/\D/g, '')) || 0;
      
      const payload = {
        title: `${formData.bhk ? formData.bhk + ' ' : ''}${formData.category} in ${formData.locality}, ${formData.city}`,
        type: formData.category,
        price: formData.price ? `₹${formData.price} L` : "₹ --",
        location: formData.locality,
        city: formData.city,
        state: formData.state,
        sqft: `${formData.area} SQFT`,
        beds: bhkNum,
        baths: parseInt(formData.bathrooms) || 0,
        facing: formData.facing,
        furnishing: formData.furnishing,
        floor: formData.floor ? `${formData.floor} of ${formData.totalFloors}` : "",
        possession: formData.possession,
        description: formData.description || `Beautiful ${formData.bhk} ${formData.category} located in the premium locality of ${formData.locality}, ${formData.city}.`,
        amenities: formData.amenities || [],
        images: formData.images.length > 0 ? formData.images : ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"],
        status: "active",
        owner: {
          name: "Rajesh Kumar",
          phone: "917699988876",
          email: "rajesh@example.com"
        }
      };

      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/properties`, payload);
      
      // Clear draft since it is successfully posted!
      localStorage.removeItem('property_listing_draft_v3');
      
      setShowResults(true);
    } catch (error) {
      console.error("Error submitting property listing:", error);
      alert("Failed to submit property listing. Please try again!");
    }
  };

  return (
    <Section className="bg-[#f8fafc] min-h-screen py-10" size="small">
      <Container>
        {!showResults ? (
          <>
            <SellForm
              formData={formData}
              setFormData={setFormData}
              availablePlaces={availablePlaces}
              onSubmit={handleFormSubmit}
            />
            
            <SellingPower />
            <SellHowItWorks/>
            <SellFaq/>
          </>
        ) : (
          <SellResults
            formData={formData}
            onBack={() => setShowResults(false)}
          />
        )}
      </Container>
    </Section>
  );
}
