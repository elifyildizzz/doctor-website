"use client";

import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactAddressByLang } from "@/data/localizedContent";

type InfoCard = {
  label: string;
  value: string;
  href?: string;
};

export default function ContactPage() {
  const { currentLang, t } = useLanguage();

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
      value: contactAddressByLang[currentLang],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="relative w-full bg-[#f8f9fa] md:min-h-[calc(100vh-96px)]">
        <div className="mx-auto grid max-w-7xl items-center px-4 py-12 sm:px-6 md:min-h-[calc(100vh-96px)] md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <h1 className="text-2xl font-semibold leading-tight text-[#464747] sm:text-3xl md:text-4xl">
                {t.contact.title}
              </h1>
              <p className="mt-3 text-base text-[#464747]/90 md:mt-4 md:text-lg">
                {t.contact.subtitle}
              </p>

              <div className="mt-8 grid gap-4 sm:gap-5">
                {cards.map((c) => {
                  const CardInner = (
                    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm md:p-6">
                      <p className="text-sm font-semibold text-[#3d636d] md:text-base">
                        {c.label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-[#464747] md:text-base">
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

            {/* RIGHT (MAP) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="w-full"
            >
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <div className="relative h-[320px] w-full sm:h-[380px] md:h-[520px]">
                  {/* Google Maps Embed (replace q= with exact address) */}
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
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
