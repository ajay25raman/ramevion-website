import React from 'react';
import { Search, ClipboardCheck, Palette, Code, Rocket } from 'lucide-react';

const iconMap = {
  Search,
  ClipboardCheck,
  Palette,
  Code,
  Rocket
};

export default function ProcessStep({ step }) {

  const IconComponent = iconMap[step.iconName] || Search;

  return (
    <div className="relative flex flex-col h-full rounded-2xl bg-[#111A2E]/90 border border-slate-800/80 p-6 sm:p-7 hover:border-blue-500/30 transition-all">
      {/* Top row: Step number & Icon */}
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-2xl font-extrabold text-blue-400/80 tracking-tight">
          {step.step}
        </span>
        <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
          <IconComponent className="w-5 h-5" aria-hidden="true" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2">
        {step.title}
      </h3>

      {/* Summary */}
      <p className="text-xs sm:text-sm text-blue-300 font-medium mb-3">
        {step.summary}
      </p>

      {/* Details */}
      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-grow">
        {step.details}
      </p>

      {/* Deliverables snippet */}
      <div className="mt-5 pt-4 border-t border-slate-800/80">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
          Expected Deliverables:
        </span>
        <p className="text-xs text-slate-300 font-medium">
          {step.deliverables}
        </p>
      </div>
    </div>
  );
}
