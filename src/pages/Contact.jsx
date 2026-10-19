import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Mail, 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  Send, 
  Sparkles, 
  HelpCircle 
} from 'lucide-react';
import PageContainer from '../components/PageContainer';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import { contactInfo } from '../data/contactInfo';


export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organizationType: 'Individual / Village Entrepreneur',
    projectType: preselectedService || 'Website Development',
    approximateBudget: '',
    desiredTimeline: '',
    description: '',
  });

  // Client-side validation state
  const [errors, setErrors] = useState({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const organizationTypes = [
    'Individual / Village Entrepreneur',
    'Local Retail Shop / Small Business',
    'Educational Institute / Coaching Center',
    'Community Organization / Cooperative',
    'Growing Startup / Enterprise',
    'Other / Exploring Ideas'
  ];

  const projectTypes = [
    'Website Development',
    'Mobile App Development',
    'Backend & API Development',
    'Custom Software Development',
    'UI/UX Design',
    'Software Maintenance & Support',
    'General Inquiry / Technical Guidance'
  ];

  const budgetRanges = [
    'Modest / Starter Budget (Planned Sensibly)',
    'Standard Business Project',
    'Comprehensive Custom Solution',
    'Still Evaluating Feasibility'
  ];

  const timelineRanges = [
    'Immediate (Next 1-2 Months)',
    'Within 3-6 Months',
    'Flexible / Long-Term Planning'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format.';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please write a brief note about what you wish to build or solve.';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Please provide at least a few words describing your idea.';
    }
    return newErrors;
  };

  // Safe prototype submission interception
  const handlePrototypeSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setAttemptedSubmit(false);
      return;
    }
    // Form is valid: show prototype notice without transmitting or storing data
    setErrors({});
    setAttemptedSubmit(true);
  };

  return (
    <>
      <SEOHead
        title="Contact & Project Inquiries"
        description="Begin a project discussion with RAMEVION Technologies. Share your idea, requirements, and challenges with an engineering team that listens carefully."
      />

      {/* Page Hero */}
      <PageHero
        badge="Start a Conversation"
        title="Tell Us What You Want"
        highlight="To Build or Solve."
        description="Whether you have a fully formed technical requirement or simply an idea you would like to explore, we invite an honest, straightforward discussion."
        breadcrumbs={[{ name: 'Contact' }]}
      />

      {/* Main Content Section */}
      <section className="py-20 bg-[#0B1020] border-b border-slate-800">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Accessible Form UI (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#111A2E]/90 border border-slate-800/80 p-7 sm:p-10 shadow-xl">
                
                {/* Form Header */}
                <div className="border-b border-slate-800 pb-5 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Project Discussion Form</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Tell Us About Your Requirement
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    Fields marked with <span className="text-red-400 font-bold">*</span> are required.
                  </p>
                </div>

                {/* Static Site Prototype Warning Banner */}
                <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-amber-300">
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Prototype Form Mode (No Live Backend Attached)</span>
                  </div>
                  <p className="leading-relaxed">
                    This inquiry form is a functional frontend UI preview. No data is stored, sent, or transmitted across the web until our production backend contact service is configured.
                  </p>
                </div>

                {/* Attempted Submit Feedback Notification */}
                {attemptedSubmit && (
                  <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-200 text-xs space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 font-bold text-blue-300 text-sm">
                      <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Validation Passed (Preview Prototype Safe Intercept)</span>
                    </div>
                    <p className="leading-relaxed">
                      Your form inputs are validated correctly according to client-side checks. Because this site is operating in frontend-only prototype mode, your details have not been sent over any network. Prior to launch, replace this interceptor with your verified form endpoint (e.g. Formspree, Resend, or your custom API).
                    </p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handlePrototypeSubmit} noValidate className="space-y-5">
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#090E1A] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.fullName 
                            ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                            : 'border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@example.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#090E1A] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                            : 'border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Organization Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090E1A] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="organizationType" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Customer / Organization Type
                      </label>
                      <select
                        id="organizationType"
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090E1A] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        {organizationTypes.map((type, idx) => (
                          <option key={idx} value={type} className="bg-[#0F172A] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Primary Service or Solution Needed
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090E1A] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      {projectTypes.map((type, idx) => (
                        <option key={idx} value={type} className="bg-[#0F172A] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Approximate Budget & Timeline (Optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="approximateBudget" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Approximate Budget <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        id="approximateBudget"
                        name="approximateBudget"
                        value={formData.approximateBudget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090E1A] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Select range if known...</option>
                        {budgetRanges.map((range, idx) => (
                          <option key={idx} value={range} className="bg-[#0F172A] text-white">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="desiredTimeline" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Desired Timeline <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        id="desiredTimeline"
                        name="desiredTimeline"
                        value={formData.desiredTimeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090E1A] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Select timeline if planned...</option>
                        {timelineRanges.map((time, idx) => (
                          <option key={idx} value={time} className="bg-[#0F172A] text-white">
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Brief Description of Your Idea or Problem <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell us what you are trying to solve, who the users are, or what kind of website/tool you envision..."
                      aria-required="true"
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? 'description-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-[#090E1A] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.description 
                          ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                          : 'border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    ></textarea>
                    {errors.description && (
                      <p id="description-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Validate & Submit Enquiry (Prototype Test)</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Submitting triggers frontend validation without transmitting personal data.
                    </p>
                  </div>

                </form>
              </div>
            </div>

            {/* Right Column: Contact Channels & Help Guide (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Official Contact Placeholders */}
              <div className="rounded-3xl bg-[#111A2E]/90 border border-slate-800/80 p-7 space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" aria-hidden="true" />
                  <span>Direct Communication Channels</span>
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Notice for visitors: Official enterprise email and hotlines will be activated upon public launch. The details below are clear placeholders for configuration.
                </p>

                <div className="space-y-4 text-xs">
                  {/* Email */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Inquiry Inbox
                    </span>
                    <span className="font-mono text-sm text-blue-300 font-semibold block">
                      {contactInfo.email.primary}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      {contactInfo.email.note}
                    </span>
                  </div>

                  {/* Region */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Operating Model
                    </span>
                    <span className="text-sm text-slate-200 font-medium block">
                      {contactInfo.location.display}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      {contactInfo.location.note}
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Consultation Schedule
                    </span>
                    <span className="text-sm text-slate-200 font-medium block">
                      {contactInfo.workingHours.display}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      {contactInfo.workingHours.note}
                    </span>
                  </div>
                </div>
              </div>

              {/* Guide: What information helps start a conversation? */}
              <div className="rounded-3xl bg-[#0E1528] border border-blue-500/20 p-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" aria-hidden="true" />
                  <span>What Information Helps Most?</span>
                </div>

                <h3 className="text-base font-bold text-white">
                  Preparing for an Initial Discussion
                </h3>


                <p className="text-xs text-slate-300 leading-relaxed">
                  You don’t need an exhaustive 50-page document. When reaching out, these three basic points help us give you the most thoughtful feedback:
                </p>

                <ul className="space-y-2.5 text-xs text-slate-300" role="list">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>The Core Problem:</strong> What is difficult, slow, or disorganized right now?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>The Intended Users:</strong> Who will open this website or tool on a daily basis?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Your Target Timeline:</strong> When do you ideally hope to launch or test the first version?</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </PageContainer>
      </section>
    </>
  );
}
