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
  LayoutDashboard,
  Map,
  Handshake,
  Briefcase,
  Factory,
  Warehouse,
  HeartPulse,
  Hotel,
  Fuel,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import { placesInWB, propertiesInWB } from "../../../data/locations";

export default function ScheduleVisitHero() {
  const cities = Object.keys(placesInWB);

  // Property Types with associated Icons
  const propertyTypes = [
    { name: "Flats", icon: Building2 },
    { name: "Plots", icon: Map },
    { name: "Joint Ventures", icon: Handshake },
    { name: "House/Duplex", icon: Home },
    { name: "Office/Retail", icon: Briefcase },
    { name: "Factory", icon: Factory },
    { name: "Industrial Plots", icon: Map },
    { name: "Ware House", icon: Warehouse },
    { name: "Hospital", icon: HeartPulse },
    { name: "Hotels/Resort", icon: Hotel },
    { name: "Petrol Pump", icon: Fuel },
    { name: "Institutes", icon: GraduationCap },
    { name: "Investment", icon: TrendingUp },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    city: "",
    location: "",
    property: "",
    address: "",
    date: "",
    time: "",
  });

  // Dynamically change the icon based on property type selection
  const SelectedTypeIcon =
    propertyTypes.find((t) => t.name === formData.propertyType)?.icon ||
    LayoutDashboard;

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const phoneNumber = "917699988876";
    const message =
      `*NEW SITE VISIT REQUEST*%0A` +
      `━━━━━━━━━━━━━━━━━━%0A` +
      `👤 Name: ${formData.name}%0A` +
      `📧 Email: ${formData.email}%0A` +
      `📞 Phone: ${formData.phone}%0A` +
      `🏗️ Type: ${formData.propertyType}%0A` +
      `🏙️ City: ${formData.city}%0A` +
      `📍 Area: ${formData.location}%0A` +
      `🏢 Property: ${formData.property}%0A` +
      `🏠 Address: ${formData.address}%0A` +
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
        {/* Header Section */}
        <div className="relative mb-8 lg:mb-16 border-l-4 border-dark-orange pl-4 lg:pl-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 lg:space-y-2">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-orange-600">
                Direct Booking
              </span>

              <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                Schedule <span className="text-dark-orange">Site Visit</span>
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
              {/* User Details */}
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

              {/* Property & Location Selection */}
              <InputBox icon={SelectedTypeIcon} label="Property Type">
                <select
                  required
                  className="input-style appearance-none cursor-pointer"
                  value={formData.propertyType}
                  onChange={(e) =>
                    setFormData({ ...formData, propertyType: e.target.value })
                  }
                >
                  <option value="">Select Type</option>
                  {propertyTypes.map((type) => (
                    <option key={type.name} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </InputBox>

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
                      property: "",
                    })
                  }
                >
                  <option value="">Choose City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </InputBox>

              <InputBox icon={MapPin} label="Select Area">
                <select
                  required
                  className="input-style appearance-none cursor-pointer disabled:opacity-50"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                      property: "",
                    })
                  }
                  disabled={!formData.city}
                >
                  <option value="">Choose Area</option>
                  {formData.city &&
                    placesInWB[formData.city]?.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                </select>
              </InputBox>

              <InputBox icon={LayoutDashboard} label="Choose Property">
                <select
                  required
                  className="input-style appearance-none cursor-pointer disabled:opacity-50"
                  value={formData.property}
                  onChange={(e) =>
                    setFormData({ ...formData, property: e.target.value })
                  }
                  disabled={!formData.location}
                >
                  <option value="">Choose Project</option>
                  {formData.location &&
                    propertiesInWB[formData.location]?.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                </select>
              </InputBox>

              {/* Date & Time */}
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

              {/* Address - Full Width */}
              <div className="md:col-span-2 lg:col-span-3">
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
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex flex-col items-center">
              <button
                type="submit"
                className="w-fit bg-dark-orange hover:bg-lighter-orange text-white font-bold py-3.5 px-12 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-green-100 text-xs lg:text-sm uppercase tracking-wider"
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
    <div className="flex flex-col bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 focus-within:border-orange-300 focus-within:bg-white transition-all h-full">
      <div className="flex items-center gap-2 mb-0.5">
        <Icon
          size={14}
          className="text-dark-orange shrink-0 transition-transform duration-300"
        />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
