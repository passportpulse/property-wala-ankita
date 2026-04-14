import { Home, CheckCircle2 } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
export default function OurInvitation() {
  return (
    <>
      {" "}
      <Section>
        <Container>
          {/* OUR INVITATION - COMPACT FOOTER CARD */}
          <div className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side: Branding */}
              <div className="text-center md:text-left">
                <div className="">
                  <span className="text-sm md:text-[16px] font-bold uppercase tracking-[0.25em] text-dark-orange">
                    Our Invitation
                  </span>
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  Let’s bring <br />
                  <span className="text-orange-500">honesty home.</span>
                </h4>
                <div className="mt-6 flex items-center justify-center md:justify-start gap-2">
                  <Home size={16} className="text-slate-400" />
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                    — Team Property Wala Bhaiya
                  </p>
                </div>
              </div>

              {/* Right Side: Message */}
              <div className="border-l-0 md:border-l border-slate-100 md:pl-10 space-y-4">
                <p className="text-slate-500 text-sm md:text-base leading-7 italic max-w-3xl">
                  Whether you are buying your first 2BHK, selling your family
                  home/plot/joint venture / office/ factory / industrial plots /
                  warehouse / hospital / hotels / petrol pump / institutes, or
                  hunting for an investment at a bank auction—welcome to a world
                  where a handshake still means something, even when it’s
                  digital.
                </p>

                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 w-fit px-3 py-1 rounded-md">
                  <CheckCircle2 size={14} />
                  <span className="text-[9px] font-bold uppercase tracking-widest">
                    Digital Trust • Human Touch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
