"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, MessageSquare, Lock, Terminal, Smartphone, AlertTriangle, ArrowLeft, X, Expand } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/smartnotes/screen splash.png", title: "Red N Splash Screen", description: "The iconic identification of the SmartNotes architecture.", featured: true },
  { src: "/smartnotes/0.jpeg", title: "User Workspace", description: "Seamless, minimalist UI for task management and personal notes." },
  { src: "/smartnotes/1.jpeg", title: "Project Categories", description: "Academic classification system for Cours, TPs, and TDs." },
  { src: "/smartnotes/3.jpeg", title: "Permission Logic", description: "Backend research into system permission acquisition patterns." },
  { src: "/smartnotes/boot.jpeg", title: "Bootstrap Sequence", description: "Initialization log for the integrated Xypher monitoring layer." },
];

export default function SmartNotesPage() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0e14] text-foreground selection:bg-cyber-red selection:text-black font-sans pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-cyber-red/20 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
           <Link href="/" className="flex items-center gap-2 group text-cyber-red/60 hover:text-cyber-red transition-all">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
             <span className="text-xs font-mono uppercase tracking-widest">Back to Portal</span>
           </Link>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-cyber-red animate-pulse rounded-full" />
             <span className="text-[10px] font-mono text-cyber-red uppercase tracking-tighter">Classification: Classified</span>
           </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-red/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
              SMART<span className="text-cyber-red">NOTES</span>
            </h1>
            <p className="text-xl font-mono text-cyber-red/40 uppercase tracking-[0.4em] mb-8">
              Invisible Architecture
            </p>
            <div className="h-1 w-20 bg-cyber-red mx-auto mb-8" />
            <p className="text-lg text-foreground/70 leading-relaxed italic">
              "A bridge between rigourous academic research and bold technical applications."
            </p>
          </motion.div>

          {/* Detailed Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedImage(img)}
                className={`relative group cursor-pointer overflow-hidden rounded-xl border border-cyber-red/20 hover:border-cyber-red transition-all shadow-2xl ${img.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className={`relative ${img.featured ? 'aspect-[21/9]' : 'aspect-square'} w-full bg-black`}>
                   <Image src={img.src} alt={img.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110" />
                   
                   {/* Scanning Line */}
                   <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                     <motion.div
                        animate={{ y: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-full h-1 bg-cyber-red shadow-[0_0_15px_rgba(230,57,70,0.8)]"
                      />
                   </div>

                   <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
                      <div className="flex items-center justify-between">
                         <div>
                            <h3 className="text-white font-bold tracking-wider">{img.title}</h3>
                            <p className="text-cyber-red/60 text-xs font-mono">{img.description}</p>
                         </div>
                         <Expand className="w-4 h-4 text-cyber-red opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive Section */}
      <section className="py-24 bg-black/40 border-y border-cyber-red/10">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
             <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyber-red pl-6 tracking-widest uppercase">The Overview</h2>
             <p className="text-lg text-foreground/80 leading-relaxed font-sans mb-8">
               SmartNotes represents a paradigm shift in experimental application design. Built with **Flutter**, it offers students a seamless workspace to manage their academic life—organizing notes, tracking schedules, and centralizing course materials.
             </p>
             <div className="p-8 bg-cyber-red/5 border border-cyber-red/20 rounded-lg">
                <div className="flex items-center gap-3 mb-4 text-cyber-red font-mono text-sm tracking-widest">
                  <Terminal className="w-5 h-5" /> 0x_FLUTTER_CORE
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed italic">
                  "Beneath the interface lies Xypher—a custom monitoring layer designed to analyze Android permission acquisition and data persistence for security research."
                </p>
             </div>
          </div>

          <div className="space-y-8">
             <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyber-red pl-6 tracking-widest uppercase">Deep-Dive Analysis</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { icon: Shield, title: "Data Isolation", desc: "Advanced sandboxing for user thoughts." },
                 { icon: MessageSquare, title: "Stealth Logic", desc: "Integrated interception POC." },
                 { icon: Lock, title: "Ethical Walls", desc: "Private lab deployment only." },
                 { icon: AlertTriangle, title: "Security POV", desc: "Android vulnerability mapping." }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-black/60 border border-white/5 rounded-lg group hover:border-cyber-red transition-all cursor-default">
                    <item.icon className="w-6 h-6 text-cyber-red mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-foreground/50">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
           <div className="mb-12">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-12 py-4 border-2 border-cyber-red text-cyber-red font-mono text-sm uppercase tracking-[0.4em] hover:bg-cyber-red hover:text-black transition-all group"
              >
                PROCEED TO XYPHER LOGS
              </button>
              <AnimatePresence>
                {isHovered && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 text-cyber-red font-mono text-[10px] animate-pulse">
                    {">"} ACCESSING_SYSTEM_KERNEL... [UNAUTHORIZED] 0x403
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
           <p className="text-xs font-mono text-foreground/30 uppercase tracking-[0.5em]">
             Project by Mohamed Yassin Haddad | 3EE Labs
           </p>
        </div>
      </section>

      {/* Image Modal (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
             <button className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors">
               <X className="w-10 h-10" />
             </button>
             
             <motion.div
               initial={{ scale: 0.9, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.9, y: 20 }}
               className="relative max-w-6xl w-full h-[80vh] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10"
               onClick={(e) => e.stopPropagation()}
             >
                <Image src={selectedImage.src} alt={selectedImage.title} fill className="object-contain" />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div>
                        <h2 className="text-4xl font-black text-white mb-2">{selectedImage.title}</h2>
                        <p className="text-cyber-red font-mono text-sm tracking-widest">{selectedImage.description}</p>
                      </div>
                      <div className="text-[10px] font-mono text-white/30 tracking-tighter uppercase text-right">
                        Resolution: Optimal // Format: JPEG/PNG<br/>
                        File: {selectedImage.src.split('/').pop()}
                      </div>
                   </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
