"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-96px)] overflow-hidden">
      {/* Background image (cover) */}
      <Image
        src="/arka_plan.png"
        alt=""
        fill
        priority
        className="object-cover object-center scale-125"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl min-h-[calc(100vh-96px)] grid items-center gap-10 px-6 md:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-3xl font-bold text-[#464747] md:text-4xl">
            Uzm. Dr. Mümtaz Aktaş
          </h1>

          <p className="mt-3 text-xl font-semibold text-[#3d636d]">
            Çocuk Sağlığı ve Hastalıkları Uzmanı
          </p>

          <p className="mt-4 text-lg leading-8 text-[#1F2937]">
            Bebek, çocuk ve ergen sağlığında tanı, takip ve tedavi süreçlerinde
            bilimsel ve güvenilir sağlık hizmeti sunmaktadır.
          </p>

          <div className="mt-8">
            <button className="rounded-full bg-[#3d636d] px-7 py-3 text-sm font-semibold text-white hover:bg-[#345459]">
              İletişime Geç
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end items-end"
        >
          <Image
            src="/doctor.png"
            alt="Uzm. Dr. Mümtaz Aktaş"
            width={900}
            height={1100}
            priority
            className="w-[900px] md:w-[1000px] h-[600px] md:h-[700px] object-cover"
          />
        </motion.div>
      </div>
      
      {/* Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="#f8f9fa"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-32 md:h-40"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48L48 53.3C96 59 192 69 288 74.7C384 80 480 80 576 74.7C672 69 768 59 864 58.7C960 59 1056 69 1152 74.7C1248 80 1344 80 1392 74.7L1440 69.3V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V48Z"
            fill="#f8f9fa"
          />
        </svg>
      </div>
    </section>
  );
}
