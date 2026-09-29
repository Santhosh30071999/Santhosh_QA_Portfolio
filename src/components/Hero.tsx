import { ArrowDown, Download, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      {/* Background ambient subtle glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 right-10 w-[450px] h-[350px] bg-indigo-600/5 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-7">
          
          {/* Professional Role & Experience kicker without pill enclosure */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
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
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {PERSONAL_INFO.subheadline}
          </p>

          {/* Recruiter Quick Facts Banner (30-second scan) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
              Recruiter Quick Snapshot
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="text-slate-500 block mb-0.5">Current / Recent</span>
                <span className="font-semibold text-slate-200">ChainSys (DataZense)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="text-slate-500 block mb-0.5">Experience</span>
                <span className="font-semibold text-slate-200">3.6+ Years Testing</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="text-slate-500 block mb-0.5">Specialization</span>
                <span className="font-semibold text-slate-200">Data, ETL &amp; Manual QA</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="text-slate-500 block mb-0.5">Automation</span>
                <span className="font-semibold text-slate-200">Selenium · Java · TestNG</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-lg shadow-blue-950/50"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors border border-slate-800"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Subtle trust footer line */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
            <span>Authentic candidate profile</span>
            <span aria-hidden="true">·</span>
            <span>Available for QA &amp; Software Test Engineer roles</span>
            <span aria-hidden="true">·</span>
            <span>Verified 3.6+ Years Experience</span>
          </div>

        </div>
      </div>
    </section>
  );
}
