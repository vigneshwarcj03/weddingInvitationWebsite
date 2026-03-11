"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Decorative background particles */}
      <div className="absolute inset-0 particle-bg opacity-20 pointer-events-none" />

      <motion.div
        className="text-center space-y-8 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Top decorative ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div
            className="w-2 h-2 rounded-full bg-primary"
            style={{ boxShadow: "0 0 8px rgba(212, 175, 55, 0.6)" }}
          />
          <div className="w-8 h-px bg-gradient-to-l from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Animated hearts */}
        <motion.div
          className="flex justify-center gap-4"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.span
            className="text-5xl drop-shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.4))" }}
          >
            💕
          </motion.span>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-display text-primary font-bold glow-gold">
            Loading Your Invitation...
          </h2>
          <p className="text-lg text-accent font-light">
            Preparing something special for you
          </p>
        </motion.div>

        {/* Animated loading dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-3 pt-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-soft-gold"
              animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                repeat: Infinity,
              }}
              style={{
                boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
              }}
            />
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-accent text-sm pt-4 font-cinzel tracking-widest"
        >
          ✧ Vijay & Trisha ✧
        </motion.p>
      </motion.div>
    </div>
  );
}

