"use client";

import { useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // Toggle audio on/off
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (err) {
      console.log("Audio play failed:", err);
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} loop preload="auto" playsInline>
        <source src="/music/wedding-theme.mp3" type="audio/mpeg" />
      </audio>

      {/* Music toggle button */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">
        <button
          onClick={toggleMusic}
          className="
            relative w-14 h-14 rounded-full
            bg-white/10 backdrop-blur-lg
            border border-yellow-400/50
            shadow-[0_0_25px_rgba(212,175,55,0.6)]
            hover:shadow-[0_0_40px_rgba(212,175,55,0.9)]
            transition-transform duration-500 transform-gpu
            hover:-translate-y-1 hover:scale-110
            flex items-center justify-center
          "
        >
          <span
            className={`relative text-2xl text-yellow-400 ${
              playing ? "animate-spin-slow" : ""
            }`}
          >
            {playing ? "💖" : "🔇"}
          </span>
        </button>
      </div>
    </>
  );
}
