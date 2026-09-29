import { useState } from 'react';
import { CheckSquare, RefreshCw, Layers, Monitor, Users, Database, PlaySquare, ArrowUpRight } from 'lucide-react';
import { TESTING_TYPES } from '../data/portfolioData';

export default function TestingTypes() {
  const [activeType, setActiveType] = useState<string>(TESTING_TYPES[0].title);

  const typeIcons: Record<string, typeof CheckSquare> = {
    "Functional Testing": CheckSquare,
    "Regression Testing": RefreshCw,
    "Integration Testing": Layers,
    "System Testing": Monitor,
    "UAT": Users,
    "Data Testing": Database,
    "End-to-End Testing": PlaySquare,
  };

  return (
    <section className="py-20 bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
            Testing Specializations
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Core Testing Types &amp; Execution Scopes
          </h2>
          <p className="text-sm text-slate-300">
            Specialized testing methodologies applied systematically across enterprise software platforms.
          </p>
        </div>

        {/* 7 Interactive Testing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {TESTING_TYPES.map((type) => {
            const Icon = typeIcons[type.title] || CheckSquare;
            const isSelected = activeType === type.title;

            return (
              <div
                key={type.title}
                onClick={() => setActiveType(type.title)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-950/40'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800/80 text-blue-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {type.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">
                      {type.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {type.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Methodology</span>
                  <span className="text-emerald-400 font-mono">APPLIED &amp; VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
