import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { 
  PhoneIcon, 
  MenuIcon, 
  XIcon, 
  SunIcon, 
  MoonIcon, 
  MapPinIcon, 
  ChevronDownIcon, 
  EyeIcon, 
  AlertCircleIcon,
  CalendarIcon
} from '../common/Icons';

export default function Navbar({ onOpenWizard, currentPage = 'home', onNavigate, darkMode, onToggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setLocationDropdownOpen(false);

    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Services & Care', target: '#services' },
    { name: 'Doctors', target: '#doctors' },
    { name: 'Technology', target: '#amenities' },
    { name: '3 Locations', target: '#locations' },
    { name: 'Patient Reviews', target: '#reviews' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800' 
          : 'bg-[#f4f6fe]/90 dark:bg-[#090d16]/90 backdrop-blur-sm border-b border-indigo-100/80 dark:border-slate-800/60'
      }`}
      role="banner"
    >
      {/* Top emergency announcement bar */}
      <div className="bg-[#0b0f19] dark:bg-[#060910] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span className="text-slate-300 hidden sm:inline">24/7 Acute Ocular Emergency Care:</span>
            <span className="text-rose-400 font-bold">Press 1 for On-Call Doctor</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden md:inline">Wyomissing • Douglassville • Myerstown</span>
            <a href="tel:6103743134" className="text-white hover:text-indigo-300 font-bold underline">
              (610) 374-3134
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Brand (Spectrum-style organic wave glyph + bold modern typography) */}
        <button 
          onClick={(e) => handleNavClick(e, '#')} 
          className="flex items-center gap-3.5 group text-left"
          aria-label="Wyomissing Optometric Center Home"
        >
          {/* Custom Optical Spectrum Logo Icon */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl spectrum-gradient p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-[#0b0f19] dark:bg-[#090d16] rounded-[14px] flex items-center justify-center">
              {/* Organic wave optical glyph */}
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 14c2-4 4-7 7-7s5 8 8 5 3-4 3-4" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-2xl font-black tracking-tight text-[#0b0f19] dark:text-white leading-tight">
              wyomissing<span className="text-indigo-600 dark:text-indigo-400">.opto</span>
            </span>
            <span className="text-[11px] tracking-wide text-slate-500 dark:text-slate-400 font-semibold uppercase">
              Optometric Center • Est. 1980
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleNavClick(e, link.target)}
              className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs & Utilities */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Location phone dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition"
              aria-expanded={locationDropdownOpen}
            >
              <PhoneIcon className="w-3.5 h-3.5 text-indigo-600" />
              <span>Call Offices</span>
              <ChevronDownIcon className="w-3.5 h-3.5" />
            </button>

            {locationDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2.5 z-50 animate-in fade-in slide-in-from-top-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">Direct Dial Locations</p>
                {BUSINESS_INFO.locations.map(loc => (
                  <a
                    key={loc.id}
                    href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                    className="flex flex-col p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition text-left"
                    onClick={() => setLocationDropdownOpen(false)}
                  >
                    <span className="font-bold text-xs text-slate-900 dark:text-white">{loc.name}</span>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{loc.phone}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Toggle */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-indigo-400 transition cursor-pointer shadow-sm active:scale-95"
            aria-label={darkMode ? "Switch to light mode" : "Switch to midnight mode"}
          >
            {darkMode ? (
              <SunIcon className="w-4 h-4 text-amber-400" />
            ) : (
              <MoonIcon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => onOpenWizard()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b0f19] hover:bg-indigo-950 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#0b0f19] font-bold text-sm transition-all shadow-sm active:scale-95 group"
            aria-label="Book an Appointment"
          >
            <CalendarIcon className="w-4 h-4 text-current" />
            <span>Book Exam</span>
          </button>
        </div>

        {/* Mobile Menu & Action Buttons */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {darkMode ? <SunIcon className="w-4 h-4 text-amber-400" /> : <MoonIcon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => onOpenWizard()}
            className="px-3.5 py-2 rounded-full bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] text-xs font-bold shadow-sm"
          >
            Book
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800 px-5 pt-3 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleNavClick(e, link.target)}
              className="w-full text-left px-3.5 py-3 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition"
            >
              {link.name}
            </button>
          ))}

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">Call Our Offices:</p>
            {BUSINESS_INFO.locations.map(loc => (
              <a
                key={loc.id}
                href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm"
              >
                <span className="font-semibold text-slate-800 dark:text-slate-200">{loc.name}</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">{loc.phone}</span>
              </a>
            ))}

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenWizard(); }}
              className="w-full mt-2 py-3 rounded-full bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] font-bold text-sm shadow-md"
            >
              Schedule Eye Exam Online
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
