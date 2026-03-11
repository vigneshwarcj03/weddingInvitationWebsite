"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Flower {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FallingFlowers() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const newFlowers = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
      size: 20 + Math.random() * 20,
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          initial={{ y: -100, opacity: 0, rotate: 0 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
            opacity: [0, 0.8, 0.8, 0],
            rotate: 360,
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${flower.left}%` }}
          className="absolute"
        >
          <motion.div
            animate={{ x: [0, 20, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="drop-shadow-lg"
            style={{
              fontSize: `${flower.size}px`,
              filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))",
              textShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
            }}
          >
            {["🌸", "❤️", "💐", "🏵️"][Math.floor(Math.random() * 4)]}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
