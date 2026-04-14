import { useState } from "react";
import { ChevronDown } from "lucide-react";

const servicesData = [
  {
    category: "⚖️ Legal & Compliance Services",
    services: [
      {
        title: "Property Due Diligence",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Chain of Title Search:</strong> Verification of ownership
              history for the last 30 years to ensure a "clean" marketable
              title.
            </li>
            <li>
              <strong>Encumbrance Check:</strong> Verification of existing
              mortgages, court stays, or unpaid government dues.
            </li>
            <li>
              <strong>RERA Compliance Audit:</strong> Validation of project
              registration and promoter credentials.
            </li>
          </ul>
        ),
      },
      {
        title: "Title Verification",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Verification of Original Documents:</strong> Expert
              scrutiny of Sale Deeds, Allotment Letters, and Possession
              Certificates.
            </li>
            <li>
              <strong>Public Notice Management:</strong> Issuing public notices
              in newspapers to invite and clear third-party claims before
              purchase.
            </li>
          </ul>
        ),
      },
      {
        title: "Property Registration",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>End-to-End Execution:</strong> Handling the appointment
              with the Sub-Registrar Office (SRO).
            </li>
            <li>
              <strong>Stamp Duty Advisory:</strong> Precise calculation of stamp
              duty and registration fees based on the latest circle rates.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    category: "📝 Documentation & Technical Services",
    services: [
      {
        title: "Documentation Drafting",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Standard Agreements:</strong> Drafting of ATS (Agreement
              to Sell), Sale Deeds, Lease Agreements, and Power of Attorney
              (PoA).
            </li>
            <li>
              <strong>Custom Contracts:</strong> Tailored Gift Deeds,
              Relinquishment Deeds, and Partition Deeds.
            </li>
          </ul>
        ),
      },
      {
        title: "JV Documentation (Joint Ventures)",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Collaboration Agreements:</strong> Drafting legal
              frameworks between landowners and developers.
            </li>
            <li>
              <strong>Profit/Area Sharing Models:</strong> Defining clear terms
              for revenue sharing, construction timelines, and exit clauses.
            </li>
          </ul>
        ),
      },
      {
        title: "Valuation Services",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Market Value Assessment:</strong> Professional valuation
              by Government-approved valuers for buying, selling, or capital
              gains tax.
            </li>
            <li>
              <strong>Bank/Insurance Valuation:</strong> Certified reports
              required for collateral security and insurance purposes.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    category: "🏗️ Strategic & Government Services",
    services: [
      {
        title: "DPR Preparation (Detailed Project Report)",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Feasibility Studies:</strong> Comprehensive technical and
              financial analysis for new residential or commercial developments.
            </li>
            <li>
              <strong>Financial Modeling:</strong> Cash flow projections, ROI
              analysis, and break-even points for investors.
            </li>
          </ul>
        ),
      },
      {
        title: "Government Liaison",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Sanctions & Approvals:</strong> Assistance in obtaining
              Building Plan approvals, Change of Land Use (CLU), and Occupancy
              Certificates (OC).
            </li>
            <li>
              <strong>Mutation Services:</strong> Handling the transfer of
              property title in municipal and revenue records post-purchase.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    category: "💳 Financial & Lifestyle Services",
    services: [
      {
        title: "Home Loan Assistance",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Multi-Bank Comparison:</strong> Finding the lowest ROI
              across 15+ leading banks and NBFCs.
            </li>
            <li>
              <strong>Auction Financing:</strong> Specialized loan assistance
              for properties purchased via bank auctions (often difficult to
              fund).
            </li>
            <li>
              <strong>Doorstep Processing:</strong> Hassle-free processing from
              login to disbursement.
            </li>
          </ul>
        ),
      },
      {
        title: "Vastu Consultancy",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Design Audit:</strong> Pre-purchase Vastu evaluation of
              floor plans and directional alignment.
            </li>
            <li>
              <strong>Remedial Vastu:</strong> Non-structural "Bhaiya-Approved"
              remedies to improve the energy and prosperity of an existing home.
            </li>
          </ul>
        ),
      },
      {
        title: "Architectural Design & Drawing",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Focus:</strong> Turning a piece of land into a blueprint
              for a dream.
            </li>
            <li>
              <strong>Concept 2D Floor Plans:</strong> Space planning and room
              layouts based on modern lifestyle needs.
            </li>
            <li>
              <strong>3D Elevation & Walkthroughs:</strong> High-quality
              realistic renders to see exactly how the house will look from the
              outside.
            </li>
            <li>
              <strong>Structural Drawings:</strong> Technical blueprints for
              pillars, beams, and foundations (essential for safe construction).
            </li>
            <li>
              <strong>Municipal/Sanction Drawings:</strong> Drafting plans
              specifically to meet Durgapur Municipal Corporation (DMC) or local
              Panchayat building bylaws for easy approval.
            </li>
            <li>
              <strong>Electrical & Plumbing (MEP) Layouts:</strong> Detailed
              maps for wiring and piping to avoid future maintenance headaches.
            </li>
          </ul>
        ),
      },
      {
        title: "Interior Design & Execution (Interior Works)",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Focus:</strong> Aesthetics meets functionality.
            </li>
            <li>
              <strong>Modular Kitchen & Wardrobe Design:</strong>{" "}
              Space-optimized, factory-finished solutions with a 5-year "Bhaiya
              Warranty."
            </li>
            <li>
              <strong>False Ceiling & Lighting Design:</strong> Modern LED
              layouts and POP work to enhance the home's ambiance.
            </li>
            <li>
              <strong>Material Selection Support:</strong> A consultant to help
              you choose the right marble, tiles, and laminates from local
              Durgapur vendors.
            </li>
            <li>
              <strong>Full Turnkey Execution:</strong> End-to-end site
              management where Bhaiya’s partner handles the labor, materials,
              and finishing.
            </li>
            <li>
              <strong>Furniture Customization:</strong> Bespoke sofas, beds, and
              dining sets tailored to the floor plan.
            </li>
          </ul>
        ),
      },
    ],
  },
];
export default function AllServices() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openService, setOpenService] = useState(null);
  return (
    <>
      {/* NESTED ACCORDION */}
      <div className="mt-12">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 px-1">
          Browse All Services
        </h3>

        <div className="space-y-3">
          {servicesData.map((category, catIndex) => {
            const isCategoryOpen = openCategory === catIndex;

            return (
              <div
                key={catIndex}
                className="rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                {/* CATEGORY */}
                <button
                  onClick={() =>
                    setOpenCategory(isCategoryOpen ? null : catIndex)
                  }
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-semibold text-sm lg:text-base">
                    {category.category}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isCategoryOpen
                        ? "rotate-180 text-dark-orange"
                        : "text-slate-300"
                    }`}
                  />
                </button>

                {/* SERVICES */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isCategoryOpen
                      ? "max-h-500 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-3 pb-3 space-y-2">
                    {category.services.map((service, srvIndex) => {
                      const key = `${catIndex}-${srvIndex}`;
                      const isServiceOpen = openService === key;

                      return (
                        <div key={key} className="rounded-lg">
                          <button
                            onClick={() =>
                              setOpenService(isServiceOpen ? null : key)
                            }
                            className="w-full flex justify-between items-center p-3 text-left"
                          >
                            <span className="text-[13px] lg:text-base font-semibold text-slate-700">
                              {srvIndex + 1}. {service.title}
                            </span>

                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                isServiceOpen
                                  ? "rotate-180 text-dark-orange"
                                  : "text-slate-300"
                              }`}
                            />
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isServiceOpen
                                ? "max-h-125 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-4 pb-3 text-xs lg:text-sm text-slate-700">
                              {service.content}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
