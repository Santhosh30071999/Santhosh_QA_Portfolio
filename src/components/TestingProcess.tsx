import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, ArrowDown } from 'lucide-react';
import { TESTING_PROCESS_STEPS } from '../data/portfolioData';

export default function TestingProcess() {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const activeStep = TESTING_PROCESS_STEPS[selectedStepIndex];

  return (
    <section id="testing" className="py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
            Software Testing Life Cycle (STLC)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Complete 12-Step Testing Process &amp; QA Lifecycle
          </h2>
          <p className="text-sm text-slate-300">
            End-to-end quality assurance methodology executed from initial requirement breakdown to post-deployment verification.
          </p>
        </div>

        {/* Interactive Lifecycle Grid Container */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl space-y-8">
          
          {/* Active Step Highlight Banner */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                {activeStep.step < 10 ? `0${activeStep.step}` : activeStep.step}
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                  Step {activeStep.step} of 12 &bull; Active Phase
                </span>
                <h3 className="text-base font-bold text-white">
                  {activeStep.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              {activeStep.desc}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono shrink-0">
              <CheckCircle2 className="w-4 h-4" />
              <span>STLC STANDARD</span>
            </div>
          </div>

          {/* 12 Connected Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {TESTING_PROCESS_STEPS.map((step, idx) => {
              const isCurrent = idx === selectedStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[96px] ${
                    isCurrent
                      ? 'bg-blue-950/50 border-blue-500 shadow-md shadow-blue-950/60 scale-[1.02]'
                      : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[11px] font-mono font-semibold ${isCurrent ? 'text-blue-400' : 'text-slate-400'}`}>
                      {step.step < 10 ? `0${step.step}` : step.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                  </div>

                  <div className="mt-2">
                    <span className={`text-xs font-semibold block leading-tight ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                      {step.title}
                    </span>
                  </div>

                  <div className="mt-1 pt-1 border-t border-slate-800/40 text-[9px] text-slate-400">
                    Phase {idx + 1}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stepper Navigation Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
            <button
              onClick={() => setSelectedStepIndex((prev) => (prev > 0 ? prev - 1 : TESTING_PROCESS_STEPS.length - 1))}
              className="text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            >
              &larr; Previous Phase
            </button>
            <span className="text-slate-400 font-mono">
              Click any node above to inspect phase details
            </span>
            <button
              onClick={() => setSelectedStepIndex((prev) => (prev < TESTING_PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
              className="text-blue-400 hover:text-blue-300 font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-600/10 transition-colors"
            >
              Next Phase &rarr;
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
