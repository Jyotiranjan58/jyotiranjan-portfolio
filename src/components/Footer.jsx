import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";

import { personalInfo } from "../data/personal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-black/20">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-sm font-bold text-indigo-400">
                JJ
              </span>

              <div>
                <p className="font-semibold text-white">{personalInfo.name}</p>

                <p className="text-xs text-zinc-600">
                  Full Stack Web Developer
                </p>
              </div>
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <SocialButton
              href={personalInfo.github}
              label="GitHub"
              icon={<FaGithub />}
            />

            <SocialButton
              href={personalInfo.linkedin}
              label="LinkedIn"
              icon={<FaLinkedinIn />}
            />

            <SocialButton
              href={`mailto:${personalInfo.email}`}
              label="Email"
              icon={<FaEnvelope />}
            />
          </div>

          {/* Scroll top */}
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-indigo-400"
          >
            Back to top
            <FaArrowUp />
          </a>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center">
          <p className="text-xs text-zinc-600">
            © {currentYear} {personalInfo.name}. Built with React & Tailwind
            CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500 transition hover:-translate-y-1 hover:border-indigo-500/30 hover:text-indigo-400"
    >
      {icon}
    </a>
  );
}
