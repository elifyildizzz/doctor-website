"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Clinic() {
  const { t } = useLanguage();
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
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-12 md:py-20"
      style={{ backgroundImage: "url('/arka.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h2 className="text-2xl font-semibold leading-tight text-[#464747] sm:text-3xl md:text-3xl">
              {t.clinic.title}
            </h2>

            <p className="mt-2 text-base font-medium text-[#ffffff] sm:text-lg md:mt-3 md:text-lg">
              {t.clinic.location}
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#464747]/80 sm:text-base md:mt-6 md:text-base md:leading-7">
              {t.clinic.desc}
            </p>

            <div className="mt-5 space-y-2 text-sm text-[#464747]/80 sm:text-base md:mt-6">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {t.clinic.addressLine1}
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {t.clinic.addressLine2}
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
              <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
                <Image
                  src={images[active]}
                  alt={t.clinic.photoAlt.replace("{n}", String(active + 1))}
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
                aria-label={t.clinic.prevAria}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-2.5 py-1.5 shadow hover:bg-white md:left-3 md:px-3 md:py-2"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={t.clinic.nextAria}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-2.5 py-1.5 shadow hover:bg-white md:right-3 md:px-3 md:py-2"
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
                    aria-label={t.clinic.photoAria.replace("{n}", String(idx + 1))}
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
