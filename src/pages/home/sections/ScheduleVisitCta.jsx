import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function ScheduleVisitCta() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link
            to="/schedule-site-visit"
            className="group flex flex-col md:flex-row items-center justify-between gap-6 bg-orange-50/50 border border-orange-100 p-6 md:p-8 rounded-3xl transition-all hover:bg-white hover:shadow-xl hover:shadow-orange-100 hover:border-orange-300"
          >
            {/* Left Side: Icon & Text */}
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Calendar size={24} />
              </div>

              <div className="max-w-70 md:max-w-[320px]">
                {" "}
                {/* Constraints width to force 2 lines */}
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  Experience the property{" "}
                  <span className="text-orange-600 font-black">In-Person</span>
                </h3>
                <p className="text-slate-500 text-sm font-medium mt-1 leading-snug">
                  Private site tours available this week.{" "}
                  <br className="hidden md:block" /> Book your preferred slot.
                </p>
              </div>
            </div>

            {/* Right Side: Simple Button */}
            <div className="flex items-center gap-2 bg-dark-orange text-white px-6 py-3 rounded-xl font-bold text-sm transition-all group-hover:bg-orange-600">
              Schedule Now
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
