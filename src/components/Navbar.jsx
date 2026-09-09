import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
} from "react-icons/fa";

import { personalInfo } from "../data/personal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <motion.a
          href="#home"
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="group flex items-center text-2xl font-bold tracking-tight"
          aria-label="Jyotiranjan Jena - Home"
        >
          <span className="text-white">J</span>

          <motion.span
            className="mx-0.5 text-indigo-400"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            /
          </motion.span>

          <span className="text-white">J</span>
        </motion.a>

        {/* Desktop navigation */}

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition ${
                    isActive
                      ? "text-indigo-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-400" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="h-5 w-px bg-white/10" />

          {/* Socials */}

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-lg text-zinc-400 transition hover:-translate-y-0.5 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-lg text-zinc-400 transition hover:-translate-y-0.5 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Resume */}

          <a
            href={personalInfo.resume}
            download="Jyotiranjan_Jena_Resume.pdf"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-indigo-400 hover:text-white"
          >
            Resume
            <FaDownload className="text-xs" />
          </a>
        </div>

        {/* Mobile button */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-lg text-white lg:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}

      {isOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-3 transition ${
                    isActive
                      ? "bg-indigo-500/10 text-indigo-400"
                      : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <a
            href={personalInfo.resume}
            download="Jyotiranjan_Jena_Resume.pdf"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white"
          >
            <FaDownload />
            Download Resume
          </a>

          <div className="mt-5 flex gap-4 border-t border-white/10 pt-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400"
            >
              <FaGithub />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
