import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { StarIcon } from '../common/Icons';

export default function ReviewsSection({ onOpenWizard }) {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#f4f1ea] dark:bg-[#111713] transition-colors" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6c8572]/15 text-[#3b5141] dark:text-[#a7c1ab] text-xs font-bold uppercase tracking-wider">
            <StarIcon className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>4.9 Star Aggregate Rating</span>
          </div>

          <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1f2b22] dark:text-white tracking-tight">
            Trusted by Generations of Berks & Lebanon Families
          </h2>

          <div className="flex items-center justify-center gap-2.5 pt-1">
            <div className="flex text-amber-400">
              {'★★★★★'.split('').map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[#3b5141] dark:text-[#cad8cd] text-xs sm:text-sm font-bold">
              680+ Verified Patient Reviews Across 3 Offices
            </span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUSINESS_INFO.reviews.map((rev) => (
            <article
              key={rev.id}
              className="card-thick-hover p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#6c8572]/10 text-[#3b5141] dark:text-[#a7c1ab] border border-[#6c8572]/20">
                    {rev.badge}
                  </span>
                </div>

                <p className="text-[#253629] dark:text-[#cad8cd] text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#e6dfd3] dark:border-[#253229] flex justify-between items-center text-xs">
                <div>
                  <h4 className="font-bold text-[#1f2b22] dark:text-white text-sm">{rev.author}</h4>
                  <span className="text-[#6c8572] dark:text-[#a7c1ab]">{rev.location}</span>
                </div>
                <span className="text-[#889c8d]">{rev.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => onOpenWizard()}
            className="btn-terracotta px-8 py-3.5 text-sm"
          >
            Experience the Wyomissing Optometric Difference
          </button>
        </div>

      </div>
    </section>
  );
}
