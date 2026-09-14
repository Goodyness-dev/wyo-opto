import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { 
  MapPinIcon, 
  ClockIcon, 
  PhoneIcon, 
  NavigationIcon, 
  ExternalLinkIcon, 
  AlertCircleIcon,
  ShieldCheckIcon
} from '../common/Icons';

export default function LocationHoursSection({ onOpenWizard }) {
  const [activeLocId, setActiveLocId] = useState('wyomissing');
  const loc = BUSINESS_INFO.locations.find(l => l.id === activeLocId) || BUSINESS_INFO.locations[0];

  return (
    <section id="locations" className="py-20 sm:py-28 bg-[#f4f6fe] dark:bg-[#090d16] transition-colors" aria-labelledby="locations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100/80 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <MapPinIcon className="w-3.5 h-3.5" />
            <span>3 Convenient Berks & Lebanon County Offices</span>
          </div>

          <h2 id="locations-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            Visit Us in Wyomissing, <br className="hidden sm:inline" />
            Douglassville, or Myerstown
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            All three offices feature full diagnostic suites, pediatric exam rooms, and designer optical boutiques with convenient evening hours.
          </p>

          {/* Location Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            {BUSINESS_INFO.locations.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveLocId(item.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                  activeLocId === item.id
                    ? 'bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] border-[#0b0f19] dark:border-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Location Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details & Hours Column */}
          <div className="lg:col-span-6 card-thick p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Office Name & Badge */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
                    {loc.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    {loc.isPrimary ? 'Main Clinical & Surgical Co-Management Center' : 'Full-Service Satellite Eye Care Center'}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600">
                  <MapPinIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5">
                <MapPinIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{loc.street}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{loc.city}, {loc.state} {loc.zip}</p>
                </div>
              </div>

              {/* Direct Phone & Fax */}
              <div className="flex items-center gap-3.5">
                <PhoneIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <div>
                  <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-slate-900 dark:text-white hover:text-indigo-600 text-base">
                    {loc.phone}
                  </a>
                  <span className="text-xs text-slate-400 ml-3">Fax: {loc.fax}</span>
                </div>
              </div>

              {/* Hours Table */}
              <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <ClockIcon className="w-4 h-4 text-slate-500" />
                  <span>Office & Optical Hours</span>
                </div>
                <div className="space-y-2">
                  {loc.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{h.days}</span>
                      <span className="font-medium text-slate-900 dark:text-white">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 24/7 Emergency Notice */}
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 flex items-center gap-3 text-xs">
                <AlertCircleIcon className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="text-rose-900 dark:text-rose-200 font-medium">
                  <strong>24/7 Emergency On-Call:</strong> For urgent medical eye trauma, foreign bodies, or sudden vision loss, call <strong>(610) 374-3134</strong>.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 px-4 rounded-full bg-[#0b0f19] hover:bg-indigo-950 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#0b0f19] font-bold text-xs sm:text-sm text-center shadow transition flex items-center justify-center gap-2"
              >
                <NavigationIcon className="w-4 h-4" />
                <span>Get Directions in Maps</span>
              </a>

              <button
                onClick={() => onOpenWizard(loc.name)}
                className="w-full sm:flex-1 py-3.5 px-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm text-center shadow transition"
              >
                Book at this Office
              </button>
            </div>

          </div>

          {/* Map Preview Column */}
          <div className="lg:col-span-6 card-thick overflow-hidden p-0 flex flex-col min-h-[380px] sm:min-h-[460px]">
            <div className="p-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <MapPinIcon className="w-4 h-4 text-indigo-600" />
                <span>{loc.street}, {loc.city}, PA</span>
              </span>
              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center gap-1"
              >
                <span>Full Map</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex-1 w-full bg-slate-200 dark:bg-slate-800 relative">
              <iframe
                title={`${loc.name} Map`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.street + ', ' + loc.city + ', PA ' + loc.zip)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
