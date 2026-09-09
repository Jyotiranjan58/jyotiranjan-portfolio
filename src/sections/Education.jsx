import { motion } from "framer-motion";

import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

import { education } from "../data/education";
import SectionTitle from "../components/SectionTitle";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/[0.06] bg-white/[0.015] py-24 sm:py-32"
    >
      <div className="absolute left-[-150px] bottom-0 -z-10 h-[350px] w-[350px] rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Education"
          title="My academic journey."
          description="My academic background in computer applications and science."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {education.map((item, index) => (
            <motion.article
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.04] sm:p-7"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-lg text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
                <FaGraduationCap />
              </div>

              {/* Degree */}
              <h3 className="mt-6 text-xl font-bold leading-7 text-white">
                {item.degree}
              </h3>

              {/* Institution */}
              <p className="mt-3 leading-6 text-zinc-400">{item.institution}</p>

              {/* Information */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-zinc-500">
                  <FaCalendarAlt className="text-indigo-400" />

                  {item.duration}
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-500">
                  <FaMapMarkerAlt className="text-indigo-400" />

                  {item.location}
                </div>
              </div>

              {/* Score */}
              <div className="mt-auto pt-7">
                <div className="border-t border-white/[0.06] pt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    {item.scoreLabel}
                  </p>

                  <p className="mt-2 text-xl font-semibold text-indigo-400">
                    {item.score}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
