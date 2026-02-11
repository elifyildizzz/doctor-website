"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton";
import Footer from "../../components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ServiceDetailKey } from "@/data/localizedContent";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services: Array<{ key: ServiceDetailKey; icon: string; href: string }> = [
    { key: "healthyChild", icon: "/icons/baby.svg", href: "/services/healthy-child-monitoring" },
    { key: "prematureBaby", icon: "/icons/feeder.svg", href: "/services/premature-baby-monitoring" },
    { key: "vaccination", icon: "/icons/needle.svg", href: "/services/vaccination-tracking" },
    { key: "infectionTests", icon: "/icons/tube.svg", href: "/services/infection-tests" },
    { key: "bloodLab", icon: "/icons/drop.svg", href: "/services/blood-collection-laboratory" },
    { key: "breastfeeding", icon: "/icons/mom.svg", href: "/services/breastfeeding-consultation" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative w-full bg-cover bg-center bg-no-repeat py-10 md:py-20" style={{ backgroundImage: "url('/arka.png')" }}>
          <div className="absolute inset-0 bg-white/85"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center space-y-6">
              <h1 className="text-2xl font-semibold leading-tight text-[#464747] sm:text-3xl md:text-4xl">
                {t.services.title}
              </h1>
              
              <p className="mx-auto max-w-3xl text-base font-medium text-[#464747]/90 sm:text-lg md:text-xl">
                {t.services.p1}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-[#f8f9fa] py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {services.map((service) => (
                <Link key={service.key} href={service.href} className="block">
                  <div className="flex h-full min-h-[220px] cursor-pointer flex-col rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-lg md:min-h-[260px] md:p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf1f4] md:mb-5 md:h-16 md:w-16">
                      <img src={service.icon} alt="" className="h-6 w-6 object-contain md:h-7 md:w-7" />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-[#464747] md:text-xl">
                      {t.services.items[service.key].title}
                    </h3>
                    <p className="flex-1 text-sm leading-6 text-[#464747]/80 md:text-base md:leading-7">
                      {t.services.items[service.key].desc}
                    </p>
                  </div>
                </Link>
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
