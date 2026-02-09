"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function Clinic() {
  const images = useMemo(
    () => [
      "/klinik2.png",
      "/klinik3.png",
      "/klinik5.png",
      "/klinik6.png",
      "/klinik7.png",
      "/klinik8.png",
    ],
    []
  );

  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <section
      id="klinigimiz"
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 md:py-20 overflow-hidden"
      style={{ backgroundImage: "url('/arka.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h2 className="text-4xl font-semibold text-[#464747] leading-tight">
              Kliniğimiz
            </h2>

            <p className="mt-3 text-lg font-medium text-[#ffffff] md:text-xl">
              Antalya – Kemer
            </p>

            <p className="mt-6 max-w-md text-base leading-7 text-[#464747]/80 md:text-lg">
              Kliniğimizden görüntüler. Konforlu bekleme alanı ve çocuk dostu
              ortam.
            </p>

            <div className="mt-6 space-y-2 text-base text-[#464747]/80">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Merkez Mahallesi, Atatürk Cad. No: 45
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Kemer / Antalya
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="w-full"
          >
            {/* big image */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={images[active]}
                  alt={`Klinik fotoğraf ${active + 1}`}
                  fill
                  priority={active === 0}
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
              </div>

              {/* arrows */}
              <button
                type="button"
                onClick={prev}
                aria-label="Önceki fotoğraf"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow hover:bg-white"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Sonraki fotoğraf"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow hover:bg-white"
              >
                ›
              </button>
            </div>

            {/* thumbs */}
            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
              {images.map((src, idx) => {
                const isActive = idx === active;
                return (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={[
                      "relative overflow-hidden rounded-xl bg-white shadow-sm transition",
                      "focus:outline-none focus:ring-2 focus:ring-[#3d636d]/40",
                      isActive ? "ring-2 ring-[#3d636d]" : "hover:shadow-md",
                    ].join(" ")}
                    aria-label={`Fotoğraf ${idx + 1}`}
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
