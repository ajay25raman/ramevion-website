import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle, AlertCircle, Layers, ArrowRight, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Lock body scroll while modal is open and handle escape key
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop click dismiss */}
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl my-8 overflow-hidden rounded-2xl bg-[#0F172A] border border-slate-700/80 shadow-2xl text-slate-200">
        
        {/* Top Disclaimer Header */}
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
            <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Illustrative Concept Prototype • Created for Demonstration</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-7">
          
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/15 text-blue-300 border border-blue-500/25">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                ID: {project.id}
              </span>
            </div>
            
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Illustrative Interface Visual Card */}
          <div className="rounded-xl bg-[#090E1A] border border-slate-800 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 text-xs font-mono text-slate-400">
                  prototype://concept/{project.id}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                {project.demoInterface.badgeText}
              </span>
            </div>

            {/* Simulated UI components */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {project.demoInterface.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#111A2E] border border-slate-700/60 text-center"
                >
                  <Sparkles className="w-4 h-4 text-blue-400 mx-auto mb-1.5" aria-hidden="true" />
                  <span className="text-xs font-medium text-slate-200 block">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 text-center italic pt-1">
              Engineered as a clean, responsive prototype with lightweight footprint.
            </p>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">
                The Practical Challenge
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                The Engineered Approach
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>Key Architectural Highlights</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="list">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Technology Stack Used in Prototype:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-blue-950/60 text-blue-300 border border-blue-800/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="bg-[#0B1020] border-t border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Have a challenge similar to this? We plan customized software for your needs.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
            >
              Close Preview
            </button>
            <Link
              to="/contact"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shrink-0 shadow-sm shadow-blue-500/20"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
