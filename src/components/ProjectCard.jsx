import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';


export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div className="card-glow group relative flex flex-col justify-between rounded-2xl bg-[#111A2E]/90 border border-slate-800/80 p-6 sm:p-7 hover:border-blue-500/40 transition-all duration-300">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true"></span>
            <span>{project.type}</span>
          </span>

          <span className="text-[11px] font-medium text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-md border border-slate-700/40">
            {project.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="mt-1 text-xs text-blue-400 font-medium">
          {project.tagline}
        </p>

        {/* Problem and Solution Highlights */}
        <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Architecture snippet preview box */}
        <div className="mt-5 p-3 rounded-xl bg-[#090E1A] border border-slate-800/80">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              Focus Problem:
            </span>
            <span className="text-amber-400 font-mono text-[10px]">Challenge Analysis</span>
          </div>
          <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Technologies List */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] text-slate-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Action */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600/90 hover:bg-blue-600 active:bg-blue-700 rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label={`Explore concept details for ${project.title}`}
        >
          <span>Explore Concept Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
