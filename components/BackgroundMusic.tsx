"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // Auto-play after first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      const audio = audioRef.current;
      if (audio && audio.paused) {
        audio.play().catch(() => {});
        setPlaying(true);
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
    });
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/wedding-theme.mp3" type="audio/mpeg" />
      </audio>

      {/* Glowing Lotus Button */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">
        <button
          onClick={toggleMusic}
          className="relative w-15 h-15 rounded-full
          bg-white/10 backdrop-blur-lg
          border border-yellow-400/50
          shadow-[0_0_25px_rgba(212,175,55,0.6)]
          hover:shadow-[0_0_40px_rgba(212,175,55,0.9)]
          transition-transform duration-500 transform-gpu
          hover:-translate-y-1 hover:scale-110
          flex items-center justify-center"
        >
          {/* Lotus petals glow */}
          <span
            className={`absolute w-20 h-20 rounded-full bg-yellow-400/20
            animate-ping-slow opacity-80`}
          />

          {/* Soundwave rings */}
          <span
            className={`absolute w-28 h-28 rounded-full border-2 border-yellow-300/50
            animate-ping-slow ${playing ? "" : "opacity-0"}`}
          />
          <span
            className={`absolute w-36 h-36 rounded-full border-2 border-yellow-300/40
            animate-ping-slower ${playing ? "" : "opacity-0"}`}
          />

          {/* Gold ripple effect on click */}
          <span className="absolute w-20 h-20 rounded-full bg-yellow-400/10 animate-ripple" />

          {/* Music icon */}
          <span
            className={`relative text-2xl text-yellow-400 transition-transform duration-700
            ${playing ? "animate-spin-slow" : ""}`}
          >
            {playing ? "💖" : "🔇"}
          </span>
        </button>
      </div>
    </>
  );
}
