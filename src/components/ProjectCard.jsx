import { useState } from "react";
import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  const [imageError, setImageError] = useState(false);

  const hasGithub = Boolean(project.github);
  const hasLive = Boolean(project.live);

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/[0.025]
        transition duration-300
        hover:-translate-y-1
        hover:border-indigo-500/30
        hover:bg-white/[0.035]
      "
    >
      {/* Project Image */}

      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06] bg-zinc-900">
        {!imageError ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="
              flex h-full w-full
              items-center justify-center
              bg-gradient-to-br
              from-indigo-500/10
              via-zinc-950
              to-purple-500/10
            "
          >
            <div className="px-6 text-center">
              <p
                className="
                  text-3xl font-black
                  tracking-tight
                  text-white/10
                  sm:text-4xl
                "
              >
                {project.title}
              </p>

              <p
                className="
                  mt-3
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-zinc-600
                "
              >
                Project Preview
              </p>
            </div>
          </div>
        )}

        {/* Overlay */}

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/60
            via-transparent
            to-transparent
            opacity-0
            transition duration-300
            group-hover:opacity-100
          "
        />

        {/* Category */}

        <span
          className="
            absolute left-5 top-5
            rounded-full
            border border-white/10
            bg-black/60
            px-3 py-1.5
            text-xs font-medium
            text-zinc-200
            backdrop-blur-md
          "
        >
          {project.category}
        </span>
      </div>

      {/* Project Content */}

      <div className="p-6 sm:p-8">
        {/* Heading */}

        <div className="flex items-start justify-between gap-5">
          <div>
            <p
              className="
                mb-2
                text-xs font-semibold
                uppercase
                tracking-[0.2em]
                text-indigo-400
              "
            >
              Project 0{index + 1}
            </p>

            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {project.title}
            </h3>
          </div>

          <div
            className="
              flex h-10 w-10
              shrink-0
              items-center justify-center
              rounded-full
              border border-white/10
              bg-white/[0.03]
              text-zinc-500
              transition duration-300
              group-hover:border-indigo-500/30
              group-hover:text-indigo-400
            "
          >
            <FaArrowRight
              className="
                -rotate-45
                transition duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </div>
        </div>

        {/* Description */}

        <p className="mt-5 leading-7 text-zinc-400">{project.description}</p>

        {/* Features */}

        <div className="mt-7">
          <p
            className="
              mb-4
              text-xs font-semibold
              uppercase
              tracking-[0.2em]
              text-zinc-600
            "
          >
            Key Features
          </p>

          <div className="grid gap-3">
            {project.features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span
                  className="
                      mt-[9px]
                      h-1.5 w-1.5
                      shrink-0
                      rounded-full
                      bg-indigo-400
                    "
                />

                <span className="text-sm leading-6 text-zinc-400">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-7">
          <p
            className="
              mb-3
              text-xs font-semibold
              uppercase
              tracking-[0.2em]
              text-zinc-600
            "
          >
            Built With
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                    rounded-lg
                    border border-white/[0.08]
                    bg-white/[0.03]
                    px-3 py-1.5
                    text-xs font-medium
                    text-zinc-400
                    transition
                    hover:border-indigo-500/30
                    hover:text-indigo-300
                  "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}

        <div className="mt-8 border-t border-white/[0.06] pt-6">
          {(hasGithub || hasLive) && (
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.06] pt-6">
              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <FaGithub />
                  View Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
