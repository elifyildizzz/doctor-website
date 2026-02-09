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
    <section id="hizmetler" className="bg-[#f8f9fa] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl font-semibold text-[#464747] leading-tight">
              {t.services.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#464747]/80">
              {t.services.p1}
            </p>

            <p className="mt-4 text-lg leading-8 text-[#464747]/80">
              {t.services.p2}
            </p>

            <button
              onClick={() => {
                window.location.href = "/services";
              }}
              className="mt-8 rounded-full bg-[#3d636d] px-7 py-3 text-sm font-semibold text-white hover:bg-[#345459]"
            >
              {t.services.seeAll}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => {
              const title = t.services.items[s.key].title;

              return (
                <button
                  key={s.key}
                  onClick={() => (window.location.href = s.href)}
                  className="
                    flex h-[230px] flex-col items-center justify-center
                    rounded-2xl border border-gray-200
                    bg-white px-5
                    text-center
                    shadow-sm transition
                    hover:-translate-y-1 hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-[#3d636d]/40
                  "
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4]">
                    <img src={s.icon} alt="" className="h-7 w-7 object-contain" />
                  </div>

                  <h3 className="min-h-[3.5rem] flex items-center justify-center text-lg font-semibold text-[#464747] leading-snug">
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
