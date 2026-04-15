"use client";

import { motion } from "framer-motion";
import { Instagram, Send, ShieldCheck, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-black border-t border-cyber-green-dim">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
              <ShieldCheck className="text-cyber-green" />
              SECURE CONTACT
            </h2>
            <form className="space-y-6 max-w-md">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="IDENTIFIER"
                  className="w-full bg-transparent border-b border-cyber-green-dim py-2 font-mono text-sm focus:border-cyber-green outline-none transition-all placeholder:text-foreground/30"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyber-green transition-all group-focus-within:w-full" />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="COMMUNICATION_ENDPOINT"
                  className="w-full bg-transparent border-b border-cyber-green-dim py-2 font-mono text-sm focus:border-cyber-green outline-none transition-all placeholder:text-foreground/30"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyber-green transition-all group-focus-within:w-full" />
              </div>
              <div className="relative group">
                <textarea
                  rows={4}
                  placeholder="ENCRYPTED_MESSAGE"
                  className="w-full bg-transparent border-b border-cyber-green-dim py-2 font-mono text-sm focus:border-cyber-green outline-none transition-all placeholder:text-foreground/30 resize-none"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyber-green transition-all group-focus-within:w-full" />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 border border-cyber-green text-cyber-green font-mono text-xs uppercase tracking-widest hover:bg-cyber-green hover:text-black transition-all"
              >
                ESTABLISH CONNECTION <Send className="w-3 h-3" />
              </button>
            </form>
          </div>

          {/* Org Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Digital Footprint</h3>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/myassin_75f_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground/60 hover:text-cyber-green transition-colors group"
                >
                  <div className="p-2 border border-cyber-green-dim group-hover:border-cyber-green transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">@myassin_75f_</span>
                </a>
                <div className="flex items-center gap-4 text-foreground/60 group">
                  <div className="p-2 border border-cyber-green-dim">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">3ee.org.haddad@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-[10px] font-mono text-foreground/30 leading-relaxed uppercase tracking-tighter">
                © 2026 3EE ORGANIZATION // ALL RIGHTS RESERVED.<br />
                DESIGNED BY ANTIGRAVITY FOR MOHAMED YASSIN HADDAD.<br />
                ENCRYPTION: AES-256 // STATUS: OPTIMAL
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-cyber-green-dim/30 opacity-30">
          <span className="text-[10px] font-mono uppercase tracking-widest">System::V1.0</span>
          <span className="text-[10px] font-mono uppercase tracking-widest">Lat: 35.825 / Long: 10.641</span>
        </div>
      </div>
    </footer>
  );
}
