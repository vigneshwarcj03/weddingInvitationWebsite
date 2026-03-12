"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const unlockAudio = async () => {
      const audio = audioRef.current;
      if (!audio) return;

      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked until user interaction");
      }

      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };

    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);
    window.addEventListener("keydown", unlockAudio);

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

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
      console.log("Play failed:", err);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" playsInline>
        <source src="/music/wedding-theme.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Button */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">
        <button
          onClick={toggleMusic}
          className="relative w-14 h-14 rounded-full
          bg-white/10 backdrop-blur-lg
          border border-yellow-400/50
          shadow-[0_0_25px_rgba(212,175,55,0.6)]
          hover:shadow-[0_0_40px_rgba(212,175,55,0.9)]
          transition-transform duration-500 transform-gpu
          hover:-translate-y-1 hover:scale-110
          flex items-center justify-center"
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
