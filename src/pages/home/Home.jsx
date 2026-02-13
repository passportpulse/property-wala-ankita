import HotDeals from "./sections/HotDeals";
import FeaturedProperties from "./sections/FeaturedProperties";
import HomeHero from "./sections/HomeHero";
import ServiceHub from "./sections/ServiceHub";
import Trust from "./sections/Trust";
import Categories from "./sections/Categories";
import ContactCTA from "./sections/ContactCTA";
import SellYourProperty from "./sections/SellYourProperty";
import BestBuy from "./sections/BestBuy";
import JoinUs from "../joinus/JoinUs";
import HomeFilter from "./sections/HomeFilter";
import ScheduleVisit from "../../components/ScheduleVisit";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFilter/>
      <Categories />
      <SellYourProperty/>
      <FeaturedProperties />
      <HotDeals />
      <BestBuy/>
      <Trust />
      <ServiceHub />
      <JoinUs/>
      <ScheduleVisit/>
      <ContactCTA />
    </>
  );
}
