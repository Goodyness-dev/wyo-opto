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
      case 'MicroscopeIcon': return <MicroscopeIcon className="w-5 h-5 text-[#5a7260]" />;
      case 'AlertCircleIcon': return <AlertCircleIcon className="w-5 h-5 text-[#cb6336]" />;
      case 'MapPinIcon': return <MapPinIcon className="w-5 h-5 text-[#5a7260]" />;
      case 'ShieldCheckIcon': return <ShieldCheckIcon className="w-5 h-5 text-[#5a7260]" />;
      case 'GlassesIcon': return <GlassesIcon className="w-5 h-5 text-[#5a7260]" />;
      default: return <SparklesIcon className="w-5 h-5 text-[#cb6336]" />;
    }
  };

  const AMENITY_IMAGE_MAP = {
    'diagnostic-tech': IMAGES.laser.src,
    'optical-boutique': IMAGES.eyewearBoutique.src,
    'emergency-triage': IMAGES.hero.src,
    'patient-comfort': IMAGES.precisionGlasses.src,
  };

  return (
    <section id="amenities" className="py-16 sm:py-24 bg-[#f4f1ea] dark:bg-[#111713] transition-colors" aria-labelledby="amenities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6c8572]/15 text-[#3b5141] dark:text-[#a7c1ab] text-xs font-bold uppercase tracking-wider">
            <MicroscopeIcon className="w-3.5 h-3.5" />
            <span>Diagnostic Suite & Patient Amenities</span>
          </div>

          <h2 id="amenities-heading" className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1f2b22] dark:text-white tracking-tight">
            Advanced Diagnostic Technology & Patient Conveniences
          </h2>

          <p className="text-xs sm:text-sm text-[#526356] dark:text-[#cad8cd] leading-relaxed">
            {AMENITIES.subtitle}
          </p>
        </div>

        {/* Features Bento Grid with Visual Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.features.map((feat) => {
            const featImg = AMENITY_IMAGE_MAP[feat.id];
            return (
              <div 
                key={feat.id} 
                className="card-thick-hover flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {featImg && (
                    <div className="relative h-44 w-full overflow-hidden bg-[#e3ece4] dark:bg-[#1a251e]">
                      <img 
                        src={featImg} 
                        alt={feat.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/95 dark:bg-[#17201a]/95 backdrop-blur border border-white/20 flex items-center justify-center shadow-xs">
                        {getIcon(feat.icon)}
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {!featImg && (
                      <div className="w-10 h-10 rounded-xl bg-[#6c8572]/15 border border-[#6c8572]/20 flex items-center justify-center mb-4">
                        {getIcon(feat.icon)}
                      </div>
                    )}
                    <h3 className="font-heading font-bold text-lg text-[#1f2b22] dark:text-white mb-2 group-hover:text-[#cb6336] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#526356] dark:text-[#cad8cd] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-0">
                  <button 
                    onClick={() => onOpenWizard('Amenity Inquiry', feat.title)}
                    className="text-xs font-bold text-[#5a7260] dark:text-[#a7c1ab] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
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
        <div className="card-thick p-8 sm:p-10 bg-white dark:bg-[#17201a] border-2 border-[#e6dfd3] dark:border-[#253229]">
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1f2b22] dark:text-white">
              Direct Vision & Medical Insurance Verification
            </h3>
            <p className="text-xs text-[#526356] dark:text-[#cad8cd]">
              We coordinate directly with major vision and medical carriers so you can maximize your annual benefits.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {AMENITIES.insurancePlans.map((plan, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-[#f4f1ea] dark:bg-[#111713] border border-[#e4ded4] dark:border-[#253229] flex items-center gap-2 text-xs font-semibold text-[#1f2b22] dark:text-white"
              >
                <CheckIcon className="w-3.5 h-3.5 text-[#5a7260] shrink-0" />
                <span className="truncate">{plan}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onOpenWizard('Insurance Check')}
              className="btn-terracotta px-7 py-3 text-xs sm:text-sm shadow-sm"
            >
              Verify Your Vision Benefits Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
