import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

export const skills = [
  {
    category: "Programming Languages",
    description: "Languages I use for development and problem solving.",
    items: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "JavaScript",
        icon: FaJs,
      },
    ],
  },

  {
    category: "Frontend",
    description:
      "Technologies I use to build responsive and interactive user interfaces.",
    items: [
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    category: "Backend",
    description:
      "Technologies I use for APIs and server-side application development.",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
    ],
  },

  {
    category: "Databases",
    description: "Databases I use to store and manage application data.",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },

  {
    category: "Tools & Platforms",
    description:
      "Tools I use for development, version control and API testing.",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
    ],
  },
];
