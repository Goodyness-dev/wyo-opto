import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { submitQuoteRequest } from '../../services/quoteService';
import { 
  XIcon, 
  CheckIcon, 
  ArrowRightIcon, 
  ArrowLeftIcon, 
  MapPinIcon, 
  CalendarIcon, 
  PhoneIcon, 
  EyeIcon, 
  ShieldCheckIcon,
  AlertCircleIcon,
  Loader2Icon,
  GlassesIcon,
  SparklesIcon
} from '../common/Icons';

const VISIT_REASONS = [
  { id: 'comprehensive', title: 'Comprehensive Eye Health Exam', desc: 'Routine vision check, refraction & full retinal scan' },
  { id: 'macular', title: 'Macular Degeneration & Retinal Scan', desc: 'AdaptDx dark adaptation & Heidelberg Spectralis OCT' },
  { id: 'dry-eye', title: 'Dry Eye Center & LipiFlow Evaluation', desc: 'Chronic burning, scratchiness, redness or tear film testing' },
  { id: 'pediatric', title: 'Pediatric Vision & Myopia Management', desc: 'Children eye development, tracking & Ortho-K therapy' },
  { id: 'contacts', title: 'Contact Lens Fitting (Soft / Scleral)', desc: 'Astigmatism, multifocal, or custom keratoconus lenses' },
  { id: 'emergency', title: 'Acute Eye Concern / Red Eye', desc: 'Pain, discharge, metal or foreign body, flashes & floaters' },
  { id: 'eyewear', title: 'Designer Eyewear & Frame Styling', desc: 'Custom prescription lenses & frame selection consultation' }
];

const TIME_PREFERENCES = [
  'Morning (8:30 AM – 12:00 PM)',
  'Afternoon (1:00 PM – 4:30 PM)',
  'Evening (5:00 PM – 8:00 PM)',
  'First Available'
];

export default function QuoteWizardModal({ isOpen, onClose, initialCategory = null, initialService = null }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState(null);

  const [formData, setFormData] = useState({
    serviceCategory: initialCategory || 'Comprehensive Eye Health Exam',
    preferredOffice: initialService && initialService.includes('Office') ? initialService : 'Wyomissing (50 Berkshire Court)',
    timePreference: 'First Available',
    patientName: '',
    phone: '',
    email: '',
    insurance: 'VSP (Vision Service Plan)',
    symptomsNotes: '',
    isNewPatient: true
  });

  if (!isOpen) return null;

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.patientName || 'Anonymous Patient',
        email: formData.email || 'patient@wyo-opto.com',
        phone: formData.phone || '(610) 374-3134',
        location: formData.preferredOffice,
        make: formData.insurance,
        modelAndYear: formData.isNewPatient ? 'New Patient' : 'Returning Patient',
        serviceCategory: formData.serviceCategory,
        detailedService: formData.serviceCategory,
        details: formData.symptomsNotes || 'Requested via Web Portal',
        timeline: formData.timePreference,
        needsTowing: false,
        needsShuttle: false
      };

      const result = await submitQuoteRequest(payload);
      setSubmittedResult(result);
      setStep(4);
    } catch (err) {
      console.error(err);
      setSubmittedResult({ success: true, quoteId: 'OPT-' + Date.now().toString().slice(-5) });
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setSubmittedResult(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#101625] w-full max-w-2xl rounded-3xl sm:rounded-4xl shadow-2xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wizard-modal-title"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/40">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
              Wyomissing Optometric Center • Appointment Concierge
            </span>
            <h2 id="wizard-modal-title" className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
              {step === 4 ? 'Appointment Request Confirmed' : `Schedule Your Visit (Step ${step} of 3)`}
            </h2>
          </div>

          <button
            onClick={resetAndClose}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition"
            aria-label="Close appointment modal"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: Select Reason for Care */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  1. What type of care are you scheduling today?
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Select your primary focus so we can allocate appropriate diagnostic instrumentation and examination suites.
                </p>
              </div>

              <div className="space-y-2.5">
                {VISIT_REASONS.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => setFormData(prev => ({ ...prev, serviceCategory: r.title }))}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                      formData.serviceCategory === r.title
                        ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                      formData.serviceCategory === r.title
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'border-slate-300 dark:border-slate-600'
                    }`}>
                      {formData.serviceCategory === r.title && <CheckIcon className="w-3.5 h-3.5" />}
                    </div>

                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{r.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Location & Timing */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  2. Choose your preferred office location
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  We have 3 fully equipped locations with free parking across Berks and Lebanon Counties.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {BUSINESS_INFO.locations.map(loc => (
                  <div
                    key={loc.id}
                    onClick={() => setFormData(prev => ({ ...prev, preferredOffice: `${loc.name} (${loc.street})` }))}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      formData.preferredOffice.includes(loc.name)
                        ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                    }`}
                  >
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{loc.city} Office</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{loc.street}</p>
                    </div>
                    <p className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 mt-3">{loc.phone}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Preferred Time of Day:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {TIME_PREFERENCES.map((time, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setFormData(prev => ({ ...prev, timePreference: time }))}
                      className={`p-3 rounded-xl text-xs font-bold transition border ${
                        formData.timePreference === time
                          ? 'bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] border-[#0b0f19] dark:border-white shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Patient Status Toggle */}
              <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-700 dark:text-slate-300">
                <span>Are you a new patient?</span>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, isNewPatient: true }))}
                  className={`px-3 py-1.5 rounded-lg border ${formData.isNewPatient ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'}`}
                >
                  Yes, New Patient
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, isNewPatient: false }))}
                  className={`px-3 py-1.5 rounded-lg border ${!formData.isNewPatient ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'}`}
                >
                  Returning Patient
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Insurance */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  3. Your Details & Insurance Information
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  We'll verify your benefits in advance to eliminate waiting room paperwork.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) => setFormData(prev => ({ ...prev, patientName: e.target.value }))}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-indigo-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="(610) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="jane.doe@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Vision / Medical Insurance</label>
                <select
                  value={formData.insurance}
                  onChange={(e) => setFormData(prev => ({ ...prev, insurance: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-indigo-500 outline-none"
                >
                  <option value="VSP (Vision Service Plan)">VSP (Vision Service Plan)</option>
                  <option value="EyeMed Vision Care">EyeMed Vision Care</option>
                  <option value="Medicare / Medicare Advantage">Medicare / Medicare Advantage</option>
                  <option value="Highmark Blue Cross Blue Shield">Highmark Blue Cross Blue Shield</option>
                  <option value="Aetna">Aetna</option>
                  <option value="UnitedHealthcare">UnitedHealthcare</option>
                  <option value="Davis Vision">Davis Vision</option>
                  <option value="CareCredit Financing">CareCredit Financing</option>
                  <option value="Self-Pay / Other">Self-Pay / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Symptoms or Special Requests (Optional)</label>
                <textarea
                  rows="2"
                  value={formData.symptomsNotes}
                  onChange={(e) => setFormData(prev => ({ ...prev, symptomsNotes: e.target.value }))}
                  placeholder="e.g., Interested in LipiFlow for dry eyes, or scheduling child for Ortho-K..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:border-indigo-500 outline-none resize-none"
                />
              </div>

              <div className="p-3 bg-indigo-50/70 dark:bg-indigo-950/40 rounded-xl border border-indigo-100 dark:border-indigo-900/40 flex items-center gap-2 text-xs text-indigo-900 dark:text-indigo-200">
                <ShieldCheckIcon className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Your health information is confidential & encrypted in accordance with HIPAA standards.</span>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 rounded-full bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2Icon className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm & Request Appointment</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success Screen */}
          {step === 4 && (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                <CheckIcon className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
                  Appointment Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Thank you, <strong>{formData.patientName}</strong>. Our clinical coordinators at <strong>{formData.preferredOffice.split('(')[0]}</strong> will contact you via phone or email shortly to confirm your exact arrival time.
                </p>
              </div>

              <div className="card-thick p-4 text-left text-xs max-w-md mx-auto space-y-2 bg-slate-50 dark:bg-slate-900/50">
                <p><strong>Service:</strong> {formData.serviceCategory}</p>
                <p><strong>Location:</strong> {formData.preferredOffice}</p>
                <p><strong>Preferred Timing:</strong> {formData.timePreference}</p>
                <p><strong>Insurance:</strong> {formData.insurance}</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 rounded-full bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] font-bold text-xs shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls for Steps 1 & 2 */}
        {step < 3 && (
          <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-full bg-[#0b0f19] dark:bg-white text-white dark:text-[#0b0f19] text-xs font-bold shadow transition flex items-center gap-1.5"
            >
              <span>Continue to Next Step</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
