import { useState } from 'react';
import { Mail, Phone, Linkedin, Download, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResumeModal: () => void;
}

export default function Contact({ onOpenResumeModal }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div 
            className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" 
            aria-hidden="true" 
          />

          <div className="relative space-y-8">
            
            {/* Header */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                Get In Touch
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Connect with Santhosh AR
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Open to discussions regarding QA Engineer, Software Test Engineer, Data QA, ETL Testing, and Automation opportunities.
              </p>
            </div>

            {/* Candidate Identity Card */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-blue-400 font-medium mt-0.5">
                  {PERSONAL_INFO.title} &bull; {PERSONAL_INFO.experienceYears}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Manual Testing &bull; Data &amp; ETL Testing &bull; SQL &bull; API &bull; Selenium
                </p>
              </div>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-md shadow-blue-950/50 shrink-0 self-start sm:self-auto"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Direct Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-500 block">Email Address</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-800/60">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex-1 py-1.5 px-3 text-center text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Email Me
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-500 block">Phone Number</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
                    >
                      {PERSONAL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-800/60">
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex-1 py-1.5 px-3 text-center text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Call
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-500 block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 block truncate">
                      linkedin.com/in/santhosh-ar-qa
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <a
                    href={PERSONAL_INFO.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 text-center text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Note */}
            <div className="text-center text-xs text-slate-400 pt-4">
              All profile information verified against authentic QA Engineer resume documentation.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
