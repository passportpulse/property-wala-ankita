import { useState } from "react";
import SellHero from "./sections/SellHero";
import SellPeerDeals from "./sections/SellPeerDeals";
import SellHowItWorks from "./sections/SellHowItWorks";
import SellFaq from "./sections/SellFaq";
import Cta from "../../components/Cta";
import PostPropertyModal from "../../components/modals/PostPropertyModal";

export default function Sell() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900">
      <SellHero setIsModalOpen={setIsModalOpen} />
      <PostPropertyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <SellPeerDeals />
      <SellHowItWorks />
      <SellFaq />
      <Cta />
    </div>
  );
}
