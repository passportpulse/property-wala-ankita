import React from "react";

export default function Header({ tag, title, highlight, subtitle }) {
  return (
    <div className="relative mb-6 border-l-4 border-orange-600 pl-4">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
        {tag}
      </span>

      <h2 className="text-xl lg:text-4xl font-black text-slate-800">
        {title} <span className="text-orange-600">{highlight}</span>
      </h2>

      {subtitle && (
        <p className="text-slate-500 text-xs lg:text-base max-w-md">
          {subtitle}
        </p>
      )}
    </div>
  );
}
