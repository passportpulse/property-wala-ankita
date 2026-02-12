import RentHero from "./sections/RentHero";
import RentHowItWorks from "./sections/RentHowItWorks";
import RentCategories from "./sections/RentCategories";
import Cta from "../../components/Cta";

export default function Rent() {
  return (
    <div className="bg-white text-slate-900 font-sans">
      <RentHero />
      <RentHowItWorks />
      <RentCategories />
      <Cta />
    </div>
  );
}
