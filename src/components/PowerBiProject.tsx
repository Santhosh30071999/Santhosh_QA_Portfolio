import { useState } from 'react';
import { BarChart3, Filter, RefreshCw, CheckCircle2, ShieldCheck, Database, Layers, ArrowUpRight } from 'lucide-react';

export default function PowerBiProject() {
  const [activeCheckpoint, setActiveCheckpoint] = useState<number>(1);

  const validationAreas = [
    { name: "Dashboard Validation", desc: "Verifying layout rendering, responsive card scaling, and visual component synchronization." },
    { name: "Report Validation", desc: "Testing multi-page reports, tab navigations, visual hierarchies, and export configurations." },
    { name: "KPI Validation", desc: "Validating aggregation formulas, measures (DAX), benchmarks, and conditional formatting thresholds." },
    { name: "Chart Validation", desc: "Checking bar charts, trend lines, scatter plots, legends, axes bounds, and tooltip accuracy." },
    { name: "Filter Validation", desc: "Verifying single-select, multi-select, relative date slicers, and cross-visual filtering state." },
    { name: "Drill-Down Validation", desc: "Verifying hierarchy level drilling from yearly/quarterly to monthly/transactional granularity." },
    { name: "Data Refresh Validation", desc: "Verifying automated scheduled data refreshes, incremental loads, and cache invalidation." },
    { name: "Report Calculation Validation", desc: "Comparing calculated columns and measures against business calculation formulas." },
    { name: "SQL-Based Backend Validation", desc: "Executing matching SQL aggregate queries against source/Databricks to match report numbers." },
    { name: "Source-to-Report Reconciliation", desc: "Validating total record counts, sum metrics, and financial totals between source and report." },
    { name: "Data Accuracy Validation", desc: "Ensuring displayed numerical values match underlying data warehouse tables without rounding errors." },
    { name: "Data Completeness Validation", desc: "Verifying that no expected records are truncated or excluded by erroneous hidden filters." },
    { name: "Data Consistency Validation", desc: "Cross-checking values across different visuals within the dashboard for unified consistency." },
    { name: "UAT Support", desc: "Assisting business users during acceptance testing to confirm report fidelity for decision-making." },
  ];

  const checkpoints = [
    {
      id: 1,
      title: "Interactive Slicers & Filter Checkpoint",
      badge: "Filter Validation",
      detail: "Validated multi-select filters, date range slicers, and cross-filtering between chart elements to ensure consistent filtered datasets.",
    },
    {
      id: 2,
      title: "KPI Formula & DAX Calculation Checkpoint",
      badge: "KPI Validation",
      detail: "Verified measure formulas, percentage calculations, variance metrics, and conditional indicator states against business specifications.",
    },
    {
      id: 3,
      title: "SQL Backend Reconciliation Checkpoint",
      badge: "SQL Validation",
      detail: "Executed direct SQL queries against Databricks / PostgreSQL to perform 1:1 numerical reconciliation against dashboard totals.",
    },
    {
      id: 4,
      title: "Data Refresh & Pipeline Sync Checkpoint",
      badge: "Data Refresh Validation",
      detail: "Validated scheduled data dataset refresh intervals, incremental refresh partitions, and cache invalidation post-ETL loads.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
            Dedicated Case Study
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Power BI Testing &amp; Data Validation
          </h2>
          <p className="text-sm text-slate-300">
            Rigorous validation of enterprise analytics dashboards, DAX calculations, report filters, and source-to-report SQL reconciliation.
          </p>
        </div>

        {/* Main Card with Split Mock Dashboard Visual & Checkpoints */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: Mock Dashboard UI with QA Validation Checkpoints */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-950/80 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/70">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-semibold text-white">
                    Power BI Report Validation Environment
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>ALL CHECKPOINTS PASS</span>
                </div>
              </div>

              {/* Mock Dashboard Representation with Checkpoints Overlay */}
              <div className="space-y-4">
                
                {/* Checkpoint 1: Filter bar */}
                <div
                  onClick={() => setActiveCheckpoint(1)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    activeCheckpoint === 1
                      ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-950/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <Filter className="w-3.5 h-3.5 text-blue-400" />
                      Checkpoint 1: Filter &amp; Slicer Controls
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">PASSED</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300">Date Range: YTD</span>
                    <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300">Region: All Active</span>
                    <span className="px-2 py-0.5 bg-slate-800 rounded text-slate-300">Category: Governance</span>
                  </div>
                </div>

                {/* Checkpoint 2: KPI Metrics Cards */}
                <div
                  onClick={() => setActiveCheckpoint(2)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    activeCheckpoint === 2
                      ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-950/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                      Checkpoint 2: KPI Metrics &amp; Formula Validation
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">PASSED</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-500 block">Metric 01</span>
                      <span className="font-bold text-slate-200 font-mono">Verified Match</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-500 block">Metric 02</span>
                      <span className="font-bold text-slate-200 font-mono">Formula PASS</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-500 block">Metric 03</span>
                      <span className="font-bold text-slate-200 font-mono">Variance OK</span>
                    </div>
                  </div>
                </div>

                {/* Checkpoint 3: Backend SQL Query Verification */}
                <div
                  onClick={() => setActiveCheckpoint(3)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    activeCheckpoint === 3
                      ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-950/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-purple-400" />
                      Checkpoint 3: Backend SQL 1:1 Reconciliation
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">PASSED</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded font-mono text-[10px] text-slate-400 space-y-0.5">
                    <div>SELECT SUM(metric_val) FROM tbl_processed GROUP BY category;</div>
                    <div className="text-emerald-400">&gt; Report Total == SQL Query Total [0 Variance]</div>
                  </div>
                </div>

                {/* Checkpoint 4: Scheduled Data Refresh */}
                <div
                  onClick={() => setActiveCheckpoint(4)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    activeCheckpoint === 4
                      ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-950/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                      Checkpoint 4: Scheduled Dataset Refresh Verification
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">PASSED</span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Validated sync triggers between Databricks delta lake and Power BI dataset.
                  </span>
                </div>

              </div>

              {/* Active Checkpoint Detail Box */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                <span className="text-blue-400 font-semibold block">
                  {checkpoints.find((c) => c.id === activeCheckpoint)?.badge}
                </span>
                <p className="text-slate-300">
                  {checkpoints.find((c) => c.id === activeCheckpoint)?.detail}
                </p>
              </div>

            </div>

            {/* Right: Complete 14 Power BI QA Scopes Grid */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-base font-bold text-white">
                  14 Power BI &amp; Data Validation Scopes
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Full testing spectrum executed for enterprise reporting fidelity
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
                {validationAreas.map((area) => (
                  <div
                    key={area.name}
                    className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{area.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/90 border border-slate-800/70 text-xs text-slate-300 flex items-center justify-between">
                <span>Includes direct UAT support for business users</span>
                <span className="text-emerald-400 font-mono text-[11px]">BUSINESS SIGN-OFF</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
