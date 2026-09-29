import { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, CheckCircle, ShieldCheck, Database, GitBranch, Layers, Sparkles } from 'lucide-react';
import { EXPERIENCE_CHAINSYS } from '../data/portfolioData';

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Grouped key highlights for clean initial view
  const categorizedHighlights = [
    {
      title: "Data Governance & Catalog Testing",
      icon: Database,
      items: [
        "Tested Data Catalog, Metadata Management, and compliance applications.",
        "Validated RBAC, user permissions, authorization, data access restrictions, governance rules, and PII masking.",
      ],
    },
    {
      title: "Data Validation & ETL Pipelines",
      icon: Layers,
      items: [
        "Performed source-to-target data validation across source systems, Azure Data Lake Gen2, Databricks, and visualization layers.",
        "Executed SQL queries for backend validation, data integrity testing, ETL validation, and data migration testing.",
      ],
    },
    {
      title: "Functional & Release Testing",
      icon: ShieldCheck,
      items: [
        "Executed Functional, Regression, Integration, System, Smoke, Sanity, End-to-End, and UAT testing.",
        "Supported release validation, production verification, post-deployment validation, and production smoke testing.",
      ],
    },
    {
      title: "Automation & Modern QA Workflows",
      icon: GitBranch,
      items: [
        "Developed and executed regression automation scenarios using Selenium WebDriver, Java, and TestNG.",
        "Performed GenAI and prompt-based workflow testing and used GitHub for version control.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
            Work History
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="text-sm text-slate-300">
            Quality Assurance Engineer supporting enterprise data platforms, data governance, analytics reporting, and regression automation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          
          {/* ChainSys Node */}
          <div className="relative">
            {/* Timeline bullet icon */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-blue-600 border-4 border-slate-950 flex items-center justify-center shadow-md">
              <Briefcase className="w-2.5 h-2.5 text-white" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b border-slate-800/70 pb-5">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {EXPERIENCE_CHAINSYS.role}
                  </h3>
                  <div className="text-sm font-semibold text-blue-400 mt-1">
                    {EXPERIENCE_CHAINSYS.company}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Platform: DataZense Enterprise Data Management &amp; Analytics Platform
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/60 rounded-md text-xs font-mono text-slate-300 self-start">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{EXPERIENCE_CHAINSYS.period}</span>
                </div>
              </div>

              {/* Categorized Key Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categorizedHighlights.map((group) => {
                  const Icon = group.icon;
                  return (
                    <div
                      key={group.title}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-2"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                        <Icon className="w-4 h-4 text-blue-400" />
                        <span>{group.title}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-400 leading-relaxed">
                        {group.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Expandable All Responsibilities Section */}
              {isExpanded && (
                <div className="pt-4 border-t border-slate-800/70 space-y-4">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    All Core QA Responsibilities ({EXPERIENCE_CHAINSYS.responsibilities.length})
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                    {EXPERIENCE_CHAINSYS.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/40 flex items-start gap-2.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View Details Toggle Button */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-600/10 hover:bg-blue-600/20 rounded-lg transition-colors border border-blue-500/20"
                >
                  <span>{isExpanded ? 'Hide Detailed Responsibilities' : 'View All 18 QA Responsibilities'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <div className="text-xs text-slate-400">
                  Agile Scrum &bull; Jira &bull; GitHub &bull; Selenium
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
