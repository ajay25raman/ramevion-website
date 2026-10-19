import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

import PageContainer from '../components/PageContainer';
import SEOHead from '../components/SEOHead';
import BrandMark from '../components/BrandMark';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 — Page Not Found"
        description="The requested page could not be found on RAMEVION Technologies."
        noindex={true}
      />


      <section className="flex-grow flex items-center justify-center py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#111A2E] to-[#0B1020]">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />

        <PageContainer className="relative z-10 text-center max-w-xl mx-auto space-y-6">
          <div className="flex justify-center mb-2">
            <BrandMark size={48} />
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block">
            Error 404 • Destination Not Found
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Page Not Located
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            The page or resource you requested does not exist or may have been repositioned. Let us help you get back to our core sections.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl transition-colors"
            >
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Contact Support</span>
            </Link>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
