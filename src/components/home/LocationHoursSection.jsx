import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { 
  MapPinIcon, 
  ClockIcon, 
  PhoneIcon, 
  NavigationIcon, 
  ExternalLinkIcon, 
  AlertCircleIcon
} from '../common/Icons';

export default function LocationHoursSection({ onOpenWizard }) {
  const [activeLocId, setActiveLocId] = useState('wyomissing');
  const loc = BUSINESS_INFO.locations.find(l => l.id === activeLocId) || BUSINESS_INFO.locations[0];

  return (
    <section id="locations" className="py-16 sm:py-24 bg-[#f4f1ea] dark:bg-[#111713] transition-colors" aria-labelledby="locations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#5a7260] dark:text-[#a7c1ab] uppercase">
            3 Berks & Lebanon County Offices
          </span>

          <h2 id="locations-heading" className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1f2b22] dark:text-white tracking-tight">
            Visit Us in Wyomissing, Douglassville, or Myerstown
          </h2>

          <p className="text-xs sm:text-sm text-[#526356] dark:text-[#cad8cd] leading-relaxed">
            All three offices feature full diagnostic suites, pediatric exam rooms, and designer optical boutiques with convenient evening hours.
          </p>

          {/* Location Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {BUSINESS_INFO.locations.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveLocId(item.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                  activeLocId === item.id
                    ? 'bg-[#1f2b22] dark:bg-white text-white dark:text-[#1f2b22] border-[#1f2b22] dark:border-white shadow-xs'
                    : 'bg-white dark:bg-[#17201a] text-[#2b3d30] dark:text-[#cad8cd] border-[#d8d1c4] dark:border-[#253229] hover:border-[#6c8572]'
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
              <div className="flex items-center justify-between gap-4 border-b border-[#e6dfd3] dark:border-[#253229] pb-4">
                <div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1f2b22] dark:text-white">
                    {loc.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#5a7260] dark:text-[#a7c1ab]">
                    {loc.isPrimary ? 'Main Clinical & Surgical Co-Management Center' : 'Full-Service Satellite Eye Care Center'}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#6c8572]/15 text-[#5a7260] flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5">
                <MapPinIcon className="w-5 h-5 text-[#5a7260] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1f2b22] dark:text-white text-sm sm:text-base">{loc.street}</p>
                  <p className="text-[#526356] dark:text-[#cad8cd] text-sm">{loc.city}, {loc.state} {loc.zip}</p>
                </div>
              </div>

              {/* Direct Phone & Fax */}
              <div className="flex items-center gap-3.5">
                <PhoneIcon className="w-5 h-5 text-[#5a7260] shrink-0" />
                <div>
                  <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-[#cb6336] hover:underline text-base">
                    {loc.phone}
                  </a>
                  <span className="text-xs text-[#7a8f80] ml-3">Fax: {loc.fax}</span>
                </div>
              </div>

              {/* Hours Table */}
              <div className="bg-[#f4f1ea] dark:bg-[#111713] rounded-2xl p-4 sm:p-5 border border-[#e4ded4] dark:border-[#253229] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5a7260] dark:text-[#a7c1ab] uppercase tracking-wider">
                  <ClockIcon className="w-4 h-4" />
                  <span>Office & Optical Hours</span>
                </div>
                <div className="space-y-2">
                  {loc.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-semibold text-[#2b3d30] dark:text-[#cad8cd]">{h.days}</span>
                      <span className="font-medium text-[#1f2b22] dark:text-white">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 24/7 Emergency Notice */}
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-[#221a15] border border-amber-200 dark:border-amber-900/40 flex items-center gap-3 text-xs">
                <AlertCircleIcon className="w-4 h-4 text-[#cb6336] shrink-0" />
                <span className="text-[#7b341c] dark:text-[#eda68d]">
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
                className="w-full sm:flex-1 py-3 px-4 rounded-full bg-[#1f2b22] dark:bg-white text-white dark:text-[#1f2b22] font-bold text-xs sm:text-sm text-center shadow-xs transition flex items-center justify-center gap-2"
              >
                <NavigationIcon className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={() => onOpenWizard(loc.name)}
                className="btn-terracotta w-full sm:flex-1 py-3 px-4 text-xs sm:text-sm text-center shadow-xs"
              >
                Book at this Office
              </button>
            </div>

          </div>

          {/* Map Preview Column */}
          <div className="lg:col-span-6 card-thick overflow-hidden p-0 flex flex-col min-h-[380px] sm:min-h-[440px]">
            <div className="p-4 bg-white dark:bg-[#17201a] border-b border-[#e6dfd3] dark:border-[#253229] flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-[#1f2b22] dark:text-white flex items-center gap-1.5">
                <MapPinIcon className="w-4 h-4 text-[#5a7260]" />
                <span>{loc.street}, {loc.city}, PA</span>
              </span>
              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#cb6336] font-bold hover:underline flex items-center gap-1"
              >
                <span>Full Map</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex-1 w-full bg-[#eae5dc] dark:bg-[#111713] relative">
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
