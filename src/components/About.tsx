import { CheckCircle, Users2, ShieldCheck, Database, GitMerge, FileCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const testingPillars = [
    {
      title: "Manual & Functional Testing",
      description: "Executing thorough functional, regression, integration, system, smoke, sanity, and end-to-end testing cycles to ensure complete requirement coverage and software quality.",
      icon: FileCheck,
      details: ["Requirement Analysis", "Boundary & Negative Scenarios", "End-to-End Workflow Testing", "UAT Support"],
    },
    {
      title: "Data Validation & ETL Testing",
      description: "Validating data pipelines, source-to-target mapping, ETL transformations, data integrity, data migration, and reconciliation across cloud storage and reporting layers.",
      icon: Database,
      details: ["Source-to-Target Validation", "ETL Transformation Logic", "Data Reconciliation", "Migration Integrity"],
    },
    {
      title: "SQL & Backend Validation",
      description: "Writing and executing SQL queries across relational and data platforms to verify database constraints, table relationships, data accuracy, and API payload integrity.",
      icon: ShieldCheck,
      details: ["Oracle SQL & PostgreSQL", "API & Schema Validation", "Database Verification", "Backend State Checks"],
    },
    {
      title: "Automation & Agile Delivery",
      description: "Developing and executing regression automation suites using Selenium WebDriver with Java and TestNG, collaborating seamlessly within Agile Scrum release cycles.",
      icon: GitMerge,
      details: ["Selenium WebDriver & Java", "TestNG Test Execution", "GitHub Version Control", "Release & Smoke Sign-Off"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
            Quality Assurance Engineer with Enterprise Testing Experience
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {PERSONAL_INFO.name} is a QA Engineer with {PERSONAL_INFO.experienceYears} of experience in enterprise application testing. He specializes in testing complex data governance, metadata, visualization, and cloud data platforms through comprehensive manual testing, backend SQL queries, ETL validation, and Selenium regression automation.
          </p>
        </div>

        {/* 4 Focused Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testingPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-2 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400">
                    {pillar.details.map((item, idx) => (
                      <span key={item} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                        {idx < pillar.details.length - 1 && <span className="hidden sm:inline text-slate-700 ml-2">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cross-functional Collaboration Callout */}
        <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-600/10 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
              <Users2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white">
                Stakeholder &amp; Cross-Functional Collaboration
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Active collaborator in Agile Scrum environments, interfacing closely with <strong className="text-slate-200">Business Analysts, Developers, Product Owners</strong>, and <strong className="text-slate-200">business stakeholders</strong> to clarify user stories, define acceptance criteria, triage defects, and validate critical production releases.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-l border-slate-800/80 pl-4 shrink-0">
            <div>
              <span className="block text-slate-500 text-[10px] uppercase font-sans">Methodology</span>
              <span className="text-slate-200 font-semibold font-sans">Agile Scrum / STLC</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
