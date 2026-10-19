import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PageContainer from './PageContainer';

export default function PageHero({
  badge,
  title,
  highlight,
  description,
  breadcrumbs = [],
  children
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#111A2E] via-[#0B1020] to-[#0B1020] pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-800/60">
      {/* Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 hero-glow pointer-events-none" aria-hidden="true" />

      <PageContainer className="relative z-10">
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-white transition-colors">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-blue-400 font-medium">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Hero Content */}
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true"></span>
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}{' '}
            {highlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                {highlight}
              </span>
            )}
          </h1>

          {description && (
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </PageContainer>
    </section>
  );
}
