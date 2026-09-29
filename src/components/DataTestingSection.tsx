import { useState } from 'react';
import { Database, ShieldCheck, ArrowRight, ArrowDown, CheckCircle2, FileCheck, Layers, Server } from 'lucide-react';
import { DATA_TESTING_PIPELINE } from '../data/portfolioData';

export default function DataTestingSection() {
  const [selectedPipelineIndex, setSelectedPipelineIndex] = useState<number>(0);

  const activePipelineItem = DATA_TESTING_PIPELINE[selectedPipelineIndex];

  const apiBackendFlow = [
    { title: "API Validation", desc: "Validating API endpoints, request schemas, status codes (200, 400, 401, 500), response payloads, and field validation." },
    { title: "Database Validation", desc: "Verifying that incoming API requests and operations accurately reflect in relational and cloud databases." },
    { title: "SQL Queries", desc: "Authoring and executing SQL queries in PostgreSQL and Oracle SQL to retrieve and verify table records." },
    { title: "Backend Validation", desc: "Verifying server processing logic, transaction commits, data persistence, and error handling." },
    { title: "Data Verification", desc: "Final verification ensuring reconciled data matches business criteria across the application lifecycle." },
  ];

  return (
    <section className="py-20 bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 15: Database & Data Testing */}
        <div className="space-y-12 mb-20">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              Database &amp; Data Testing
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Interactive Vertical Data Testing Pipeline
            </h2>
            <p className="text-sm text-slate-300">
              Click any step in the vertical pipeline to inspect how database validation, ETL transformations, and data reconciliation are executed.
            </p>
          </div>

          {/* Interactive Vertical Pipeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Vertical Pipeline Stepper (7 Steps) */}
            <div className="lg:col-span-6 space-y-3">
              {DATA_TESTING_PIPELINE.map((item, idx) => {
                const isSelected = idx === selectedPipelineIndex;
                return (
                  <div key={item.title} className="relative">
                    <button
                      onClick={() => setSelectedPipelineIndex(idx)}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? 'bg-blue-950/50 border-blue-500 shadow-md shadow-blue-950/40 text-white'
                          : 'bg-slate-900/80 border-slate-800/90 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          0{idx + 1}
                        </span>
                        <span className="text-sm font-semibold">{item.title}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isSelected && <span className="text-xs text-blue-400 font-mono">SELECTED</span>}
                        <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-600'}`} />
                      </div>
                    </button>

                    {idx < DATA_TESTING_PIPELINE.length - 1 && (
                      <div className="flex justify-center my-1">
                        <ArrowDown className="w-3.5 h-3.5 text-slate-700" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Selected Pipeline Step Explanation Card */}
            <div className="lg:col-span-6 sticky top-24">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-mono font-bold text-sm">
                      0{selectedPipelineIndex + 1}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Pipeline Checkpoint</span>
                      <h3 className="text-lg font-bold text-white">{activePipelineItem.title}</h3>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono">VERIFIED</span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    QA Testing Methodology &amp; Execution
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                    {activePipelineItem.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                  <span>Databases: Oracle SQL &bull; PostgreSQL &bull; Hive</span>
                  <span className="text-blue-400 font-medium">Enterprise Data QA</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 16: API & Backend Testing */}
        <div className="pt-16 border-t border-slate-800/80 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              API &amp; Backend Testing
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              API, Database &amp; Backend Verification Flow
            </h2>
            <p className="text-sm text-slate-300">
              Systematic validation flow ensuring API requests, backend database state, and processed data remain consistent and reliable.
            </p>
          </div>

          {/* Horizontal Flow Container */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {apiBackendFlow.map((step, idx) => (
                <div
                  key={step.title}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between relative"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-blue-400 font-bold">STAGE 0{idx + 1}</span>
                      {idx < apiBackendFlow.length - 1 ? (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden md:inline" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </div>
                    <h4 className="text-xs font-bold text-white">{step.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="pt-2 mt-3 border-t border-slate-800/80 text-[10px] font-mono text-emerald-400">
                    VALIDATED
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Factual testing process: API verification linked directly with SQL queries and database assertions</span>
              <span className="text-slate-300 font-medium">No Mock Stubs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
