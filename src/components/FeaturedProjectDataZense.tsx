import { useState } from 'react';
import { Database, ShieldCheck, Cpu, ArrowRight, Layers, FileSearch, CheckCircle2, ChevronRight, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

export default function FeaturedProjectDataZense() {
  const [activeTab, setActiveTab] = useState<'overview' | 'responsibilities' | 'deepdive' | 'workflow'>('overview');
  const [selectedDeepDive, setSelectedDeepDive] = useState<'dataValidation' | 'dataCatalog' | 'dataSecurity' | 'migration' | 'genai'>('dataValidation');

  const capabilities = [
    "Data Visualization",
    "Data Catalog",
    "Data Security",
    "Data Governance",
    "Data Migration",
    "Analytics",
    "Metadata Management",
    "Workflow Automation",
  ];

  const testingResponsibilities = [
    { title: "Functional Testing", desc: "Verifying UI controls, business rules, catalog search, and data management workflows against business specs." },
    { title: "Regression Testing", desc: "Executing automated Selenium suites and manual passes to ensure core platform stability post-build." },
    { title: "Integration Testing", desc: "Testing end-to-end interactions between source databases, Azure storage, and UI reporting components." },
    { title: "UAT Support", desc: "Collaborating with Product Owners and business stakeholders for final acceptance and release sign-off." },
    { title: "Data Validation", desc: "Verifying data accuracy and consistency across source systems, ADLS Gen2, Databricks, and visualizations." },
    { title: "Data Migration Testing", desc: "Validating schema conversion, field mapping, migration scripts, and row-level source-to-target counts." },
    { title: "Backend Validation", desc: "Validating server state changes, transaction execution, record mutations, and backend persistence." },
    { title: "SQL Validation", desc: "Running complex SQL queries in PostgreSQL and Oracle to verify counts, constraints, nullability, and joins." },
    { title: "Security & Governance Testing", desc: "Validating RBAC, user permissions, authorization boundaries, governance controls, and PII masking." },
    { title: "GenAI Workflow Testing", desc: "Validating prompt-based extraction, LLM response accuracy, output structure, and expected business results." },
    { title: "Release Testing", desc: "Conducting staging release checks, production verification, smoke testing, and post-deployment validation." },
  ];

  const workflowSteps = [
    { step: "01", title: "Workflow Initiation", desc: "User or scheduled trigger initiates a batch data job or metadata catalog ingestion pipeline." },
    { step: "02", title: "Processing", desc: "Azure Databricks and ETL engines process transformations, rule mappings, and data filtering." },
    { step: "03", title: "Status Tracking", desc: "Real-time state transitions verified in UI: Queued → In-Progress → Completed with proper progress feedback." },
    { step: "04", title: "Error Handling", desc: "Boundary checks for invalid formats, missing schema fields, timeouts, and graceful error messages." },
    { step: "05", title: "Successful Completion", desc: "Final verification of destination records, log outputs, audit trails, and notification triggers." },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
            Featured Portfolio Project
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            DataZense – Enterprise Data Management &amp; Analytics Platform
          </h2>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>ROLE: QA / Test Engineer</span>
            <span aria-hidden="true">·</span>
            <span>COMPANY: ChainSys</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400">Enterprise Production Scale</span>
          </div>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Bar with View Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                DataZense QA Case Study
              </h3>
              <p className="text-xs text-slate-400">
                Comprehensive data governance, cataloging, security, and visualization testing
              </p>
            </div>

            {/* Segmented Tab Bar */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeTab === 'overview' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Platform Scope
              </button>
              <button
                onClick={() => setActiveTab('responsibilities')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeTab === 'responsibilities' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                11 Testing Scopes
              </button>
              <button
                onClick={() => setActiveTab('deepdive')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeTab === 'deepdive' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Deep-Dive QA Areas
              </button>
              <button
                onClick={() => setActiveTab('workflow')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeTab === 'workflow' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Workflow Lifecycle
              </button>
            </div>
          </div>

          {/* Tab 1: Overview & Capabilities */}
          {activeTab === 'overview' && (
            <div className="p-6 sm:p-8 space-y-8">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                  DataZense is an enterprise data platform providing centralized data cataloging, business metadata governance, compliance tracking, data migration utilities, and interactive analytics reporting. As a QA Engineer on DataZense, Santhosh AR validated critical end-to-end data pipelines from source ingestion through Azure Data Lake Gen2, Databricks processing, and Power BI visualization.
                </p>
              </div>

              {/* Core Platform Capabilities Grid */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Platform Capabilities Tested
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center gap-2.5 text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Summary Box */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400">End-to-End QA Validation Across:</span>
                  <p className="text-slate-200 font-medium">
                    Relational Databases (PostgreSQL / Oracle) &bull; Azure Data Lake Gen2 &bull; Azure Databricks &bull; Power BI Dashboards
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('responsibilities')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors shrink-0"
                >
                  <span>Explore Responsibilities</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: 11 Interactive Responsibilities */}
          {activeTab === 'responsibilities' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Interactive Testing Responsibilities
                </h4>
                <span className="text-xs text-slate-500 font-mono">11 Dedicated QA Scopes</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {testingResponsibilities.map((resp) => (
                  <div
                    key={resp.title}
                    className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-blue-500/40 transition-colors space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{resp.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {resp.desc}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/60 text-[10px] text-slate-500 font-mono">
                      TEST COVERAGE: VERIFIED
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Deep-Dive QA Areas */}
          {activeTab === 'deepdive' && (
            <div className="p-6 sm:p-8 space-y-6">
              {/* Deep-Dive Sub-tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 text-xs font-medium">
                <button
                  onClick={() => setSelectedDeepDive('dataValidation')}
                  className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    selectedDeepDive === 'dataValidation' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Data Validation
                </button>
                <button
                  onClick={() => setSelectedDeepDive('dataCatalog')}
                  className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    selectedDeepDive === 'dataCatalog' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Data Catalog
                </button>
                <button
                  onClick={() => setSelectedDeepDive('dataSecurity')}
                  className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    selectedDeepDive === 'dataSecurity' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Data Security &amp; RBAC
                </button>
                <button
                  onClick={() => setSelectedDeepDive('migration')}
                  className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    selectedDeepDive === 'migration' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Migration Testing
                </button>
                <button
                  onClick={() => setSelectedDeepDive('genai')}
                  className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    selectedDeepDive === 'genai' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  GenAI Testing
                </button>
              </div>

              {/* Sub-tab Content */}
              {selectedDeepDive === 'dataValidation' && (
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Data Validation Scope</h4>
                      <p className="text-xs text-slate-400">Multi-tier data accuracy and consistency validation</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Validated data accuracy and consistency across source systems, databases, Azure Data Lake Gen2, Databricks, and visualization layers. Conducted source-to-target reconciliation to confirm zero record loss, schema conformity, and data integrity throughout transformation pipelines.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-white block mb-1">Source &amp; Landing Consistency</strong>
                      Raw database extract verification against ADLS Gen2 partitioned parquet files.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-white block mb-1">Downstream Reporting Match</strong>
                      Power BI aggregated KPI verification against Azure Databricks processed delta tables.
                    </div>
                  </div>
                </div>
              )}

              {selectedDeepDive === 'dataCatalog' && (
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                      <FileSearch className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Data Catalog &amp; Metadata Verification</h4>
                      <p className="text-xs text-slate-400">Discoverability, lineage, and metadata management testing</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    {["Metadata Ingestion", "Data Discovery", "Catalog Search", "Data Lineage", "Business Glossary", "Metadata Validation"].map((item) => (
                      <div key={item} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Ensured ingested metadata accurately matches schema changes, search indexes update dynamically, data lineage correctly reflects pipeline hops, and business terms map accurately to underlying technical attributes.
                  </p>
                </div>
              )}

              {selectedDeepDive === 'dataSecurity' && (
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Data Security &amp; Governance Testing</h4>
                      <p className="text-xs text-slate-400">Access policies, role permissions, and privacy rules</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    {["RBAC Policies", "Authorization Logic", "User Permissions", "Data Access Restrictions", "Governance Controls", "PII Masking"].map((item) => (
                      <div key={item} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Validated that non-authorized users cannot access restricted schemas or rows, PII attributes (emails, IDs, financial attributes) are properly masked, and role-based governance policies execute strictly at both UI and API/database layers.
                  </p>
                </div>
              )}

              {selectedDeepDive === 'migration' && (
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Data Migration Testing</h4>
                      <p className="text-xs text-slate-400">Source-to-target integrity and transformation precision</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    {["Source-to-Target Validation", "Field Mapping Verification", "Transformation Logic", "Data Completeness", "Data Accuracy", "Data Reconciliation"].map((item) => (
                      <div key={item} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Tested large-scale data migration scripts, validating field mappings, boundary conversions, date formats, null handling, and row-level record matching between legacy storage and target architectures.
                  </p>
                </div>
              )}

              {selectedDeepDive === 'genai' && (
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">GenAI Workflow Testing</h4>
                      <p className="text-xs text-slate-400">Prompt-based data extraction and AI output validation</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    {["Prompt-Based Workflows", "Data Extraction Checks", "Output Validation", "Response Accuracy", "Data Consistency", "Expected Business Results"].map((item) => (
                      <div key={item} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Evaluated AI-assisted data extraction workflows, ensuring generative prompt outputs align strictly with source data definitions, schema contracts, and expected business criteria without hallucinated attributes.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Workflow Lifecycle Stepper */}
          {activeTab === 'workflow' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  DataZense Workflow Testing Sequence
                </h4>
                <p className="text-xs text-slate-300">
                  Verification checkpoints executed at every milestone of the business workflow
                </p>
              </div>

              {/* Connected Stage Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {workflowSteps.map((step, idx) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 relative flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-blue-400">{step.step}</span>
                        {idx < workflowSteps.length - 1 ? (
                          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden md:inline" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </div>
                      <h5 className="text-xs font-bold text-white">
                        {step.title}
                      </h5>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-2 mt-3 border-t border-slate-800/70 text-[10px] font-mono text-emerald-400">
                      QA PASS
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
