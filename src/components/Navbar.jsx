import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import BrandMark from './BrandMark';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const getLinkClasses = ({ isActive }) =>
    `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
      isActive
        ? 'text-blue-400 bg-blue-500/10 font-semibold border border-blue-500/20'
        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
    }`;

  const getMobileLinkClasses = ({ isActive }) =>
    `flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all ${
      isActive
        ? 'text-blue-400 bg-blue-500/15 font-semibold border border-blue-500/25'
        : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1020]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-[#0B1020]/80 backdrop-blur-sm border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg p-1"
            aria-label="RAMEVION Technologies - Home"
          >
            <BrandMark size={38} />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                RAMEVION
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 -mt-1">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={getLinkClasses}
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-sm shadow-blue-500/25 hover:shadow-blue-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Discuss Your Idea</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 border border-slate-700/60"
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-slate-800 bg-[#0E1528] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2 mb-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={getMobileLinkClasses}
                end={link.path === '/'}
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-500" aria-hidden="true">→</span>
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-3">
            <div className="flex items-center gap-2 px-1 text-xs text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              <span>Born in a Village. Built for the World.</span>
            </div>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-600/30 transition-colors"
            >
              <span>Discuss Your Idea</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
