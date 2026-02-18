/* sections/ContactCTA.js */

import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function ContactCTA() {
  return (
    <Section className="bg-white font-poppins">

      <Container>

        {/* Glass CTA Card */}
        <div className="
          relative group
          rounded-[2.5rem] lg:rounded-[3rem]
          p-10 lg:p-20
          text-center
          bg-slate-50
          border border-slate-100
          overflow-hidden
        ">

          {/* Subtle Background Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-soft-orange/10 blur-[100px] rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-dark-orange/5 blur-[100px] rounded-full -ml-20 -mb-20" />


          <div className="relative z-10 space-y-8">

            {/* Label */}
            <div className="flex items-center justify-center gap-2">
              <span className="w-8 h-[1.5px] bg-dark-orange"></span>

              <span className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                text-dark-orange
              ">
                Get Started
              </span>

              <span className="w-8 h-[1.5px] bg-dark-orange"></span>
            </div>


            {/* Heading */}
            <h2 className="
              text-3xl lg:text-6xl
              font-black
              text-slate-900
              tracking-tighter
              leading-[1.1]
            ">
              Ready to find your <br />

              <span className="
                text-transparent
                bg-clip-text
                bg-linear-to-r
                from-dark-orange via-lighter-orange to-soft-orange
              ">
                place in Durgapur?
              </span>

            </h2>


            {/* Description */}
            <p className="
              text-slate-500
              max-w-xl
              mx-auto
              text-sm lg:text-base
              leading-relaxed
            ">
              Get a curated list of exclusive properties and connect directly
              with{" "}
              <span className="text-slate-900 font-bold">
                Property Wala Bhaiya
              </span>{" "}
              for personalized guidance.
            </p>


            {/* Buttons */}
            <div className="
              flex flex-col sm:flex-row
              gap-4
              justify-center
              pt-6
            ">

              {/* WhatsApp */}
              <a
                href="https://wa.me/917699988876"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-slate-900 text-white
                  px-8 lg:px-10
                  py-4 lg:py-5
                  rounded-2xl
                  font-black
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  hover:bg-dark-orange
                  hover:shadow-xl hover:shadow-dark-orange/30
                  transition-all duration-300
                  active:scale-95
                "
              >
                WhatsApp Now
              </a>


              {/* Call */}
              <a
                href="tel:+917699988876"
                className="
                  bg-white
                  text-slate-900
                  border border-slate-200
                  px-8 lg:px-10
                  py-4 lg:py-5
                  rounded-2xl
                  font-black
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  hover:border-dark-orange
                  hover:text-dark-orange
                  hover:shadow-lg
                  transition-all duration-300
                  active:scale-95
                "
              >
                Speak With Expert
              </a>

            </div>

          </div>


          {/* Brand Accent Bar */}
          <div className="
            absolute bottom-0 inset-x-0
            h-1.5
            bg-linear-to-r
            from-dark-orange via-lighter-orange to-soft-orange
          " />

        </div>

      </Container>

    </Section>
  );
}
