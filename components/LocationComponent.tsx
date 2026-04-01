"use client";

import { motion } from "framer-motion";

export default function LocationComponent() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Subtle radial background pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="heading-standard text-4xl md:text-5xl tracking-wide mb-2 text-gray-900"
        >
          Wedding Venue
        </motion.h2>

        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

        {/* FIXED TEXT VISIBILITY */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 mt-10 leading-relaxed"
        >
          Join us for a beautifully curated celebration designed with a modern,
          interactive wedding experience. From personalized guest greetings and
          animated moments to a seamless RSVP and gallery, this venue sets the
          stage for an unforgettable day filled with joy, elegance, and
          celebration.
        </motion.p>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-lg mb-4"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5273590106804!2d80.14921567590301!3d13.065729112805899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263d904ccafe5%3A0xcd60636ce77d46e7!2sM%20Weddings%20%26%20Conventions!5e0!3m2!1sen!2sin!4v1774570811588!5m2!1sen!2sin"
              className="w-full h-[300px] md:h-[450px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 mt-10"
        >
          Easily accessible venue with ample space for celebration, gatherings,
          and unforgettable memories.
        </motion.p>
      </div>
    </section>
  );
}
