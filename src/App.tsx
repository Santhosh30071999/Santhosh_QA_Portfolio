/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FeaturedProjectDataZense from './components/FeaturedProjectDataZense';
import DataPipelineVisual from './components/DataPipelineVisual';
import PowerBiProject from './components/PowerBiProject';
import OtherProjects from './components/OtherProjects';
import TestingProcess from './components/TestingProcess';
import TestingTypes from './components/TestingTypes';
import AutomationSection from './components/AutomationSection';
import DataTestingSection from './components/DataTestingSection';
import DefectManagementSection from './components/DefectManagementSection';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Responsive Header */}
      <Navbar onOpenResumeModal={handleOpenResume} />

      <main className="flex-1">
        {/* Hero Section with QA Console Visual */}
        <Hero onOpenResumeModal={handleOpenResume} />

        {/* About Section */}
        <About />

        {/* Categorized Skills Section */}
        <Skills />

        {/* Work History Timeline */}
        <Experience />

        {/* Featured Project: DataZense */}
        <FeaturedProjectDataZense />

        {/* Animated Data Pipeline Visual */}
        <DataPipelineVisual />

        {/* Power BI Testing & Data Validation Case Study */}
        <PowerBiProject />

        {/* Kroll & Other Projects */}
        <OtherProjects />

        {/* 12-Step STLC Testing Process */}
        <TestingProcess />

        {/* Core Testing Types */}
        <TestingTypes />

        {/* Selenium Automation & Regression */}
        <AutomationSection />

        {/* Database & Data Testing + API & Backend Testing */}
        <DataTestingSection />

        {/* Defect Management in Jira + Agile Scrum */}
        <DefectManagementSection />

        {/* Education */}
        <Education />

        {/* Contact Section */}
        <Contact onOpenResumeModal={handleOpenResume} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
