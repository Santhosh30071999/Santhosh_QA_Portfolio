import { useState } from 'react';
import { Shield, ChevronDown, ChevronUp, CheckCircle2, Database, Layers, CheckSquare } from 'lucide-react';

export default function OtherProjects() {
  const [isKrollExpanded, setIsKrollExpanded] = useState(false);

  const krollHighlights = [
    "Data Governance testing",
    "Data Catalog testing",
    "Data Lineage",
    "Data Quality",
    "Compliance workflows",
    "Functional Testing",
    "Regression Testing",
    "Integration Testing",
    "UAT",
    "Defect validation",
    "Release testing",
  ];

  const smallerProjects = [
    {
      id: "dge",
      title: "DGE – Data Governance Enablement",
      tagline: "Metadata Ingestion & Catalog Discovery",
      highlights: [
        "Metadata ingestion",
        "Data discovery",
        "Cataloging",
        "Search",
        "Data lineage",
        "UAT",
        "Defect validation",
        "Release testing",
      ],
    },
    {
      id: "kosh",
      title: "KOSH – Enterprise Data Platform",
      tagline: "Workflow & Data Accuracy Validation",
      highlights: [
        "Functional Testing",
        "Regression Testing",
        "Integration Testing",
        "UAT",
        "Business workflow validation",
        "Data accuracy validation",
      ],
    },
    {
      id: "msrtc",
      title: "MSRTC – Business Application",
      tagline: "Business Workflow & Production Verification",
      highlights: [
        "End-to-end testing",
        "Business workflow testing",
        "UAT",
        "Regression testing",
        "Production validation",
        "Defect management",
        "Release testing",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
            Project Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Additional Enterprise QA Engagements
          </h2>
          <p className="text-sm text-slate-300">
            Targeted testing experience spanning data governance platforms, metadata discovery, enterprise applications, and release verification.
          </p>
        </div>

        {/* Kroll Featured Expandable Card */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800/90 shadow-xl overflow-hidden mb-10">
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-slate-800/80 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-blue-400 font-semibold">ENTERPRISE CASE STUDY</span>
                  <span className="text-slate-600">&bull;</span>
                  <span className="text-xs text-slate-400">Governance &amp; Compliance</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Kroll – Data Governance Platform
                </h3>
                <p className="text-xs text-slate-300">
                  Role: <strong className="text-blue-400 font-medium">Product Quality Assurance Engineer</strong>
                </p>
              </div>

              <button
                onClick={() => setIsKrollExpanded(!isKrollExpanded)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-blue-400 hover:text-white bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 rounded-lg transition-colors self-start"
              >
                <span>{isKrollExpanded ? 'Hide Details' : 'Expand Case Study'}</span>
                {isKrollExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Always visible summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Testing Scope</span>
                <span className="font-semibold text-slate-200">Data Governance &amp; Catalog</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Data Rigor</span>
                <span className="font-semibold text-slate-200">Lineage &amp; Data Quality</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Compliance</span>
                <span className="font-semibold text-slate-200">Compliance Workflows</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Release Check</span>
                <span className="font-semibold text-emerald-400 font-mono">UAT &amp; Release Signed</span>
              </div>
            </div>

            {/* Expandable testing areas */}
            {isKrollExpanded && (
              <div className="pt-4 border-t border-slate-800/80 space-y-4">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Full QA Verification Scope (11 Highlights)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  {krollHighlights.map((hl) => (
                    <div
                      key={hl}
                      className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center gap-2.5 text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3 Smaller Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {smallerProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <CheckSquare className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">QA ENGAGEMENT</span>
                </div>

                <h4 className="text-base font-bold text-white">
                  {project.title}
                </h4>
                <p className="text-xs text-blue-400 mt-0.5 mb-4">
                  {project.tagline}
                </p>

                <ul className="space-y-2 text-xs text-slate-300">
                  {project.highlights.map((hl) => (
                    <li key={hl} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-between font-mono">
                <span>VERIFICATION</span>
                <span className="text-emerald-400">COMPLETE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
