import React from 'react';
import { DOCTORS } from '../../data/doctorsData';
import { BUSINESS_INFO } from '../../data/businessData';
import { IMAGES } from '../../data/imageManifest';
import { AwardIcon, ShieldCheckIcon, ArrowRightIcon, CheckIcon, EyeIcon } from '../common/Icons';

export default function AboutSection({ onOpenWizard }) {
  return (
    <section id="doctors" className="py-16 sm:py-20 bg-[#f4f1ea] dark:bg-[#111713] transition-colors" aria-labelledby="doctors-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Master Heritage Card (Template: "Зёрна, которыми гордимся") */}
        <div className="rounded-[36px] sm:rounded-[44px] bg-[#6c8572] dark:bg-[#1a251e] p-8 sm:p-12 text-white shadow-thick relative overflow-hidden border-2 border-[#8ba290]/40 dark:border-[#2b3b30]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#d8e7dc] dark:text-[#a7c1ab]">
                Independent Heritage Since 1980
              </span>
              
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white leading-tight tracking-tight">
                Clinical Excellence We <br className="hidden sm:inline" />
                Take Deep Pride In
              </h2>

              <p className="text-sm sm:text-base text-[#e6efe8] dark:text-[#cad8cd] leading-relaxed max-w-xl">
                We are not a corporate chain or assembly line. As Salus University clinical preceptors and board-certified optometrists, we treat each patient with the unhurried thoroughness we expect for our own families.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenWizard('Doctor Consultation')}
                  className="btn-terracotta px-7 py-3.5 text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
                >
                  <span>Request Doctor Consultation</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Bottom Botanical Metrics (Direct Mirror of Template Icons) */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/20">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">45+</p>
                  <p className="text-[10px] text-[#e6efe8] uppercase tracking-wider font-semibold">Years Service</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">3</p>
                  <p className="text-[10px] text-[#e6efe8] uppercase tracking-wider font-semibold">PA Offices</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">24/7</p>
                  <p className="text-[10px] text-[#e6efe8] uppercase tracking-wider font-semibold">On-Call Triage</p>
                </div>
              </div>
            </div>

            {/* Right Media: Round Plate Cutout (Mirroring Template Dish & Artisan Packaging) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 rounded-full overflow-hidden border-8 border-white/40 dark:border-white/10 shadow-2xl bg-white group">
                <img 
                  src={IMAGES.hero.src} 
                  alt="Precision Ophthalmic Retinal Examination" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                  <p className="text-xs font-bold text-white">AdaptDx & Spectralis OCT Center</p>
                  <p className="text-[10px] text-[#e6efe8]">Wyomissing • Douglassville • Myerstown</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Doctor Physicians Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#5a7260] dark:text-[#a7c1ab] uppercase">
              Physician Leadership
            </span>
            <h3 id="doctors-heading" className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1f2b22] dark:text-white tracking-tight">
              Meet Our Optometric Physicians
            </h3>
            <p className="text-xs sm:text-sm text-[#526356] dark:text-[#cad8cd] leading-relaxed">
              Combining university-level clinical mentorship with warm, personalized relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.map((doc) => (
              <div 
                key={doc.id}
                className="card-thick-hover p-5 flex flex-col justify-between group cursor-pointer"
                onClick={() => onOpenWizard('Doctor Consultation', doc.name)}
              >
                <div>
                  <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-4 bg-[#e3ece4] dark:bg-[#1a251e]">
                    <img 
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    <span className="absolute bottom-2.5 left-2.5 bg-white/95 dark:bg-[#17201a]/95 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#1f2b22] dark:text-white shadow-xs">
                      {doc.experience} Experience
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-[#1f2b22] dark:text-white mb-0.5 group-hover:text-[#cb6336] transition-colors">
                    {doc.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#5a7260] dark:text-[#a7c1ab] mb-2.5">
                    {doc.role}
                  </p>

                  <div className="bg-[#f4f1ea] dark:bg-[#111713] p-2 rounded-xl border border-[#e4ded4] dark:border-[#253229] text-[10px] font-semibold text-[#2b3d30] dark:text-[#cad8cd] mb-3">
                    {doc.credentials}
                  </div>

                  <p className="text-xs text-[#526356] dark:text-[#cad8cd] leading-relaxed line-clamp-3 mb-3">
                    {doc.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e6dfd3] dark:border-[#253229] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#5a7260] dark:text-[#a7c1ab] group-hover:text-[#cb6336] transition-colors">
                    Consult with Doctor
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#6c8572]/15 group-hover:bg-[#cb6336] group-hover:text-white text-[#5a7260] flex items-center justify-center transition-colors">
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
