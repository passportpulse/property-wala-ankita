import { Calendar, Clock, User, Phone, Home } from "lucide-react";
import Container from "./layout/Container";
import Section from "./layout/Section";
import { useState } from "react";

export default function ScheduleVisit() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Scheduled:", form);
  };

  return (
    <Section>
      <Container>
        <div className="relative bg-white border border-slate-100 rounded-[3rem] p-8 lg:p-16 overflow-hidden group shadow-sm">

          {/* Soft Background Accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-soft-orange/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* LEFT SIDE */}
            <div className="max-w-xl space-y-6">

              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-coral-red"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-coral-red">
                  Private Visit
                </span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none uppercase">
                Schedule Your{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-coral-red to-soft-orange">
                  Walkthrough
                </span>
              </h3>

              <p className="text-slate-500 font-medium text-base lg:text-lg max-w-md leading-relaxed">
                Book a personal property visit at your convenience.
                Experience the home before making your decision.
              </p>

              <p className="text-[10px] uppercase tracking-widest font-bold text-soft-orange">
                Fast Confirmation • Trusted Support
              </p>
            </div>

            {/* RIGHT SIDE – Compact Inline Form */}
            <div className="w-full lg:w-auto">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4 w-full lg:w-[380px] shadow-inner">

                {/* Name */}
                <div className="flex items-center border-b pb-2">
                  <User size={16} className="text-soft-orange mr-2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-sm font-semibold"
                  />
                </div>

                {/* Phone */}
                <div className="flex items-center border-b pb-2">
                  <Phone size={16} className="text-soft-orange mr-2" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-sm font-semibold"
                  />
                </div>

                {/* Date */}
                <div className="flex items-center border-b pb-2">
                  <Calendar size={16} className="text-soft-orange mr-2" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-sm font-semibold"
                  />
                </div>

                {/* Time */}
                <div className="flex items-center border-b pb-2">
                  <Clock size={16} className="text-soft-orange mr-2" />
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-sm font-semibold"
                  />
                </div>

                {/* Button */}
                <button
                  onClick={handleSubmit}
                  className="
                    w-full
                    mt-4
                    bg-coral-red
                    hover:bg-soft-orange
                    text-white
                    font-black
                    uppercase
                    tracking-widest
                    text-[10px]
                    py-4
                    rounded-2xl
                    transition-all
                    duration-500
                    active:scale-95
                  "
                >
                  Confirm Visit
                </button>

              </div>
            </div>
          </div>

          {/* Elegant Watermark Icon */}
          <Home
            size={140}
            className="absolute -bottom-8 -right-8 text-slate-100 rotate-12 group-hover:text-soft-orange/5 transition-colors duration-700"
          />

        </div>
      </Container>
    </Section>
  );
}
