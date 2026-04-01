"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Gamepad,
  Utensils,
} from "lucide-react";

function InfoItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div
      className="
    flex items-center gap-3 
    border border-[#D4AF37]/60
    bg-white/10 backdrop-blur-sm
    rounded-2xl 
    p-4 
    shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
    transition-all duration-300
  "
    >
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
  imageWidth = 300,
  imageHeight = 225,
  plainImage = false,
}: {
  imageSrc?: string;
  alt: string;
  title: string;
  details: { icon: any; text: string }[];
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

      {/* Card (Main Reception Block) */}
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

export default function ReceptionLayout() {
  return (
    <section className="min-h-screen px-6 py-20">
      <h1 className="heading-standard text-4xl text-center md:text-5xl tracking-wide mb-4">
        Reception Celebrations
      </h1>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-20 mt-12">
        {/* Reception */}
        <SectionCard
          imageSrc="/Reception.png"
          alt="Reception"
          title="Reception"
          imageWidth={300}
          imageHeight={225}
          details={[
            { icon: Calendar, text: "May 15th, 2026" },
            { icon: Clock, text: "7:00 PM Onwards" },
            { icon: MapPin, text: "M Weddings & Conventions" },
          ]}
        />

        {/* DJ */}
        <SectionCard
          imageSrc="/DJ.png"
          alt="DJ Night"
          title="Live DJ & Dance Floor"
          imageWidth={300}
          imageHeight={225}
          plainImage
          details={[
            {
              icon: Music,
              text: "Get ready to dance! Our wedding DJ will keep everyone moving and grooving all night long in celebration of love.",
            },
          ]}
        />

        {/* Games */}
        <SectionCard
          imageSrc="/Games.png"
          alt="Games"
          title="Games & Entertainment"
          imageWidth={300}
          imageHeight={225}
          plainImage
          details={[
            {
              icon: Gamepad,
              text: "Enjoy exciting games and delightful activities as we celebrate love, laughter, and togetherness with all!",
            },
          ]}
        />

        {/* Food */}
        <SectionCard
          imageSrc="/Food.png"
          alt="Food"
          title="A Feast for Everyone"
          imageWidth={300}
          imageHeight={225}
          plainImage
          details={[
            {
              icon: Utensils,
              text: "Enjoy an unforgettable Indian reception dinner with flavorful dishes, refreshing beverages, and treats for everyone!",
            },
          ]}
        />
      </div>
    </section>
  );
}
