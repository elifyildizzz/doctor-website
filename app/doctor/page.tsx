"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton";
import Footer from "../../components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { doctorExperienceByLang } from "@/data/localizedContent";

export default function DoktorumuzPage() {
  const { currentLang, t } = useLanguage();
  const experience = doctorExperienceByLang[currentLang];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative w-full bg-cover bg-center bg-no-repeat py-10 md:py-20" style={{ backgroundImage: "url('/arka.png')" }}>
          <div className="absolute inset-0 bg-white/85"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              {/* LEFT - Content */}
              <div className="space-y-6">
                <h1 className="text-2xl font-semibold leading-tight text-[#464747] sm:text-3xl md:text-3xl">
                  {t.about.name}
                </h1>
                
                <p className="text-base font-medium text-[#464747]/90 sm:text-lg md:text-lg">
                  {t.about.role}
                </p>
                
                <div className="space-y-3 text-base leading-7 text-[#464747]/80 md:space-y-4 md:text-base md:leading-7">
                  <p>{t.about.p1}</p>
                  <p>{t.about.p2}</p>
                  <p>{t.about.p4}</p>
                </div>
              </div>
              
              {/* RIGHT - Image */}
              <div className="flex justify-center">
                <Image
                  src="/doctor2.png"
                  alt={t.about.name}
                  width={1100}
                  height={1300}
                  className="h-auto w-full max-w-[360px] rounded-2xl object-cover shadow-2xl sm:max-w-[460px] md:max-w-[420px] lg:max-w-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-[#f8f9fa] py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-8 text-center text-2xl font-semibold text-[#464747] sm:text-3xl md:mb-12 md:text-3xl">
              {experience.title}
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {experience.cards.map((card) => (
                <div key={card.title} className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
                  <h3 className="mb-3 text-lg font-semibold text-[#3d636d] md:text-lg">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-[#464747]/80 md:text-base">
                    {card.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
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
