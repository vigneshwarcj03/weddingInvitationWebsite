"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInvitation } from "@/hooks/useInvitation";
import TempleDoorIntro from "./TempleDoorIntro";
import HeroSection from "./HeroSection";
import FallingFlowers from "./FallingFlowers";
import CountdownTimer from "./CountdownTimer";
import WeddingDetails from "./WeddingDetails";
import Gallery from "./Gallery";
import GuestConfirmation from "./GuestConfirmation";
import CelebrationScreen from "./CelebrationScreen";

interface WeddingInvitationProps {
  guestName: string;
}

export default function WeddingInvitation({
  guestName,
}: WeddingInvitationProps) {
  const {
    showDoorIntro,
    isConfirmed,
    currentGuest,
    openInvitation,
    confirmAttendance,
    updateGuestName,
  } = useInvitation(guestName);

  useEffect(() => {
    if (guestName && guestName !== currentGuest) {
      updateGuestName(guestName);
    }
  }, [guestName, currentGuest, updateGuestName]);

  if (isConfirmed) {
    return <CelebrationScreen guestName={currentGuest} />;
  }

  if (showDoorIntro) {
    return <TempleDoorIntro guestName={currentGuest} onOpen={openInvitation} />;
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <FallingFlowers />

      <main className="relative z-10">
        <HeroSection guestName={currentGuest} />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 md:py-20"
        >
          <div className="max-w-2xl mx-auto px-4">
            <CountdownTimer />
          </div>
        </motion.section>

        <WeddingDetails />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 md:py-20"
        >
          <div className="max-w-5xl mx-auto px-4">
            <Gallery />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 md:py-20"
        >
          <div className="max-w-2xl mx-auto px-4">
            <GuestConfirmation
              guestName={currentGuest}
              onConfirmation={confirmAttendance}
            />
          </div>
        </motion.section>
      </main>
    </div>
  );
}
