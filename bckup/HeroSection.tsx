"use client";

import { motion } from "framer-motion";
import FallingFlowers from "@/components/FallingFlowers";

interface HeroSectionProps {
  guestName: string;
}

export default function HeroSection({ guestName }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 overflow-hidden">
      {/* Falling Flowers */}
      <FallingFlowers />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.span
          className="absolute top-20 left-20 text-primary text-xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ✧
        </motion.span>

        <motion.span
          className="absolute bottom-32 right-24 text-primary text-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ✦
        </motion.span>

        <motion.span
          className="absolute top-1/2 left-1/4 text-primary text-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          ✧
        </motion.span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        {/* Decorative divider */}
        <div className="flex justify-center items-center gap-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div
            className="w-2 h-2 rounded-full bg-primary"
            style={{ boxShadow: "0 0 10px rgba(212,175,55,0.8)" }}
          />
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-primary to-transparent" />
        </div>

        {/* Couple Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading font-semibold text-primary tracking-tight"
        >
          Vijay & Trisha
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-foreground font-light max-w-2xl mx-auto leading-relaxed"
        >
          Together with their families, they invite you to celebrate their
          wedding
        </motion.p>

        {/* Guest Name */}
        {guestName && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-accent font-cinzel tracking-wide"
          >
            Dear <span className="text-primary font-semibold">{guestName}</span>
          </motion.p>
        )}

        {/* Date & Location */}
        <div className="space-y-2 pt-3">
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-primary font-cinzel">
            Saturday • March 15 • 2026
          </p>

          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-primary font-cinzel">
            Chennai, India
          </p>
        </div>

        {/* Bottom divider */}
        <div className="flex justify-center items-center gap-4 pt-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div
            className="w-2 h-2 rounded-full bg-primary"
            style={{ boxShadow: "0 0 10px rgba(212,175,55,0.8)" }}
          />
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-primary to-transparent" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex flex-col items-center text-primary z-10"
      >
        <span className="text-xs tracking-widest font-cinzel">SCROLL</span>
        <div className="w-px h-8 bg-primary mt-2" />
      </motion.div>
    </section>
  );
}
