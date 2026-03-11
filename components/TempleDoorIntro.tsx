"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface TempleDoorIntroProps {
  guestName: string;
  onOpen: () => void;
}

export default function TempleDoorIntro({
  guestName,
  onOpen,
}: TempleDoorIntroProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden z-50">
      {/* Background */}
      <Image
        src="/Background_Temple_image.png"
        alt="Temple"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* CENTER CONTENT (hidden initially behind doors) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.95 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 w-[90vw] max-w-[420px]"
      >
        <div className="bg-[#FFF8E7]/95 backdrop-blur-sm border-2 border-[#D4AF37] rounded-xl shadow-xl p-8 text-center space-y-6">
          <h1 className="text-4xl font-serif text-[#B8962E]">
            You Are Invited
          </h1>

          {guestName && (
            <p className="text-xl text-[#4A3B2A]">
              Dear <span className="font-semibold">{guestName}</span>
            </p>
          )}

          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto" />

          <p className="text-[#4A3B2A] text-lg">
            Join us for a celebration of love and togetherness
          </p>

          <div className="flex justify-center">
            <Image
              src="/Couples_1.png"
              alt="Couple"
              width={220}
              height={30}
              className="rounded-2xl border-2 border-[#D4AF37]"
            />
          </div>

          <motion.button
            onClick={onOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full text-white font-semibold"
            style={{
              background: "linear-gradient(135deg,#D4AF37,#B8962E)",
            }}
          >
            Enter Invitation
          </motion.button>
        </div>
      </motion.div>

      {/* LEFT DOOR */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "-90%" : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 bottom-0 w-[50vw] max-w-[250px] -translate-x-full z-20 rounded-4xl overflow-hidden"
      >
        <Image
          src="/temple_door_left.png"
          alt="Left Door"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* RIGHT DOOR */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open ? "90%" : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 bottom-0 w-[50vw] max-w-[250px] z-20 rounded-4xl overflow-hidden"
      >
        <Image
          src="/temple_door_right.png"
          alt="Right Door"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
