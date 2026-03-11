"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MobileImageSlider() {
  const images = [
    "/journey1.jpg",
    "/journey2.jpg",
    "/journey3.jpg",
    "/journey4.jpg",
    "/journey5.jpg",
    "/journey6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const [shadow, setShadow] = useState("0px 25px 60px rgba(0,0,0,0.25)");

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Mouse tilt, light & shadow for active image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateY(((x - centerX) / centerX) * 10);
    setRotateX(-((y - centerY) / centerY) * 10);

    setLightPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });

    const shadowX = (x - centerX) / 10;
    const shadowY = (y - centerY) / 10;
    setShadow(`${-shadowX}px ${-shadowY + 25}px 60px rgba(0,0,0,0.35)`);
  };

  const resetTilt = () => {
    setRotateX(0);
    setRotateY(0);
    setLightPos({ x: 50, y: 50 });
    setShadow("0px 25px 60px rgba(0,0,0,0.25)");
  };

  return (
    <section className="py-24 px-6 bg-background relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-light-cream  rounded-xl  p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block relative"
            >
              <h2 className="text-4xl md:text-5xl font-cinzel tracking-tight text-primary">
                Our Journey
              </h2>

              {/* modern animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="origin-left mt-3 h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </motion.div>
          </div>

          {/* Carousel */}
          <div
            className="relative w-full max-w-[380px] mx-auto h-[640px] flex items-center justify-center perspective-[1200px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
          >
            {images.map((img, index) => {
              // Calculate position relative to current index, circular
              let position = index - currentIndex;
              if (position < -images.length / 2) position += images.length;
              if (position > images.length / 2) position -= images.length;

              const isActive = position === 0;

              // Transform styles for 3D effect
              const translateX = position * 100; // spread out horizontally
              const scale = isActive ? 1 : 0.75;
              const opacity = Math.abs(position) > 2 ? 0 : 1;
              const blur = isActive ? 0 : 6;
              const brightness = isActive ? 1 : 0.7;
              const rotateY = position * -15;

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: translateX,
                    scale,
                    opacity,
                    rotateY: isActive ? rotateY + rotateY : rotateY,
                    filter: `blur(${blur}px) brightness(${brightness})`,
                    zIndex: isActive ? 10 : 10 - Math.abs(position),
                    boxShadow: isActive
                      ? shadow
                      : "0px 10px 25px rgba(0,0,0,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  className="absolute w-[340px] h-[600px] rounded-2xl overflow-hidden bg-light-cream will-change-transform"
                >
                  <Image
                    src={img}
                    alt="journey image"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                  {/* Glass reflection */}
                  {isActive && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(255,255,255,0.35), transparent 40%)`,
                        mixBlendMode: "overlay",
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
