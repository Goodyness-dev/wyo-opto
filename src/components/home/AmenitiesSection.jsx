import React from 'react';
import { AMENITIES } from '../../data/amenitiesData';
import { IMAGES } from '../../data/imageManifest';
import { 
  MicroscopeIcon, 
  AlertCircleIcon, 
  MapPinIcon, 
  ShieldCheckIcon, 
  GlassesIcon, 
  SparklesIcon, 
  CheckIcon,
  ArrowRightIcon
} from '../common/Icons';

export default function AmenitiesSection({ onOpenWizard }) {
  const getIcon = (name) => {
    switch(name) {
      case 'MicroscopeIcon': return <MicroscopeIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'AlertCircleIcon': return <AlertCircleIcon className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'MapPinIcon': return <MapPinIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'ShieldCheckIcon': return <ShieldCheckIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'GlassesIcon': return <GlassesIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      default: return <SparklesIcon className="w-6 h-6 text-amber-500" />;
    }
  };

  const AMENITY_IMAGE_MAP = {
    'diagnostic-tech': IMAGES.laser.src,
    'optical-boutique': IMAGES.eyewearBoutique.src,
    'emergency-triage': IMAGES.hero.src,
    'patient-comfort': IMAGES.precisionGlasses.src,
  };

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-[#f4f6fe] dark:bg-[#090d16] transition-colors" aria-labelledby="amenities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <MicroscopeIcon className="w-3.5 h-3.5" />
            <span>State-of-the-Art Diagnostic Suite</span>
          </div>

          <h2 id="amenities-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            Advanced Diagnostic Technology & <br className="hidden sm:inline" />
            Patient Comfort Conveniences
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {AMENITIES.subtitle}
          </p>
        </div>

        {/* Features Bento Grid with Visual Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {AMENITIES.features.map((feat) => {
            const featImg = AMENITY_IMAGE_MAP[feat.id];
            return (
              <div 
                key={feat.id} 
                className="card-thick-hover flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {featImg && (
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img 
                        src={featImg} 
                        alt={feat.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-white/20 flex items-center justify-center shadow-md">
                        {getIcon(feat.icon)}
                      </div>
                    </div>
                  )}

                  <div className="p-7 sm:p-8">
                    {!featImg && (
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        {getIcon(feat.icon)}
                      </div>
                    )}
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-6 pt-0">
                  <button 
                    onClick={() => onOpenWizard('Amenity Inquiry', feat.title)}
                    className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn more</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Insurance & Direct Billing Banner */}
        <div className="card-thick p-8 sm:p-12 bg-white dark:bg-[#101522] border-2 border-indigo-100 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Direct Insurance Verification & Financing
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We coordinate directly with major vision and medical carriers so you can maximize your annual benefits.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
            {AMENITIES.insurancePlans.map((plan, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-indigo-300 transition"
              >
                <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="truncate">{plan}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onOpenWizard('Insurance Check')}
              className="btn-shimmer px-7 py-3.5 rounded-full bg-[#0b0f19] hover:bg-indigo-950 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#0b0f19] font-bold text-sm shadow-md transition active:scale-95"
            >
              Verify Your Vision Benefits Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
