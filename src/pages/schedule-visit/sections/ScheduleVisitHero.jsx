import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  User,
  Phone,
  ArrowRight,
  Building2,
  Mail,
  Home,
} from "lucide-react";

import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { placesInWB } from "../../../data/locations";

export default function ScheduleVisitHero() {
  const cities = Object.keys(placesInWB);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    location: "",
    address: "",
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
      `📧 Email: ${formData.email}%0A` +
      `🏙️ City: ${formData.city}%0A` +
      `📍 Area: ${formData.location}%0A` +
      `🏠 Address: ${formData.address}%0A` +
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
        <div className="relative mb-8 lg:mb-16 border-l-4 border-dark-orange pl-4 lg:pl-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 lg:space-y-2">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                Direct Booking
              </span>

              <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                Schedule{" "}
                <span className="bg-linear-to-r from-dark-orange to-lighter-orange bg-clip-text text-transparent">
                  Site Visit
                </span>
              </h2>

              <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
                Choose your preferred location and time — our experts will
                assist you.
              </p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleWhatsAppRedirect}
            className="bg-white rounded-[2.5rem] shadow-2xl shadow-orange-100/50 border border-slate-100 p-4 md:p-8 flex flex-col gap-4 relative"
          >
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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

              {/* Email */}
              <InputBox icon={Mail} label="Email Address">
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="input-style"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </InputBox>

              {/* Phone */}
              <InputBox icon={Phone} label="Contact Number">
                <input
                  required
                  type="tel"
                  placeholder="10-digit phone"
                  className="input-style"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
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

              {/* Address - Spans full width on desktop for better typing space */}
              <div className="md:col-span-2">
                <InputBox icon={Home} label="Detailed Address">
                  <input
                    required
                    type="text"
                    placeholder="House No, Street, Landmark..."
                    className="input-style"
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </InputBox>
              </div>

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
            <div className="mt-4 flex flex-col items-center">
              <button
                type="submit"
                className="w-fit bg-[#25D366] hover:bg-[#1eb956] text-white font-bold py-3.5 px-12 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-green-100 text-xs lg:text-sm uppercase tracking-wider"
              >
                Confirm Appointment
                <ArrowRight size={16} />
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">
                Instant confirmation via WhatsApp Business
              </p>
            </div>
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
    <div className="flex flex-col bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 focus-within:border-orange-300 focus-within:bg-white focus-within:shadow-md focus-within:shadow-orange-100/50 transition-all h-full">
      <div className="flex items-center gap-2 mb-0.5">
        <Icon size={14} className="text-orange-500 shrink-0" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
