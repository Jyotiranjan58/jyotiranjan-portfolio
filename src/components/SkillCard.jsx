import { motion } from "framer-motion";

export default function SkillCard({ skill, index }) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.04]"
    >
      {/* Heading */}
      <div>
        <h3 className="text-lg font-semibold text-white">{skill.category}</h3>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          {skill.description}
        </p>
      </div>

      {/* Skills */}
      <div className="mt-6 flex flex-wrap gap-3">
        {skill.items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-black/20 px-3.5 py-2.5 transition duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/[0.07]"
            >
              <Icon className="text-xl text-indigo-400" />

              <span className="text-sm font-medium text-zinc-300">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
}
