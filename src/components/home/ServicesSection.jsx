import React from 'react';
import { SERVICES } from '../../data/servicesData';
import { IMAGES } from '../../data/imageManifest';
import { 
  ArrowRightIcon, 
  EyeIcon, 
  GlassesIcon, 
  SparklesIcon, 
  AlertCircleIcon, 
  ShieldCheckIcon,
  CheckIcon
} from '../common/Icons';

export default function ServicesSection({ onOpenWizard, onNavigateToAllServices }) {
  // Top 4 minimalist features directly matching the strip in the template
  const FEATURE_PILLARS = [
    {
      title: "Optomap Retinal Scans",
      desc: "Ultra-widefield digital retinal scans without mandatory dilation drops.",
      icon: "EyeIcon"
    },
    {
      title: "AdaptDx Early Detection",
      desc: "Detects macular degeneration up to 3 years before visible symptoms.",
      icon: "ShieldCheckIcon"
    },
    {
      title: "LipiFlow Dry Eye Suite",
      desc: "Thermal pulsation clearing meibomian glands for chronic burning eyes.",
      icon: "SparklesIcon"
    },
    {
      title: "1,200+ Designer Frames",
      desc: "Curated luxury eyewear with complimentary lifetime adjustments.",
      icon: "GlassesIcon"
    }
  ];

  // 3 Popular Medallions for the Sage Green Card
  const POPULAR_MEDALLIONS = [
    {
      id: "comprehensive-exam",
      title: "Comprehensive Vision Exam",
      desc: "High-definition refractive clarity",
      badge: "Primary Care",
      img: IMAGES.exam.src,
      category: "Primary Eye Care"
    },
    {
      id: "macular-degeneration",
      title: "Retinal & Macular Scan",
      desc: "AdaptDx & Spectralis SD-OCT",
      badge: "Center of Excellence",
      img: IMAGES.hero.src,
      category: "Medical Diagnostics"
    },
    {
      id: "cataract-lasik",
      title: "Laser & Surgical Suite",
      desc: "Cataract & LASIK Co-Management",
      badge: "Surgical Partners",
      img: IMAGES.laser.src,
      category: "Surgical Partners"
    }
  ];

  // 3 Recommended Care Horizontal Cards (Template "Рекомендуем попробовать")
  const RECOMMENDED_CARDS = [
    {
      id: "dry-eye-center",
      title: "LipiFlow Thermal Pulsation",
      desc: "Targeted in-office relief for meibomian gland disease & chronic digital eye fatigue.",
      badge: "Dry Eye Relief",
      img: IMAGES.diagnosticScan.src,
      category: "Specialty Therapies"
    },
    {
      id: "specialty-contacts",
      title: "Custom Scleral Lenses",
      desc: "Vault-precision contacts bathing irregular corneas in continuous saline hydration.",
      badge: "Hard-to-Fit Corneas",
      img: IMAGES.precisionGlasses.src,
      category: "Vision Correction"
    },
    {
      id: "designer-optical",
      title: "Designer Optical Gallery",
      desc: "Handcrafted titanium & acetate frames paired with digital progressive surfacing.",
      badge: "Curated Frames",
      img: IMAGES.eyewearBoutique.src,
      category: "Eyewear Boutique"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#f4f1ea] dark:bg-[#111713] transition-colors" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Four Feature Pillars Strip (Template Horizontal Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-b border-[#e4ded4] dark:border-[#233027]">
          {FEATURE_PILLARS.map((item, idx) => (
            <div key={idx} className="space-y-2 text-left">
              <div className="w-10 h-10 rounded-2xl bg-[#6c8572]/15 dark:bg-[#6c8572]/25 text-[#3e5645] dark:text-[#a7c1ab] flex items-center justify-center">
                {idx === 0 && <EyeIcon className="w-5 h-5 text-[#5a7260] dark:text-[#a7c1ab]" />}
                {idx === 1 && <ShieldCheckIcon className="w-5 h-5 text-[#5a7260] dark:text-[#a7c1ab]" />}
                {idx === 2 && <SparklesIcon className="w-5 h-5 text-[#5a7260] dark:text-[#a7c1ab]" />}
                {idx === 3 && <GlassesIcon className="w-5 h-5 text-[#5a7260] dark:text-[#a7c1ab]" />}
              </div>
              <h3 className="font-heading font-bold text-base text-[#1f2b22] dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-[#526356] dark:text-[#cad8cd] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Popular Specialties Sage Green Card with 3 Circular Medallions (Direct Mirror of Template) */}
        <div className="rounded-[36px] sm:rounded-[44px] bg-[#6c8572] dark:bg-[#1a251e] p-8 sm:p-12 text-white shadow-thick relative overflow-hidden border-2 border-[#8ba290]/40 dark:border-[#2b3b30]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading + Button */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#d8e7dc] dark:text-[#a7c1ab]">
                Patient Favorites
              </span>
              <h2 id="services-heading" className="font-heading font-extrabold text-2xl sm:text-4xl text-white leading-tight tracking-tight">
                Popular Clinical <br className="hidden sm:inline" />
                Specialties
              </h2>
              <p className="text-sm text-[#e6efe8] dark:text-[#cad8cd] leading-relaxed max-w-sm">
                From pediatric exams to early macular scans and co-managed cataract surgery, tailored for your lifetime vision health.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => {
                    if (onNavigateToAllServices) onNavigateToAllServices();
                    else onOpenWizard();
                  }}
                  className="px-6 py-3 rounded-full bg-white text-[#1f2b22] font-bold text-xs sm:text-sm hover:bg-[#f4f1ea] transition shadow-md active:scale-95 flex items-center gap-2"
                >
                  <span>Explore All Procedures</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Circular White Medallions (Template Style) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {POPULAR_MEDALLIONS.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => onOpenWizard(item.category, item.title)}
                  className="text-center group cursor-pointer space-y-3"
                >
                  {/* White Circular Medallion */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden border-4 border-white/80 mx-auto group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-base text-white group-hover:text-[#eda68d] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#e6efe8] dark:text-[#cad8cd] mt-1">
                      {item.desc}
                    </p>
                    <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white border border-white/30">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 3. Recommended Procedures Horizontal Rail (Template "• Рекомендуем попробовать •") */}
        <div className="space-y-8">
          
          {/* Centered Decorative Section Header */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-[#d8d1c4] dark:bg-[#2b3b30] flex-1 max-w-xs" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#38473c] dark:text-[#a7c1ab] uppercase flex items-center gap-2">
              <span className="text-[#cb6336]">◆</span>
              Recommended Clinical Care
              <span className="text-[#cb6336]">◆</span>
            </span>
            <div className="h-px bg-[#d8d1c4] dark:bg-[#2b3b30] flex-1 max-w-xs" />
          </div>

          {/* 3 Horizontal Cards with Circular Plus (+) Buttons (Matching Template) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECOMMENDED_CARDS.map((card) => (
              <div
                key={card.id}
                onClick={() => onOpenWizard(card.category, card.title)}
                className="card-thick-hover p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group"
              >
                {/* Left image thumb */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-[#e3ece4] dark:bg-[#1a251e] border border-[#e4ded4] dark:border-[#253229]">
                  <img 
                    src={card.img} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Middle details */}
                <div className="flex-1 min-w-0 text-left">
                  <span className="text-[10px] font-bold text-[#6c8572] dark:text-[#a7c1ab] uppercase tracking-wider block mb-0.5">
                    {card.badge}
                  </span>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#1f2b22] dark:text-white leading-snug group-hover:text-[#cb6336] transition-colors truncate">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#526356] dark:text-[#cad8cd] leading-relaxed line-clamp-2 mt-1">
                    {card.desc}
                  </p>
                </div>

                {/* Right Circular Plus (+) Button (Matching Template) */}
                <div className="w-8 h-8 rounded-full bg-[#5a7260] hover:bg-[#cb6336] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                  <span className="text-base font-bold leading-none">+</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 4. Emergency Acute Ocular Care Ribbon */}
        <div className="rounded-3xl bg-white dark:bg-[#17201a] border-2 border-[#e6dfd3] dark:border-[#253229] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#cb6336]/15 text-[#cb6336] flex items-center justify-center shrink-0 animate-pulse">
              <AlertCircleIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#1f2b22] dark:text-white">
                Experiencing an acute eye emergency?
              </h4>
              <p className="text-xs sm:text-sm text-[#526356] dark:text-[#cad8cd]">
                Sudden vision loss, corneal foreign body, flashes of light, or severe ocular trauma. On-call doctor available 24/7.
              </p>
            </div>
          </div>

          <a
            href="tel:6103743134"
            className="btn-terracotta px-6 py-3 text-xs sm:text-sm whitespace-nowrap"
          >
            Call Emergency: (610) 374-3134
          </a>
        </div>

      </div>
    </section>
  );
}
