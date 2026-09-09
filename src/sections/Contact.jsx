import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDownload,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import { personalInfo } from "../data/personal";

export default function Contact() {
  const formStartTime = useRef(Date.now());

  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (honeypot) {
      return;
    }

    const timeTaken = Date.now() - formStartTime.current;

    if (timeTaken < 2500) {
      setStatus({
        type: "error",
        message: "Please wait a moment before submitting the form.",
      });

      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });

      return;
    }

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || `Portfolio enquiry from ${formData.name}`,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus({
        type: "success",
        message: "Message sent successfully. Thank you for reaching out!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setHoneypot("");

      formStartTime.current = Date.now();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me directly by email.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="absolute bottom-0 left-[-150px] -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[120px]" />

      <div className="absolute right-[-100px] top-20 -z-10 h-[300px] w-[300px] rounded-full bg-purple-600/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's build something together."
          description="I'm currently open to web development opportunities. Feel free to reach out if you'd like to discuss a role, project, or collaboration."
        />

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
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
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h3 className="text-2xl font-bold text-white">Let's connect.</h3>

            <p className="mt-4 max-w-md leading-7 text-zinc-400">
              Whether you have an opportunity, a project idea, or simply want to
              talk about web development, my inbox is open.
            </p>

            <div className="mt-8 space-y-4">
              <ContactItem
                icon={<FaEnvelope />}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />

              <ContactItem
                icon={<FaMapMarkerAlt />}
                label="Location"
                value={personalInfo.location}
              />

              <ContactItem
                icon={<FaGithub />}
                label="GitHub"
                value="github.com/Jyotiranjan58"
                href={personalInfo.github}
              />

              <ContactItem
                icon={<FaLinkedinIn />}
                label="LinkedIn"
                value="Jyotiranjan Jena"
                href={personalInfo.linkedin}
              />
            </div>

            <a
              href={personalInfo.resume}
              download="Jyotiranjan_Jena_Resume.pdf"
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div
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
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
              >
                <label htmlFor="website">Website</label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <FormField
                  label="Your Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-5">
                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required={false}
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Message
                  <span className="ml-1 text-indigo-400">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell me about your opportunity or project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-500/50 focus:bg-black/30"
                />
              </div>

              {status.message && (
                <div
                  className={`mt-5 flex items-start gap-3 rounded-xl border p-4 text-sm ${
                    status.type === "success"
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                      : "border-red-500/20 bg-red-500/10 text-red-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <FaCheckCircle className="mt-0.5 shrink-0" />
                  ) : (
                    <FaExclamationCircle className="mt-0.5 shrink-0" />
                  )}

                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className={`group mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition sm:w-auto ${
                  isSending
                    ? "cursor-not-allowed bg-indigo-500/50"
                    : "bg-indigo-500 hover:bg-indigo-400"
                }`}
              >
                {isSending ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-xs transition group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-indigo-500/30 hover:bg-white/[0.04]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-zinc-600">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-zinc-300 group-hover:text-white">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = true,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-zinc-300"
      >
        {label}

        {required && <span className="ml-1 text-indigo-400">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-500/50 focus:bg-black/30"
      />
    </div>
  );
}
