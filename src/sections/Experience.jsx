import { motion } from "framer-motion";

import { FaBriefcase, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

import { experience } from "../data/experience";
import SectionTitle from "../components/SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="absolute right-[-150px] top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've worked."
          description="Hands-on experience working on real-world web development projects and modern full-stack technologies."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-gradient-to-b from-indigo-500 via-indigo-500/20 to-transparent sm:block" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative sm:pl-16"
              >
                {/* Timeline icon */}
                <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-indigo-500/30 bg-[#09090b] text-indigo-400 sm:flex">
                  <FaBriefcase />
                </div>

                {/* Card */}
                <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-indigo-500/30 hover:bg-white/[0.035] sm:p-8">
                  {/* Top */}
                  <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
                        {item.duration}
                      </p>

                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        {item.role}
                      </h3>

                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
                        <span className="flex items-center gap-2">
                          <FaBuilding className="text-indigo-400" />

                          {item.company}
                        </span>

                        <span className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-indigo-400" />

                          {item.location}
                        </span>
                      </div>
                    </div>

                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-400">
                      {item.workType}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-7 max-w-3xl leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  {/* Project */}
                  {item.project && (
                    <div className="mt-7 rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.04] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                        Project
                      </p>

                      <p className="mt-2 text-lg font-semibold text-white">
                        {item.project}
                      </p>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="mt-7">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                      What I Worked On
                    </p>

                    <div className="grid gap-3 md:grid-cols-2">
                      {item.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />

                          <span className="text-sm leading-6 text-zinc-400">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7 border-t border-white/[0.06] pt-6">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
