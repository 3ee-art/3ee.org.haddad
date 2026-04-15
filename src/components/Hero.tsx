"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const KEYWORDS = ["RESEARCH", "SECURITY", "NEXUS", "STEALTH", "BORDERLESS", "INNOVATION", "ACTION", "VISION"];

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "> Initialize 3EE_Portal...\n> Authentication SUCCESS\n> Welcome, Mohamed Yassin Haddad\n> Founding Year: 2026\n> Mission: Academic Research // Technical Application";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#0b0e14]">
      {/* Background Grids */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="scanline" />

      {/* Spider Web Network Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="relative w-[800px] h-[800px] flex items-center justify-center opacity-10"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Concentric Web Circles */}
            {[20, 40, 60, 80, 100].map((r, i) => (
              <motion.circle
                key={i}
                cx="100" cy="100" r={r}
                fill="none"
                stroke="#2ecc71"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: i * 0.2 }}
              />
            ))}
            {/* Radial Web Lines (Legs) */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <line
                key={i}
                x1="100" y1="100"
                x2={100 + 100 * Math.cos((angle * Math.PI) / 180)}
                y2={100 + 100 * Math.sin((angle * Math.PI) / 180)}
                stroke="#2ecc71"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Orbiting Keywords */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {KEYWORDS.map((word, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
               opacity: [0, 0.1, 0],
               rotate: 360,
            }}
            transition={{ 
                rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                opacity: { duration: 5, repeat: Infinity, delay: i * 2 }
            }}
            className="absolute font-mono text-[10px] tracking-[0.5em] text-cyber-green whitespace-nowrap"
            style={{ 
               transform: `rotate(${i * 45}deg) translateX(${250 + i * 20}px)`
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo with Planet Atmosphere Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative mb-16"
          >
            {/* Atmosphere Layers */}
            <div className="absolute -inset-12 bg-cyber-green/5 blur-[120px] rounded-full" />
            <div className="absolute -inset-8 bg-cyber-green/10 blur-[60px] rounded-full animate-pulse" />
            <div className="absolute -inset-4 bg-cyber-green/20 blur-[20px] rounded-full" />
            
            {/* Planet Core */}
            <div className="relative w-48 h-48 flex items-center justify-center bg-[#0b0e14] border-2 border-cyber-green rounded-full shadow-[0_0_50px_rgba(46,204,113,0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-green/10 via-transparent to-transparent" />
              <span className="text-7xl font-black text-white glow-text tracking-tighter z-10">
                3EE
              </span>
              {/* Internal subtle scanline for the planet */}
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-1 bg-cyber-green/20"
              />
            </div>
          </motion.div>

          {/* Terminal Intro */}
          <div className="max-w-2xl w-full bg-black/80 border border-cyber-green/20 rounded-lg p-6 font-mono text-left shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4 border-b border-cyber-green/10 pb-2 opacity-50">
              <Terminal className="w-4 h-4 text-cyber-green" />
              <span className="text-[10px] uppercase tracking-widest text-cyber-green">System_Terminal_v4.0.1</span>
            </div>
            <pre className="text-cyber-green whitespace-pre-wrap text-xs sm:text-sm leading-relaxed selection:bg-cyber-green selection:text-black">
              {text}
              <span className="animate-pulse">_</span>
            </pre>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
            className="mt-12"
          >
            <a
              href="#arsenal"
              className="px-10 py-4 bg-cyber-green text-black font-bold rounded-sm hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(46,204,113,0.5)] uppercase tracking-widest text-xs"
            >
              ACCESS ARSENAL
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
