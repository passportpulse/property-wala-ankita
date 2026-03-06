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
import Header from "../../../components/Header";

export default function ScheduleVisitHero() {
  const cities = Object.keys(placesInWB);

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
      `🏠 Address: ${formData.address}%0A` +
      `🏙️ City: ${formData.city}%0A` +
      `📍 Area: ${formData.location}%0A` +
      `🏗️ Type: ${formData.propertyType}%0A` +
      `🏢 Property: ${formData.property}%0A` +
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
        <Header
          tag="Direct Booking"
          title="Schedule"
          highlight="Site Visit"
          subtitle="Choose your preferred location and time — our experts will assist you."
        />

        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleWhatsAppRedirect}
            className="bg-white rounded-[2.5rem] shadow-2xl shadow-orange-100/50 border border-slate-100 p-4 md:p-8 flex flex-col gap-4 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* 1. User Details */}
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

              {/* 2. Detailed Address */}
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

              {/* 3. Location Selection */}
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
                      propertyType: "",
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
                  disabled={!formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                      propertyType: "",
                      property: "",
                    })
                  }
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

              {/* 4. Property Selection (DISABLED UNTIL AREA SELECTED) */}
              <InputBox icon={SelectedTypeIcon} label="Property Type">
                <select
                  required
                  className="input-style appearance-none cursor-pointer disabled:opacity-50"
                  value={formData.propertyType}
                  disabled={!formData.location} // Disables if location is empty
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      propertyType: e.target.value,
                      property: "",
                    })
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

              <InputBox icon={LayoutDashboard} label="Choose Property">
                <select
                  required
                  className="input-style appearance-none cursor-pointer disabled:opacity-50"
                  value={formData.property}
                  disabled={!formData.propertyType} // Now depends on type selection
                  onChange={(e) =>
                    setFormData({ ...formData, property: e.target.value })
                  }
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

              {/* 5. Date & Time */}
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
            </div>

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
        <Icon size={14} className="text-dark-orange shrink-0" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
