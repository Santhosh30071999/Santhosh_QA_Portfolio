import { useState } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, CORE_SKILL_CATEGORIES, EXPERIENCE_CHAINSYS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Experience: ${PERSONAL_INFO.experienceYears}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedInUrl}

SUMMARY:
${PERSONAL_INFO.subheadline}

WORK EXPERIENCE:
${EXPERIENCE_CHAINSYS.company}
${EXPERIENCE_CHAINSYS.role} (${EXPERIENCE_CHAINSYS.period})
Key Responsibilities:
${EXPERIENCE_CHAINSYS.responsibilities.map(r => `• ${r}`).join('\n')}

EDUCATION:
${PERSONAL_INFO.education.degree}
${PERSONAL_INFO.education.institution}, ${PERSONAL_INFO.education.location} (${PERSONAL_INFO.education.period})
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-title" className="text-base font-semibold text-white">
                Santhosh AR — QA Resume
              </h2>
              <p className="text-xs text-slate-400">
                Direct format · Ready for recruiters and hiring managers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700/60"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700/60"
              title="Print or save as PDF via browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Santhosh_AR_QA_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content: Printable Resume */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 print:bg-white print:text-black print:p-0">
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-bold text-white print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base text-blue-400 font-medium mt-1 print:text-blue-700">
              {PERSONAL_INFO.title} &bull; {PERSONAL_INFO.experienceYears}
            </p>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 mt-3 print:text-slate-600">
              <span>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 hover:underline print:text-black">{PERSONAL_INFO.email}</a></span>
              <span>&bull;</span>
              <span>Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-200 hover:underline print:text-black">{PERSONAL_INFO.phoneDisplay}</a></span>
              <span>&bull;</span>
              <span>
                LinkedIn: <a href={PERSONAL_INFO.linkedInUrl} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline print:text-black">linkedin.com/in/santhosh-ar-qa</a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 print:text-slate-700 mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed print:text-black">
              {PERSONAL_INFO.subheadline} Proven expertise in Manual Testing, Data Validation, ETL/Data Validation, SQL/Database Validation, API Validation, and Selenium Automation across enterprise applications.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 print:text-slate-700 mb-4">
              Work Experience
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-slate-900 pb-2">
                <div>
                  <h4 className="text-base font-semibold text-white print:text-black">
                    {EXPERIENCE_CHAINSYS.role}
                  </h4>
                  <p className="text-sm text-blue-400 print:text-slate-700">
                    {EXPERIENCE_CHAINSYS.company}
                  </p>
                </div>
                <span className="text-xs text-slate-400 print:text-slate-600 mt-1 sm:mt-0 font-mono">
                  {EXPERIENCE_CHAINSYS.period}
                </span>
              </div>

              <ul className="space-y-2 text-sm text-slate-300 print:text-black">
                {EXPERIENCE_CHAINSYS.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 print:bg-black" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Technical & Testing Skills */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 print:text-slate-700 mb-3">
              Core Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              {CORE_SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/60 print:border-slate-300 print:bg-white">
                  <div className="font-semibold text-slate-200 print:text-black mb-1">
                    {cat.title}
                  </div>
                  <div className="text-slate-400 print:text-slate-700 leading-relaxed">
                    {cat.skills.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-slate-800/80 pt-4 print:border-black">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 print:text-slate-700 mb-2">
              Education
            </h3>
            <div>
              <div className="text-sm font-semibold text-white print:text-black">
                {PERSONAL_INFO.education.degree}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 print:text-slate-700 mt-0.5">
                {PERSONAL_INFO.education.institution}, {PERSONAL_INFO.education.location} &bull; {PERSONAL_INFO.education.period}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Verified against authentic QA resume profile
          </span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
