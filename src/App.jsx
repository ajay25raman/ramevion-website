import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-[#0B1020] text-[#F8FAFC]">
        {/* Accessible skip link for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg border border-white/20 outline-none ring-2 ring-white"
        >
          Skip to main content
        </a>

        {/* Global Responsive Navigation */}
        <Navbar />

        {/* Primary Page Content */}
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
