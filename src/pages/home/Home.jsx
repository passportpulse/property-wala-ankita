import HotDeals from "./sections/HotDeals";
import FeaturedProperties from "./sections/FeaturedProperties";
import HomeHero from "./sections/HomeHero";
import ServiceHub from "./sections/ServiceHub";
import Trust from "./sections/Trust";
import BestDeals from "./sections/BestDeals";
import ContactCTA from "./sections/ContactCTA";
import SellYourProperty from "./sections/SellYourProperty";
import BestBuy from "./sections/BestBuy";
import JoinUs from "../joinus/JoinUs";
import HomeFilter from "./sections/HomeFilter";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFilter/>
      <BestDeals />
      <SellYourProperty/>
      <FeaturedProperties />
      <HotDeals />
      <BestBuy/>
      <Trust />
      <Testimonials/>
      <ServiceHub />
      <JoinUs/>
      <ContactCTA />
    </>
  );
}
