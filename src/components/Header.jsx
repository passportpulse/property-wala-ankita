import { ArrowUpRight } from "lucide-react"; // Refined icon
import { useNavigate } from "react-router-dom";

export default function Header({
  tag,
  title,
  highlight,
  subtitle,
  buttonText,
  onButtonClick, 
}) {
  const navigate = useNavigate();
  return (
    <div className="relative mb-8 border-l-4 border-dark-orange pl-4 flex flex-col gap-3">
      {/* TAG */}
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
          {tag}
        </span>

        {/* TITLE */}
        <h2 className="text-lg lg:text-4xl font-bold text-slate-800 leading-tight mt-1">
          {title} <span className="text-dark-orange">{highlight}</span>
        </h2>
      </div>

      {/* SUBTITLE */}
      {subtitle && (
        <p className="text-slate-500 text-xs lg:text-sm max-w-lg leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* BUTTON - Refined with better spacing and arrow */}
      {buttonText && (
        <button
          onClick={() => navigate(onButtonClick)}
          className="
            mt-2
            cursor-pointer
            bg-dark-orange text-white
            inline-flex items-center gap-2 group
            text-[10px] lg:text-[11px]
            font-black uppercase tracking-widest
            px-5 py-2.5
            rounded-md
            border-2 border-transparent
            hover:bg-white hover:text-dark-orange hover:border-dark-orange
            transition-all duration-300
            shadow-md hover:shadow-orange-100
            w-fit
          "
        >
          {buttonText}
          <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      )}
    </div>
  );
}
