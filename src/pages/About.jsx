import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Lightbulb, 
  CheckCircle2, 
  Eye, 
  BookOpen, 
  Lock, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import PageContainer from '../components/PageContainer';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import SEOHead from '../components/SEOHead';
import { coreValues } from '../data/values';
import { processPhilosophy } from '../data/process';

const valueIconMap = {
  ShieldCheck,
  Users,
  Lightbulb,
  CheckCircle2,
  Eye,
  Compass,
  BookOpen,
  Lock
};

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us — Purpose & Philosophy"
        description="Learn about RAMEVION Technologies. Born in a Village. Built for the World. An emerging technology brand focused on accessible, practical, and honest digital engineering."
      />

      {/* Page Hero */}
      <PageHero
        badge="About RAMEVION Technologies"
        title="Technology With Purpose."
        highlight="Progress Without Boundaries."
        description="We are shaping an engineering brand around the belief that useful software should be understandable, accessible, and built around genuine everyday needs."
        breadcrumbs={[{ name: 'About Us' }]}
      />

      {/* Brand Story Section */}
      <section className="py-20 bg-[#0B1020] border-b border-slate-800">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                <span>The Story Behind Our Vision</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                “Born in a Village. Built for the World.”
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  The phrase <strong className="text-white">“Born in a Village. Built for the World.”</strong> is more than a tagline—it represents our foundational outlook on what technology should be and who it should serve.
                </p>
                <p>
                  Most technology companies are formed in major metropolitan hubs, catering primarily to well-funded enterprises. In doing so, millions of village innovators, rural cooperative societies, small-town merchants, and community schools are frequently overlooked or sold bloated, unaffordable software they cannot easily maintain.
                </p>
                <p>
                  RAMEVION Technologies is being built from the ground up to bridge this divide. We combine the grounded humility and practical resourcefulness of village roots with high-standard engineering principles suitable for modern businesses anywhere in the world.
                </p>
                <p className="text-xs text-slate-400 italic">
                  * Note: We are an emerging brand in our foundational phase. Our vision reflects our clear engineering commitment and standard of work, rather than an unearned claim of established multinational scale.
                </p>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#111A2E] border border-blue-500/20 p-7 sm:p-8 space-y-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Our Perspective</h3>
                    <span className="text-xs text-slate-400">Ground Reality Meets Global Standards</span>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <strong className="text-white block mb-0.5">Local Needs First</strong>
                    <span className="text-slate-400 text-xs">Designing for intermittent connectivity, multilingual interfaces, and simple workflows.</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <strong className="text-white block mb-0.5">Sensible Cost Planning</strong>
                    <span className="text-slate-400 text-xs">No vendor lock-in or inflated licensing. Sensible hosting costs and long-term maintainability.</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <strong className="text-white block mb-0.5">World-Class Discipline</strong>
                    <span className="text-slate-400 text-xs">Modern component architectures, strict accessibility standards, and clean codebases.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </PageContainer>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-[#0E1528] border-b border-slate-800">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="rounded-2xl bg-[#111A2E] border border-slate-800 p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  “Born in a Village. Built for the World.”
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To prove that meaningful, world-class technology can emerge from any geography, providing equal dignity and technological capability to local village pioneers and global clients alike.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
                VISION_REF: RAMEVION_2026
              </div>
            </div>

            {/* Mission Card */}
            <div className="rounded-2xl bg-[#111A2E] border border-slate-800 p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-4">
                  <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  Thoughtful, Accessible Digital Solutions.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  “To help people and organizations access thoughtful, practical digital solutions through clear communication, responsible engineering, and customer-focused problem solving.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
                MISSION_REF: PURPOSEFUL_ENGINEERING
              </div>
            </div>

          </div>
        </PageContainer>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#0B1020] border-b border-slate-800">
        <PageContainer>
          <SectionHeading
            badge="Operating Principles"
            title="Our Eight Guiding Values."
            description="These values define how we make decisions, how we write software, and how we interact with every person who reaches out to us."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => {
              const Icon = valueIconMap[val.iconName] || ShieldCheck;
              return (
                <div
                  key={val.id}
                  className="rounded-2xl bg-[#111A2E]/90 border border-slate-800/80 p-6 hover:border-blue-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-blue-300 font-semibold mb-2.5">
                      {val.statement}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* Working Philosophy: Understand -> Plan -> Design -> Build -> Test -> Deliver -> Support */}
      <section className="py-20 bg-[#0E1528] border-b border-slate-800">
        <PageContainer>
          <SectionHeading
            badge="Project Philosophy"
            title="How We Approach Every Engagement."
            description="A disciplined flow ensuring nothing is left to guesswork, assumptions, or eleventh-hour panic."
            align="center"
          />

          <div className="max-w-4xl mx-auto space-y-3">
            {processPhilosophy.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#111A2E] border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-base font-bold text-white">
                    {item.phase}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 sm:text-right max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              <span>Explore how our process applies to your service needs</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-[#0B1020]">
        <PageContainer>
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Discuss a Practical Solution?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Whether you represent a rural cooperative, an educational school, a growing small business, or an organization with complex workflow challenges, we invite an honest conversation.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl transition-colors"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
