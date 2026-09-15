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
      case 'EyeIcon': return <EyeIcon className="w-5 h-5 text-[#5a7260]" />;
      case 'GlassesIcon': return <GlassesIcon className="w-5 h-5 text-[#5a7260]" />;
      case 'SparklesIcon': return <SparklesIcon className="w-5 h-5 text-[#cb6336]" />;
      case 'AlertCircleIcon': return <AlertCircleIcon className="w-5 h-5 text-[#cb6336]" />;
      case 'HeartPulseIcon': return <HeartPulseIcon className="w-5 h-5 text-[#cb6336]" />;
      default: return <ShieldCheckIcon className="w-5 h-5 text-[#5a7260]" />;
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-[#f4f1ea] dark:bg-[#111713] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#2b3d30] dark:text-[#cad8cd] hover:text-[#cb6336] mb-8 transition group"
        >
          <div className="w-8 h-8 rounded-full bg-white dark:bg-[#17201a] border border-[#d8d1c4] dark:border-[#253229] flex items-center justify-center group-hover:-translate-x-1 transition-transform">
            <ArrowLeftIcon className="w-4 h-4" />
          </div>
          <span>Back to Home</span>
        </button>

        {/* Page Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6c8572]/15 text-[#3b5141] dark:text-[#a7c1ab] text-xs font-bold uppercase tracking-wider">
            <EyeIcon className="w-3.5 h-3.5" />
            <span>Complete Clinical Directory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1f2b22] dark:text-white tracking-tight">
            Optometric Care & Diagnostic Procedures
          </h1>

          <p className="text-xs sm:text-sm text-[#526356] dark:text-[#cad8cd] leading-relaxed">
            Explore our specialized clinical eye care capabilities across Wyomissing, Douglassville, and Myerstown. Select any specialty to request an appointment.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="card-thick p-4 sm:p-5 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search procedures, symptoms (e.g. macular, dry eye, glasses, ortho-k)..."
                className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f1ea] dark:bg-[#111713] border border-[#d8d1c4] dark:border-[#253229] text-xs sm:text-sm text-[#1f2b22] dark:text-white focus:outline-none focus:border-[#6c8572]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#1f2b22] dark:bg-white text-white dark:text-[#1f2b22] shadow-xs scale-105'
                      : 'bg-[#f4f1ea] dark:bg-[#111713] text-[#2b3d30] dark:text-[#cad8cd] border border-[#e4ded4] dark:border-[#253229] hover:border-[#6c8572]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map(service => (
            <article
              key={service.id}
              className="card-thick-hover flex flex-col justify-between cursor-pointer overflow-hidden group"
              onClick={() => onOpenWizard(service.category, service.title)}
            >
              <div>
                {/* Visual Image Header */}
                {service.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-[#e3ece4] dark:bg-[#1a251e]">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/95 dark:bg-[#17201a]/95 text-[#1f2b22] dark:text-white shadow-xs">
                        {service.badge}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-white/95 dark:bg-[#17201a]/95 flex items-center justify-center shadow-xs">
                        {getServiceIcon(service.icon)}
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <h2 className="text-lg font-bold font-heading text-[#1f2b22] dark:text-white group-hover:text-[#cb6336] transition-colors mb-2">
                    {service.title}
                  </h2>

                  <p className="text-[#526356] dark:text-[#cad8cd] text-xs leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <div className="bg-[#f4f1ea] dark:bg-[#111713] p-3 rounded-2xl border border-[#e4ded4] dark:border-[#253229] mb-4">
                    <p className="text-[10px] font-bold text-[#6c8572] dark:text-[#a7c1ab] uppercase tracking-wider mb-1">Ideal For:</p>
                    <p className="text-xs text-[#2b3d30] dark:text-[#cad8cd] leading-relaxed">
                      {service.idealFor}
                    </p>
                  </div>

                  <ul className="space-y-1 mb-4">
                    {service.keyBenefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#526356] dark:text-[#cad8cd]">
                        <CheckIcon className="w-3.5 h-3.5 text-[#5a7260] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-[#e6dfd3] dark:border-[#253229] flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-[#7a8f80]">
                  <ClockIcon className="w-4 h-4" />
                  {service.duration}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenWizard(service.category, service.title);
                  }}
                  className="btn-terracotta px-4 py-2 text-xs flex items-center gap-1.5 shadow-xs"
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
          <h3 className="font-heading font-extrabold text-xl text-[#1f2b22] dark:text-white">
            Not sure which exam or appointment you need?
          </h3>
          <p className="text-xs text-[#526356] dark:text-[#cad8cd]">
            Our patient coordinators are happy to assist you in matching with the right optometrist across our Wyomissing, Douglassville, or Myerstown offices.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:6103743134"
              className="btn-sage px-6 py-2.5 text-xs flex items-center gap-2"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Call (610) 374-3134</span>
            </a>
            <button
              onClick={() => onOpenWizard()}
              className="btn-terracotta px-6 py-2.5 text-xs"
            >
              General Appointment Request
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
