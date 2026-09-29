import { useState } from 'react';
import { Database, HardDrive, Cpu, BarChart3, ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';
import { DATA_PIPELINE_STAGES } from '../data/portfolioData';

export default function DataPipelineVisual() {
  const [activeStageId, setActiveStageId] = useState<string>('sources');

  const stageIcons: Record<string, typeof Database> = {
    sources: Database,
    adls: HardDrive,
    databricks: Cpu,
    powerbi: BarChart3,
  };

  const activeStage = DATA_PIPELINE_STAGES.find((s) => s.id === activeStageId) || DATA_PIPELINE_STAGES[0];

  return (
    <section className="py-20 bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
            End-to-End Data Pipeline Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Data Validation &amp; ETL Testing Pipeline Flow
          </h2>
          <p className="text-sm text-slate-300">
            Hover or click any stage to inspect specific QA validation checkpoints executed across the data architecture.
          </p>
        </div>

        {/* Pipeline Visual Container */}
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-8">
          
          {/* Animated Interactive Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative items-center">
            {DATA_PIPELINE_STAGES.map((stage, idx) => {
              const Icon = stageIcons[stage.id] || Database;
              const isSelected = stage.id === activeStageId;

              return (
                <div key={stage.id} className="relative flex flex-col items-center">
                  {/* Stage Card */}
                  <div
                    onMouseEnter={() => setActiveStageId(stage.id)}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`w-full p-5 rounded-xl border text-center cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-950/50 scale-[1.02]'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-800/80 text-blue-400'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                          Step 0{idx + 1} &bull; {stage.role}
                        </span>
                        <h4 className="text-sm font-bold text-white mt-0.5">
                          {stage.name}
                        </h4>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>VALIDATED</span>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow for Desktop */}
                  {idx < DATA_PIPELINE_STAGES.length - 1 && (
                    <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shadow-md animate-pulse">
                        <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                    </div>
                  )}

                  {/* Connecting Arrow for Mobile */}
                  {idx < DATA_PIPELINE_STAGES.length - 1 && (
                    <div className="md:hidden my-2 flex justify-center">
                      <ArrowDown className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Stage QA Checkpoints Box */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-950/90 border border-slate-800/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                  Active Inspection: {activeStage.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500">[{activeStage.role}]</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed max-w-3xl">
                {activeStage.qaTasks}
              </p>
            </div>

            <div className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono shrink-0">
              Source-to-Target QA
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
