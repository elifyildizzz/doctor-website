"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type InfoCard = {
  label: string;
  value: string;
  href?: string;
};

export default function Contact() {
  const { t } = useLanguage();

  const cards: InfoCard[] = [
    {
      label: t.contact.phone,
      value: "+90 5xx xxx xx xx",
      href: "tel:+905XXXXXXXXX",
    },
    {
      label: t.contact.email,
      value: "info@ornekklinik.com",
      href: "mailto:info@ornekklinik.com",
    },
    {
      label: t.contact.address,
      value: "Antalya / Kemer (Mahalle, Sokak, No: …)",
    },
  ];

  return (
    <section
      id="iletisim"
      className="relative w-full min-h-[calc(100vh-96px)] bg-[#f8f9fa]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 min-h-[calc(100vh-96px)] grid items-center">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl font-semibold text-[#464747] leading-tight">
              {t.contact.title}
            </h2>
            <p className="mt-3 text-lg font-medium text-[#464747]/90">
              {t.contact.subtitle}
            </p>

            <div className="mt-8 grid gap-4 sm:gap-5">
              {cards.map((c) => {
                const CardInner = (
                  <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-[#3d636d]">
                      {c.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#464747]">
                      {c.value}
                    </p>
                  </div>
                );

                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="block transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3d636d]/30 rounded-2xl"
                  >
                    {CardInner}
                  </a>
                ) : (
                  <div key={c.label}>{CardInner}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="w-full"
          >
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <div className="relative h-[420px] w-full md:h-[520px]">
                <iframe
                  title={t.contact.mapTitle}
                  src="https://www.google.com/maps?q=Kemer%20Antalya&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
