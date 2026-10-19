import React from 'react';

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  theme = 'dark',
  className = ''
}) {
  const isCentered = align === 'center';
  const isLight = theme === 'light';

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 ${
          isLight 
            ? 'bg-blue-100 text-blue-800 border border-blue-200' 
            : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
        isLight ? 'text-slate-900' : 'text-white'
      }`}>
        {title}
      </h2>

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          isLight ? 'text-slate-600' : 'text-slate-400'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
