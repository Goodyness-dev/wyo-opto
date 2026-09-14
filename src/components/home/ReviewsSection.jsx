import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { StarIcon, QuoteIcon, CheckIcon } from '../common/Icons';

export default function ReviewsSection({ onOpenWizard }) {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white dark:bg-[#0d121e] transition-colors" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <StarIcon className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>4.9 Star Aggregate Rating</span>
          </div>

          <h2 id="reviews-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            Trusted by Generations of <br className="hidden sm:inline" />
            <span className="spectrum-text-gradient">Berks & Lebanon County Families</span>
          </h2>

          <div className="flex items-center justify-center gap-2.5 pt-1">
            <div className="flex text-amber-400">
              {'★★★★★'.split('').map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-bold">
              680+ Verified Patient Reviews Across 3 Offices
            </span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BUSINESS_INFO.reviews.map((rev) => (
            <article
              key={rev.id}
              className="card-thick-hover p-7 sm:p-9 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {rev.badge}
                  </span>
                </div>

                <div className="relative mb-6">
                  <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{rev.author}</h4>
                  <span className="text-slate-500 dark:text-slate-400">{rev.location}</span>
                </div>
                <span className="text-slate-400">{rev.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenWizard()}
            className="px-8 py-4 rounded-full bg-[#0b0f19] hover:bg-indigo-950 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#0b0f19] font-bold text-base shadow-lg transition active:scale-95"
          >
            Experience the Wyomissing Optometric Difference
          </button>
        </div>

      </div>
    </section>
  );
}
