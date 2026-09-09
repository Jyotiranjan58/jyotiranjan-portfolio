import { FaGithub } from "react-icons/fa";

import { projects } from "../data/projects";
import { personalInfo } from "../data/personal";

import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="absolute bottom-20 right-[-150px] -z-10 h-[350px] w-[350px] rounded-full bg-indigo-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects I've built."
          description="A selection of projects where I've applied frontend, backend, database, and software development concepts to build complete applications."
        />

        {/* Project Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="View Jyotiranjan Jena GitHub profile"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.07] hover:text-white"
          >
            <FaGithub className="text-lg" />

            <span>View GitHub Profile</span>

            <span className="transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
