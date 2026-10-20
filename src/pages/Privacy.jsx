import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, ArrowLeft, Lock, FileText, CheckCircle2 } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import { contactInfo } from '../data/contactInfo';

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy and data transparency statement for RAMEVION Technologies. Understand how client project inquiries and communication details are handled responsibly."
        canonical="https://ramevion-website-5crv.vercel.app/privacy"
      />

      <PageHero
        badge="Trust & Transparency"
        title="Privacy Policy &"
        highlight="Data Responsibility."
        description="We believe clear communication begins with respecting your privacy. This policy outlines how information submitted through our website or direct communication channels is used."
        breadcrumbs={[{ name: 'Privacy Policy' }]}
      />

      <section className="py-16 sm:py-20 bg-[#0B1020] border-b border-slate-800">
        <PageContainer>
          <div className="max-w-4xl mx-auto space-y-12 text-slate-300 text-sm leading-relaxed">
            
            {/* Identity & Legal Status Transparency Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#111A2E]/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    1. Brand Identity & Operating Model
                  </h2>
                  <span className="text-xs text-slate-400">
                    RAMEVION Technologies • Independent Technology Initiative
                  </span>
                </div>
              </div>
              <p>
                <strong>RAMEVION Technologies</strong> is an independent software engineering initiative spearheaded by <strong>Raman Kumar</strong>, with service operations rooted in <strong>Maker, Saran, Bihar – 841215, India</strong>. 
              </p>
              <p>
                In keeping with our commitment to transparency, we do not claim formal corporate incorporation status, third-party government certifications, or a physical corporate office headquarters. We provide remote and regional software development, website architecture, and digital engineering services to clients across India and globally.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                <span>2. Information We Collect</span>
              </h2>
              <p>
                We only collect personal information that you voluntarily provide when initiating a project discussion or sending an inquiry. This includes:
              </p>
              <ul className="space-y-2 list-disc list-inside text-slate-300 ml-2">
                <li><strong>Full Name:</strong> To address you properly in correspondence.</li>
                <li><strong>Email Address:</strong> To send project estimates, technical feedback, and milestone updates.</li>
                <li><strong>Phone / WhatsApp Number:</strong> Provided optionally to facilitate immediate consultation and messaging.</li>
                <li><strong>Project Requirements:</strong> Details about the software or website you want to build, budget parameters, and intended timelines.</li>
              </ul>
            </div>

            {/* How Your Information Is Used */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>3. How We Use Submitted Information</span>
              </h2>
              <p>
                Your inquiry information is used strictly for legitimate project-related purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                    Project Feasibility & Estimates
                  </span>
                  <p className="text-xs text-slate-400">
                    Evaluating technical requirements, proposing technology stacks, and estimating realistic schedules.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                    Direct Client Communication
                  </span>
                  <p className="text-xs text-slate-400">
                    Replying to your emails, scheduling phone discussions, and coordinating project deliverables.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                We <strong>never</strong> sell, monetize, rent, or distribute your personal details to marketing agencies, advertising networks, or data brokers.
              </p>
            </div>

            {/* Form Transmission & Data Security */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-400" />
                <span>4. Data Security & Storage</span>
              </h2>
              <p>
                When you initiate communication through our website:
              </p>
              <ul className="space-y-2 list-disc list-inside text-slate-300 ml-2">
                <li>
                  <strong>WhatsApp & Direct Email:</strong> Interactions take place directly between your email client or WhatsApp app and Raman Kumar, ensuring encrypted point-to-point delivery without intermediary storage.
                </li>
                <li>
                  <strong>Web Submissions:</strong> If submitted through an active HTTPS form endpoint, transmissions are encrypted in transit using industry-standard TLS.
                </li>
                <li>
                  <strong>Analytics:</strong> We do not deploy intrusive behavioral tracking cookies or third-party profiling pixels.
                </li>
              </ul>
            </div>

            {/* Your Rights & Data Requests */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">
                5. Your Privacy Rights
              </h2>
              <p>
                You have the right to request a copy of the correspondence we hold regarding your project, update your contact details, or request that your messages be deleted from our records.
              </p>
            </div>

            {/* Privacy Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-blue-500/20 space-y-4">
              <h3 className="text-base font-bold text-white">
                Questions or Privacy Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                If you have questions regarding this Privacy Policy or wish to request data updates, please reach out directly:
              </p>
              <div className="space-y-2 text-xs">
                <p className="flex items-center gap-2 text-slate-200">
                  <span className="font-semibold text-white">Contact Person:</span> {contactInfo.contactPerson.name}
                </p>
                <p className="flex items-center gap-2 text-slate-200">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href={contactInfo.email.mailto} className="hover:underline text-blue-400 font-mono">
                    {contactInfo.email.primary}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href={contactInfo.phone.tel} className="hover:underline font-mono">
                    {contactInfo.phone.display}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{contactInfo.location.display}</span>
                </p>
              </div>
            </div>

            {/* Back to Home Link */}
            <div className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>
            </div>

          </div>
        </PageContainer>
      </section>
    </>
  );
}
