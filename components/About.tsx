"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="doktorumuz" className="relative w-full py-10 md:min-h-screen md:py-0">
      {/* BACKGROUND – HORIZONTAL SPLIT */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-[#1d5059]" />
        <div className="h-1/2 bg-[#f8f9fa]" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex max-w-7xl items-center px-4 sm:px-6 md:min-h-screen">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">

          {/* LEFT – BIG DOCTOR IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start"
          >
            <Image
              src="/doctor2.png"
              alt={t.about.name}
              width={1400}
              height={1600}
              priority
              className="h-auto w-full max-w-[360px] object-cover sm:max-w-[460px] md:h-[85vh] md:max-w-none lg:h-[100vh]"
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
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
              {t.about.name}
            </h2>

            <p className="mt-2 text-base font-medium text-white/90 sm:text-lg md:mt-3 md:text-xl">
              {t.about.role}
            </p>

            <div className="mt-5 w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl md:mt-8 md:p-8">
              <div className="space-y-3 text-sm leading-6 text-[#464747] md:space-y-4 md:text-base" style={{ fontFamily: 'Lumios Marker, sans-serif' }}>
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
