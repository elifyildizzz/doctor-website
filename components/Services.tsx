"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type Service = {
  key:
    | "healthyChild"
    | "prematureBaby"
    | "vaccination"
    | "infectionTests"
    | "bloodLab"
    | "breastfeeding";
  icon: string;
  href: string;
};

export default function Services() {
  const { t } = useLanguage();

  const services: Service[] = [
    { key: "healthyChild", icon: "/icons/baby.svg", href: "/services/healthy-child-monitoring" },
    { key: "prematureBaby", icon: "/icons/feeder.svg", href: "/services/premature-baby-monitoring" },
    { key: "vaccination", icon: "/icons/needle.svg", href: "/services/vaccination-tracking" },
    { key: "infectionTests", icon: "/icons/tube.svg", href: "/services/infection-tests" },
    { key: "bloodLab", icon: "/icons/drop.svg", href: "/services/blood-collection-laboratory" },
    { key: "breastfeeding", icon: "/icons/mom.svg", href: "/services/breastfeeding-consultation" },
  ];

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

            <button
              onClick={() => {
                window.location.href = "/services";
              }}
              className="mt-6 rounded-full bg-[#3d636d] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#345459] md:mt-8 md:px-7 md:py-3"
            >
              {t.services.seeAll}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          >
            {services.map((s) => {
              const title = t.services.items[s.key].title;

              return (
                <button
                  key={s.key}
                  onClick={() => (window.location.href = s.href)}
                  className="flex h-[200px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3d636d]/40 sm:h-[220px] sm:px-5 md:h-[220px] lg:h-[230px]"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf1f4] sm:mb-5 sm:h-16 sm:w-16">
                    <img src={s.icon} alt="" className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="flex min-h-[3rem] items-center justify-center text-base font-semibold leading-snug text-[#464747] sm:min-h-[3.5rem] sm:text-lg">
                    {title}
                  </h3>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
