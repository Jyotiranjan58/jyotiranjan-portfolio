import { motion } from "framer-motion";

import {
  FaCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
} from "react-icons/fa";

import { personalInfo } from "../data/personal";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  const aboutCards = [
    {
      id: 1,
      label: "Location",
      value: personalInfo.location,
      icon: FaMapMarkerAlt,
    },
    {
      id: 2,
      label: "Education",
      value: "Master of Computer Applications",
      icon: FaGraduationCap,
    },
    {
      id: 3,
      label: "Experience",
      value: "Web Development",
      icon: FaLaptopCode,
    },
    {
      id: 4,
      label: "Primary Focus",
      value: "MERN Stack Development",
      icon: FaCode,
    },
  ];

  const highlights = [
    "Full Stack Development",
    "Responsive UI",
    "REST APIs",
    "Database Design",
  ];

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="About Me"
          title="I enjoy turning ideas into real applications."
          description="I'm focused on building practical, responsive and maintainable web applications while continuously improving as a developer."
        />

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <p className="text-lg leading-8 text-zinc-300">
              {personalInfo.shortBio}
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              My development experience includes building responsive user
              interfaces with React.js, creating backend functionality with
              Node.js and Express.js, and managing application data using
              MongoDB.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              I enjoy understanding how applications work from end to end — from
              the interface users interact with to APIs, authentication,
              databases and application logic.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 transition hover:border-indigo-500/30 hover:text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
                    <Icon />
                  </div>

                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                    {item.label}
                  </p>

                  <p className="mt-2 font-medium leading-6 text-zinc-200">
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
