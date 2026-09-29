import { useState } from 'react';
import { ArrowDown, Download, Linkedin, CheckCircle2, Play, Database, CheckSquare, Bug, Code2, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'execution' | 'data' | 'sql' | 'defects'>('execution');

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background ambient subtle glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Positioning, Recruiter Highlights & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Role & Experience kicker without pill enclosure */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-300 font-semibold">{PERSONAL_INFO.title}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{PERSONAL_INFO.experienceYears} Experience</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-blue-400">Enterprise QA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              QA Engineer <span className="text-slate-400 font-normal">|</span> Manual Testing <span className="text-slate-400 font-normal">|</span> Data &amp; ETL Testing <span className="text-slate-400 font-normal">|</span> SQL <span className="text-slate-400 font-normal">|</span> API <span className="text-slate-400 font-normal">|</span> Selenium Automation
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Recruiter Quick Facts Banner (30-second scan) */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2.5">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Recruiter Quick Snapshot
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block">Current / Recent</span>
                  <span className="font-medium text-slate-200">ChainSys (DataZense)</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Experience</span>
                  <span className="font-medium text-slate-200">3.6+ Years Testing</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Specialization</span>
                  <span className="font-medium text-slate-200">Data, ETL &amp; Manual QA</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Automation</span>
                  <span className="font-medium text-slate-200">Selenium · Java · TestNG</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-lg shadow-blue-950/40"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors border border-slate-800"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Subtle trust footer line */}
            <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
              <span>Authentic candidate profile</span>
              <span aria-hidden="true">·</span>
              <span>Available for QA &amp; Software Test Engineer roles</span>
            </div>
          </div>

          {/* Right Column: QA Interactive Testing & Validation Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Console Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-slate-400 font-mono text-[11px] ml-2">qa-test-suite.verify</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>SUITE: 100% EXECUTED</span>
                </div>
              </div>

              {/* Console Segmented Control (Interactive Tabs) */}
              <div className="flex items-center gap-1 p-1.5 bg-slate-950/50 border-b border-slate-800/80 overflow-x-auto text-xs font-medium">
                <button
                  onClick={() => setActiveConsoleTab('execution')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                    activeConsoleTab === 'execution'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 text-blue-400" />
                  <span>Test Execution</span>
                </button>

                <button
                  onClick={() => setActiveConsoleTab('data')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                    activeConsoleTab === 'data'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Source &gt; Target</span>
                </button>

                <button
                  onClick={() => setActiveConsoleTab('sql')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                    activeConsoleTab === 'sql'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Database className="w-3.5 h-3.5 text-purple-400" />
                  <span>SQL / API</span>
                </button>

                <button
                  onClick={() => setActiveConsoleTab('defects')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                    activeConsoleTab === 'defects'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Bug className="w-3.5 h-3.5 text-amber-400" />
                  <span>Jira Lifecycle</span>
                </button>
              </div>

              {/* Tab 1: Test Execution */}
              {activeConsoleTab === 'execution' && (
                <div className="p-4 sm:p-5 space-y-3 font-mono text-xs">
                  <div className="text-[11px] text-slate-400 flex items-center justify-between pb-1 border-b border-slate-800/60 font-sans">
                    <span>TEST RUNNER: Selenium WebDriver + TestNG</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> PASS
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/60 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-slate-200 flex items-center gap-2">
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="font-semibold">testDataGovernanceRBAC()</span>
                        </div>
                        <div className="text-[11px] text-slate-400 pl-5.5">
                          Functional &bull; RBAC permission boundaries verified
                        </div>
                      </div>
                      <span className="text-emerald-400 text-[11px] shrink-0 font-medium">PASSED (412ms)</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/60 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-slate-200 flex items-center gap-2">
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="font-semibold">testDataCatalogIngestion()</span>
                        </div>
                        <div className="text-[11px] text-slate-400 pl-5.5">
                          Integration &bull; Metadata lineage &amp; glossary check
                        </div>
                      </div>
                      <span className="text-emerald-400 text-[11px] shrink-0 font-medium">PASSED (648ms)</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/60 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-slate-200 flex items-center gap-2">
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="font-semibold">testPowerBiDashboardRefresh()</span>
                        </div>
                        <div className="text-[11px] text-slate-400 pl-5.5">
                          UAT &bull; Report calculations &amp; slicer state
                        </div>
                      </div>
                      <span className="text-emerald-400 text-[11px] shrink-0 font-medium">PASSED (510ms)</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-950/90 text-slate-400 text-[11px] flex items-center justify-between">
                    <span>Summary: Functional, Regression, Integration, UAT</span>
                    <span className="text-slate-300 font-bold">100% Verified</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Source to Target Validation */}
              {activeConsoleTab === 'data' && (
                <div className="p-4 sm:p-5 space-y-3 font-mono text-xs">
                  <div className="text-[11px] text-slate-400 flex items-center justify-between pb-1 border-b border-slate-800/60 font-sans">
                    <span>PIPELINE: Source &gt; ADLS Gen2 &gt; Databricks &gt; Power BI</span>
                    <span className="text-blue-400">RECONCILED</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/60 space-y-1">
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Stage 1: Source DB (PostgreSQL / Oracle)</span>
                        <span className="text-emerald-400">Raw Count: 142,500</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-sans">Schema mapping validated, primary keys verified</div>
                    </div>

                    <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/60 space-y-1">
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Stage 2: Azure Data Lake Storage Gen2</span>
                        <span className="text-emerald-400">Parquet: 142,500</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-sans">Landing zone file completeness &amp; zero loss verified</div>
                    </div>

                    <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/60 space-y-1">
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Stage 3: Azure Databricks (ETL Logic)</span>
                        <span className="text-emerald-400">Delta Lake: 142,500</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-sans">Transformation rules, deduplication &amp; null checks PASS</div>
                    </div>

                    <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/60 space-y-1">
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Stage 4: Power BI / Visualization Layer</span>
                        <span className="text-emerald-400">Report Metrics: MATCH</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-sans">Source-to-report reconciliation verified via SQL</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: SQL & API Validation */}
              {activeConsoleTab === 'sql' && (
                <div className="p-4 sm:p-5 space-y-3 font-mono text-xs">
                  <div className="text-[11px] text-slate-400 flex items-center justify-between pb-1 border-b border-slate-800/60 font-sans">
                    <span>DATABASE: Oracle SQL &bull; PostgreSQL &bull; Hive</span>
                    <span className="text-emerald-400">ASSERTION OK</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/70 text-[11px] leading-relaxed text-slate-300">
                    <span className="text-blue-400">-- SQL Backend Integrity Check</span><br />
                    <span className="text-purple-400">SELECT</span> status, <span className="text-purple-400">COUNT</span>(*) <br />
                    <span className="text-purple-400">FROM</span> datazense_catalog_metadata <br />
                    <span className="text-purple-400">WHERE</span> lineage_verified = <span className="text-amber-400">'TRUE'</span><br />
                    <span className="text-purple-400">GROUP BY</span> status;
                  </div>

                  <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/60 text-[11px] space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>API ENDPOINT VALIDATION</span>
                      <span className="text-emerald-400">200 OK</span>
                    </div>
                    <div className="text-slate-300 text-[10px]">
                      GET /api/v1/governance/rbac-policies &rarr; Payload matches expected schema
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Defects / Jira Lifecycle */}
              {activeConsoleTab === 'defects' && (
                <div className="p-4 sm:p-5 space-y-3 font-mono text-xs">
                  <div className="text-[11px] text-slate-400 flex items-center justify-between pb-1 border-b border-slate-800/60 font-sans">
                    <span>STLC: Defect Management Workflow (Jira)</span>
                    <span className="text-blue-400">JIRA INTEGRATION</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800/60">
                      <span className="text-slate-500 block text-[10px]">01 Identification</span>
                      <span className="text-slate-200">Defect Found</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800/60">
                      <span className="text-slate-500 block text-[10px]">02 Logging</span>
                      <span className="text-slate-200">Jira Ticket Created</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800/60">
                      <span className="text-slate-500 block text-[10px]">03 Retesting</span>
                      <span className="text-amber-300">Fix Re-Executed</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800/60">
                      <span className="text-slate-500 block text-[10px]">04 Closure</span>
                      <span className="text-emerald-400 font-semibold">Verified &amp; Closed</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-sans">
                    Managed complete defect lifecycle in Jira across sprint cycles, collaborating with developers, BAs, and POs.
                  </div>
                </div>
              )}

              {/* Console Footnote */}
              <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Enterprise Software Testing</span>
                </div>
                <span>Click tabs to inspect QA scopes</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
