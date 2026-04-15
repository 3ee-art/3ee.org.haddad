"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Zap } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Vision",
      text: "Founded in 2026, 3EE Organization operates with a borderless mindset, addressing the digital frontiers of tomorrow."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Mixed Realities",
      text: "A bridge between rigorous academic research and bold technical applications in software and security."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Direct Action",
      text: "Translating complex vulnerabilities into robust defensive solutions through continuous innovation."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Metadata */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-cyber-green/40" />
            <span className="text-[10px] font-mono text-cyber-green uppercase tracking-[0.5em]">
              Org Profile // v2026.04
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tighter uppercase italic">
               The <span className="text-cyber-green">Nexus</span> of Security
             </h2>

             <div className="space-y-8">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-sans first-letter:text-5xl first-letter:font-black first-letter:text-cyber-green first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                  Founded in 2026 by <span className="text-white font-bold underline decoration-cyber-green/30 underline-offset-4">Mohamed Yassin Haddad</span>, 3EE Organization stands as a bridge between academic research and bold technical applications. We specialize in identifying the unseen and securing the unsecurable. 
                </p>

                <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-mono italic">
                  Operating with a <span className="text-cyber-green">borderless mindset</span>, we address the digital frontiers of tomorrow, translating complex vulnerabilities into robust defensive solutions through continuous innovation.
                </p>
             </div>

             {/* Footer Metadata */}
             <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-foreground/30">
                   <Globe className="w-3 h-3 text-cyber-green" /> Global Vision
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-foreground/30">
                   <Cpu className="w-3 h-3 text-cyber-green" /> Mixed Realities
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-foreground/30">
                   <Zap className="w-3 h-3 text-cyber-green" /> Direct Action
                </div>
                <div className="ml-auto text-[8px] font-mono text-white/10 uppercase tracking-widest">
                   3EE_CORE_PROTOCOL_ACTIVE
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
