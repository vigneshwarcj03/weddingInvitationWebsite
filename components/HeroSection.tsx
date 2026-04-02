"use client";

import { motion } from "framer-motion";
import FallingFlowers from "@/components/FallingFlowers";
import Image from "next/image";

interface HeroSectionProps {
  guestName: string;
}

export default function HeroSection({ guestName }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Falling Flowers */}
      <div className="relative z-0 opacity-90">
        <FallingFlowers />
      </div>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute top-0 left-0 w-full z-10 flex justify-center">
        <Image
          src="/TopHero.png"
          alt="Top Decoration"
          width={600}
          height={200}
          className="w-auto h-auto object-contain"
          priority
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.span
          className="absolute top-20 left-20 text-primary text-xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ✧
        </motion.span>
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.4,
              delayChildren: 0.5,
            },
          },
        }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-10"
      >
        {/* Decorative divider */}
        <div className="flex justify-center items-center gap-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div
            className="w-2 h-2 rounded-full bg-primary"
            style={{ boxShadow: "0 0 10px rgba(212,175,55,0.8)" }}
          />
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-primary to-transparent" />
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, rotate: -6 }}
          animate={{
            opacity: 1,
            rotate: [-6, 6, -6],
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center origin-top relative"
        >
          <Image
            src="/HeroSection_Image.png"
            alt="Wedding Couple"
            width={240}
            height={240}
            priority
            className="mx-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
          />
        </motion.div>

        {/* Couple Names */}
        <motion.h1 className="text-5xl md:text-4xl font-[Outfit] leading-[1.25] text-center">
          <span className="block bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent font-medium tracking-[0.08em]">
            Karthik
          </span>

          <span className="flex justify-center my-4 scale-95">
            <Image
              src="/heroCenter.png"
              alt="and"
              width={95}
              height={95}
              className="object-contain"
              priority
            />
          </span>

          <span className="block bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent font-medium tracking-[0.08em]">
            Shakti
          </span>
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

        {/* Date & Location */}
        <div className="space-y-2 pt-3">
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-primary font-cinzel">
            Saturday • May 15 • 2026
          </p>

          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-primary font-cinzel">
            Chennai, India
          </p>
        </div>

        {/* Bottom divider */}
        <div className="flex justify-center items-center gap-4 mb-33 pt-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div
            className="w-2 h-2 rounded-full bg-primary"
            style={{ boxShadow: "0 0 10px rgba(212,175,55,0.8)" }}
          />
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-primary to-transparent" />
        </div>
        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 w-full z-10 mt-35 flex justify-center">
          <Image
            src="/bottom.png"
            alt="Bottom Decoration"
            width={400}
            height={200}
            className="w-auto h-auto  object-contain"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
