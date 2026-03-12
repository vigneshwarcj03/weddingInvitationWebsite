"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function WeddingDetails() {
  return (
    <section className="py-24 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Gold framed card container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-light-cream border-2 border-primary rounded-xl shadow-xl p-8 md:p-12"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-cinzel text-primary mb-4">
              Wedding Celebrations
            </h2>
          </motion.div>

          {/* Decorative divider */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div
                className="w-3 h-3 rounded-full bg-primary"
                style={{ boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)" }}
              />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary" />
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
            {/* Reception */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-soft-gold/10 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />

              <div className="relative bg-card border-2 border-primary rounded-2xl overflow-hidden shadow-royal h-full flex flex-col group-hover:shadow-premium transition duration-300">
                {/* Image container */}
                <div className="relative h-[550px] overflow-hidden">
                  <Image
                    src="/Reception.png"
                    alt="Reception"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* Gold overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 justify-between p-8">
                  {/* Celebration icon and title */}
                  <div className="text-center mb-6">
                    <h4 className="text-3xl font-display text-primary font-bold">
                      Reception
                    </h4>
                  </div>

                  {/* Divider */}
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />

                  {/* Event details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 text-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-lg font-light">May 15th, 2026</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-lg font-light">
                        7:00 PM Onwards
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <div className="inline-flex items-center gap-3 bg-[#660033] text-white px-4 py-2 rounded-md">
                        <MapPin className="w-5 h-5 text-white" />
                        <span className="font-light">
                          M Weddings & Conventions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Wedding Ceremony */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="h-full group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-soft-gold/10 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />

              <div className="relative bg-card border-2 border-primary rounded-2xl overflow-hidden shadow-royal h-full flex flex-col group-hover:shadow-premium transition duration-300">
                {/* Image container */}
                <div className="relative h-[550px] overflow-hidden">
                  <Image
                    src="/Wedding Ceremony.png"
                    alt="Wedding Ceremony"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* Gold overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 justify-between p-8">
                  {/* Temple icon and title */}
                  <div className="text-center mb-6">
                    <h4 className="text-3xl font-display text-primary font-bold">
                      Wedding Ceremony
                    </h4>
                  </div>

                  {/* Divider */}
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />

                  {/* Event details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 text-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-lg font-light">May 16th, 2026</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-lg font-light">10:00 AM</span>
                    </div>
                    <div className="flex justify-center">
                      <div className="inline-flex items-center gap-3 bg-[#660033] text-white px-4 py-2 rounded-md">
                        <MapPin className="w-5 h-5 text-white" />
                        <span className="font-light">
                          M Weddings & Conventions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative divider */}
          <div className="flex justify-center my-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-primary" />
            </div>
          </div>

          {/* Venue Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border-2 border-primary rounded-2xl overflow-hidden shadow-lg mb-16 bg-light-cream"
          >
            {/* Map */}
            <div className="w-full h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31092.214125784063!2d80.151701!3d13.0657668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263d904ccafe5%3A0xcd60636ce77d46e7!2sM%20Weddings%20%26%20Conventions!5e0!3m2!1sen!2sin!4v1773132064992!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
                style={{ filter: "hue-rotate(180deg) invert(100%)" }}
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Decorative divider */}
          <div className="flex justify-center my-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-primary" />
            </div>
          </div>

          {/* Invitation Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-[#660033] font-light leading-relaxed mt-4">
              ✧✧✧
            </p>
            <p className="text-lg md:text-xl text-foreground font-light leading-relaxed">
              With joyful hearts and warm blessings, we invite you to share in
              our happiness as we celebrate this sacred union. Your presence and
              love will make our celebration truly memorable.
            </p>
            <p className="text-lg md:text-xl text-[#660033] font-light leading-relaxed mt-4">
              ✧✧✧
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
