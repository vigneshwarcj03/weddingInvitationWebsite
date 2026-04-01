"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GALLERY_SECTIONS = [
  { id: "engagement", name: "Engagement" },
  { id: "prewedding", name: "Pre-Wedding" },
  { id: "wedding", name: "Wedding" },
  { id: "family", name: "Family" },
];

const galleryImages = {
  engagement: [
    {
      id: 1,
      title: "The Proposal",
      alt: "Engagement photo 1",
      src: "/engagement1.jfif",
    },
    {
      id: 2,
      title: "Golden Hour",
      alt: "Engagement photo 2",
      src: "/engagement2.jfif",
    },
    {
      id: 3,
      title: "Together",
      alt: "Engagement photo 3",
      src: "/engagement3.jfif",
    },
  ],
  prewedding: [
    {
      id: 4,
      title: "Pre-Wedding Shoot",
      alt: "Pre-wedding photo 1",
      src: "/pre1.jfif",
    },
    {
      id: 5,
      title: "Candid Moment",
      alt: "Pre-wedding photo 2",
      src: "/pre2.jfif",
    },
    {
      id: 6,
      title: "Sunset Love",
      alt: "Pre-wedding photo 3",
      src: "/pre3.jfif",
    },
  ],
  wedding: [
    {
      id: 7,
      title: "Wedding Ritual",
      alt: "Wedding photo 1",
      src: "/wedding1.jfif",
    },
    {
      id: 8,
      title: "Bride & Groom",
      alt: "Wedding photo 2",
      src: "/wedding2.jfif",
    },
    {
      id: 9,
      title: "Sacred Vows",
      alt: "Wedding photo 3",
      src: "/wedding3.jfif",
    },
  ],
  family: [
    {
      id: 10,
      title: "Family Portrait",
      alt: "Family photo 1",
      src: "/fam1.jfif",
    },
    {
      id: 11,
      title: "Together Forever",
      alt: "Family photo 2",
      src: "/fam2.jfif",
    },
    {
      id: 12,
      title: "Joy and Laughter",
      alt: "Family photo 3",
      src: "/fam3.jfif",
    },
  ],
};

export default function WeddingGallery() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages.engagement)[0] | null
  >(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("engagement");

  const images = galleryImages[activeSection as keyof typeof galleryImages];

  const nextImage = () => {
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
    setSelectedImage(images[next]);
  };

  const prevImage = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prev);
    setSelectedImage(images[prev]);
  };

  useEffect(() => {
    if (!selectedImage) return;
    const interval = setInterval(nextImage, 3500);
    return () => clearInterval(interval);
  }, [selectedImage, images]);

  return (
    <section className="relative min-h-screen px-4 py-24 overflow-hidden">
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="heading-standard text-4xl md:text-5xl tracking-wide mb-2">
            Our Wedding Gallery
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {GALLERY_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-2 rounded-full font-medium tracking-wide transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-yellow-500 text-white shadow-md"
                  : "bg-white/60 text-gray-700 hover:bg-yellow-100"
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {images.map((image, idx) => (
              <motion.div
                key={image.id}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentIndex(idx);
                }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-64 md:h-120 object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* caption */}
                <div className="absolute bottom-3 left-3 text-white text-sm bg-black/30 px-3 py-1 rounded-md">
                  <p className="font-semibold">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute -top-10 right-0 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-7 h-7" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl"
              >
                ←
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl"
              >
                →
              </button>

              <div className="flex flex-col items-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="rounded-lg max-h-[80vh] object-contain"
                />
                <p className="text-white mt-4 text-lg">{selectedImage.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
