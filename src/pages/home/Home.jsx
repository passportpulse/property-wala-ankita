import HotDeals from "./sections/HotDeals";
import FeaturedProperties from "./sections/FeaturedProperties";
import HomeHero from "./sections/HomeHero";
import ServiceHub from "./sections/ServiceHub";
import Trust from "./sections/Trust";
import Categories from "./sections/Categories";
import ContactCTA from "./sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Categories />
      <FeaturedProperties />
      <Trust />
      <HotDeals />
      <ServiceHub />
      <ContactCTA />
    </>
  );
}
