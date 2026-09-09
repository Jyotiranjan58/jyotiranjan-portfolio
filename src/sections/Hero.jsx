import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

import { SiExpress, SiMongodb } from "react-icons/si";

import { personalInfo } from "../data/personal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#09090b]" />

      {/* Background glows */}
      <div className="absolute left-[10%] top-[15%] -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/15 blur-[130px]" />

      <div className="absolute bottom-[10%] right-[5%] -z-10 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[130px]" />

      {/* Grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {/* Availability */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium text-emerald-300">
              {personalInfo.availability}
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            {personalInfo.firstName}

            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.lastName}.
            </span>
          </h1>

          {/* Role */}
          <div className="mt-6 flex items-center gap-3">
            <FaCode className="text-indigo-400" />

            <h2 className="text-xl font-medium text-zinc-300 sm:text-2xl">
              {personalInfo.role}
            </h2>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            {personalInfo.tagline}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400"
            >
              Explore My Work
              <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={personalInfo.resume}
              download="Jyotiranjan_Jena_Resume.pdf"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Find me on
            </span>

            <div className="h-px w-10 bg-zinc-800" />

            <SocialIcon
              href={personalInfo.github}
              label="GitHub"
              icon={<FaGithub />}
            />

            <SocialIcon
              href={personalInfo.linkedin}
              label="LinkedIn"
              icon={<FaLinkedinIn />}
            />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative mx-auto hidden h-[500px] w-full max-w-[500px] lg:block"
        >
          {/* Outer glow */}
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[80px]" />

          {/* Outer ring */}
          <div className="absolute inset-10 rounded-full border border-indigo-500/20" />

          {/* Dashed inner ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-16 rounded-full border border-dashed border-white/10"
          />

          {/* PROFILE IMAGE */}
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              duration: 0.3,
            }}
            className="absolute left-1/2 top-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-indigo-500/30 bg-zinc-900 p-2 shadow-2xl shadow-indigo-500/10"
          >
            <img
              src="/images/Jyotiranjan.png"
              alt="Jyotiranjan Jena"
              className="h-full w-full rounded-[2.7rem] object-cover"
            />
          </motion.div>

          {/* React */}
          <TechBadge
            className="left-0 top-16"
            icon={<FaReact />}
            name="React.js"
            delay={0}
          />

          {/* Node */}
          <TechBadge
            className="right-0 top-24"
            icon={<FaNodeJs />}
            name="Node.js"
            delay={0.6}
          />

          {/* Express */}
          <TechBadge
            className="bottom-24 left-2"
            icon={<SiExpress />}
            name="Express.js"
            delay={1.2}
          />

          {/* MongoDB */}
          <TechBadge
            className="bottom-14 right-3"
            icon={<SiMongodb />}
            name="MongoDB"
            delay={1.8}
          />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#09090b]" />
    </section>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-lg text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
    >
      {icon}
    </a>
  );
}

function TechBadge({ icon, name, className, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      whileHover={{
        scale: 1.08,
        y: -5,
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        scale: {
          duration: 0.2,
        },
      }}
      className={`
        absolute
        z-20
        flex items-center gap-3
        rounded-2xl
        border border-white/10
        bg-zinc-900/80
        px-4 py-3
        shadow-xl
        shadow-black/30
        backdrop-blur-xl
        cursor-default
        ${className}
      `}
    >
      <span className="text-2xl text-indigo-400">{icon}</span>

      <span className="text-sm font-semibold text-zinc-200">{name}</span>
    </motion.div>
  );
}
