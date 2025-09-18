// src/components/Hero.js
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16 bg-white gap-8 min-h-[calc(100vh-80px)]">
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-lg">
        <h1 className="text-5xl md:text-6xl font-bold text-[var(--primary)] leading-tight">
          Kisah Kita <br className="hidden md:block"/>
          Sebuah Awal <br className="hidden md:block"/>
          yang Abadi
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Dari dua hati yang menyatu, kami undang Anda untuk menjadi saksi cinta kami. Bagikan kebahagiaan kami dalam sebuah undangan digital yang berkesan, modern, dan penuh makna.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <button className="px-6 py-3 text-white bg-[var(--secondary)] rounded-full font-semibold hover:bg-[var(--primary)] transition-colors">
            Buat Undanganmu
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative mt-8 lg:mt-0">
        <div className="bg-[var(--primary)] rounded-3xl p-4 md:p-6 w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center">
          <div className="w-full h-full relative overflow-hidden rounded-3xl">
            <div
              className="flex w-full h-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <div key={index} className="flex-shrink-0 w-full h-full relative">
                  <Image
                    src={src}
                    alt={`Digital Wedding Solution ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-3xl object-cover transform translate-x-1/12 -translate-y-1/12 shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}