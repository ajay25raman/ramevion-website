import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Compass } from 'lucide-react';
import BrandMark from './BrandMark';
import { contactInfo } from '../data/contactInfo';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const currentYear = CURRENT_YEAR;


  return (
    <footer className="bg-[#080C18] border-t border-slate-800/80 text-slate-300">
      {/* Top Banner: Vision Statement */}
      <div className="border-b border-slate-800/60 bg-[#0B1020]/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true"></span>
            <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
              Vision: <span className="text-blue-400">“Born in a Village. Built for the World.”</span>
            </p>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 text-center md:text-right">
            Engineering thoughtful digital experiences for businesses of all scales.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg">
              <BrandMark size={36} />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  RAMEVION
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 -mt-1">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A technology brand dedicated to helping people and organizations turn practical ideas and business challenges into useful, reliable, and accessible digital solutions.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                <Compass className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                {contactInfo.tagline}
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm" role="list">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5">
                  Portfolio (Concepts)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5">
                  Contact & Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Launch Placeholder (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Contact & Inquiries
            </h3>

            
            <p className="text-xs text-slate-400">
              Official channels are being established. Replace with confirmed details before deployment.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-mono text-slate-200">{contactInfo.email.primary}</span>
                  <span className="block text-[11px] text-slate-500 font-sans mt-0.5">[Configurable Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-slate-200">{contactInfo.location.display}</span>
                  <span className="block text-[11px] text-slate-500 mt-0.5">{contactInfo.location.note}</span>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors group"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-slate-800/60 bg-[#060914] py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © {currentYear} RAMEVION Technologies. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-500 max-w-md">
            RAMEVION Technologies is an emerging technology brand. All project items displayed in the portfolio represent illustrative concepts and design prototypes.
          </p>
        </div>
      </div>
    </footer>
  );
}
