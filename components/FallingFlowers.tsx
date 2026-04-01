"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Flower {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  image: string;
  drift: number;
  rotateStart: number;
  rotateEnd: number;
}

export default function FallingFlowers() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  const petalImages = [
    "/rose-petal.png",
    "/rose-petal-1.png",
    "/rose-petal-2.png",
    "/rose-petal-3.png",
    "/rose-petal-4.png",
    "/rose-petal-5.png",
    "/rose-petal-6.png",
    "/rose-petal-7.png",
  ];

  useEffect(() => {
    const newFlowers = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 6, // varied speeds
      size: 15 + Math.random() * 25,
      image: petalImages[Math.floor(Math.random() * petalImages.length)],
      drift: 30 + Math.random() * 50, // side movement
      rotateStart: Math.random() * 180,
      rotateEnd: Math.random() * 720 - 360,
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          initial={{
            y: -120,
            opacity: 0,
            x: 0,
            rotate: flower.rotateStart,
          }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 120 : 1000,
            x: [0, flower.drift, -flower.drift, 0], // wind sway
            opacity: [0, 1, 1, 0],
            rotate: flower.rotateEnd,
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: `${flower.left}%` }}
          className="absolute"
        >
          <img
            src={flower.image}
            alt="petal"
            style={{
              width: `${flower.size}px`,
              height: `${flower.size}px`,
              objectFit: "contain",
              filter: "drop-shadow(0 0 6px rgba(212, 175, 55, 0.3))",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
