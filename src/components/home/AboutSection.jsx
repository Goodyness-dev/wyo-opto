import React from 'react';
import { DOCTORS } from '../../data/doctorsData';
import { BUSINESS_INFO } from '../../data/businessData';
import { AwardIcon, ShieldCheckIcon, QuoteIcon, ArrowRightIcon, CheckIcon } from '../common/Icons';

export default function AboutSection({ onOpenWizard }) {
  return (
    <section id="doctors" className="py-20 sm:py-28 bg-white dark:bg-[#0d121e] transition-colors" aria-labelledby="doctors-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <AwardIcon className="w-4 h-4 text-blue-600" />
            <span>Over 45 Years of Clinical Mentorship & Patient Trust</span>
          </div>

          <h2 id="doctors-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            Meet the Physicians Guiding Your <br className="hidden sm:inline" />
            <span className="spectrum-text-gradient">Lifetime Vision Health</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Our board-certified optometric physicians combine university-level clinical mentorship with warm, personalized patient relationships across Berks and Lebanon Counties.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {DOCTORS.map((doc) => (
            <div 
              key={doc.id}
              className="card-thick-hover overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6">
                {/* Doctor Photo */}
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <span className="absolute bottom-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white shadow-sm">
                    {doc.experience} Experience
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-1">
                  {doc.name}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {doc.role}
                </p>

                {/* Accolade Badge */}
                <div className="bg-indigo-50/70 dark:bg-indigo-950/40 p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/40 text-[11px] font-semibold text-indigo-900 dark:text-indigo-200 mb-4">
                  {doc.credentials}
                </div>

                {/* Short Bio */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {doc.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5">
                  {doc.specialties.map((spec, i) => (
                    <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onOpenWizard('Doctor Consultation', doc.name)}
                  className="w-full py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 transition flex items-center justify-center gap-1.5"
                >
                  <span>Request With {doc.name.split(' ')[1]}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Heritage Split Highlight */}
        <div className="card-thick p-8 sm:p-12 lg:p-14 relative overflow-hidden bg-gradient-to-r from-indigo-50/50 via-white to-blue-50/50 dark:from-[#111728] dark:via-[#101522] dark:to-[#111728]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">Independent & Community-Rooted</span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                Not a Corporate Assembly Line. <br />
                A Dedicated Medical Home for Your Eyes.
              </h3>
              
              <div className="border-l-4 border-indigo-600 pl-4 py-1">
                <p className="italic text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  "Vision isn't just clarity on an eye chart; it's how you connect with your children, navigate your career, and experience life. We treat each patient with the unhurried thoroughness we'd expect for our own families."
                </p>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mt-2">
                  — Dr. Glenn S. Corbin & Dr. Amanda S. Legge, Partners
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400">1980</p>
                  <p className="text-xs text-slate-500">Year Founded</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400">3</p>
                  <p className="text-xs text-slate-500">Modern Offices</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 col-span-2 sm:col-span-1">
                  <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400">24/7</p>
                  <p className="text-xs text-slate-500">Emergency On Call</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-indigo-600" />
                  <span>The Wyomissing Optometric Guarantee:</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Direct access to doctor on call for sudden ocular trauma or infections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>AdaptDx dark adaptation technology for earliest AMD detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Over 1,200 designer frames with complimentary lifetime fittings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>In-network billing with VSP, EyeMed, Davis, Medicare & major PPOs</span>
                  </li>
                </ul>

                <button
                  onClick={() => onOpenWizard()}
                  className="w-full mt-4 py-3 rounded-xl bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] font-bold text-xs transition shadow active:scale-95"
                >
                  Schedule Initial Consultation
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
