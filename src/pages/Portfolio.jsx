import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertCircle, 
  ArrowRight, 
  Filter 
} from 'lucide-react';

import PageContainer from '../components/PageContainer';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import SEOHead from '../components/SEOHead';
import { projectsData, projectCategories } from '../data/projects';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projectsData;
    }
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEOHead
        title="Portfolio & Concept Prototypes"
        description="Explore illustrative software concepts and prototypes by RAMEVION Technologies. Demonstrating practical technical architecture, usability, and thoughtful engineering."
      />

      {/* Page Hero */}
      <PageHero
        badge="Design & Architecture Showcase"
        title="Explore What Digital"
        highlight="Solutions Can Look Like."
        description="To demonstrate how we approach user challenges, software structure, and visual clarity, we have engineered realistic concept prototypes for everyday business and community use cases."
        breadcrumbs={[{ name: 'Portfolio' }]}
      />

      {/* Essential Transparency & Authenticity Banner */}
      <section className="bg-amber-500/10 border-b border-amber-500/20 py-4 text-amber-200">
        <PageContainer>
          <div className="flex items-start sm:items-center gap-3 text-xs leading-relaxed">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
            <p>
              <strong>Notice of Authenticity:</strong> All projects listed below are illustrative demonstration prototypes created to display our system design, UI/UX thinking, and coding standards. We do not claim completed customer contracts, commercial revenue impacts, or unverified deployments.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Main Portfolio Grid Section */}
      <section className="py-20 bg-[#0B1020] border-b border-slate-800">
        <PageContainer>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Filter className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>Filter by Solution Category:</span>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio Category Filters">
              {projectCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-xs font-medium rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-500/30'
                        : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/40'
                    }`}
                  >
                    {category}
                    {category === 'All' && ` (${projectsData.length})`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>

          {/* Empty state fallback (safety check) */}
          {filteredProjects.length === 0 && (
            <div className="py-16 text-center text-slate-400">
              <p>No concepts found for this category.</p>
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className="mt-3 text-xs text-blue-400 hover:underline"
              >
                Reset to All Concepts
              </button>
            </div>
          )}

        </PageContainer>
      </section>

      {/* How Real Projects Are Managed Section */}
      <section className="py-20 bg-[#0E1528] border-b border-slate-800">
        <PageContainer>
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <SectionHeading
              badge="Project Delivery Standard"
              title="How We Will Engineer Your Real Project."
              description="When you engage RAMEVION Technologies for a live project, we follow strict documentation and delivery protocols to protect your investment."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-[#111A2E] border border-slate-800">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center mb-3">
                  01
                </span>
                <h4 className="text-base font-bold text-white mb-1.5">Direct Code Ownership</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  You receive full source code access, Git repository transfer, and deployment credentials with no lock-ins.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111A2E] border border-slate-800">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center mb-3">
                  02
                </span>
                <h4 className="text-base font-bold text-white mb-1.5">Milestone Sign-Offs</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Payments and deliverables are tied to verified demo milestones agreed transparently before starting.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111A2E] border border-slate-800">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center mb-3">
                  03
                </span>
                <h4 className="text-base font-bold text-white mb-1.5">Post-Launch Support</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Initial warranty period for bug fixes followed by flexible, straightforward maintenance arrangements.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30"
              >
                <span>Discuss a Custom Solution for Your Business</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
