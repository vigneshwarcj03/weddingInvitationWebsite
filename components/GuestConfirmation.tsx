"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  emoji: string;
  message: string;
}

export default function QuickGuestConfirmation() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const WHATSAPP_NUMBER = "+918608553151";

  const onSubmit = (data: FormData) => {
    setSending(true);

    const text = `Guest Confirmation\nName: ${data.name}\nReaction: ${data.emoji || "N/A"}\nMessage: ${data.message || "N/A"}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    setSuccess(true);

    setTimeout(() => {
      reset();
      setSending(false);
      router.push(`/celebration?name=${encodeURIComponent(data.name)}`);
    }, 1800);
  };

  const emojis = ["😍", "👍", "❤️", "💕"];

  return (
    <section className="py-20 px-6 bg-background relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto relative z-10"
      >
        {/* Floating Golden Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-60"
              initial={{
                x: Math.random() * 800,
                y: Math.random() * 600,
                opacity: 0,
              }}
              animate={{
                y: [null, -40, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        {/* Gold framed card container */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 overflow-hidden"
        >
          <div className="absolute inset-0 rounded-3xl border border-[#D4AF37]/30 pointer-events-none" />

          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D4AF37]/20 via-transparent to-[#B8962E]/20 blur-xl opacity-60 pointer-events-none" />

          {/* Shimmer overlay */}
          <div className="absolute inset-0 shimmer opacity-5 rounded-xl pointer-events-none" />

          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-lg rounded-3xl z-50"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-center"
              >
                <div className="text-5xl mb-3">🎉</div>
                <p className="text-xl font-semibold text-[#A67C00]">
                  Blessings Sent!
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Top decorative element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-8 relative z-10"
          >
            <div className="text-4xl mb-4">✧</div>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-cinzel text-center text-[#A67C00] mb-2 tracking-wider"
          >
            Confirm Your
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-cinzel text-center text-[#A67C00] mb-8 tracking-wider"
          >
            Presence
          </motion.h3>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <span className="text-[#D4AF37] text-lg">✦</span>
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 relative z-10"
          >
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-cinzel text-[#7A5C20] mb-3 uppercase tracking-widest">
                Your Name
              </label>
              <motion.input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                whileFocus={{ scale: 1.02 }}
                className="w-full px-5 py-3 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition duration-300 text-lg"
                required
              />
            </motion.div>

            {/* Emoji Selector - Blessings */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-cinzel text-[#7A5C20] mb-4 uppercase tracking-widest text-center">
                Send Your Blessings
              </label>
              <div className="flex justify-center gap-4">
                {emojis.map((emoji) => (
                  <motion.label
                    key={emoji}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer relative group"
                  >
                    <input
                      type="radio"
                      {...register("emoji")}
                      value={emoji}
                      className="hidden peer"
                    />

                    <motion.span
                      whileHover={{
                        filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))",
                      }}
                      className="block p-3 rounded-full transition-all duration-200 text-3xl border-2 border-transparent peer-checked:border-[#D4AF37] peer-checked:bg-[#D4AF37]/20 peer-checked:scale-110 hover:border-primary/50 group-hover:drop-shadow-lg"
                    >
                      {emoji}
                    </motion.span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-cinzel text-[#7A5C20] mb-3 uppercase tracking-widest">
                Your Message (Optional)
              </label>
              <motion.textarea
                {...register("message")}
                placeholder="Share your blessings and wishes..."
                rows={3}
                whileFocus={{ scale: 1.02 }}
                className="w-full px-5 py-3 rounded-xl bg-[#FFFDF7] border border-[#D4AF37]/50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] resize-none transition duration-300"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(102,0,51,0.8)",
              }}
              whileTap={{ scale: 0.96 }}
              animate={{
                boxShadow: [
                  "0 0 8px rgba(102,0,51,0.4)",
                  "0 0 20px rgba(212,175,55,0.6)",
                  "0 0 8px rgba(102,0,51,0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              type="submit"
              disabled={sending}
              className="w-full py-4 bg-gradient-to-r from-[#660033] to-[#7a003d] text-white rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg tracking-wider uppercase mt-8 transition-all duration-300"
            >
              <Send className="w-5 h-5 text-white" />
              {sending ? "Sending..." : "Confirm Attendance"}
            </motion.button>
          </form>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8 relative z-10"
          >
            <p className="text-sm text-[#8B6A2B] font-light">✧</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
