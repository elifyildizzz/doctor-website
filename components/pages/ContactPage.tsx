"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  contactBusinessName,
  contactAddressByLang,
  contactEmail,
  contactEmailHref,
  contactGoogleBusinessHref,
  contactLocationHref,
  contactMapEmbedSrc,
  contactPhoneDisplay,
  contactPhoneHref,
  googleBusinessContentByLang,
} from "@/data/localizedContent";

type InfoCard = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  ctaLabel?: string;
};

export default function ContactPage() {
  const { currentLang, t } = useLanguage();
  const businessContent = googleBusinessContentByLang[currentLang];

  const cards: InfoCard[] = [
    {
      label: t.contact.phone,
      value: contactPhoneDisplay,
      href: contactPhoneHref,
    },
    {
      label: t.contact.email,
      value: contactEmail,
      href: contactEmailHref,
    },
    {
      label: t.contact.address,
      value: contactAddressByLang[currentLang],
      href: contactLocationHref,
      external: true,
    },
    {
      label: businessContent.reviewCardTitle,
      value: businessContent.reviewCardText,
      href: contactGoogleBusinessHref,
      external: true,
      ctaLabel: businessContent.reviewButton,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative w-full bg-[#f8f9fa] md:min-h-[calc(100vh-96px)]">
        <div className="mx-auto grid max-w-7xl items-center px-4 py-12 sm:px-6 md:min-h-[calc(100vh-96px)] md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex h-full flex-col"
            >
              <h1 className="text-2xl font-semibold leading-tight text-[#464747] sm:text-3xl md:text-3xl">
                {t.contact.title}
              </h1>
              <p className="mt-3 text-base text-[#464747]/90 md:mt-4 md:text-base">
                {t.contact.subtitle}
              </p>

              <div className="mt-6 grid flex-1 content-start gap-3 sm:gap-4">
                {cards.map((card) => {
                  const cardInner = (
                    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm md:p-5">
                      <p className="text-sm font-semibold text-[#3d636d]">
                        {card.label}
                      </p>
                      {card.ctaLabel ? (
                        <div className="mt-2 flex items-center justify-between gap-3">
                          <p className="text-sm font-medium text-[#464747]">{card.value}</p>
                          <span className="shrink-0 rounded-full bg-[#3d636d] px-3.5 py-1.5 text-xs font-semibold text-white">
                            {card.ctaLabel}
                          </span>
                        </div>
                      ) : (
                        <p className="mt-1.5 text-sm font-medium text-[#464747]">{card.value}</p>
                      )}
                    </div>
                  );

                  return card.href ? (
                    <a
                      key={card.label}
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="block rounded-2xl transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3d636d]/30"
                    >
                      {cardInner}
                    </a>
                  ) : (
                    <div key={card.label}>{cardInner}</div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="w-full lg:h-full"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <div className="pointer-events-none absolute left-3 top-4 z-10 w-[300px] max-w-[calc(100%-1.5rem)] sm:w-[320px] lg:w-[340px]">
                  <div className="pointer-events-auto rounded-md border border-black/10 bg-white p-4 shadow-xl">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[1.05rem] font-semibold leading-snug text-[#2f3033]">
                          {contactBusinessName}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#464747]/90">
                          {contactAddressByLang[currentLang]}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <a
                          href={contactGoogleBusinessHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={businessContent.profileButton}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f6] text-[#3d636d] transition hover:bg-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#3d636d]/30"
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M7 17 17 7" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                        <a
                          href={contactLocationHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={businessContent.directionsButton}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f6] text-[#3d636d] transition hover:bg-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#3d636d]/30"
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M13 20s7-7.2 7-11a7 7 0 1 0-14 0c0 3.8 7 11 7 11Z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle cx="13" cy="9" r="2.5" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[320px] w-full sm:h-[380px] md:h-[460px] lg:h-full">
                  <iframe
                    title={t.contact.mapTitle}
                    src={contactMapEmbedSrc}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                  <a
                    href={contactLocationHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.contact.mapTitle} - ${contactAddressByLang[currentLang]}`}
                    className="absolute inset-0 z-[5]"
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
