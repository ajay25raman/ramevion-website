import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Mail, 
  Phone,
  MapPin,
  MessageSquare,
  AlertCircle, 
  CheckCircle2, 
  Info,
  Send, 
  Sparkles, 
  HelpCircle,
  Copy,
  Check,
  ExternalLink,
  Code2,
  ChevronDown,
  ChevronUp,
  Clock,
  User,
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
    projectType: preselectedService || 'Website Development',
    approximateBudget: '',
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

  const serviceOptions = [
    'Website Development',
    'Mobile App Development',
    'Custom Software Development',
    'Backend & API Development',
    'Website Maintenance & Support',
    'UI/UX Design',
    'General Inquiry / Technical Guidance'
  ];

  const budgetRanges = [
    'Modest / Starter Budget (Planned Sensibly)',
    'Standard Business Project',
    'Comprehensive Custom Solution',
    'Still Evaluating Feasibility'
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
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g. name@example.com).';
    }
    if (formData.phone.trim() && !/^[0-9+()-\s]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
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
      `=== PROJECT ENQUIRY: RAMEVION TECHNOLOGIES ===`,
      `To: ${contactInfo.contactPerson.name} (${contactInfo.email.primary})`,
      `Location: ${contactInfo.location.area}`,
      `--------------------------------------------------`,
      `Full Name: ${formData.fullName.trim() || '[Not Provided]'}`,
      `Email Address: ${formData.email.trim() || '[Not Provided]'}`,
      `Phone / WhatsApp: ${formData.phone.trim() || '[Not Provided]'}`,
      `Service Required: ${formData.projectType}`,
      `Budget Range: ${formData.approximateBudget || 'To be evaluated'}`,
      ``,
      `Project Description:`,
      formData.description.trim() || '[No description entered]',
      `--------------------------------------------------`,
      `Source: Official RAMEVION Technologies Inquiry Portal`
    ].join('\n');
  };

  // Submit Handler for Live Configured Endpoint
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // If an external endpoint is configured, send the real HTTP request
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
            recipient: contactInfo.email.primary,
            summary: generateSummaryText()
          })
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            projectType: 'Website Development',
            approximateBudget: '',
            description: '',
          });
        } else {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.message || `Submission failed with HTTP status ${response.status}`);
        }
      } catch (err) {
        setSubmitStatus('error');
        setSubmitErrorMsg(err.message || 'Unable to connect to submission service. Please use WhatsApp or Email below.');
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // If no backend endpoint exists, trigger the user's email client directly with pre-filled content
    triggerMailto();
  };

  const triggerMailto = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const recipient = contactInfo.email.primary;
    const subject = encodeURIComponent(`[Project Enquiry] ${formData.projectType} — ${formData.fullName}`);
    const body = encodeURIComponent(generateSummaryText());
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const triggerWhatsApp = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const message = encodeURIComponent(
      `Hello Raman,\n\nI would like to discuss a project with RAMEVION Technologies.\n\n*Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Service:* ${formData.projectType}\n*Budget:* ${formData.approximateBudget || 'To be discussed'}\n\n*Requirement:*\n${formData.description}`
    );
    window.open(`https://wa.me/91${contactInfo.phone.raw}?text=${message}`, '_blank', 'noopener,noreferrer');
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
        title="Contact Raman Kumar & Project Inquiries"
        description="Connect with Raman Kumar at RAMEVION Technologies. Based in Maker, Saran, Bihar – 841215. Call +91 91177 19625 or email ajaykumar.dev25@gmail.com to discuss your project."
      />

      {/* Page Hero */}
      <PageHero
        badge="Direct Communication"
        title="Discuss Your Project"
        highlight="With Raman Kumar."
        description="Whether you need a new website, mobile app, custom software, or maintenance support, we invite an honest, practical discussion tailored to your timeline and budget."
        breadcrumbs={[{ name: 'Contact' }]}
      />

      {/* Main Content Section */}
      <section className="py-16 sm:py-20 bg-[#0B1020] border-b border-slate-800">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Accessible Form UI (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#111A2E]/90 border border-slate-800/80 p-6 sm:p-10 shadow-xl">
                
                {/* Form Header */}
                <div className="border-b border-slate-800 pb-5 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Project Enquiry Portal</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Send Us Your Project Requirements
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    Fields marked with <span className="text-red-400 font-bold">*</span> are required.
                  </p>
                </div>

                {/* Status Notice */}
                {hasEndpoint ? (
                  <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-200 text-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-blue-300">
                      <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Direct Web Submission Active</span>
                    </div>
                    <p className="leading-relaxed text-blue-200/90">
                      Enquiries submitted through this form are securely dispatched to our inbox.
                    </p>
                  </div>
                ) : (
                  <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-blue-500/30 text-slate-300 text-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold text-blue-400">
                      <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Instant Client Inquiry Delivery</span>
                    </div>
                    <p className="leading-relaxed text-slate-300">
                      This form formats your requirements into a clean message you can dispatch instantly via <strong>WhatsApp</strong>, open in your <strong>Email app</strong>, or copy to your clipboard with one click.
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
                      Thank you for contacting RAMEVION Technologies. Raman Kumar has received your message and will review your project details shortly.
                    </p>
                  </div>
                )}

                {/* Submission Error State */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 font-bold text-red-300 text-sm">
                      <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Submission Error</span>
                    </div>
                    <p className="leading-relaxed">
                      {submitErrorMsg || 'Unable to complete transmission. Please reach out directly via WhatsApp (+91 91177 19625) or Email.'}
                    </p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                  
                  {/* Full Name and Email */}
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
                        placeholder="e.g. Ramesh Patel"
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
                          <AlertCircle className="w-3 h-3 shrink-0" />
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
                        placeholder="e.g. ramesh@example.com"
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
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Required */}
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
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090E1A] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Service Required <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090E1A] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        {serviceOptions.map((service, idx) => (
                          <option key={idx} value={service} className="bg-[#0F172A] text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Approximate Budget */}
                  <div>
                    <label htmlFor="approximateBudget" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Approximate Budget Range <span className="text-slate-400 font-normal">(Optional)</span>
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

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Project Description <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe what you want to build, the key problem to solve, or any technical requirements..."
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
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission & Action Buttons */}
                  <div className="pt-2 space-y-3">
                    {hasEndpoint ? (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all shadow-md shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      >
                        <Send className="w-4 h-4" aria-hidden="true" />
                        <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Project Enquiry'}</span>
                      </button>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={triggerWhatsApp}
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl transition-all shadow-md shadow-emerald-600/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                        >
                          <MessageSquare className="w-4 h-4" aria-hidden="true" />
                          <span>Send via WhatsApp</span>
                        </button>

                        <button
                          type="button"
                          onClick={triggerMailto}
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          <Mail className="w-4 h-4" aria-hidden="true" />
                          <span>Send via Email App</span>
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-colors"
                      >
                        {copiedSummary ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                            <span className="text-emerald-300 font-semibold">Inquiry Summary Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                            <span>Copy Formatted Summary</span>
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-slate-400 text-center sm:text-right">
                        Direct connection to Raman Kumar • No spam, no sales pressure.
                      </p>
                    </div>
                  </div>

                </form>

                {/* Expandable Technical Guide for Backend Setup */}
                <div className="mt-8 pt-5 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setShowIntegrationGuide(prev => !prev)}
                    className="w-full flex items-center justify-between text-left text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors py-1"
                  >
                    <span className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      <span>Form Backend & Direct Delivery Integration Note</span>
                    </span>
                    {showIntegrationGuide ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {showIntegrationGuide && (
                    <div className="mt-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2.5 leading-relaxed animate-in fade-in duration-150">
                      <p className="font-semibold text-white">
                        Recommended Secure Form Delivery Configurations:
                      </p>
                      <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                        <li>
                          <strong>Option A (Zero-backend endpoint):</strong> Set up a free form endpoint on <span className="font-mono text-blue-300">Formspree.io</span> or <span className="font-mono text-blue-300">Web3Forms.com</span> and assign the endpoint to the Vercel environment variable <code className="text-blue-300 bg-slate-800 px-1 py-0.5 rounded">VITE_CONTACT_FORM_ENDPOINT</code>.
                        </li>
                        <li>
                          <strong>Option B (Serverless API route):</strong> Deploy a serverless handler using transactional email services such as Resend or SendGrid with API keys secured server-side.
                        </li>
                        <li>
                          <strong>Current Live Operation:</strong> Inquiries are safely routed directly to Raman Kumar via WhatsApp and Email (`mailto:`) with zero server overhead or third-party data tracking.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Right Column: Contact Channels & Verified Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Official Contact Card */}
              <div className="rounded-3xl bg-[#111A2E]/90 border border-slate-800/80 p-6 sm:p-8 space-y-5 shadow-xl">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                    Official Contact
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-2 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
                    <span>{contactInfo.contactPerson.name}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    RAMEVION Technologies • {contactInfo.tagline}
                  </p>
                </div>

                <div className="space-y-3.5 text-xs">
                  {/* Phone Number (tel:) */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                          Phone / Mobile
                        </span>
                        <a 
                          href={contactInfo.phone.tel}
                          className="font-mono text-sm text-white hover:text-blue-400 font-semibold transition-colors"
                        >
                          {contactInfo.phone.display}
                        </a>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          {contactInfo.phone.note}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Action Button */}
                  <a
                    href={contactInfo.phone.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                      <div>
                        <span className="text-xs font-bold text-white block">
                          Chat on WhatsApp
                        </span>
                        <span className="text-[11px] text-emerald-400/90 block">
                          +91 91177 19625 (Instant messaging)
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Email with Quick Copy */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 min-w-0">
                      <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                          Direct Email
                        </span>
                        <a 
                          href={contactInfo.email.mailto}
                          className="font-mono text-xs sm:text-sm text-blue-400 hover:underline font-semibold block truncate"
                        >
                          {contactInfo.email.primary}
                        </a>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          {contactInfo.email.note}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      className="shrink-0 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      aria-label="Copy official email address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Service Location with Google Maps Search Link */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                          Service Location & Regional Base
                        </span>
                        <span className="text-sm font-semibold text-slate-200 block">
                          {contactInfo.location.display}
                        </span>
                        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                          {contactInfo.location.note}
                        </p>
                      </div>
                    </div>

                    <div className="pt-1">
                      <a
                        href={contactInfo.location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>View Maker, Saran, Bihar on Google Maps</span>
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  {/* Consultation Schedule */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                        Consultation Schedule
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium block">
                        {contactInfo.workingHours.display}
                      </span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        {contactInfo.workingHours.note}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Guide Card */}
              <div className="rounded-3xl bg-[#0E1528] border border-blue-500/20 p-6 sm:p-7 space-y-3.5 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Preparing For A Discussion</span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white">
                  What Helps Start the Conversation?
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  No technical jargon is needed. Simply let Raman know:
                </p>

                <ul className="space-y-2 text-xs text-slate-300" role="list">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>The Goal:</strong> What do you want your website or software to achieve?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Your Audience:</strong> Who will visit the website or use the application?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Target Timeline:</strong> When would you ideally like to launch?</span>
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
