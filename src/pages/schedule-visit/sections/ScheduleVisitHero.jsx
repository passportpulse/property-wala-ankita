import React, { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Calendar,
  Clock,
  User,
  Phone,
  ArrowRight,
  Building2,
} from "lucide-react";

import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { placesInWB } from "../../../data/locations";

export default function ScheduleVisitHero() {
  const cities = Object.keys(placesInWB);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    location: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const phoneNumber = "917699988876";
    const message =
      `*NEW SITE VISIT REQUEST*%0A` +
      `━━━━━━━━━━━━━━━━━━%0A` +
      `👤 Name: ${formData.name}%0A` +
      `🏙️ City: ${formData.city}%0A` +
      `📍 Area: ${formData.location}%0A` +
      `📞 Phone: ${formData.phone}%0A` +
      `📅 Date: ${formData.date}%0A` +
      `⏰ Time: ${formData.time}%0A` +
      `━━━━━━━━━━━━━━━━━━%0A` +
      `Please confirm this appointment.`;

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <Section className="py-12 md:py-20 bg-linear-to-b from-orange-50 via-white to-white overflow-hidden">
      <Container>
        {/* Header - Enhanced for Mobile */}
        <div className="text-center mb-10 px-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Direct Booking
          </div>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
            Schedule a <span className="text-orange-500">Site Visit</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
            Choose your preferred location and time — our experts will assist
            you.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleWhatsAppRedirect}
            className="
              bg-white
              rounded-[2.5rem]
              shadow-2xl shadow-orange-100/50
              border border-slate-100
              p-4 md:p-8
              flex flex-col
              gap-4
              relative
            "
          >
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Name */}
              <InputBox icon={User} label="Full Name">
                <input
                  required
                  type="text"
                  placeholder="e.g. John Doe"
                  className="input-style"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </InputBox>

              {/* City */}
              <InputBox icon={Building2} label="Select City">
                <select
                  required
                  className="input-style appearance-none cursor-pointer"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value,
                      location: "",
                    })
                  }
                >
                  <option value="">Choose City</option>
                  {cities.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>
              </InputBox>

              {/* Area */}
              <InputBox icon={MapPin} label="Select Area">
                <select
                  required
                  className="input-style appearance-none cursor-pointer disabled:opacity-50"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  disabled={!formData.city}
                >
                  <option value="">Choose Area</option>
                  {formData.city &&
                    placesInWB[formData.city].map((area) => (
                      <option key={area}>{area}</option>
                    ))}
                </select>
              </InputBox>

              {/* Phone */}
              <InputBox icon={Phone} label="Contact Number">
                <input
                  required
                  type="tel"
                  placeholder="Your 10-digit phone"
                  className="input-style"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </InputBox>

              {/* Date */}
              <InputBox icon={Calendar} label="Visit Date">
                <input
                  required
                  type="date"
                  className="input-style"
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </InputBox>

              {/* Time */}
              <InputBox icon={Clock} label="Visit Time">
                <input
                  required
                  type="time"
                  className="input-style"
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </InputBox>
            </div>

            {/* Submit Button */}

            <div className="mt-4 flex justify-center">
              {" "}
              {/* Centering container */}
              <button
                type="submit"
                className="
      w-fit                   /* Only as wide as the content */
      bg-[#25D366]
      hover:bg-[#1eb956]
      text-white
      font-bold
      py-3 px-10              /* Balanced padding for a pill shape */
      rounded-full            /* Pill-shaped design */
      flex items-center
      justify-center
      gap-2
      transition-all
      active:scale-95         /* Snappier feedback for mobile */
      shadow-lg shadow-green-100
      text-xs lg:text-sm
      uppercase tracking-wider
    "
              >
                Confirm Appointment
                <ArrowRight size={16} />
              </button>
            </div>
            <p className="text-center text-[10px] text-slate-400 mt-3 font-bold uppercase tracking-widest">
              Instant confirmation via WhatsApp Business
            </p>
          </form>
        </div>
      </Container>

      <style jsx>{`
        .input-style {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          font-weight: 700;
          color: #1e293b;
          padding-top: 4px;
        }
        .input-style::placeholder {
          color: #94a3b8;
          font-weight: 500;
        }
      `}</style>
    </Section>
  );
}

function InputBox({ icon: Icon, label, children }) {
  return (
    <div
      className="
        flex flex-col
        bg-slate-50
        border border-slate-100
        rounded-2xl
        px-4 py-3
        focus-within:border-orange-300
        focus-within:bg-white
        focus-within:shadow-md focus-within:shadow-orange-100/50
        transition-all
      "
    >
      <div className="flex items-center gap-2 mb-0.5">
        <Icon size={14} className="text-orange-500 flex-shrink-0" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
