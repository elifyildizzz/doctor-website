"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="doktorumuz" className="relative w-full py-8 md:min-h-screen md:py-0">
      {/* BACKGROUND – HORIZONTAL SPLIT */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-[#1d5059]" />
        <div className="h-1/2 bg-[#f8f9fa]" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex max-w-7xl items-center px-4 sm:px-6 md:min-h-screen">
        <div className="grid w-full grid-cols-[1.1fr_1fr] items-center gap-2 sm:grid-cols-2 sm:gap-5 md:gap-10 lg:gap-20">

          {/* LEFT – BIG DOCTOR IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <Image
              src="/doctor2.png"
              alt={t.about.name}
              width={1400}
              height={1600}
              priority
              className="h-auto w-[138%] max-w-none object-cover sm:w-full sm:max-w-[300px] md:h-[70vh] md:max-w-none lg:h-[82vh]"
            />
          </motion.div>

          {/* RIGHT – TITLE + CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-lg font-semibold leading-tight text-white sm:text-2xl md:text-3xl">
              {t.about.name}
            </h2>

            <p className="mt-1 text-xs font-medium text-white/90 sm:text-base md:mt-3 md:text-lg">
              {t.about.role}
            </p>

            <div className="mt-3 w-full max-w-xl rounded-2xl bg-white p-3 shadow-2xl sm:p-4 md:mt-8 md:p-8">
              <div className="space-y-2 text-[11px] leading-4 text-[#464747] sm:text-xs sm:leading-5 md:space-y-4 md:text-base md:leading-6" style={{ fontFamily: 'Lumios Marker, sans-serif' }}>
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p>{t.about.p4}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
