import React, { useState } from 'react';
import { MessageCircle, MapPin, Calendar, Clock, User, Phone, ArrowRight } from "lucide-react";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";

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
    <Section className="py-8 bg-white overflow-hidden">
      <Container>
        <div className="max-w-md mx-auto">
          
          {/* Main Orange Gradient Card */}
          <div className="bg-linear-to-br from-[#FF5C00] to-[#FF8A00] rounded-[2.5rem] p-1.5 shadow-2xl shadow-orange-200 relative">
            
            {/* Header Area - Reduced padding */}
            <div className="px-6 pt-6 pb-5 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-3 py-1 rounded-full mb-2 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300"></span>
                </span>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Available Now</span>
              </div>
              <h2 className="text-xl font-black text-white tracking-tight uppercase">
                Schedule A <span className="text-orange-100">Site Visit</span>
              </h2>
              <p className="text-orange-50 text-[12px] leading-relaxed mt-2 font-medium opacity-90 px-2">
                Visit your future home in person — choose a convenient time and our experts will guide you.
              </p>
            </div>

            {/* Inner White Form Card */}
            <div className="bg-white rounded-[2.2rem] p-5 md:p-6 shadow-inner">
              <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                
                {/* Input Groups - Tightened space-y */}
                <div className="space-y-2">
                  {/* Full Name */}
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={15} />
                    <input 
                      required
                      type="text" 
                      placeholder="Your Full Name" 
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-orange-50/50 border border-orange-100 text-xs font-bold text-slate-700 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  {/* Location & Phone Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-orange-500" size={14} />
                      <input 
                        required
                        type="text" 
                        placeholder="Area" 
                        className="w-full pl-10 pr-3 py-3 rounded-2xl bg-orange-50/50 border border-orange-100 text-xs font-bold text-slate-700 outline-none"
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-orange-500" size={14} />
                      <input 
                        required
                        type="tel" 
                        placeholder="Phone" 
                        className="w-full pl-10 pr-3 py-3 rounded-2xl bg-orange-50/50 border border-orange-100 text-xs font-bold text-slate-700 outline-none"
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none" size={14} />
                      <input 
                        required
                        type="date" 
                        className="w-full pl-10 pr-2 py-3 rounded-2xl bg-orange-50/50 border border-orange-100 text-[11px] font-black text-slate-800 outline-none appearance-none"
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none" size={14} />
                      <input 
                        required
                        type="time" 
                        className="w-full pl-10 pr-2 py-3 rounded-2xl bg-orange-50/50 border border-orange-100 text-[11px] font-black text-slate-800 outline-none appearance-none"
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Confirm Button - Gap significantly reduced */}
                <div className="pt-1">
                  <button 
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#1eb956] text-white font-black py-4 rounded-3xl shadow-xl shadow-green-100 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-tighter"
                  >
                    Confirm Appointment
                    <ArrowRight size={18} />
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 mt-3 opacity-60">
                    <MessageCircle size={12} className="text-[#25D366]" fill="currentColor" />
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      Instant WhatsApp Confirmation
                    </p>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}