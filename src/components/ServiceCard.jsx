import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Server, Cpu, Layout, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  Server,
  Cpu,
  Layout,
  ShieldCheck,
};

export default function ServiceCard({ service, detailed = false }) {
  const IconComponent = iconMap[service.iconName] || Globe;

  return (
    <div className="card-glow group relative flex flex-col justify-between rounded-2xl bg-[#111A2E]/90 border border-slate-800/80 p-6 sm:p-7 hover:border-blue-500/40 transition-all duration-300">
      <div>
        {/* Icon & Category Pill */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600/20 transition-all">
            <IconComponent className="w-6 h-6" aria-hidden="true" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-700/40">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          {detailed ? service.fullDescription : service.shortDescription}
        </p>

        {/* Key Deliverables / Highlights */}
        {detailed && service.deliverables && (
          <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Potential Deliverables:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300" role="list">
              {service.deliverables.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action Link */}
      <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors focus:outline-none focus-visible:underline"
        >
          <span>{detailed ? 'Inquire About This Service' : 'Explore Service Details'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
