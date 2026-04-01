"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, Heart, Utensils } from "lucide-react";

function InfoItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-3 border border-[#D4AF37]/60 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
      <Icon className="w-5 h-5 text-[#D4AF37]" />
      <span className="text-white text-sm font-semibold">{text}</span>
    </div>
  );
}

function SectionCard({
  imageSrc,
  alt,
  title,
  details,
  description,
  imageWidth = 300,
  imageHeight = 225,
  plainImage = false,
}: {
  imageSrc?: string;
  alt: string;
  title: string;
  details: { icon: any; text: string }[];
  description?: string;
  imageWidth?: number;
  imageHeight?: number;
  plainImage?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      {/* Image */}
      {imageSrc && (
        <div
          className={
            plainImage
              ? "relative w-full max-w-sm md:max-w-md lg:max-w-md"
              : "relative rounded-2xl overflow-hidden shadow-md w-full max-w-sm md:max-w-md lg:max-w-md"
          }
        >
          <Image
            src={imageSrc}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            className={`w-full h-auto object-contain transition-transform duration-700 hover:scale-105 ${
              plainImage ? "" : "hover:shadow-lg"
            }`}
          />
        </div>
      )}

      {/* Card */}
      {!plainImage && (
        <div className="bg-[#660033] border-2 border-[#D4AF37] rounded-2xl py-6 px-8 text-center mt-6 shadow-xl w-full max-w-md">
          <h3 className="text-2xl md:text-3xl font-cinzel font-semibold text-white mb-4 tracking-wide">
            {title}
          </h3>

          <div className="mx-auto w-16 h-[2px] bg-[#D4AF37] mb-6" />

          <div className="flex flex-col gap-3 text-base">
            {details.map((item, idx) => (
              <InfoItem key={idx} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      )}

      {/* Plain cards with maroon + gold + white style */}
      {plainImage && details.length > 0 && (
        <div className="bg-[#660033] border-2 border-[#D4AF37] rounded-2xl py-6 px-8 text-center mt-6 shadow-xl w-full max-w-sm md:max-w-md lg:max-w-md">
          <h3 className="text-2xl md:text-3xl font-cinzel font-semibold text-white mb-4 tracking-wide">
            {title}
          </h3>
          {details.map((item, idx) => (
            <InfoItem key={idx} icon={item.icon} text={item.text} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function WeddingCeremony() {
  return (
    <section className="min-h-screen px-6 py-20">
      <h1 className="heading-standard text-4xl md:text-5xl text-center tracking-wide mb-2">
        Wedding Ceremony
      </h1>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-20 mt-12">
        <SectionCard
          imageSrc="/Wedding Ceremony.png"
          alt="Wedding Ceremony"
          title="Sacred Wedding Rituals"
          details={[
            { icon: Calendar, text: "May 16th, 2026" },
            { icon: Clock, text: "Muhurtham: 10:00 AM" },
            { icon: MapPin, text: "M Weddings & Conventions" },
          ]}
          description="Witness the sacred vows and timeless traditions as two hearts unite in a beautiful ceremony."
        />

        <SectionCard
          imageSrc="/CoupleGames.png"
          alt="Couples Games"
          title="Couples Games"
          plainImage
          details={[
            {
              icon: Heart,
              text: "Celebrate with exciting couples’ games, filled with laughter, playful challenges, and joyful moments for the bride and groom!",
            },
          ]}
        />

        <SectionCard
          imageSrc="/Muhurtham.png"
          alt="Muhurtham Moment"
          title="Muhurtham Moment"
          plainImage
          details={[
            {
              icon: Clock,
              text: "Be part of the Muhurtham Moment, the sacred time marking the couple’s lifelong union in love.",
            },
          ]}
        />

        <SectionCard
          imageSrc="/Feast.png"
          alt="Morning Wedding Feast"
          title="Morning Wedding Feast"
          plainImage
          details={[
            {
              icon: Utensils,
              text: "Enjoy a morning wedding feast featuring traditional breakfast and delicious festive treats for all our guests.",
            },
          ]}
        />
      </div>
    </section>
  );
}
