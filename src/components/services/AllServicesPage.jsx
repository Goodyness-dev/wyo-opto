import React, { useState, useMemo } from 'react';
import { SERVICES } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  PhoneIcon, 
  EyeIcon, 
  GlassesIcon, 
  SparklesIcon, 
  AlertCircleIcon, 
  ShieldCheckIcon,
  HeartPulseIcon,
  CheckIcon,
  ClockIcon
} from '../common/Icons';

export default function AllServicesPage({ onOpenWizard, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Primary Eye Care', 'Medical Diagnostics', 'Specialty Therapies', 'Children\'s Vision', 'Eyewear Boutique'];

  const filteredServices = useMemo(() => {
    return SERVICES.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.idealFor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getServiceIcon = (iconName) => {
    switch(iconName) {
      case 'EyeIcon': return <EyeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'GlassesIcon': return <GlassesIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'SparklesIcon': return <SparklesIcon className="w-6 h-6 text-amber-500" />;
      case 'AlertCircleIcon': return <AlertCircleIcon className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'HeartPulseIcon': return <HeartPulseIcon className="w-6 h-6 text-pink-600 dark:text-pink-400" />;
      default: return <ShieldCheckIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-[#f4f6fe] dark:bg-[#090d16] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <EyeIcon className="w-3.5 h-3.5" />
            <span>Complete Clinical Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            Optometric Care & Diagnostic Procedures
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Explore our specialized clinical eye care capabilities. Whether you require standard preventive exams, advanced dark adaptation retinal scans, or pediatric myopia therapy, select an area below to request care.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="card-thick p-4 sm:p-6 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search procedures, symptoms (e.g. macular, dry eye, glasses, ortho-k)..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredServices.map(service => (
            <article
              key={service.id}
              className="card-thick-hover p-7 sm:p-8 flex flex-col justify-between cursor-pointer"
              onClick={() => onOpenWizard(service.category, service.title)}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                    {service.badge}
                  </span>
                </div>

                <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2.5">
                  {service.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 mb-5">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Ideal Candidates:</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {service.idealFor}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <ClockIcon className="w-4 h-4" />
                  {service.duration}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenWizard(service.category, service.title);
                  }}
                  className="px-4 py-2 rounded-full bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] hover:opacity-90 transition flex items-center gap-1"
                >
                  <span>Book Visit</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Contact Help */}
        <div className="card-thick p-8 text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
            Not sure which exam or appointment you need?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Our patient coordinators are happy to assist you in matching with the right optometrist across our Wyomissing, Douglassville, or Myerstown offices.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:6103743134"
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Call (610) 374-3134</span>
            </a>
            <button
              onClick={() => onOpenWizard()}
              className="px-6 py-3 rounded-full bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] font-bold text-xs"
            >
              General Appointment Request
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
