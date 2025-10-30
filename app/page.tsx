"use client"

import CVSidebar from "@/components/cv-sidebar"
import CVHeader from "@/components/cv-header"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl">
        <div className="grid lg:grid-cols-[350px_1fr] gap-6">
          {/* Sidebar - Profile Info */}
          <CVSidebar />

          {/* Main Content - CV Sections */}
          <div className="space-y-6">
            <CVHeader />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
          </div>
        </div>
      </div>
    </main>
  )
}
