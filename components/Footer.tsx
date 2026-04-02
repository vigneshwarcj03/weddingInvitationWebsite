"use client";

import { motion } from "framer-motion";
import { Heart, Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-14 sm:py-20 md:py-24 px-5 sm:px-6 overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12 text-center items-center">
          {/* Contact */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 w-full"
            variants={itemVariants}
          >
            <h3 className="text-xl md:text-2xl font-cinzel text-primary">
              Contact Us
            </h3>

            <div className="space-y-4 text-muted-foreground w-full max-w-xs mx-auto">
              <div className="flex items-start justify-center gap-2 max-w-[260px] mx-auto text-left">
                <Phone className="w-4 h-4 mt-[3px] shrink-0" />
                <a
                  href="https://wa.me/918608553151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-wedding-gold transition-colors text-sm md:text-base"
                >
                  +91 8608553151
                </a>
              </div>

              <div className="flex items-start justify-center gap-2 max-w-[260px] mx-auto text-left">
                <Mail className="w-4 h-4 mt-[3px] shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=cjfrontenddev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-wedding-gold transition-colors text-sm md:text-base break-all leading-snug"
                >
                  cjfrontenddev@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 w-full"
            variants={itemVariants}
          >
            <h3 className="text-xl md:text-2xl font-cinzel text-primary">
              Quick Links
            </h3>

            <div className="space-y-2 text-muted-foreground font-light flex flex-col items-center">
              <p className="hover:text-primary transition cursor-pointer">
                Events
              </p>
              <p className="hover:text-primary transition cursor-pointer">
                Gallery
              </p>
              <p className="hover:text-primary transition cursor-pointer">
                RSVP
              </p>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 w-full"
            variants={itemVariants}
          >
            <h3 className="text-xl md:text-2xl font-cinzel text-primary">
              Share Your Love
            </h3>

            <div className="flex justify-center items-center gap-5 sm:gap-6 text-xl flex-wrap">
              <a
                href="https://instagram.com/cj_modern_wedding_invites"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition"
              >
                <FaYoutube />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
          variants={itemVariants}
        />

        {/* Bottom */}
        <motion.div
          className="text-center space-y-4 px-4 sm:px-0"
          variants={itemVariants}
        >
          <div className="flex justify-center items-center gap-2 text-foreground">
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            <p className="font-light">Thank you for celebrating with us</p>
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Karthik & Shakti. All moments are precious.
          </p>

          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            "And of His signs is that He created for you mates from among
            yourselves..."
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
