import JoinHero from "./sections/JoinHero";
import JoinBenefits from "./sections/JoinBenefits";
import Cta from "../../components/Cta";
import OurSolution from "./sections/OurSolution";

const JoinUs = () => {
  return (
    <>
      <JoinHero />
      <OurSolution/>
      <JoinBenefits />
      <Cta />
    </>
  );
};

export default JoinUs;
