"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  serviceDetailsByLang,
  type ServiceDetailKey,
} from "@/data/localizedContent";

type ServiceDetailLayoutProps = {
  serviceKey: ServiceDetailKey;
};

export default function ServiceDetailLayout({
  serviceKey,
}: ServiceDetailLayoutProps) {
  const { currentLang, t } = useLanguage();
  const title = t.services.items[serviceKey].title;
  const paragraphs = serviceDetailsByLang[currentLang][serviceKey];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h1 className="text-center text-2xl font-semibold leading-tight text-[#464747] sm:text-3xl md:text-3xl">
              {title}
            </h1>

            <div className="mt-8 space-y-5 text-justify text-base leading-7 text-[#464747]/80 md:mt-10 md:space-y-7 md:text-base md:leading-7">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
