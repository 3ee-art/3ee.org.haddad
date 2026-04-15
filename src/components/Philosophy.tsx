"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 relative overflow-hidden bg-white text-black">
      <div className="absolute inset-0 bg-cyber-green opacity-5" />
      
      {/* Central Filling Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          {/* Subtle Spider Motif SVG */}
          <svg width="600" height="600" viewBox="0 0 24 24" fill="none" className="text-black">
             <path d="M12 2L10.5 4L9 2M12 2L13.5 4L15 2M12 2V6M12 6C10 6 8.5 7.5 8.5 9.5C8.5 11.5 10 13 12 13C14 13 15.5 11.5 15.5 9.5C15.5 7.5 14 6 12 6ZM12 13V18M12 18L10.5 20L9 22M12 18L13.5 20L15 22M8.5 9.5L4 8L2 6M8.5 11L4 12L2 14M15.5 9.5L20 8L22 6M15.5 11L20 12L22 14" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
             <circle cx="12" cy="11" r="1" fill="currentColor" />
          </svg>
          
          {/* Vertical Metadata filling the gap */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-24">
             <div className="h-64 w-[1px] bg-black/10" />
             <div className="rotate-90 text-[10px] font-mono whitespace-nowrap opacity-20 tracking-[1em] uppercase">
                3EE_SYSTEM_PROTOCOL // NULL_AMBIGUITY
             </div>
             <div className="h-64 w-[1px] bg-black/10" />
          </div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="text-sm font-mono uppercase tracking-[1em] mb-4">The Motto</span>
            <h2 className="text-7xl md:text-9xl font-black italic uppercase leading-none tracking-tighter">
              NO PAIN<br />
              <span className="text-cyber-green stroke-black stroke-2">NO GAIN</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-end text-right self-end"
          >
            <span className="text-sm font-mono uppercase tracking-[1em] mb-4">The Creed</span>
            <h2 className="text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter">
              KNOWLEDGE<br />
              IS <span className="text-cyber-green italic">POWER</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t-4 border-black pt-8 flex justify-between items-start"
        >
          <p className="max-w-md font-mono text-sm">
            In the binary world, there is no ambiguity. You either hold the key or you are the lock. 3EE Organization operates on the principle of absolute technical mastery.
          </p>
          <div className="text-6xl font-black">2026</div>
        </motion.div>
      </div>
    </section>
  );
}
