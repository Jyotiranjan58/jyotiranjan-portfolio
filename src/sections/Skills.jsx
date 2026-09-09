import { skills } from "../data/skills";

import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute left-[-150px] top-1/2 -z-10 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Tech Stack"
          title="Technologies I work with."
          description="Technologies and tools I use across frontend development, backend development, databases and my development workflow."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
