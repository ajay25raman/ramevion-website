import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Mail, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  Send, 
  Sparkles, 
  HelpCircle,
  Copy,
  Check,
  Code2,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  ShieldAlert
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

  // Validation & status states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [submitErrorMsg, setSubmitErrorMsg] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showIntegrationGuide, setShowIntegrationGuide] = useState(false);

  const hasEndpoint = Boolean(contactInfo.formEndpoint && contactInfo.formEndpoint.trim());

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
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
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
      newErrors.description = 'Please provide at least 10 characters describing your idea or problem.';
    }
    return newErrors;
  };

  const generateSummaryText = () => {
    return [
      `=== PROJECT DISCUSSION INQUIRY ===`,
      `To: ${contactInfo.companyName} (${contactInfo.email.primary})`,
      `--------------------------------------------------`,
      `Full Name: ${formData.fullName.trim() || '[Not Provided]'}`,
      `Email Address: ${formData.email.trim() || '[Not Provided]'}`,
      `Phone / WhatsApp: ${formData.phone.trim() || '[Not Provided]'}`,
      `Customer / Organization: ${formData.organizationType}`,
      `Service Needed: ${formData.projectType}`,
      `Approximate Budget: ${formData.approximateBudget || 'To be evaluated'}`,
      `Target Timeline: ${formData.desiredTimeline || 'To be discussed'}`,
      ``,
      `Project Description / Problem Statement:`,
      formData.description.trim() || '[No description entered]',
      `--------------------------------------------------`,
      `Source: Official RAMEVION Technologies Inquiry Portal`
    ].join('\n');
  };

  // Direct Submission Handler (for configured endpoints) or Mailto Fallback
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Case 1: Backend Endpoint is configured
    if (hasEndpoint) {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      setSubmitErrorMsg('');

      try {
        const response = await fetch(contactInfo.formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            summary: generateSummaryText()
          })
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            organizationType: 'Individual / Village Entrepreneur',
            projectType: 'Website Development',
            approximateBudget: '',
            desiredTimeline: '',
            description: '',
          });
        } else {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.message || `Submission failed with status: ${response.status}`);
        }
      } catch (err) {
        setSubmitStatus('error');
        setSubmitErrorMsg(err.message || 'Network error occurred while sending your inquiry.');
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // Case 2: Frontend-only mode (No fake submission! Opens pre-filled mailto directly)
    triggerMailto();
  };

  const triggerMailto = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const recipient = contactInfo.email.primary;
    const subject = encodeURIComponent(`[Project Discussion] ${formData.projectType} — ${formData.fullName}`);
    const body = encodeURIComponent(generateSummaryText());
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  };

  const handleCopySummary = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await navigator.clipboard.writeText(generateSummaryText());
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 3000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = generateSummaryText();
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 3000);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email.primary);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact & Project Discussions"
        description="Discuss your project with RAMEVION Technologies. Share your requirements directly with our engineering team for thoughtful, realistic software solutions."
      />

      {/* Page Hero */}
      <PageHero
        badge="Start a Conversation"
        title="Discuss Your Project"
        highlight="With Our Engineering Team."
        description="Whether you have a fully formed technical requirement or simply an early idea you want to evaluate, we welcome an honest, practical discussion."
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
                    <span>Project Discussion Portal</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Tell Us About Your Requirement
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    Fields marked with <span className="text-red-400 font-bold">*</span> are required.
                  </p>
                </div>

                {/* Transparent Operation Banner */}
                {hasEndpoint ? (
                  <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-200 text-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-blue-300">
                      <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Direct Submission Active</span>
                    </div>
                    <p className="leading-relaxed text-blue-200/90">
                      Inquiries submitted through this form are securely transmitted to our backend inbox.
                    </p>
                  </div>
                ) : (
                  <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-blue-500/30 text-slate-300 text-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold text-blue-400">
                      <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Direct Client Communication System</span>
                    </div>
                    <p className="leading-relaxed text-slate-300">
                      To safeguard your privacy and avoid unverified third-party trackers, this form lets you pre-format your project details. You can launch your email client with all fields ready to send, or copy the formatted text with one click.
                    </p>
                  </div>
                )}

                {/* Submission Success State */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 font-bold text-emerald-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Enquiry Transmitted Successfully</span>
                    </div>
                    <p className="leading-relaxed">
                      Thank you for reaching out. We have received your project details and will review your requirements.
                    </p>
                  </div>
                )}

                {/* Submission Error State */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 font-bold text-red-300 text-sm">
                      <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Submission Could Not Be Completed</span>
                    </div>
                    <p className="leading-relaxed">
                      {submitErrorMsg || 'Please use the "Open in Email Client" button or copy the inquiry details below.'}
                    </p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                  
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

                  {/* Dual Action Enquiry Triggers */}
                  <div className="pt-3 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {hasEndpoint ? (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 rounded-xl transition-all shadow-md shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          <Send className="w-4 h-4" aria-hidden="true" />
                          <span>{isSubmitting ? 'Sending Enquiry...' : 'Discuss Your Project'}</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={triggerMailto}
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          <Mail className="w-4 h-4" aria-hidden="true" />
                          <span>Send via Email App</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                      >
                        {copiedSummary ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                            <span className="text-emerald-300">Inquiry Details Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-slate-400" aria-hidden="true" />
                            <span>Copy Inquiry Summary</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                      {hasEndpoint 
                        ? 'Direct submission is processed securely.' 
                        : 'Clicking "Send via Email App" opens your email client with all details filled. You can also copy the formatted inquiry and paste it into any chat or email.'}
                    </p>
                  </div>

                </form>

                {/* Collapsible Backend Integration Guide for Owner / Developers */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setShowIntegrationGuide(prev => !prev)}
                    className="w-full flex items-center justify-between text-left text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors py-1"
                  >
                    <span className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      <span>Technical Note: Backend & Email Form Integration</span>
                    </span>
                    {showIntegrationGuide ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {showIntegrationGuide && (
                    <div className="mt-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-3 leading-relaxed animate-in fade-in duration-150">
                      <p className="font-semibold text-white">
                        How to connect live email dispatch to this static Vercel deployment:
                      </p>
                      <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                        <li>
                          <strong>Option A (Zero-backend service):</strong> Create a free form endpoint on <span className="font-mono text-blue-300">Formspree.io</span> or <span className="font-mono text-blue-300">Web3Forms.com</span> and set the URL in <code className="text-blue-300 bg-slate-800 px-1 py-0.5 rounded">src/data/contactInfo.js</code> under <code className="text-blue-300 bg-slate-800 px-1 py-0.5 rounded">formEndpoint</code>.
                        </li>
                        <li>
                          <strong>Option B (Vercel Serverless Function):</strong> Add an <code className="text-blue-300 bg-slate-800 px-1 py-0.5 rounded">/api/contact.js</code> endpoint utilizing Resend or Nodemailer with transactional SMTP credentials.
                        </li>
                        <li>
                          <strong>Option C (Current Safe Default):</strong> The dual mailto + clipboard copy workflow guarantees zero data loss, zero third-party leakage, and immediate receipt in your inbox.
                        </li>
                      </ol>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Right Column: Contact Channels & Help Guide (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Official Contact Channels */}
              <div className="rounded-3xl bg-[#111A2E]/90 border border-slate-800/80 p-7 space-y-6 shadow-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" aria-hidden="true" />
                  <span>Direct Communication Channels</span>
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  We encourage prospective clients and partners to reach out directly. Every inquiry is reviewed thoughtfully by our engineering team.
                </p>

                <div className="space-y-4 text-xs">
                  {/* Email with Quick Copy */}
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Official Inquiry Inbox
                      </span>
                      <a 
                        href={`mailto:${contactInfo.email.primary}`}
                        className="font-mono text-sm text-blue-400 hover:underline font-semibold block truncate"
                      >
                        {contactInfo.email.primary}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      className="shrink-0 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      aria-label="Copy official email address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Region & Operational Model */}
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>Operating Footprint</span>
                    </div>
                    <span className="text-sm text-slate-200 font-medium block">
                      {contactInfo.location.display}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1 leading-relaxed">
                      {contactInfo.location.note}
                    </span>
                  </div>

                  {/* Consultation Schedule */}
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>Consultation Schedule</span>
                    </div>
                    <span className="text-sm text-slate-200 font-medium block">
                      {contactInfo.workingHours.display}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {contactInfo.workingHours.note}
                    </span>
                  </div>
                </div>
              </div>

              {/* Guide: What information helps start a conversation? */}
              <div className="rounded-3xl bg-[#0E1528] border border-blue-500/20 p-7 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" aria-hidden="true" />
                  <span>What Information Helps Most?</span>
                </div>

                <h3 className="text-base font-bold text-white">
                  Preparing for an Initial Discussion
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  You don’t need an exhaustive specification. When reaching out, these three basic points help us give you the most thoughtful feedback:
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
