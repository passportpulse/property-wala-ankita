import React, { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import AuctionDetail from "./sections/AuctionDetail";
import { useContent } from "../../hooks/useContent";

export default function AuctionTab() {
  const { data: auctions, loading, error } = useContent("auctions");
  const [selectedAuction, setSelectedAuction] = useState(null);

  // Auto-select the first auction when data is loaded
  useEffect(() => {
    if (auctions && auctions.length > 0) {
      setSelectedAuction(auctions[0]);
    }
  }, [auctions]);

  return (
    <>
      <Hero 
        auctions={auctions || []} 
        loading={loading} 
        selectedAuction={selectedAuction} 
        setSelectedAuction={setSelectedAuction} 
      />
      {selectedAuction && (
        <AuctionDetail selectedAuction={selectedAuction} />
      )}
    </>
  );
}
