import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { 
  PhoneIcon, 
  MenuIcon, 
  XIcon, 
  SunIcon, 
  MoonIcon, 
  ChevronDownIcon, 
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
    { name: 'Specialties', target: '#services' },
    { name: 'Our Doctors', target: '#doctors' },
    { name: 'Technology', target: '#amenities' },
    { name: 'Locations', target: '#locations' },
    { name: 'Reviews', target: '#reviews' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f4f1ea]/95 dark:bg-[#111713]/95 backdrop-blur-md shadow-sm border-b border-[#e4ded4] dark:border-[#233027]' 
          : 'bg-[#f4f1ea]/90 dark:bg-[#111713]/90 backdrop-blur-sm'
      }`}
      role="banner"
    >
      {/* Top announcement strip */}
      <div className="bg-[#243328] dark:bg-[#0c120e] text-[#e7efe9] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#cb6336] animate-ping" />
            <span className="text-[#c1d1c4] hidden sm:inline">24/7 Acute Eye Emergency Care:</span>
            <span className="text-white font-bold">On-Call Doctor Available</span>
          </div>
          <div className="flex items-center gap-4 text-[#c1d1c4]">
            <span className="hidden md:inline">Wyomissing • Douglassville • Myerstown</span>
            <a href="tel:6103743134" className="text-white hover:text-[#eda68d] font-bold underline">
              (610) 374-3134
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Brand (Botanical circular leaf/eye emblem like template logo) */}
        <button 
          onClick={(e) => handleNavClick(e, '#')} 
          className="flex items-center gap-3 group text-left"
          aria-label="Wyomissing Optometric Center Home"
        >
          <div className="w-10 h-10 rounded-full bg-[#6c8572] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18M3 12c4-4 8-4 12 0s8 4 12 0" />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#1f2b22] dark:text-white leading-tight">
              Wyomissing Optometric
            </span>
            <span className="text-[11px] tracking-wide text-[#5a7260] dark:text-[#a7c1ab] font-medium">
              advanced vision care • est. 1980
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleNavClick(e, link.target)}
              className="text-sm font-semibold text-[#2b3d30] dark:text-[#d3ded5] hover:text-[#cb6336] dark:hover:text-[#eda68d] transition-colors"
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
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#2b3d30] dark:text-white hover:bg-[#e7e1d6] dark:hover:bg-[#1a251e] border border-[#d8d1c4] dark:border-[#2b3b30] transition"
              aria-expanded={locationDropdownOpen}
            >
              <PhoneIcon className="w-3.5 h-3.5 text-[#5a7260]" />
              <span>Offices</span>
              <ChevronDownIcon className="w-3 h-3" />
            </button>

            {locationDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#17201a] rounded-2xl shadow-xl border border-[#e4ded4] dark:border-[#253229] p-2.5 z-50 animate-in fade-in slide-in-from-top-2">
                <p className="text-[10px] font-bold text-[#7a8f80] uppercase tracking-wider px-2 py-1">Direct Dial Locations</p>
                {BUSINESS_INFO.locations.map(loc => (
                  <a
                    key={loc.id}
                    href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                    className="flex flex-col p-2 rounded-xl hover:bg-[#f4f1ea] dark:hover:bg-[#202b23] transition text-left"
                    onClick={() => setLocationDropdownOpen(false)}
                  >
                    <span className="font-bold text-xs text-[#1f2b22] dark:text-white">{loc.name}</span>
                    <span className="text-xs text-[#cb6336] font-semibold">{loc.phone}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Toggle */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2.5 rounded-full border border-[#d8d1c4] dark:border-[#2b3b30] bg-white dark:bg-[#17201a] text-[#2b3d30] dark:text-white hover:border-[#6c8572] transition cursor-pointer shadow-sm active:scale-95"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <SunIcon className="w-4 h-4 text-amber-400" />
            ) : (
              <MoonIcon className="w-4 h-4 text-[#38473c]" />
            )}
          </button>

          {/* Terracotta Primary Action Button (Matching Template Button) */}
          <button
            onClick={() => onOpenWizard()}
            className="btn-terracotta px-5 py-2.5 text-sm flex items-center gap-2"
            aria-label="Book an Appointment"
          >
            <CalendarIcon className="w-4 h-4 text-white" />
            <span>Book Exam</span>
          </button>
        </div>

        {/* Mobile Menu & Action Buttons */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2 rounded-full border border-[#d8d1c4] dark:border-[#2b3b30] bg-white dark:bg-[#17201a] text-[#2b3d30] dark:text-white"
            aria-label="Toggle theme"
          >
            {darkMode ? <SunIcon className="w-4 h-4 text-amber-400" /> : <MoonIcon className="w-4 h-4 text-[#38473c]" />}
          </button>

          <button
            onClick={() => onOpenWizard()}
            className="btn-terracotta px-3.5 py-2 text-xs"
          >
            Book
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#2b3d30] dark:text-white hover:bg-black/5"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#f4f1ea] dark:bg-[#111713] border-b border-[#e4ded4] dark:border-[#233027] px-5 pt-3 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleNavClick(e, link.target)}
              className="w-full text-left px-3.5 py-3 rounded-xl text-base font-semibold text-[#1f2b22] dark:text-white hover:bg-[#eae5dc] dark:hover:bg-[#1a251e] transition"
            >
              {link.name}
            </button>
          ))}

          <div className="pt-4 border-t border-[#e4ded4] dark:border-[#233027] space-y-2.5">
            <p className="text-xs font-bold text-[#6c8572] uppercase tracking-wider px-1">Call Our Offices:</p>
            {BUSINESS_INFO.locations.map(loc => (
              <a
                key={loc.id}
                href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-white dark:bg-[#17201a] border border-[#e4ded4] dark:border-[#253229] text-sm"
              >
                <span className="font-semibold text-[#1f2b22] dark:text-white">{loc.name}</span>
                <span className="text-[#cb6336] font-bold">{loc.phone}</span>
              </a>
            ))}

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenWizard(); }}
              className="btn-terracotta w-full mt-2 py-3 text-sm"
            >
              Schedule Eye Exam Online
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
