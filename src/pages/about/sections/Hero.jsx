import Header from "../../../components/Header";
export default function Hero() {
  return (
    <>
      {/* HEADER SECTION */}
      <Header
        tag="Durgapur's Digital Backbone"
        title="About"
        highlight="Property Wala Bhaiya"
        subtitle="Bringing trust, structure, and transparency to Durgapur’s real
                estate market."
        buttonText="Join Us"
        onButtonClick="/join-us"
      />
    </>
  );
}
