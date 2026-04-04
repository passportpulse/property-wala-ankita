import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import Hero from "./sections/Hero";
import Comparison from "./sections/Comparison";
import Solutions from "./sections/Solutions";
import Manifesto from "./sections/Manifesto";
import OurResolve from "./sections/OurResolve";
import BhaiyaWay from "./sections/BhaiyaWay";

export default function About() {
  return (
    <Section className="mt-0 pt-6 lg:mt-0">
      <Container>
        <Hero />
        <Manifesto/>
        <OurResolve/>
        <BhaiyaWay/>
        <Comparison />
        <Solutions />
      </Container>
    </Section>
  );
}
