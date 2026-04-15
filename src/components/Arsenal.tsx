"use client";

import { motion } from "framer-motion";
import { Lock, Github, ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "SmartNote",
    description: "Experimental PoC for SMS vulnerability testing built with Flutter. Designed to analyze permission logic and identify potential data interception points.",
    status: "Private Lab",
    tech: ["Flutter", "Dart", "Firebase"],
    locked: true
  },
  {
    title: "Y7D6 Tool",
    description: "Y7D6 is not just a script; it's a security workflow orchestrator. It acts as the 'Brain' of the 3EE attack-surface management, turning hours of manual reconnaissance into seconds of automated precision.",
    status: "Active Development",
    tech: ["Bash", "Nmap", "Metasploit"],
    locked: true
  },
  {
    title: "Polyglot Research",
    description: "Multilingual string analysis and pattern recognition engine for cross-border threat intelligence.",
    status: "R&D",
    tech: ["Go", "GRPC", "NLP"],
    locked: true
  }
];

export default function Arsenal() {
  return (
    <section id="arsenal" className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-2">THE <span className="text-cyber-green">ARSENAL</span></h2>
            <div className="h-1 w-24 bg-cyber-green" />
          </motion.div>
          <p className="text-foreground/50 font-mono text-sm uppercase tracking-widest">
            Classification: Confidential // Projects Output
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-black/40 border border-cyber-green-dim rounded-lg p-8 hover:border-cyber-green transition-all overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border border-cyber-green-dim text-cyber-green uppercase tracking-tighter`}>
                  {project.status}
                </span>
                {project.locked && <Lock className="w-3 h-3 text-cyber-green/50" />}
              </div>

              <Code2 className="w-10 h-10 text-cyber-green mb-6 opacity-80" />

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-green transition-colors">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] bg-cyber-green/5 text-cyber-green/80 px-2 py-1 rounded-sm border border-cyber-green-dim/30">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                {project.title === "SmartNote" ? (
                  <Link 
                    href="/smartnotes" 
                    className="text-xs font-bold text-cyber-green flex items-center gap-1 hover:text-white transition-all group/link uppercase tracking-widest"
                  >
                    VIEW FULL DOSSIER <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                ) : project.locked ? (
                  <span className="text-xs font-mono text-foreground/40 italic flex items-center gap-2">
                    <Lock className="w-3 h-3" /> Access Restricted
                  </span>
                ) : (
                  <>
                    <button className="text-xs font-bold text-white flex items-center gap-1 hover:text-cyber-green transition-colors uppercase tracking-widest">
                      Documentation <ExternalLink className="w-3 h-3" />
                    </button>
                    <button className="text-xs font-bold text-white flex items-center gap-1 hover:text-cyber-green transition-colors uppercase tracking-widest">
                      Source <Github className="w-3 h-3" />
                    </button>
                  </>
                )}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 left-0 w-[1px] h-full bg-cyber-green" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-green" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
