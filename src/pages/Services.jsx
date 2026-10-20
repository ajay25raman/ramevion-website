import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Cpu, 
  Layout, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Users
} from 'lucide-react';

import PageContainer from '../components/PageContainer';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import SEOHead from '../components/SEOHead';
import { servicesData } from '../data/services';

const iconMap = {
  Globe,
  Smartphone,
  Server,
  Cpu,
  Layout,
  ShieldCheck
};

export default function Services() {
  const [selectedScenario, setSelectedScenario] = useState('local-presence');

  const scenarios = [
    {
      id: 'local-presence',
      question: '“I run a local shop or service and want customers to find our products and contact us easily.”',
      recommendedService: 'Website Development',
      serviceId: 'website-development',
      reasoning: 'A fast, responsive showcase website with localized language, location directions, and one-tap WhatsApp/calling is usually the most cost-effective and highest-impact starting point.'
    },
    {
      id: 'field-operations',
      question: '“My team works in the field or in classrooms where network coverage is unreliable.”',
      recommendedService: 'Mobile App Development',
      serviceId: 'mobile-app-development',
      reasoning: 'An offline-capable Progressive Web App (PWA) or hybrid mobile application ensures your staff can record attendance or inventory locally and sync automatically once online.'
    },
    {
      id: 'spreadsheet-chaos',
      question: '“Our daily records are scattered across notebooks and spreadsheets that cause errors.”',
      recommendedService: 'Custom Software Development',
      serviceId: 'custom-software-development',
      reasoning: 'A dedicated, lightweight internal dashboard with role-based logins and automatic threshold alerts will organize your inventory and invoices without paying expensive enterprise subscriptions.'
    },
    {
      id: 'system-connection',
      question: '“We have existing tools that need to securely share data and generate reports automatically.”',
      recommendedService: 'Backend & API Development',
      serviceId: 'backend-api-development',
      reasoning: 'Cleanly architected RESTful APIs and centralized database logic connect your tools, automate notifications, and eliminate manual copy-pasting.'
    },
    {
      id: 'confusing-interface',
      question: '“Our current website or app feels cluttered and our customers struggle to use it.”',
      recommendedService: 'UI/UX Design',
      serviceId: 'ui-ux-design',
      reasoning: 'A systematic usability audit, simplified user flow wireframing, and an accessible high-contrast design system will remove friction and respect user time.'
    },
    {
      id: 'broken-software',
      question: '“We already have an existing website or tool, but nobody is maintaining or updating it.”',
      recommendedService: 'Software Maintenance & Support',
      serviceId: 'maintenance-and-support',
      reasoning: 'Structured monthly or quarterly health checks, dependency patching, bug fixes, and performance tuning provide peace of mind without hiring full-time staff.'
    }
  ];

  const currentScenario = scenarios.find(s => s.id === selectedScenario);

  return (
    <>
      <SEOHead
        title="Software, Web & Mobile App Services | RAMEVION Technologies"
        description="Explore our services: website development, mobile app development, custom software development, and UI/UX design tailored for businesses in Bihar and beyond."
        canonical="https://ramevion-website-5crv.vercel.app/services"
      />

      {/* Page Hero */}
      <PageHero
        badge="Engineering Services"
        title="Software, Web & Mobile App Services"
        highlight="Tailored to Your Budget."
        description="We believe in sensible planning. Practical website development, mobile app development, and custom software engineered for businesses in Bihar, pan-India, and globally."
        breadcrumbs={[{ name: 'Services' }]}
      />

      {/* Comprehensive Services List */}
      <section className="py-20 bg-[#0B1020] border-b border-slate-800">
        <PageContainer>
          <div className="space-y-16">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.iconName] || Globe;

              return (

                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-3xl bg-[#111A2E]/90 border border-slate-800/80 p-7 sm:p-10 lg:p-12 hover:border-blue-500/30 transition-all scroll-mt-24 shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Overview (6 cols) */}
                    <div className="lg:col-span-6 space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                            Service 0{index + 1} • {service.category}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Who It Helps */}
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                          Who This May Help:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300">
                          {service.typicalAudience}
                        </p>
                      </div>

                      <div className="pt-2">
                        <Link
                          to={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-sm shadow-blue-500/25"
                        >
                          <span>Discuss {service.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Use Cases & Deliverables (6 cols) */}
                    <div className="lg:col-span-6 space-y-6 lg:pl-4">
                      
                      {/* Typical Use Cases */}
                      <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-blue-400" aria-hidden="true" />
                          <span>Typical Use Cases</span>
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-300" role="list">
                          {service.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-blue-400 mt-0.5">•</span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Potential Deliverables */}
                      <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                          <span>Potential Deliverables</span>
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-300" role="list">
                          {service.deliverables.map((deliv, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* SECTION: NOT SURE WHICH SOLUTION YOU NEED? */}
      <section className="py-20 bg-[#0E1528] border-b border-slate-800">
        <PageContainer>
          <SectionHeading
            badge="Guidance Helper"
            title="Not Sure Which Solution You Need?"
            description="You don't need to speak fluent technical terminology to work with us. Click the scenario closest to what you are experiencing, and see our honest recommendation."
            align="center"
          />

          <div className="max-w-4xl mx-auto">
            {/* Scenario Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {scenarios.map((scenario) => {
                const isSelected = scenario.id === selectedScenario;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => setSelectedScenario(scenario.id)}
                    className={`p-3.5 text-left rounded-xl text-xs font-medium transition-all border ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-200 border-blue-500/50 shadow-md shadow-blue-500/10'
                        : 'bg-[#111A2E] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {scenario.question}
                  </button>
                );
              })}
            </div>

            {/* Recommendation Display Box */}
            {currentScenario && (
              <div className="rounded-2xl bg-[#111A2E] border border-blue-500/30 p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>Recommended Starting Focus:</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {currentScenario.recommendedService}
                  </h3>
                  <a
                    href={`#${currentScenario.serviceId}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    <span>Jump to full service details</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentScenario.reasoning}
                </p>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-sm shadow-blue-600/30"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>

                </div>
              </div>
            )}
          </div>
        </PageContainer>
      </section>

      {/* Scope and Terms Disclaimer Note */}
      <section className="py-16 bg-[#0B1020]">
        <PageContainer>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-3xl mx-auto text-center space-y-2 text-xs text-slate-400 leading-relaxed">
            <h4 className="font-semibold text-slate-300 uppercase tracking-wider">
              Transparent Engagement Notice
            </h4>
            <p>
              Exact project scopes, deliverable boundaries, delivery timelines, pricing, infrastructure costs, and support arrangements are customized and agreed upon individually in a written agreement prior to project kickoff. We do not provide blanket guarantees or unlimited 24/7 service without explicit agreement.
            </p>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
