import React from 'react';

export default function BrandMark({ size = 36, className = '' }) {
  return (
    <div 
      className={`inline-flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 p-[1.5px] shadow-sm shadow-blue-500/20 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="w-full h-full bg-[#0B1020] rounded-[10px] flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5"
        >
          {/* Vertical stem */}
          <path
            d="M9 7V25"
            stroke="#3B82F6"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          {/* Loop of R */}
          <path
            d="M9 8.5H16.5C19.8137 8.5 22.5 11.1863 22.5 14.5C22.5 17.8137 19.8137 20.5 16.5 20.5H9"
            stroke="#60A5FA"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Diagonal leg of R */}
          <path
            d="M15 20.5L23 25"
            stroke="#93C5FD"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Forward accent node */}
          <circle cx="23.5" cy="8.5" r="1.75" fill="#3B82F6" />
        </svg>
      </div>
    </div>
  );
}
