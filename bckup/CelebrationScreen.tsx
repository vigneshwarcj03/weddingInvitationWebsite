"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Heart, Share2, Home } from "lucide-react";
import { useEffect, useState } from "react";

interface Confetto {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
}

interface Particle {
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function CelebrationScreen() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("name") || "";

  // Confetti state
  const [confetti, setConfetti] = useState<Confetto[]>([]);
  // Floating golden particles state
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate confetti emojis
  useEffect(() => {
    const emojis = [
      "🎉",
      "✨",
      "💕",
      "🌸",
      "🎊",
      "💐",
      "🎈",
      "👰",
      "🤵",
      "🏵️",
      "🌹",
    ];
    const newConfetti = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 3 + Math.random() * 2,
      size: 20 + Math.random() * 30,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setConfetti(newConfetti);
  }, []);

  // Generate floating golden particles
  useEffect(() => {
    const newParticles = Array.from({ length: 18 }, () => ({
      x: Math.random() * 800,
      y: Math.random() * 600,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-[#FFFDF7]/90 backdrop-blur-xl flex items-center justify-center overflow-hidden z-50"
    >
      {/* Floating golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#E9D7A5] rounded-full opacity-60"
            initial={{ x: p.x, y: p.y, opacity: 0 }}
            animate={{ y: [p.y, p.y - 40, p.y], opacity: [0, 0.8, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Gold framed card container */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/60 backdrop-blur-xl border border-[#E9D7A5]/40 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-10 max-w-lg mx-auto"
      >
        <div className="absolute inset-0 rounded-3xl border border-[#E9D7A5]/30 pointer-events-none" />
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#E9D7A5]/20 via-transparent to-[#C6A75E]/20 blur-xl opacity-60 pointer-events-none" />
        <div className="absolute inset-0 shimmer opacity-5 rounded-xl pointer-events-none" />

        {/* Confetti emojis */}
        {confetti.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: -100, opacity: 1, rotate: 0, x: 0 }}
            animate={{
              y:
                typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
              opacity: 0,
              rotate: 360,
              x: (Math.random() - 0.5) * 100,
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              ease: "easeIn",
            }}
            style={{
              left: `${item.left}%`,
              fontSize: `${item.size}px`,
              filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))",
            }}
            className="absolute"
          >
            {item.emoji}
          </motion.div>
        ))}

        {/* Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center space-y-8 px-6 max-w-xl mx-auto"
        >
          {/* Top decorative ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="w-10 h-px bg-gradient-to-r from-transparent via-[#E9D7A5] to-transparent" />
            <div
              className="w-2 h-2 rounded-full bg-[#E9D7A5]"
              style={{ boxShadow: "0 0 8px rgba(233, 215, 165, 0.6)" }}
            />
            <div className="w-10 h-px bg-gradient-to-l from-transparent via-[#E9D7A5] to-transparent" />
          </motion.div>

          {/* Animated hearts */}
          <motion.div
            className="flex justify-center gap-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.4, 1], y: [0, -25, 0] }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15 + 0.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                <Heart
                  className="w-10 h-10 fill-[#C6A75E] text-[#C6A75E] drop-shadow-lg"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-5"
          >
            <h2
              className="text-5xl md:text-6xl font-cinzel font-bold text-[#C6A75E] tracking-wider"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.08)" }}
            >
              Thank You!
            </h2>

            {guestName && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl font-cinzel tracking-wide text-[#8B6A2B]"
              >
                Dear{" "}
                <span className="font-semibold text-[#C6A75E] text-2xl md:text-3xl border-b border-[#E9D7A5] pb-1">
                  {guestName}
                </span>
                ,
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl text-[#8B6A2B] font-light tracking-wide leading-relaxed"
            >
              We can't wait to celebrate with you!
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-[#4A3B1E]/70 font-light tracking-wide"
            >
              Your response has been recorded. See you soon! 💕
            </motion.p>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#E9D7A5] to-transparent mx-auto"
          />

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-4 flex-wrap pt-6"
          >
            <motion.a
              href="/"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(212, 175, 55, 0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#660033] to-[#8B0044] text-white rounded-xl font-cinzel font-bold flex items-center gap-2 transition-all shadow-lg uppercase tracking-wider border border-[#D4AF37]/40"
            >
              <Home className="w-5 h-5 text-white" />
              Back to Home
            </motion.a>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(212, 175, 55, 0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const text = `I'm attending Vijay & Trisha's wedding! 🎉💕`;
                navigator.share
                  ? navigator.share({ title: "Wedding Invite", text })
                  : navigator.clipboard.writeText(text);
              }}
              className="px-8 py-3 bg-gradient-to-r from-[#660033] to-[#8B0044] text-white rounded-xl font-cinzel font-bold flex items-center gap-2 transition-all shadow-lg uppercase tracking-wider border border-[#D4AF37]/40"
            >
              <Share2 className="w-5 h-5 text-white" />
              Share
            </motion.button>
          </motion.div>

          {/* Final note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-sm text-[#8B6A2B] font-cinzel pt-4 tracking-widest"
          >
            ✧ We'll send you a reminder closer to the date ✧
          </motion.p>

          {/* Bottom decorative ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-2xl text-[#C6A75E]"
          >
            ✧
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
