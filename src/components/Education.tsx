import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Education() {
  const { education } = PERSONAL_INFO;

  return (
    <section className="py-20 bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm text-slate-300">
            Formal technical education in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {education.degree}
              </h3>
              <p className="text-sm font-semibold text-blue-400">
                {education.institution}
              </p>
              
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 pt-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{education.location}</span>
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{education.period}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
