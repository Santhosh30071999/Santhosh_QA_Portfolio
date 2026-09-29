import { useState, useMemo } from 'react';
import { Search, CheckCircle2, Shield, Database, Terminal, BarChart2, Cpu, Cloud, Wrench, FileCode2 } from 'lucide-react';
import { CORE_SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, typeof Shield> = {
    "Manual Testing": FileCode2,
    "Data Testing": Database,
    "Automation Testing": Terminal,
    "API & Backend": Shield,
    "Data & Analytics": BarChart2,
    "GenAI": Cpu,
    "Cloud & Data Platforms": Cloud,
    "Tools & Methodologies": Wrench,
  };

  const filteredCategories = useMemo(() => {
    return CORE_SKILL_CATEGORIES.map((cat) => {
      if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
        return null;
      }

      const filteredSkills = cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredSkills.length === 0 && searchQuery.trim() !== '') {
        return null;
      }

      return {
        ...cat,
        skills: filteredSkills,
      };
    }).filter(Boolean) as typeof CORE_SKILL_CATEGORIES;
  }, [selectedCategory, searchQuery]);

  const totalSkillCount = useMemo(() => {
    return CORE_SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              Core Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              QA Engineering &amp; Testing Skills
            </h2>
            <p className="text-sm text-slate-300">
              Specialized across manual execution, backend database validation, ETL pipelines, and Selenium regression automation.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. SQL, ETL, UAT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Filter Buttons (Segmented Filter Bar) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-lg border border-slate-800/80 overflow-x-auto mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Skills ({totalSkillCount})
          </button>
          {CORE_SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === cat.title
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Shield;
            return (
              <div
                key={category.title}
                className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/70 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List without garish pill capsules */}
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>QA Validated</span>
                  <span className="text-emerald-400 font-mono text-[10px]">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="p-8 text-center rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 text-sm">
            No QA skills matching &ldquo;{searchQuery}&rdquo;. Try another search term.
          </div>
        )}

      </div>
    </section>
  );
}
