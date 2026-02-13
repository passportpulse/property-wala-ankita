/* sections/ScheduleVisitSection.js */

import React, { useState } from "react";
import { Calendar, Clock, User, Phone } from "lucide-react";

export default function ScheduleVisitSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    console.log(form);
    alert("Visit Scheduled Successfully");
  };

  return (
    <section className="relative py-20 lg:py-32 bg-white font-poppins overflow-hidden">

      {/* Soft Gradient Background Strip */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-b from-peach-glow/20 via-soft-orange/10 to-coral-red/10 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE CONTENT */}
          <div className="space-y-8">

            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-coral-red"></span>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-coral-red">
                Private Visit
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Walk through your <br />
              future home with <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red via-soft-orange to-peach-glow">
                expert guidance
              </span>
            </h2>

            <p className="text-slate-500 text-base leading-relaxed max-w-md">
              Schedule a personalized property visit at your convenience.
              Get transparent insights, real-time answers, and full clarity
              before making your decision.
            </p>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white border border-slate-200 p-10 shadow-2xl">

            <div className="space-y-6">

              {/* NAME */}
              <div className="flex items-center border-b border-slate-200 pb-3">
                <User size={18} className="text-coral-red mr-3" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    handleChange("name", e.target.value)
                  }
                  className="w-full outline-none text-sm font-semibold"
                />
              </div>

              {/* PHONE */}
              <div className="flex items-center border-b border-slate-200 pb-3">
                <Phone size={18} className="text-coral-red mr-3" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) =>
                    handleChange("phone", e.target.value)
                  }
                  className="w-full outline-none text-sm font-semibold"
                />
              </div>

              {/* DATE */}
              <div className="flex items-center border-b border-slate-200 pb-3">
                <Calendar size={18} className="text-coral-red mr-3" />
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    handleChange("date", e.target.value)
                  }
                  className="w-full outline-none text-sm font-semibold"
                />
              </div>

              {/* TIME */}
              <div className="flex items-center border-b border-slate-200 pb-3">
                <Clock size={18} className="text-coral-red mr-3" />
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) =>
                    handleChange("time", e.target.value)
                  }
                  className="w-full outline-none text-sm font-semibold"
                />
              </div>

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                className="
                  w-full
                  bg-linear-to-r
                  from-coral-red
                  via-soft-orange
                  to-peach-glow
                  text-white
                  py-4
                  font-black
                  uppercase
                  text-[11px]
                  tracking-[0.25em]
                  hover:opacity-90
                  transition
                "
              >
                Book Private Visit
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
