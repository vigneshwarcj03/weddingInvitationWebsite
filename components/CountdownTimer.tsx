"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  target?: string | number | Date;
}

export default function CountdownTimer({
  target = "2026-05-15T17:00:00+05:30",
}: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  useEffect(() => {
    const targetDate = new Date(target).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(targetDate - now, 0);

      const secondsTotal = Math.floor(diff / 1000);

      const days = Math.floor(secondsTotal / (60 * 60 * 24));
      const hours = Math.floor((secondsTotal / (60 * 60)) % 24);
      const minutes = Math.floor((secondsTotal / 60) % 60);
      const seconds = secondsTotal % 60;

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const RollingSeconds = ({ value }: { value: number }) => {
    const numbers = Array.from({ length: 60 }, (_, i) =>
      String(i).padStart(2, "0"),
    );

    return (
      <div className="relative h-10 overflow-hidden">
        <motion.div
          animate={{ y: -value * 40 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {numbers.map((num, index) => (
            <div
              key={index}
              className="h-10 flex items-center justify-center text-2xl md:text-3xl font-bold font-cinzel text-white"
            >
              {num}
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  const TimeUnit = ({ value, label }: { value: number; label: string }) => {
    const isSeconds = label === "Seconds";

    return (
      <div className="flex flex-col items-center">
        {isSeconds ? (
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformPerspective: 900,
            }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-[#660033] border-2 border-[#D4AF37] rounded-full w-24 h-24 flex items-center justify-center shadow-xl overflow-hidden"
          >
            <RollingSeconds value={value} />
          </motion.div>
        ) : (
          <div className="bg-[#660033] border-2 border-[#D4AF37] rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
            <span className="text-2xl md:text-3xl font-bold font-cinzel text-white">
              {String(value).padStart(2, "0")}
            </span>
          </div>
        )}

        <span className="text-xs md:text-sm uppercase tracking-widest text-[#D4AF37] mt-3 font-cinzel font-semibold">
          {label}
        </span>
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-background" onMouseMove={handleMouseMove}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-cinzel text-primary mb-4">
            The Wedding
          </h2>

          <p className="text-lg text-foreground tracking-wide">
            15th May, 2026 | 5:00 PM IST
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>

        {/* Timer */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <TimeUnit value={timeRemaining.days} label="Days" />
          <TimeUnit value={timeRemaining.hours} label="Hours" />
          <TimeUnit value={timeRemaining.minutes} label="Minutes" />
          <TimeUnit value={timeRemaining.seconds} label="Seconds" />
        </div>

        {/* Message */}
        <div className="text-center mt-12">
          <p className="text-lg md:text-xl text-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Join us for a day filled with joy, love, blessings, and
            unforgettable moments
          </p>
        </div>
      </div>
    </section>
  );
}
