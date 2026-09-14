import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { PhoneIcon, MapPinIcon, ChevronRightIcon, AlertCircleIcon, ShieldCheckIcon, CalendarIcon } from '../common/Icons';

export default function Footer({ onOpenWizard, onNavigate }) {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (onNavigate) onNavigate('home');
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-[#090d16] text-slate-400 text-sm sm:text-base pb-16 sm:pb-0 border-t border-slate-800" role="contentinfo">
      
      {/* Pre-footer Spectrum CTA Strip */}
      <div className="spectrum-gradient py-12 sm:py-14 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
              Ready for complete clarity and full-spectrum vision?
            </h3>
            <p className="text-white/90 text-sm sm:text-lg max-w-2xl">
              Appointments available at our Wyomissing, Douglassville, and Myerstown offices. Evening appointments available.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenWizard()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0b0f19] font-black text-base hover:bg-slate-100 transition shadow-xl active:scale-95 text-center flex items-center justify-center gap-2"
            >
              <CalendarIcon className="w-5 h-5 text-indigo-600" />
              <span>Schedule Eye Exam</span>
            </button>

            <a
              href="tel:6103743134"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-black/30 hover:bg-black/40 text-white font-bold text-base transition border border-white/30 flex items-center justify-center gap-2 text-center"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>(610) 374-3134</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Practice Heritage */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl spectrum-gradient p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-[#090d16] rounded-[14px] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 14c2-4 4-7 7-7s5 8 8 5 3-4 3-4" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-heading font-black text-white text-lg leading-tight">wyomissing.opto</p>
              <p className="text-xs text-indigo-400 font-semibold">Optometric Center</p>
            </div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Leading eye health and diagnostic vision practice in Berks and Lebanon Counties since 1980. Clinical preceptors for Salus University and home to the AdaptDx Center of Excellence.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold pt-1">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
            <span>PA Licensed Doctors of Optometry</span>
          </div>
        </div>

        {/* Col 2: Services Quick Links */}
        <div>
          <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">Clinical Services</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {[
              'Comprehensive Eye Examinations',
              'Macular Degeneration & AdaptDx',
              'LipiFlow Dry Eye Center',
              'Pediatric Eye Care & Myopia',
              'Specialty Scleral & Ortho-K',
              'Cataract & LASIK Co-Management',
              'Designer Optical Boutique'
            ].map((srv, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onOpenWizard(srv)}
                  className="hover:text-white transition text-slate-400 hover:underline text-left flex items-center gap-1.5"
                >
                  <ChevronRightIcon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{srv}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: 3 Locations Breakdown */}
        <div>
          <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">Our 3 Offices</h4>
          <div className="space-y-4 text-xs sm:text-sm">
            {BUSINESS_INFO.locations.map(loc => (
              <div key={loc.id} className="space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <MapPinIcon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{loc.name}</span>
                </p>
                <p className="text-slate-400 text-xs pl-5">{loc.street}, {loc.city}, PA</p>
                <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="text-indigo-400 font-semibold text-xs pl-5 block hover:underline">
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Col 4: Emergency Notice & Insurance */}
        <div>
          <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">24/7 Eye Emergency</h4>
          <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-900/50 space-y-2.5 mb-4 text-xs">
            <div className="flex items-center gap-2 text-rose-300 font-bold">
              <AlertCircleIcon className="w-4 h-4 text-rose-500" />
              <span>Urgent Medical Triage</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              For sudden eye pain, foreign objects, flashers, or vision changes, call our 24/7 hotline directly:
            </p>
            <a href="tel:6103743134" className="text-rose-400 font-black text-sm block hover:underline">
              (610) 374-3134
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Proudly accepting VSP, EyeMed, Medicare, Davis Vision, Blue Cross, and CareCredit.
          </p>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800/80 py-6 px-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <span>Wyomissing • Douglassville • Myerstown, PA</span>
            <span>•</span>
            <button
              onClick={() => onNavigate('admin')}
              className="text-slate-500 hover:text-indigo-400 transition underline"
            >
              Staff Portal
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
