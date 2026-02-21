import React, { useState } from 'react';
import { MessageCircle, MapPin, Calendar, Clock, User, Phone } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function ScheduleVisit() {
  const [formData, setFormData] = useState({ 
    name: '', 
    location: '', 
    phone: '', 
    date: '', 
    time: '' 
  });

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    
    const phoneNumber = "917699988876"; 
    // Professional WhatsApp formatting with line breaks
    const message = `*NEW VISIT REQUEST*%0A` +
                    `━━━━━━━━━━━━━━━━━━%0A` +
                    `👤 *Name:* ${formData.name}%0A` +
                    `📍 *Location:* ${formData.location}%0A` +
                    `📞 *Phone:* ${formData.phone}%0A` +
                    `📅 *Date:* ${formData.date}%0A` +
                    `⏰ *Time:* ${formData.time}%0A` +
                    `━━━━━━━━━━━━━━━━━━%0A` +
                    `Please confirm this appointment.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Section>
      <Container>
        <div className="max-w-md mx-auto">
          <div className="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100 shadow-sm relative overflow-hidden">
            
            {/* Header */}
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold text-slate-900">
                Book a <span className="text-dark-orange">Visit</span>
              </h2>
              <p className="text-slate-500 text-[11px] mt-1">
                Details will be sent to our WhatsApp instantly.
              </p>
            </div>

            <form onSubmit={handleWhatsAppRedirect} className="space-y-3">
              {/* Name - Full Width */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  required
                  type="text" 
                  placeholder="Your Full Name" 
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-orange-100 transition-all placeholder:text-slate-400"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Location & Phone Group */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                  <input 
                    required
                    type="text" 
                    placeholder="Location" 
                    className="w-full pl-11 pr-3 py-3 rounded-2xl bg-white border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-orange-100 placeholder:text-slate-400"
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                  <input 
                    required
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full pl-11 pr-3 py-3 rounded-2xl bg-white border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-orange-100 placeholder:text-slate-400"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              {/* Date & Time Group - Designed exactly like Location/Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={15} />
                  <input 
                    required
                    type="date" 
                    className="w-full pl-11 pr-3 py-3 rounded-2xl bg-white border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-orange-100 appearance-none min-h-[46px]"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={15} />
                  <input 
                    required
                    type="time" 
                    className="w-full pl-11 pr-3 py-3 rounded-2xl bg-white border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-orange-100 appearance-none min-h-[46px]"
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              {/* Action Button */}
              <button 
                type="submit"
                className="w-full mt-4 bg-[#25D366] text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-100 active:scale-95 transition-all flex items-center justify-center gap-3 text-sm"
              >
                <MessageCircle size={20} fill="currentColor" />
                Confirm on WhatsApp
              </button>

              <div className="flex items-center justify-center gap-1.5 pt-2">
                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                   Fast Response
                 </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}