import React, { useState } from 'react';
import { SERVICES } from '../../data/servicesData';
import { 
  ArrowRightIcon, 
  EyeIcon, 
  GlassesIcon, 
  SparklesIcon, 
  AlertCircleIcon, 
  ShieldCheckIcon,
  HeartPulseIcon,
  CheckIcon,
  ClockIcon
} from '../common/Icons';

export default function ServicesSection({ onOpenWizard }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Primary Eye Care', 'Medical Diagnostics', 'Specialty Therapies', 'Children\'s Vision', 'Eyewear Boutique'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName) => {
    switch(iconName) {
      case 'EyeIcon': return <EyeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'GlassesIcon': return <GlassesIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'SparklesIcon': return <SparklesIcon className="w-6 h-6 text-amber-500" />;
      case 'AlertCircleIcon': return <AlertCircleIcon className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'HeartPulseIcon': return <HeartPulseIcon className="w-6 h-6 text-pink-600 dark:text-pink-400" />;
      default: return <ShieldCheckIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#f4f6fe] dark:bg-[#090d16] transition-colors" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100/80 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Comprehensive Optometric Specialties</span>
          </div>

          <h2 id="services-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            Full-Spectrum Eye Health & <br className="hidden sm:inline" />
            Advanced Clinical Vision Care
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            From early dark-adaptation macular detection to LipiFlow dry eye therapies and custom scleral lenses, we deliver diagnostic precision for patients of all ages.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="card-thick-hover p-7 sm:p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              onClick={() => onOpenWizard(service.category, service.title)}
            >
              {/* Subtle top card glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-slate-800/80 border border-indigo-100 dark:border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Key Benefits List */}
                <ul className="space-y-2 mb-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                  {service.keyBenefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Duration & CTA */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <ClockIcon className="w-4 h-4 text-slate-400" />
                  {service.duration}
                </span>

                <span className="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                  Schedule Care <ArrowRightIcon className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner for Emergency & Optical Consultation */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#101522] border-2 border-slate-200/90 dark:border-slate-800/90 shadow-thick flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <AlertCircleIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Experiencing an acute eye emergency?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Foreign body in eye, sudden floaters, flashes of light, or sudden vision loss. Immediate on-call triage.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:6103743134"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md text-center active:scale-95 transition"
            >
              Call Emergency Line: (610) 374-3134
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
