"use client";

import { motion } from "framer-motion";

const techs = [
  "Kali Linux",
  "Next.js",
  "Python",
  "Bash",
  "OSINT",
  "Metasploit",
  "React",
  "Docker",
  "TypeScript",
  "C++",
];

export default function TechMarquee() {
  const marqueeVariants: any = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="py-12 bg-black border-y border-cyber-green-dim overflow-hidden whitespace-nowrap">
      <div className="container mx-auto px-4 mb-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-cyber-green/50">Tech Stack Protocol</span>
      </div>
      <motion.div
        className="flex gap-12 text-white/40 font-mono text-2xl uppercase font-black"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-4 hover:text-cyber-green transition-colors">
            <span className="text-cyber-green">•</span>
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
