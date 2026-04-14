import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";

export default function PartnerApplicationForm() {
  return (
    <Section  className="mt-0 py-6 lg:mt-0 mb-0">
      <Container>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl overflow-hidden border border-slate-200">
            {/* HEADER */}
            <div className="bg-slate-900 p-4 md:p-6 text-center border-b-4 border-orange-600">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-2xl">📋</span>
                <h1 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">
                  Bhaiya Expert Panel
                </h1>
              </div>
              <p className="text-orange-400 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                Partner Application Form
              </p>
            </div>

            <form className="p-3 md:p-6 space-y-5 md:space-y-6">
              {/* SECTION 1: BASIC CREDENTIALS */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-0.5 h-4 bg-orange-600 rounded-full" />
                  <h2 className="text-[11px] md:text-xs font-bold text-slate-800 uppercase">
                    Section 1: Basic Credentials
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-600">
                      1. Full Name / Firm Name:
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded outline-none focus:border-orange-500"
                      placeholder="Legal Name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-600">
                      2. Professional License Number:
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded outline-none focus:border-orange-500"
                      placeholder="ID Number"
                    />
                    <p className="text-[9px] text-slate-400 leading-tight italic">
                      (e.g., Bar Council ID for Lawyers, IBBI Registration for
                      Valuers)
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-600">
                      3. Years of Experience in Real Estate:
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded outline-none focus:border-orange-500"
                      placeholder="Years"
                    />
                    <p className="text-[9px] text-orange-600 leading-tight italic">
                      We recommend 5-7 years for "Bhaiya-Grade" trust
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-600">
                      4. Primary Area of Operation:
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded outline-none focus:border-orange-500"
                      placeholder="Region"
                    />
                    <p className="text-[9px] text-slate-400 leading-tight italic">
                      (e.g., Durgapur, Asansol, Kolkata, or Pan-India)
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 2: SERVICE EXPERTISE */}
              <section className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-0.5 h-4 bg-orange-600 rounded-full" />
                  <h2 className="text-[11px] md:text-xs font-bold text-slate-800 uppercase">
                    Section 2: Service Expertise
                  </h2>
                </div>
                <p className="text-[10px] text-slate-500 mb-3 italic">
                  Which services can you provide with 100% accuracy?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Property Due Diligence & Title Search",
                    "Registration & Documentation Support",
                    "Government Liaison & Approvals",
                    "Valuation Services (Bank/Market)",
                    "Home Loan Assistance",
                    "Vastu Consultancy",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center space-x-2 p-1.5 bg-white border border-slate-100 rounded cursor-pointer hover:border-orange-200"
                    >
                      <input
                        type="checkbox"
                        className="w-3 h-3 text-orange-600 border-slate-300 rounded"
                      />
                      <span className="text-[10px] md:text-[11px] text-slate-700">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </section>

              {/* SECTION 3: RELIABILITY */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-0.5 h-4 bg-orange-600 rounded-full" />
                  <h2 className="text-[11px] md:text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Section 3: The "Bhaiya" Reliability Test
                  </h2>
                </div>

                <div className="space-y-3">
                  {/* Intro Text included for full content */}
                  <p className="text-[10px] md:text-[11px] text-slate-500 italic px-1">
                    Real estate deals move fast. We need to know your timelines.
                  </p>

                  {/* Question 5 */}
                  <div className="p-3 bg-white border border-slate-200 rounded-lg">
                    <label className="text-[10px] md:text-[11px] font-bold text-slate-700 block mb-2 leading-tight">
                      5. What is your Turnaround Time (TAT) for a standard Title
                      Verification Report?
                    </label>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {["48 Hours", "3-5 Working Days", "1 Week+"].map(
                        (tat) => (
                          <label
                            key={tat}
                            className="flex items-center space-x-1.5 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="tat"
                              className="w-3 h-3 text-orange-600 focus:ring-orange-500 border-slate-300"
                            />
                            <span className="text-[10px] md:text-[11px] text-slate-600">
                              {tat}
                            </span>
                          </label>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Questions 6 & 7 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Q6 */}
                    <div className="p-3 bg-orange-50/50 border border-orange-100 rounded-lg flex flex-col justify-between">
                      <label className="text-[10px] md:text-[11px] font-bold text-slate-800 mb-2 leading-tight">
                        6. Do you have a dedicated team member to handle
                        "Property Wala Bhaiya" queries during working hours?
                      </label>
                      <div className="flex gap-4">
                        {["Yes", "No"].map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center space-x-1.5 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="team"
                              className="w-3 h-3 text-orange-600 focus:ring-orange-500"
                            />
                            <span className="text-[10px] md:text-[11px] font-semibold text-slate-700">
                              {opt}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Q7 */}
                    <div className="p-3 bg-orange-50/50 border border-orange-100 rounded-lg flex flex-col justify-between">
                      <label className="text-[10px] md:text-[11px] font-bold text-slate-800 mb-2 leading-tight">
                        7. Are you willing to provide a "Fixed Fee" schedule for
                        our users to avoid any price negotiation later?
                      </label>
                      <div className="flex gap-4">
                        {["Yes", "No"].map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center space-x-1.5 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="fee"
                              className="w-3 h-3 text-orange-600 focus:ring-orange-500"
                            />
                            <span className="text-[10px] md:text-[11px] font-semibold text-slate-700">
                              {opt}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 4: CASE STUDIES */}
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-0.5 h-4 bg-orange-600 rounded-full" />
                  <h2 className="text-[11px] md:text-xs font-bold text-slate-800 uppercase">
                    Section 4: Case Studies & Ethics
                  </h2>
                </div>
                <div className="space-y-2 text-[10px] font-bold text-slate-700">
                  <p>
                    8. Describe a situation where you advised a client against a
                    purchase because of a legal flaw you discovered:
                  </p>
                  <textarea
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded h-16 outline-none focus:border-orange-500"
                    placeholder="The Integrity Question..."
                  />

                  <p>
                    9. References: Provide contact details of two clients or
                    developers worked with in the last 12 months:
                  </p>
                  <textarea
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded h-16 outline-none focus:border-orange-500"
                    placeholder="Name | Contact | Year"
                  />
                </div>
              </section>

              {/* SECTION 5: DECLARATION */}

              {/* SECTION 5: DECLARATION OF TRUTH */}
              <section className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-0.5 h-4 bg-orange-600 rounded-full" />
                  <h2 className="text-[11px] md:text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Section 5: Declaration of Truth
                  </h2>
                </div>

                <div className="bg-slate-900 p-4 rounded-lg mb-6">
                  <div className="flex items-start gap-3">
                    {/* Agreement Checkbox */}
                    <input
                      type="checkbox"
                      id="declaration"
                      required
                      className="mt-1 w-3.5 h-3.5 text-orange-600 border-slate-700 rounded focus:ring-orange-500 bg-slate-800"
                    />
                    <label
                      htmlFor="declaration"
                      className="text-[9px] md:text-[10px] text-slate-300 italic leading-relaxed cursor-pointer"
                    >
                      "I understand that Property Wala Bhaiya is built on the
                      foundation of Truth and Trust. I agree that any report
                      provided by me will be unbiased, and any misrepresentation
                      or intentional delay on my part will result in immediate
                      removal from the panel and forfeiture of pending fees."
                    </label>
                  </div>
                </div>

                {/* Digital Signature */}
                <div className="flex flex-col items-center mb-8">
                  <input
                    type="text"
                    className="w-full max-w-[240px] border-b border-slate-900 text-center py-1 font-serif text-sm italic outline-none placeholder:text-slate-300"
                    placeholder="Sign with Full Name"
                    required
                  />
                  <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase">
                    Digital Signature
                  </span>
                </div>

                {/* Small Width Submit Button - Centered */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 md:px-12 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg text-[10px] md:text-xs uppercase tracking-[0.15em] shadow-lg transition-all active:scale-[0.95]"
                  >
                    Submit Application
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
