"use client";

import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton";
import Footer from "../../components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceNoticeByLang } from "@/data/localizedContent";

export default function ServicesPage() {
  const { currentLang, t } = useLanguage();
  const notice = serviceNoticeByLang[currentLang];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative w-full bg-cover bg-center bg-no-repeat py-10 md:py-20" style={{ backgroundImage: "url('/arka.png')" }}>
          <div className="absolute inset-0 bg-white/85"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center space-y-6">
              <h1 className="text-2xl font-semibold leading-tight text-[#464747] sm:text-3xl md:text-3xl">
                {t.services.title}
              </h1>
              
              <p className="mx-auto max-w-3xl text-base font-medium text-[#464747]/90 sm:text-lg md:text-lg">
                {t.services.p1}
              </p>
            </div>
          </div>
        </section>

        {/* Services Notice */}
        <section className="bg-[#f8f9fa] py-12 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-[32px] border border-[#d9e5e8] bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-14">
              <div className="mx-auto flex w-fit items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3d636d]/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3d636d]/45" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3d636d]/60" />
              </div>

              <div className="mt-6 space-y-3 text-base leading-7 text-[#464747]/80 sm:space-y-4 sm:text-lg">
                {notice.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
