import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Users, 
  Store, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Lightbulb, 
  Cpu
} from 'lucide-react';

import PageContainer from '../components/PageContainer';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import ProcessStep from '../components/ProcessStep';
import SEOHead from '../components/SEOHead';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { processSteps } from '../data/process';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Inclusivity customer groups
  const inclusivityGroups = [
    {
      icon: Lightbulb,
      title: 'Individuals with Ideas',
      description: 'First-time builders seeking straightforward advice on transforming an idea into a workable concept without unnecessary jargon.'
    },
    {
      icon: Store,
      title: 'Village & Rural Entrepreneurs',
      description: 'Local innovators and producers eager to reach wider markets, simplify catalogs, and establish a respectable digital presence.'
    },
    {
      icon: Users,
      title: 'Local Shops & Service Providers',
      description: 'Retailers, clinics, and workshops looking to streamline inquiries, display working hours, and simplify customer communication.'
    },
    {
      icon: Briefcase,
      title: 'Small & Growing Businesses',
      description: 'Enterprises needing to replace chaotic paper files or spreadsheets with purposeful internal workflows and inventory dashboards.'
    },
    {
      icon: GraduationCap,
      title: 'Schools & Community Organizations',
      description: 'Educational institutes and cooperatives seeking dependable portals, member directories, and broadcast notice tools.'
    },
    {
      icon: Building2,
      title: 'Established Firms & Institutions',
      description: 'Organizations requiring reliable web portals, custom software integrations, and structured maintenance support.'
    }
  ];

  // Practical approach points
  const approachPoints = [
    {
      title: 'Understanding Before Development',
      description: 'We listen carefully to the problem before discussing code, ensuring we build what you actually need rather than what is fashionable.'
    },
    {
      title: 'Scope & Expectations Upfront',
      description: 'Deliverables, milestones, realistic timelines, and costs are agreed before kickoff with zero hidden commitments.'
    },
    {
      title: 'Jargon-Free Communication',
      description: 'We communicate in clear, honest language so you stay in complete control of your project at every milestone.'
    },
    {
      title: 'Practical Technology Choices',
      description: 'We choose battle-tested, lightweight technologies that are economical to host, fast to load, and easy to maintain.'
    },
    {
      title: 'Quality & Usability Checks',
      description: 'Every interface is checked for responsiveness across mobile, tablet, and desktop viewports before delivery.'
    },
    {
      title: 'Maintainable, Clean Code',
      description: 'We write structured, well-documented code designed for longevity, allowing you or any future developer to update it effortlessly.'
    },
    {
      title: 'Thoughtful Project Handover',
      description: 'We transfer full source files, deployment guides, and walkthroughs so you own your digital assets completely.'
    },
    {
      title: 'Transparent Support Options',
      description: 'Clear, pre-agreed maintenance plans to keep your software secure, stable, and running smoothly without surprises.'
    }
  ];

  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <>
      <SEOHead
        title="RAMEVION Technologies — Engineering the Future"
        description="Born in a Village. Built for the World. Thoughtful, accessible, and reliable digital solutions from website and mobile app development to custom software."
      />

      {/* SECTION A: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#111A2E] via-[#0B1020] to-[#0B1020] pt-12 pb-20 md:pt-20 md:pb-32 border-b border-slate-800/80">
        {/* Background grids & ambient glow */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 hero-glow pointer-events-none" aria-hidden="true" />

        <PageContainer className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline and CTAs (7 cols) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-300 border border-blue-500/25">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                <span>Technology for Real-World Progress</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Your Ideas Deserve{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                  Thoughtful Engineering.
                </span>
              </h1>

              {/* Supporting Message */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From your first digital idea to a growing business solution, RAMEVION Technologies aims to help turn real-world challenges into useful, reliable digital experiences.
              </p>

              {/* Brand Vision Highlight */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 max-w-xl mx-auto lg:mx-0 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-400 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                    Our Founding Vision
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white">
                    “Born in a Village. Built for the World.”
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span>Discuss Your Idea</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Inclusivity note */}
              <p className="text-xs text-slate-400 text-center lg:text-left pt-1">
                Open to individuals, village enterprises, regional organizations, and expanding firms.
              </p>
            </div>

            {/* Right Column: Abstract Technology Architecture Visual (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl bg-[#0E172B] border border-blue-500/20 p-6 sm:p-7 shadow-2xl shadow-blue-900/20">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">ramevion.system</span>
                  </div>
                  <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    Accessible • Pragmatic
                  </span>
                </div>

                {/* Abstract Architecture Network Diagram (SVG & Nodes) */}
                <div className="space-y-3.5">
                  
                  {/* Central Node: Real-World Need */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">1. Real-World Challenge</span>
                        <span className="text-[11px] text-slate-400">Understanding genuine user hurdles</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-blue-300 font-mono">01_DISCOVER</span>
                  </div>

                  {/* Connecting pathway */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500/40 to-blue-500/80"></div>
                  </div>

                  {/* Core Architecture Block */}
                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">2. Thoughtful Engineering</span>
                        <span className="text-[11px] text-slate-400">Modern, accessible, lightweight stacks</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">02_BUILD</span>
                  </div>

                  {/* Connecting pathway */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500/80 to-blue-500/40"></div>
                  </div>

                  {/* Destination Node: Universal Access */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">3. Universal Value</span>
                        <span className="text-[11px] text-slate-400">Reliable for local shops & global clients</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-sky-300 font-mono">03_SERVE</span>
                  </div>

                </div>

                {/* Micro tech indicator pills */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">Fast Static Web</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">Offline-Ready Apps</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">Structured APIs</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">WCAG a11y</span>
                </div>

              </div>
            </div>

          </div>
        </PageContainer>
      </section>

      {/* SECTION B: CUSTOMER INCLUSIVITY */}
      <section className="py-20 bg-[#0E1528] border-b border-slate-800">
        <PageContainer>
          <SectionHeading
            badge="Universal Accessibility"
            title="Technology Should Create Opportunities for Everyone."
            description="We reject the notion that high-quality technology is only meant for large corporations with massive budgets. Digital solutions should empower people and organizations at every tier of society."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusivityGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#111A2E]/80 border border-slate-800/80 p-6 hover:border-blue-500/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {group.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {group.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-blue-950/20 border border-blue-500/20 text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-slate-300">
              <strong className="text-white">Our Commitments to Respect:</strong> Whether you need a simple single-page website for a village tailoring unit or an inventory system for an urban distributor, you will receive our genuine attention and professional care.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* SECTION C: COMPANY INTRODUCTION */}
      <section className="py-20 bg-[#0B1020] border-b border-slate-800">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <SectionHeading
                badge="Our Core Ethos"
                title="Practical Thinking. Purposeful Technology."
                description="RAMEVION Technologies is being shaped around an uncompromising belief: software is not an ornament; it is a tool meant to make life and business simpler, faster, and more organized."
                align="left"
              />

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Rather than promoting unnecessarily complex architectures, we focus on understanding what actually needs to be built. We respect your time, listen carefully to your operational realities, and propose solutions designed around your practical requirements and budget.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Learn more about our philosophy and story</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Approach Pillars Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#111A2E] border border-slate-800">
                <span className="text-xs font-mono font-bold text-blue-400 block mb-1">01 / EMPATHY</span>
                <h3 className="text-sm font-bold text-white mb-1.5">Understanding First</h3>
                <p className="text-xs text-slate-400">Taking the time to listen before jumping into technical solutions.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#111A2E] border border-slate-800">
                <span className="text-xs font-mono font-bold text-blue-400 block mb-1">02 / PRAGMATISM</span>
                <h3 className="text-sm font-bold text-white mb-1.5">Realistic Planning</h3>
                <p className="text-xs text-slate-400">Clear milestones, sensible budgets, and no unnecessary bloat.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#111A2E] border border-slate-800">
                <span className="text-xs font-mono font-bold text-blue-400 block mb-1">03 / PRECISION</span>
                <h3 className="text-sm font-bold text-white mb-1.5">Verified Testing</h3>
                <p className="text-xs text-slate-400">Rigorous functional checks across real mobile and desktop viewports.</p>
              </div>

              <div className="p-5 rounded-xl bg-[#111A2E] border border-slate-800">
                <span className="text-xs font-mono font-bold text-blue-400 block mb-1">04 / STEWARDSHIP</span>
                <h3 className="text-sm font-bold text-white mb-1.5">Reliable Handover</h3>
                <p className="text-xs text-slate-400">Complete ownership of code, documentation, and ongoing support options.</p>
              </div>
            </div>


          </div>
        </PageContainer>
      </section>

      {/* SECTION D: SERVICES OVERVIEW */}
      <section className="py-20 bg-[#0E1528] border-b border-slate-800">
        <PageContainer>
          <SectionHeading
            badge="Engineering Capabilities"
            title="Digital Services Built for Practical Needs."
            description="We plan and engineer digital products tailored to your goals. Select a service to explore typical use cases, deliverables, and architecture approaches."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} detailed={false} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>View Comprehensive Services Guide & Deliverables</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* SECTION E: FEATURED PORTFOLIO CONCEPTS */}
      <section className="py-20 bg-[#0B1020] border-b border-slate-800">
        <PageContainer>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true"></span>
                <span>Concept Prototypes & Illustrative Solutions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Explore What Digital Solutions Can Look Like.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400">
                To demonstrate our engineering methodology, we have created realistic concept prototypes addressing everyday business and community challenges.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 shrink-0"
            >
              <span>View all concept projects</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Featured Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
            {featuredProjects.slice(0, 4).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>

          {/* Concept disclosure banner */}
          <div className="mt-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>
              ℹ️ <strong>Honesty in Presentation:</strong> These concepts are sample prototypes engineered to illustrate technical architecture and UI/UX design. We never present concept work as real client case studies.
            </span>
          </div>
        </PageContainer>
      </section>

      {/* SECTION F: WHY CHOOSE THIS APPROACH */}
      <section className="py-20 bg-[#0E1528] border-b border-slate-800">
        <PageContainer>
          <SectionHeading
            badge="Practical Integrity"
            title="Built Around Your Needs, Not Unnecessary Complexity."
            description="We prioritize sustainable, maintainable software and honest customer relationships over exaggerated claims or inflated vendor lock-in."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachPoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#111A2E]/80 border border-slate-800/80 p-5 sm:p-6 hover:border-blue-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-mono font-bold mb-3.5">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* SECTION G: DEVELOPMENT PROCESS */}
      <section className="py-20 bg-[#0B1020] border-b border-slate-800">
        <PageContainer>
          <SectionHeading
            badge="Methodology"
            title="A Structured, Transparent Five-Step Process."
            description="Software projects succeed when expectations and milestones are clearly mapped. Here is how we move from an initial conversation to a verified deliverable."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {processSteps.map((step, idx) => (
              <ProcessStep
                key={step.step}
                step={step}
                isLast={idx === processSteps.length - 1}
              />
            ))}
          </div>

          <div className="mt-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto">
            <p className="text-xs text-slate-400">
              * Actual schedules, delivery milestones, and costs are planned individually and agreed upon transparently before any work starts.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* SECTION H: MISSION & VISION (Distinctive Design) */}
      <section className="py-24 bg-gradient-to-br from-[#0B1020] via-[#111A2E] to-[#0B1020] border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />

        <PageContainer className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/15 text-blue-300 border border-blue-500/30">
              <Compass className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>Our North Star</span>
            </div>

            {/* Vision Quote Box */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#080D1A]/90 border border-blue-500/30 shadow-2xl relative">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
                Brand Vision
              </span>
              <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                “Born in a Village. Built for the World.”
              </blockquote>
              <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
                Rooted in deep empathy for local community realities, yet engineered with global technical standards, discipline, and universal ambition.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-left sm:text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">
                Our Mission
              </span>
              <p className="text-base sm:text-xl font-medium text-slate-200 leading-relaxed max-w-3xl mx-auto">
                “To help people and organizations access thoughtful, practical digital solutions through clear communication, responsible engineering, and customer-focused problem solving.”
              </p>
            </div>

          </div>
        </PageContainer>
      </section>

      {/* SECTION I: FINAL CTA */}
      <section className="py-20 bg-[#0E1528] relative">
        <PageContainer>
          <div className="rounded-3xl bg-gradient-to-r from-blue-900/40 via-blue-950/60 to-slate-900/80 border border-blue-500/30 p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-5">
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Have an Idea Worth Building?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
                Tell us what you want to solve, improve, or create. The first step is understanding your idea—no high-pressure sales, just an honest technical discussion.
              </p>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span>Start a Project Conversation</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>

              <p className="text-xs text-slate-400 pt-2">
                We respond thoughtfully to inquiries from village entrepreneurs, community projects, and businesses alike.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
