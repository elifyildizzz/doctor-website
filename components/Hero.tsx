"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[calc(100dvh-80px)] min-h-[calc(100svh-80px)] overflow-hidden md:h-auto md:min-h-[calc(100vh-96px)]">
      <Image
        src="/dikey_arka.png"
        alt=""
        fill
        priority
        className="scale-[1.22] object-cover object-[center_42%] md:hidden"
      />
      <Image
        src="/arka_plan.png"
        alt=""
        fill
        priority
        className="hidden object-cover object-center md:block md:scale-125"
      />

      <div className="absolute inset-0 bg-transparent md:bg-white/40" />
      <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-[#5b7d88]/50 to-transparent md:hidden" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-4 pb-14 pt-8 sm:px-6 md:hidden">
        <div className="mt-1 md:hidden">
          <h1 className="text-2xl font-bold leading-tight text-[#464747]">{t.hero.name}</h1>
          <p className="mt-1 text-base font-semibold text-[#3d636d]">{t.hero.role}</p>
        </div>

        <div className="mt-3 grid grid-cols-[1fr_1.08fr] items-center gap-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex max-w-none flex-col justify-center pr-1"
          >
            <p className="text-sm leading-6 text-[#1F2937]">
              {t.hero.desc}
            </p>

            <div className="mt-4">
              <a
                href="#iletisim"
                className="inline-block rounded-full bg-[#3d636d] px-4 py-2 text-xs font-semibold text-white hover:bg-[#345459]"
              >
                {t.hero.cta}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="-mt-1 flex items-center justify-end"
          >
            <Image
              src="/doctor.png"
              alt={t.hero.name}
              width={900}
              height={1100}
              priority
              className="h-auto w-[160%] max-w-none -mr-10 object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto hidden max-w-7xl px-6 md:grid md:min-h-[calc(100vh-96px)] md:grid-cols-2 md:items-center md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-3xl font-bold leading-tight text-[#464747] md:text-[2rem]">
            {t.hero.name}
          </h1>

          <p className="mt-2 text-lg font-semibold text-[#3d636d] md:text-lg">
            {t.hero.role}
          </p>

          <p className="mt-4 text-base leading-7 text-[#1F2937] md:text-base md:leading-7">
            {t.hero.desc}
          </p>

          <div className="mt-8">
            <a
              href="#iletisim"
              className="inline-block rounded-full bg-[#3d636d] px-7 py-3 text-sm font-semibold text-white hover:bg-[#345459]"
            >
              {t.hero.cta}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-end"
        >
          <Image
            src="/doctor.png"
            alt={t.hero.name}
            width={900}
            height={1100}
            priority
            className="h-auto w-full max-w-[560px] object-contain lg:max-w-[700px]"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="#f8f9fa"
          xmlns="http://www.w3.org/2000/svg"
          className="h-28 w-full md:h-40"
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
