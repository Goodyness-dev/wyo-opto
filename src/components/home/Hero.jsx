import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { IMAGES } from '../../data/imageManifest';
import { 
  ArrowRightIcon, 
  PhoneIcon, 
  MapPinIcon, 
  AlertCircleIcon, 
  EyeIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CalendarIcon
} from '../common/Icons';

const HERO_GALLERY = [
  {
    id: 'retinal',
    title: 'Advanced Retinal Diagnostics',
    subtitle: 'AdaptDx & Spectralis OCT Center',
    src: IMAGES.hero.src,
    alt: IMAGES.hero.alt,
    badge: 'Diagnostic Standard'
  },
  {
    id: 'retinoscopy',
    title: 'Comprehensive & Pediatric Exams',
    subtitle: 'Precision Vision & Myopia Management',
    src: IMAGES.exam.src,
    alt: IMAGES.exam.alt,
    badge: 'Primary Care'
  },
  {
    id: 'laser',
    title: 'Refractive & Cataract Suite',
    subtitle: 'Laser & Surgical Co-Management',
    src: IMAGES.laser.src,
    alt: IMAGES.laser.alt,
    badge: 'Surgical Partners'
  },
  {
    id: 'optical',
    title: 'Designer Optical Boutique',
    subtitle: '1,200+ Artisan & Luxury Frames',
    src: IMAGES.eyewearBoutique.src,
    alt: IMAGES.eyewearBoutique.alt,
    badge: 'Curated Eyewear'
  }
];

export default function Hero({ onOpenWizard }) {
  const [selectedOffice, setSelectedOffice] = useState('wyomissing');
  const [activeSlide, setActiveSlide] = useState(0);

  const currentLoc = BUSINESS_INFO.locations.find(l => l.id === selectedOffice) || BUSINESS_INFO.locations[0];
  const activeMedia = HERO_GALLERY[activeSlide];

  return (
    <section className="px-3 sm:px-6 lg:px-8 pt-2 pb-10" aria-label="Welcome & Vision Care">
      {/* Master Sage Green Card (Direct mirror of template hero canvas) */}
      <div className="max-w-7xl mx-auto rounded-[36px] sm:rounded-[44px] bg-[#768e7b] dark:bg-[#1a251e] border-2 border-[#8ba290]/40 dark:border-[#2b3b30] p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-thick transition-colors">
        
        {/* Subtle decorative botanical background pattern */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Dark Forest Typography on Sage (Template Style) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-white/40 shadow-xs text-xs font-bold text-[#1f2b22] dark:text-[#d3ded5]">
              <span className="w-2 h-2 rounded-full bg-[#cb6336] animate-pulse" />
              <span>Independent & Doctor-Led Since 1980</span>
            </div>

            {/* Template-Inspired Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl text-[#18241b] dark:text-white leading-[1.12] tracking-tight">
              Vision care you'll trust from your <br className="hidden sm:inline" />
              very first visit.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#253629] dark:text-[#cad8cd] font-normal leading-relaxed max-w-lg">
              Comprehensive eye examinations, early dark-adaptation macular detection, targeted LipiFlow dry eye therapies, and curated designer eyewear across 3 modern Berks & Lebanon County offices.
            </p>

            {/* Action Buttons: Terracotta Pill CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenWizard()}
                className="btn-terracotta btn-shimmer px-7 py-3.5 text-base flex items-center justify-center gap-3"
                aria-label="Schedule an Eye Exam"
              >
                <span>Schedule Eye Exam</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              <a
                href="tel:6103743134"
                className="px-6 py-3.5 rounded-full bg-white/90 dark:bg-[#131b15] hover:bg-white dark:hover:bg-[#1f2b22] text-[#1f2b22] dark:text-white font-bold text-base border border-white/60 dark:border-[#2b3b30] transition-all flex items-center justify-center gap-2 shadow-xs active:scale-95"
              >
                <PhoneIcon className="w-4 h-4 text-[#5a7260]" />
                <span>(610) 374-3134</span>
              </a>
            </div>

            {/* Template Bottom 3 Botanical Tags */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/10 text-xs font-semibold text-[#1f2b22] dark:text-white">
                <span className="text-emerald-700 dark:text-emerald-400">✦</span>
                <span>45+ Yrs Mentorship</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/10 text-xs font-semibold text-[#1f2b22] dark:text-white">
                <span className="text-rose-600 dark:text-rose-400">♥</span>
                <span>3 Berks Offices</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/10 text-xs font-semibold text-[#1f2b22] dark:text-white">
                <span className="text-amber-600 dark:text-amber-400">●</span>
                <span>24/7 Acute Triage</span>
              </div>
            </div>

            {/* Location Switcher Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#233527] dark:text-[#a7c1ab]">Office:</span>
              {BUSINESS_INFO.locations.map(loc => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedOffice(loc.id)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                    selectedOffice === loc.id
                      ? 'bg-[#18241b] text-white border-[#18241b] shadow-sm'
                      : 'bg-white/60 dark:bg-white/5 text-[#18241b] dark:text-white border-white/40 hover:bg-white'
                  }`}
                >
                  {loc.city}
                </button>
              ))}
              <span className="text-xs text-[#18241b] dark:text-white/80 font-medium ml-1">
                • {currentLoc.street}
              </span>
            </div>

          </div>

          {/* Right Column: Scooped Organic Ivory Cutout with Product / Clinical Imagery (Template Visual DNA) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#f4f1ea] dark:bg-[#121814] p-4 sm:p-6 border-2 border-white/60 dark:border-[#2b3b30] shadow-xl overflow-hidden group">
              
              {/* Organic visual header badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#6c8572] text-white flex items-center justify-center">
                    <EyeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1f2b22] dark:text-white">{activeMedia.title}</p>
                    <p className="text-[10px] text-[#5a7260] dark:text-[#a7c1ab]">{activeMedia.subtitle}</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#6c8572]/15 text-[#3b5141] dark:text-[#a7c1ab] border border-[#6c8572]/30">
                  {activeMedia.badge}
                </span>
              </div>

              {/* Main Image Frame with zoom on hover */}
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-[24px] overflow-hidden bg-[#e3ece4] dark:bg-[#1a251e]">
                <img 
                  key={activeMedia.src}
                  src={activeMedia.src} 
                  alt={activeMedia.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom organic badge (Matching "100% arabica" seal in template) */}
                <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-[#17201a]/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-[#e4ded4] dark:border-[#253229] shadow-sm flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#6c8572] text-white flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-[#1f2b22] dark:text-white leading-tight">Salus Mentors</p>
                    <p className="text-[9px] text-[#6c8572] dark:text-[#a7c1ab]">Board Certified</p>
                  </div>
                </div>
              </div>

              {/* Interactive Thumbnail Switcher Rail */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                {HERO_GALLERY.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`p-1.5 rounded-xl flex flex-col items-center text-center transition-all ${
                      activeSlide === idx 
                        ? 'bg-white dark:bg-[#1a251e] shadow-sm border border-[#6c8572]' 
                        : 'hover:bg-white/50 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-10 h-10 rounded-lg object-cover mb-1 border border-black/5"
                    />
                    <span className="text-[10px] font-bold text-[#1f2b22] dark:text-white truncate w-full">
                      {item.badge}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
