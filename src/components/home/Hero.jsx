import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { IMAGES } from '../../data/imageManifest';
import { 
  ArrowRightIcon, 
  PhoneIcon, 
  ShieldCheckIcon, 
  MapPinIcon, 
  AlertCircleIcon, 
  SparklesIcon,
  EyeIcon
} from '../common/Icons';

const HERO_GALLERY = [
  {
    id: 'retinal',
    title: 'Advanced Retinal Diagnostics',
    subtitle: 'AdaptDx & Spectralis OCT Center',
    src: IMAGES.hero.src,
    alt: IMAGES.hero.alt,
    tag: 'Clinical Specialty'
  },
  {
    id: 'retinoscopy',
    title: 'Comprehensive & Pediatric Exams',
    subtitle: 'Precision Vision & Myopia Management',
    src: IMAGES.exam.src,
    alt: IMAGES.exam.alt,
    tag: 'Primary Care'
  },
  {
    id: 'laser',
    title: 'Refractive & Cataract Suite',
    subtitle: 'Laser & Surgical Co-Management',
    src: IMAGES.laser.src,
    alt: IMAGES.laser.alt,
    tag: 'Surgical Partners'
  },
  {
    id: 'optical',
    title: 'Designer Optical Boutique',
    subtitle: '1,200+ Artisan & Luxury Frames',
    src: IMAGES.eyewearBoutique.src,
    alt: IMAGES.eyewearBoutique.alt,
    tag: 'Eyewear Gallery'
  }
];

export default function Hero({ onOpenWizard }) {
  const [selectedOffice, setSelectedOffice] = useState('wyomissing');
  const [activeSlide, setActiveSlide] = useState(0);

  const currentLoc = BUSINESS_INFO.locations.find(l => l.id === selectedOffice) || BUSINESS_INFO.locations[0];
  const activeHeroMedia = HERO_GALLERY[activeSlide];

  return (
    <section className="relative px-3 sm:px-6 lg:px-8 pt-4 pb-12 overflow-hidden" aria-label="Welcome & Vision Care">
      {/* Framed Hero Canvas Card (spectrum.life visual DNA) */}
      <div className="max-w-7xl mx-auto rounded-3xl sm:rounded-[40px] bg-[#e2e7fc] dark:bg-[#111728] border-2 border-indigo-200/70 dark:border-indigo-900/40 p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-thick transition-colors duration-300">
        
        {/* Soft decorative background ambient glows with floating animation */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/25 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-pink-400/25 dark:bg-pink-600/15 rounded-full blur-3xl pointer-events-none animate-float-delayed" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        {/* Top Header Badge */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 mb-6 sm:mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-md border border-indigo-200/80 dark:border-white/10 shadow-sm text-xs sm:text-sm font-semibold text-slate-800 dark:text-indigo-200 hover:scale-105 transition-transform">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>45+ Years of Clinical Excellence • 3 Berks & Lebanon Offices</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-bold animate-pulse">
            <AlertCircleIcon className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>24/7 Eye Emergency On-Call</span>
          </div>
        </div>

        {/* Centered Hero Headline (Direct spectrum.life inspiration) */}
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="font-heading font-extrabold tracking-tight text-3xl sm:text-5xl lg:text-6xl text-[#0b0f19] dark:text-white leading-[1.12]">
            Precision vision care, <br className="hidden sm:inline" />
            for a <span className="spectrum-text-gradient">full spectrum life.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Berks and Lebanon County's leading independent optometric practice. Comprehensive eye exams, advanced retinal diagnostics, LipiFlow dry eye relief, and bespoke designer eyewear.
          </p>

          {/* Primary Action Controls (Tactile dark pill CTA like spectrum.life) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenWizard()}
              className="btn-shimmer w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0b0f19] hover:bg-[#1a233a] dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#0b0f19] font-bold text-base transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95 group"
              aria-label="Request an Appointment"
            >
              <span>Schedule Eye Exam</span>
              <div className="w-7 h-7 rounded-full bg-white/20 dark:bg-[#0b0f19]/10 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                <ArrowRightIcon className="w-4 h-4 text-current" />
              </div>
            </button>

            <a
              href="tel:6103743134"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/90 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-base border-2 border-slate-200/80 dark:border-slate-700 transition-all flex items-center justify-center gap-2.5 shadow-sm active:scale-95 hover:border-indigo-400"
              aria-label="Call Wyomissing Optometric Center"
            >
              <PhoneIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>(610) 374-3134</span>
            </a>
          </div>

          {/* Location Quick Switcher Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">Choose Office:</span>
            {BUSINESS_INFO.locations.map(loc => (
              <button
                key={loc.id}
                onClick={() => setSelectedOffice(loc.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  selectedOffice === loc.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-105'
                    : 'bg-white/75 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-300/80 dark:border-slate-700 hover:bg-white'
                }`}
              >
                {loc.city}
              </button>
            ))}
          </div>

          {/* Office Quick Contact Strip */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-900/60 backdrop-blur px-4 py-2 rounded-2xl border border-indigo-200/60 dark:border-slate-800 shadow-sm">
            <MapPinIcon className="w-4 h-4 text-indigo-600 shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white">{currentLoc.name}:</span>
            <span>{currentLoc.street}</span>
            <span className="text-slate-400">•</span>
            <a href={`tel:${currentLoc.phone.replace(/[^0-9]/g, '')}`} className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
              {currentLoc.phone}
            </a>
          </div>
        </div>

        {/* Visual Showcase: Organic Spectrum Wave Silhouette + Patient / Doctor Visual */}
        <div className="relative mt-10 sm:mt-12 pt-4">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-white/80 dark:border-slate-700/60 shadow-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 group">
            
            {/* Dynamic visual viewport */}
            <div className="h-72 sm:h-96 lg:h-[420px] relative flex items-end justify-center overflow-hidden">
              
              {/* Vibrant gradient curves simulating spectral optical wavelengths */}
              <div 
                className="absolute inset-0 opacity-80 mix-blend-screen pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 20% 100%, #f43f5e 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, #7c3aed 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, #2563eb 0%, transparent 60%)'
                }}
              />

              {/* High-definition doctor & patient authentic imagery */}
              <img 
                key={activeHeroMedia.src}
                src={activeHeroMedia.src} 
                alt={activeHeroMedia.alt}
                className="w-full h-full object-cover object-center opacity-95 transition-all duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Top Right Tag Badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-bold text-white shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                <span>{activeHeroMedia.tag}</span>
              </div>

              {/* Gradient overlay for bottom badge contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Bottom Feature Badges */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
                    <EyeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-indigo-200 font-semibold">{activeHeroMedia.subtitle}</p>
                    <p className="text-base sm:text-lg font-bold">{activeHeroMedia.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-semibold">
                  <div className="flex text-amber-400 text-sm">
                    {'★★★★★'.split('').map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span>4.9 / 5.0 (680+ Patient Reviews)</span>
                </div>
              </div>
            </div>

            {/* Interactive Thumbnail Gallery Bar */}
            <div className="bg-slate-900/90 backdrop-blur-md p-2.5 sm:p-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {HERO_GALLERY.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`p-2 rounded-xl flex items-center gap-2.5 text-left transition-all ${
                    activeSlide === idx 
                      ? 'bg-white/20 border border-white/40 shadow-sm' 
                      : 'bg-white/5 border border-white/5 hover:bg-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-10 h-10 rounded-lg object-cover shrink-0 border border-white/20"
                  />
                  <div className="truncate">
                    <p className="text-xs font-bold text-white truncate">{item.title}</p>
                    <p className="text-[10px] text-slate-300 truncate">{item.tag}</p>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* 3 Value Pillars with subtle hover elevates */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-4 max-w-5xl mx-auto">
          <div className="bg-white/85 dark:bg-slate-900/80 backdrop-blur-sm p-4 rounded-2xl border border-indigo-100 dark:border-slate-800 flex items-center gap-3.5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900 dark:text-white">Award-Winning Doctors</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Salus Univ. Presidential Medal</p>
            </div>
          </div>

          <div className="bg-white/85 dark:bg-slate-900/80 backdrop-blur-sm p-4 rounded-2xl border border-indigo-100 dark:border-slate-800 flex items-center gap-3.5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <AlertCircleIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900 dark:text-white">24/7 Acute Triage</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Direct on-call doctor access</p>
            </div>
          </div>

          <div className="bg-white/85 dark:bg-slate-900/80 backdrop-blur-sm p-4 rounded-2xl border border-indigo-100 dark:border-slate-800 flex items-center gap-3.5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <SparklesIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900 dark:text-white">Full Optical Gallery</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">1,200+ designer frames</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
