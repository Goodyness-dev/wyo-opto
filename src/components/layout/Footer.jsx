import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { PhoneIcon, MapPinIcon, ClockIcon } from '../common/Icons';

export default function Footer({ onOpenWizard, onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#f4f1ea] dark:bg-[#111713] text-[#2b3d30] dark:text-[#cad8cd] py-12 px-3 sm:px-6 lg:px-8 transition-colors" role="contentinfo">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Template-Inspired Visit & Newsletter Rounded Container ("Ждём вас в гости!") */}
        <div className="rounded-[36px] bg-white dark:bg-[#17201a] border-2 border-[#e6dfd3] dark:border-[#253229] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Location & Hours ("Ждём вас в гости!") */}
            <div className="md:col-span-4 space-y-4 text-left">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1f2b22] dark:text-white">
                We Look Forward to Seeing You!
              </h3>
              
              <div className="space-y-2.5 text-xs sm:text-sm text-[#526356] dark:text-[#cad8cd]">
                <div className="flex items-start gap-2.5">
                  <MapPinIcon className="w-4 h-4 text-[#5a7260] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1f2b22] dark:text-white">Wyomissing (Main Campus):</p>
                    <p>50 Berkshire Ct, Wyomissing, PA 19610</p>
                    <p className="text-[11px] text-[#6c8572] mt-0.5">Also in Douglassville & Myerstown</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ClockIcon className="w-4 h-4 text-[#5a7260] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1f2b22] dark:text-white">Office Hours:</p>
                    <p>Mon - Thu: 8:00 AM – 8:00 PM</p>
                    <p>Fri: 8:00 AM – 5:00 PM • Sat: By Appt</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <PhoneIcon className="w-4 h-4 text-[#5a7260] shrink-0" />
                  <a href="tel:6103743134" className="font-bold text-[#cb6336] hover:underline">
                    (610) 374-3134
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Col: Newsletter & Annual Vision Reminder ("Будьте в курсе новостей...") */}
            <div className="md:col-span-5 space-y-4 text-left border-y md:border-y-0 md:border-x border-[#e6dfd3] dark:border-[#253229] py-6 md:py-0 md:px-8">
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#1f2b22] dark:text-white">
                Stay In Tune With Your Eye Health
              </h4>
              <p className="text-xs text-[#526356] dark:text-[#cad8cd] leading-relaxed">
                Receive annual exam reminders, insurance benefit expiration alerts, and seasonal tips for screen fatigue & dry eye relief.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2.5 rounded-full bg-[#f4f1ea] dark:bg-[#111713] border border-[#d8d1c4] dark:border-[#2b3b30] text-xs text-[#1f2b22] dark:text-white placeholder-[#889c8d] focus:outline-none focus:border-[#6c8572]"
                />
                <button
                  type="submit"
                  className="btn-terracotta px-5 py-2.5 text-xs font-bold whitespace-nowrap"
                >
                  {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>

            {/* Right Col: Botanical Line Art Illustration (Matching Template Illustration) */}
            <div className="md:col-span-3 flex flex-col items-center justify-center text-center space-y-2">
              <div className="w-24 h-24 rounded-full bg-[#6c8572]/10 dark:bg-[#6c8572]/20 flex items-center justify-center">
                <svg className="w-14 h-14 text-[#5a7260] dark:text-[#a7c1ab]" viewBox="0 0 64 64" fill="none" stroke="currentColor">
                  {/* Minimalist spectacles + botanical branch */}
                  <circle cx="20" cy="34" r="10" strokeWidth="2.5" />
                  <circle cx="44" cy="34" r="10" strokeWidth="2.5" />
                  <path d="M30 34h4" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M10 32c-3-2-6-1-8 2" strokeWidth="2" strokeLinecap="round" />
                  <path d="M54 32c3-2 6-1 8 2" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32 14c0 10-6 12-6 12s6-2 10-2" strokeWidth="2" strokeLinecap="round" />
                  <path d="M26 18c2-3 5-4 8-3" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-[11px] font-bold text-[#5a7260] dark:text-[#a7c1ab]">
                Personalized Care Since 1980
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Minimalist Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6e8073] dark:text-[#889c8d] px-2">
          <span>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <span>Wyomissing • Douglassville • Myerstown</span>
            <span>•</span>
            <button
              onClick={() => onNavigate('admin')}
              className="text-[#5a7260] hover:text-[#cb6336] transition underline font-medium"
            >
              Doctor & Staff Portal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
