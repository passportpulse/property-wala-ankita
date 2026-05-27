import { Phone, MessageCircle, Calendar, FileText, MapPin } from "lucide-react";

export function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg lg:hidden">
      <div className="grid grid-cols-5 text-center">
        
        {/* CALL */}
        <a href="tel:+917699988876" className="py-2 flex flex-col items-center text-xs">
          <Phone size={18} className="text-orange-500 mb-1" />
          Call
        </a>

        {/* WHATSAPP */}
        <a href="https://wa.me/917699988876" target="_blank" className="py-2 flex flex-col items-center text-xs">
          <MessageCircle size={18} className="text-green-500 mb-1" />
          WhatsApp
        </a>

        {/* SCHEDULE VISIT */}
        <a href="/schedule-site-visit" className="py-2 flex flex-col items-center text-xs">
          <Calendar size={18} className="text-blue-500 mb-1" />
          Visit
        </a>

        {/* ROI REPORT */}
        <a href="/expert-advice" className="py-2 flex flex-col items-center text-xs">
          <FileText size={18} className="text-purple-500 mb-1" />
          ROI
        </a>

        {/* MAP */}
        <a href="https://maps.google.com/?q=Suhatta+Mall+Durgapur" target="_blank" className="py-2 flex flex-col items-center text-xs">
          <MapPin size={18} className="text-red-500 mb-1" />
          Office
        </a>

      </div>
    </div>
  );
}
