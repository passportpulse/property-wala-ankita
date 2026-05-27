import HotDeals from "./sections/HotDeals";
import FeaturedProperties from "./sections/FeaturedProperties";
import HomeHero from "./sections/HomeHero";
import Trust from "./sections/Trust";
import BestDeals from "./sections/BestDeals";
import ContactCTA from "../../components/ContactCTA";
import SellYourProperty from "./sections/SellYourProperty";
import BestBuy from "./sections/BestBuy";
import JoinUs from "../joinus/JoinUs";
import HomeFilter from "./sections/HomeFilter";
import Testimonials from "./sections/Testimonials";
import ScheduleVisitCta from "./sections/ScheduleVisitCta";
import UrgentExitSection from "./sections/urgentDeals";
import VerifiedSection from "./sections/verifiedProperties";
import FreshArrivals from "./sections/FreshArrivals";
import CategoryComparison from "./sections/CategoryComparison";
import GoToAuctionCTA from "./sections/GoToAuctionCTA";
import PriceHeatMap from "./sections/PriceHeatMap";
import VIPSection from "./sections/VIPSection";
import { useContent } from "../../hooks/useContent";

export default function Home() {
  const { data: settings } = useContent('settings');
  
  // Convert settings array to map
  const config = settings?.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {}) || {};

  return (
    <>
      <HomeHero />
      <PriceHeatMap />
      <CategoryComparison/>
      <FeaturedProperties />
      <BestBuy />
      <HotDeals />
      <UrgentExitSection />
      <VerifiedSection/>
      <FreshArrivals/>
      {/* <BestDeals /> */}
      <GoToAuctionCTA/>
      <SellYourProperty />
      <Trust />
      <Testimonials />
      {config.showImportantList && <VIPSection />}
      <JoinUs />
      <ContactCTA />
      <ScheduleVisitCta />
    </>
  );
}
