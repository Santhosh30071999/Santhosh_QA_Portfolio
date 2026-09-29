import { useState } from 'react';
import { Bug, GitPullRequest, ArrowRight, CheckCircle2, Calendar, Users, ShieldAlert, Sparkles } from 'lucide-react';
import { DEFECT_LIFECYCLE_STEPS, AGILE_CEREMONIES } from '../data/portfolioData';

export default function DefectManagementSection() {
  const [activeDefectStep, setActiveDefectStep] = useState<number>(0);

  return (
    <section className="py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 17: Defect Management Lifecycle */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              Defect Management &amp; Bug Tracking
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Complete Defect Lifecycle in Jira
            </h2>
            <p className="text-sm text-slate-300">
              Structured defect tracking workflow managing issues from initial identification and triage to retesting, verification, and closure in Jira.
            </p>
          </div>

          {/* Defect Lifecycle Flow Card */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Bug className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-bold text-white">Jira Defect Workflow</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>TOOL: Atlassian Jira</span>
                <span>&bull;</span>
                <span className="text-emerald-400">100% Traceable</span>
              </div>
            </div>

            {/* 7 Connected Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {DEFECT_LIFECYCLE_STEPS.map((step, idx) => {
                const isSelected = idx === activeDefectStep;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveDefectStep(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[110px] ${
                      isSelected
                        ? 'bg-blue-950/50 border-blue-500 shadow-md shadow-blue-950/40 text-white'
                        : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                        <span>{step.step}</span>
                        {idx < DEFECT_LIFECYCLE_STEPS.length - 1 ? (
                          <ArrowRight className="w-3 h-3 text-slate-600 hidden lg:inline" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </div>
                      <h4 className="text-xs font-bold leading-tight">{step.name}</h4>
                    </div>

                    <div className="text-[10px] text-slate-400 mt-2 line-clamp-2">
                      {step.desc}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Step Explanation Banner */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-blue-400 font-semibold uppercase text-[10px] tracking-wider">
                  Phase {DEFECT_LIFECYCLE_STEPS[activeDefectStep].step}: {DEFECT_LIFECYCLE_STEPS[activeDefectStep].name}
                </span>
                <p className="text-slate-300">
                  {DEFECT_LIFECYCLE_STEPS[activeDefectStep].desc}
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-500 shrink-0">
                Click steps to review defect actions
              </span>
            </div>
          </div>
        </div>

        {/* Section 18: Agile Scrum Ceremonies */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              Agile Scrum Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Agile Ceremonies &amp; QA Collaboration
            </h2>
            <p className="text-sm text-slate-300">
              Active participation across sprint cadences to ensure testing readiness, continuous defect triage, and dependable release delivery.
            </p>
          </div>

          {/* Agile Ceremonies Visual */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-bold text-white">Sprint Cadence Timeline</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">Agile Scrum / 2-Week Sprints</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {AGILE_CEREMONIES.map((ceremony) => (
                <div
                  key={ceremony.name}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-2 hover:border-slate-700 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <h4 className="text-xs font-bold text-white">{ceremony.name}</h4>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {ceremony.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
                    QA ACTIVE PARTICIPANT
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span>Collaborating with Product Owners, Business Analysts, Developers, and stakeholders for smooth delivery.</span>
              <span className="text-emerald-400 font-mono text-[11px] shrink-0">STLC INTEGRATED</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
