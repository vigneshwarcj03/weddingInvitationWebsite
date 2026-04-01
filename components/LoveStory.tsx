"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Calendar, Sparkles } from "lucide-react";

type StoryEvent = {
  year: string; // "Today" or a year string
  title: string;
  description: string;
  imageUrl: string;
};

const events: StoryEvent[] = [
  {
    year: "2020",
    title: "Our First Meeting",
    description:
      "A smile at a family function, the start of a beautiful journey together.",
    imageUrl: "/Story1.png",
  },
  {
    year: "2021",
    title: "Growing Closer",
    description: "Shared dreams and laughter made our bond stronger every day.",
    imageUrl: "/Story2.png",
  },
  {
    year: "2026",
    title: "The Proposal",
    description:
      "With blessings from family, he asked for her hand in marriage.",
    imageUrl: "/Story3.png",
  },
  {
    year: "Today",
    title: "Joining Hands",
    description:
      "With joyful hearts, we celebrate our wedding and new beginnings.",
    imageUrl: "/Story4.png",
  },
];

interface LoveStoryProps {
  guestName?: string;
}

export default function LoveStory({ guestName }: LoveStoryProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div
              className="w-2 h-2 rounded-full bg-primary"
              style={{ boxShadow: "0 0 10px rgba(212,175,55,0.8)" }}
            />
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-primary to-transparent" />
          </div>

          <h2 className="heading-standard text-4xl md:text-5xl tracking-wide mb-2">
            Our Love Story
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          <p className="body-standard text-lg text-muted-foreground mt-10 max-w-2xl mx-auto">
            A journey of love, laughter, and forever
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-primary via-primary to-primary h-full opacity-30" />

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center"
                >
                  {isEven ? (
                    <>
                      {/* Content */}
                      <div className="w-full md:w-5/12 md:pr-8 mb-4 md:mb-0">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/10 hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center gap-3 mb-3">
                            <Calendar size={16} className="text-primary" />
                            <span className="subheading-standard text-sm text-primary font-semibold uppercase tracking-wide">
                              {event.year}
                            </span>
                          </div>
                          <h3 className="heading-standard text-xl mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed font-light">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Node */}
                      <div className="w-full md:w-2/12 flex justify-center mb-4 md:mb-0">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-4 h-4 bg-primary rounded-full shadow-lg relative z-10"
                          style={{
                            boxShadow: "0 0 20px rgba(212,175,55,0.6)",
                          }}
                        >
                          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                        </motion.div>
                      </div>

                      {/* Image */}
                      <div className="w-full md:w-5/12 md:pl-8">
                        <motion.div
                          whileHover={{ scale: 1.005 }}
                          className="rounded-2xl shadow-lg overflow-hidden h-80 md:h-96 w-48 md:w-60 relative mx-auto"
                        >
                          <Image
                            src={event.imageUrl}
                            alt={event.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 600px) 80vw, 40vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 text-white text-xs font-semibold drop-shadow-lg">
                            {event.title}
                          </div>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image */}
                      <div className="w-full md:w-5/12 md:pr-8">
                        <motion.div
                          whileHover={{ scale: 1.005 }}
                          className="rounded-2xl shadow-lg overflow-hidden h-80 md:h-96 w-48 md:w-60 relative mx-auto"
                        >
                          <Image
                            src={event.imageUrl}
                            alt={event.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 600px) 80vw, 40vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 text-white text-xs font-semibold drop-shadow-lg">
                            {event.title}
                          </div>
                        </motion.div>
                      </div>

                      {/* Timeline Node */}
                      <div className="w-full md:w-2/12 flex justify-center mb-4 md:mb-0">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-4 h-4 bg-primary rounded-full shadow-lg relative z-10"
                          style={{
                            boxShadow: "0 0 20px rgba(212,175,55,0.6)",
                          }}
                        >
                          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="w-full md:w-5/12 md:pl-8 mt-4 md:mt-0">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/10 hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center gap-3 mb-3">
                            <Calendar size={16} className="text-primary" />
                            <span className="subheading-standard text-sm text-primary font-semibold uppercase tracking-wide">
                              {event.year}
                            </span>
                          </div>
                          <h3 className="heading-standard text-xl mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed font-light">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Heart
            size={24}
            className="text-primary mx-auto mt-10 mb-4"
            fill="currentColor"
          />
          <p className="text-foreground/80 leading-relaxed font-light">
            {guestName
              ? `Dear ${guestName}, thank you for being part of our beautiful story.`
              : "Thank you for being part of our beautiful story."}
          </p>
        </motion.div>
      </div>
      
    </section>
  );
}
