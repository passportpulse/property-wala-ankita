import React, { useState } from "react";
import {
  IndianRupee,
  Users,
  Briefcase,
  Award,
  X,
  UsersRound,
} from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import Header from "../../../components/Header";
import Comparison from "./Comparison";

export default function WhyToJoin() {
  const [openModal, setOpenModal] = useState(false);

  const benefits = [
    {
      icon: IndianRupee,
      title: "Better Earnings",
      desc: "Transparent commission structure with no hidden fees.",
    },
    {
      icon: Users,
      title: "Verified Leads",
      desc: "Connect with genuine buyers and sellers in your area.",
    },
    {
      icon: Briefcase,
      title: "Zero Office Cost",
      desc: "Work independently using our professional infrastructure.",
    },
    {
      icon: Award,
      title: "Brand Trust",
      desc: "Leverage the 'Property Wala Bhaiya' credibility instantly.",
    },
  ];

  return (
    <Section className="bg-orange-50 overflow-hidden relative">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <Header
            tag="Carrier Building"
            title="Why Join"
            highlight="Our Network ?"
            subtitle="Empowering independent brokers with tools and leads to dominate locally."
          />

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-5 md:p-8 rounded-4xl bg-white border border-orange-100 shadow-sm shadow-orange-200/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-orange-100/80 flex items-center justify-center mb-3 md:mb-5">
                    <Icon className="text-dark-orange w-5 h-5 md:w-7 md:h-7" />
                  </div>

                  <h3 className="text-slate-900 font-bold text-xs md:text-lg leading-tight mb-1.5 md:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[10px] md:text-sm leading-snug md:leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* 🔥 Join Our Network Section */}
          <div className="mt-8 md:mt-16 px-2">
            <div className="bg-linear-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-4 md:p-8 text-center shadow-sm">
              {/* 👥 Image Icon */}
              <div className="mx-auto mb-1 md:mb-2 w-fit">
                <img
                  src="/icons/three-people.png"
                  alt="Group of people"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain"
                />
              </div>

              {/* 🔥 Heading */}
              <h2 className="text-sm md:text-2xl font-bold text-slate-900 leading-snug md:leading-tight max-w-xs md:max-w-xl mx-auto mb-4 md:mb-6">
                Mapping Dealer Pain Points to Smart Solutions
              </h2>

              {/* CTA Button */}
              <button
                onClick={() => setOpenModal(true)}
                className="bg-dark-orange text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-base font-semibold shadow-md hover:shadow-lg active:scale-95 md:hover:scale-105 transition-all duration-300"
              >
                See How It Works →
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* 🔥 Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpenModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl w-[95%] md:w-[80%] max-h-[90vh] overflow-y-auto p-2 md:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 md:top-4 right-3 md:right-4 text-slate-500 hover:text-black"
            >
              <X size={24} />
            </button>

            {/* Comparison Component */}
            <Comparison />
          </div>
        </div>
      )}
    </Section>
  );
}
