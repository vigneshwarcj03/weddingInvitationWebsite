"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Particles from "@tsparticles/react";
import { Heart, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  message: string;
  emoji: string;
}

const emojis = ["😍", "❤️", "👍", "🍻"];

export default function GuestConfirmation() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
    emoji: "😍",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fireConfetti = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    const colors = ["#D4AF37", "#ffffff", "#ff69b4"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name.trim()) return;

    setLoading(true);

    await new Promise((r) => setTimeout(r, 800));

    const existing = JSON.parse(localStorage.getItem("weddingRSVPs") || "[]");

    existing.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });

    localStorage.setItem("weddingRSVPs", JSON.stringify(existing));

    setLoading(false);
    setSubmitted(true);
    fireConfetti();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Fireworks */}
      {submitted && (
        <Particles
          className="absolute inset-0 z-0"
          options={{
            particles: {
              number: { value: 0 },
              size: { value: 3 },
              move: { enable: true, speed: 6, outModes: "destroy" },
            },
            emitters: {
              direction: "top",
              rate: { delay: 0.2, quantity: 5 },
              position: { x: 50, y: 100 },
            },
          }}
        />
      )}

      <div className="w-full max-w-sm sm:max-w-md mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="heading-standard text-4xl md:text-5xl tracking-wide mb-2">
            Leave a Message
          </h2>

          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          <p className="text-gray-500 text-sm mt-10 sm:text-base">
            Share your wishes and blessings ✧
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <div className="bg-gradient-to-br from-[#D4AF37]/40 to-transparent p-[1px] rounded-2xl">
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="bg-[#660033] text-white backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.2)] space-y-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
              >
                {/* Name */}
                <label className="block text-l mb-1 text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="enter your name..."
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border border-[#D4AF37] bg-transparent text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />

                {/* Emoji */}
                <div className="flex justify-center gap-4">
                  {emojis.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, emoji }))}
                      className={`text-2xl sm:text-3xl p-2 transition-all hover:scale-125 hover:drop-shadow-[0_0_6px_#D4AF37] ${
                        formData.emoji === emoji
                          ? "scale-125 drop-shadow-[0_0_6px_#D4AF37]"
                          : ""
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>

                {/* Message */}
                <label className="block text-l mb-1 text-white">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="write your wishes here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37] bg-transparent text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  className="w-full py-3 bg-white text-[#660033] font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  {loading ? "Sending..." : "Send Wishes"}
                </motion.button>
              </motion.form>
            </div>
          ) : (
            <motion.div
              key="success"
              className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl text-center shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />

              <h3 className="text-xl sm:text-2xl font-semibold">
                Thank you, {formData.name}
              </h3>

              <p className="text-muted-foreground mt-2">
                Your wishes have been received ✨
              </p>

              <p className="text-4xl mt-4">{formData.emoji}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-10">
          <Heart className="mx-auto text-red-500" fill="currentColor" />
        </div>
      </div>
    </section>
  );
}
