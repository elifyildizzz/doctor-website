"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="hizmetler" className="bg-[#f8f9fa] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-xl"
          >
            <h2 className="text-2xl font-semibold leading-tight text-[#464747] sm:text-3xl md:text-3xl">
              {t.services.title}
            </h2>

            <p className="mt-4 text-base leading-7 text-[#464747]/80 md:mt-5 md:text-base md:leading-7">
              {t.services.p1}
            </p>

            <p className="mt-3 text-base leading-7 text-[#464747]/80 md:mt-4 md:text-base md:leading-7">
              {t.services.p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex h-full min-h-[240px] items-center"
          >
            <div className="w-full rounded-[28px] border border-[#d9e5e8] bg-white p-8 text-center shadow-sm sm:p-10">
              <div className="mx-auto flex w-fit items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3d636d]/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3d636d]/45" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3d636d]/60" />
              </div>

              <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[#464747]/80">
                {t.services.p2}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
