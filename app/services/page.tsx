"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative w-full bg-cover bg-center bg-no-repeat py-12 md:py-20" style={{ backgroundImage: "url('/arka.png')" }}>
          <div className="absolute inset-0 bg-white/85"></div>
          
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center space-y-6">
              <h1 className="text-3xl font-semibold text-[#464747] leading-tight md:text-4xl">
                Hizmetlerimiz
              </h1>
              
              <p className="text-xl font-medium text-[#464747]/90 max-w-3xl mx-auto">
                Çocuğunuzun sağlıklı büyümesini sağlarken güvenli ellerde izlemi ile birlikte tanı ve tedavide gerekli olan tüm laboratuvar tetkiklerinin klinik bünyesinde yapılması sağlanmaktadır.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              
              {/* Service 1 */}
              <Link href="/services/healthy-child-monitoring" className="block">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4]">
                    <img src="/icons/baby.svg" alt="" className="h-7 w-7 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#464747] mb-3">
                    Sağlam Çocuk İzlemi
                  </h3>
                  <p className="text-[#464747]/80 leading-7">
                    Yenidoğan bebeklerden ergenlere kadar tüm çocukların büyüme ve gelişim takibi, aşı programları ve koruyucu sağlık hizmetleri.
                  </p>
                </div>
              </Link>

              {/* Service 2 */}
              <Link href="/services/premature-baby-monitoring" className="block">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4]">
                    <img src="/icons/feeder.svg" alt="" className="h-7 w-7 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#464747] mb-3">
                    Prematüre Bebek İzlemi
                  </h3>
                  <p className="text-[#464747]/80 leading-7">
                    Erken doğan bebeklerin özel takibi, gelişim değerlendirmesi ve beslenme danışmanlığı hizmetleri.
                  </p>
                </div>
              </Link>

              {/* Service 3 */}
              <Link href="/services/vaccination-tracking" className="block">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4]">
                    <img src="/icons/needle.svg" alt="" className="h-7 w-7 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#464747] mb-3">
                    Aşı Takibi
                  </h3>
                  <p className="text-[#464747]/80 leading-7">
                    Milli aşı takvimine uygun olarak tüm aşıların zamanında ve güvenli bir şekilde uygulanması.
                  </p>
                </div>
              </Link>

              {/* Service 4 */}
              <Link href="/services/infection-tests" className="block">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4]">
                    <img src="/icons/tube.svg" alt="" className="h-7 w-7 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#464747] mb-3">
                    Enfeksiyon Testleri
                  </h3>
                  <p className="text-[#464747]/80 leading-7">
                    Çocuk hastalıklarının teşhisinde gerekli olan kan testleri ve enfeksiyon taramaları.
                  </p>
                </div>
              </Link>

              {/* Service 5 */}
              <Link href="/services/blood-collection-laboratory" className="block">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4]">
                    <img src="/icons/drop.svg" alt="" className="h-7 w-7 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#464747] mb-3">
                    Kan Alma ve Laboratuvar Testleri
                  </h3>
                  <p className="text-[#464747]/80 leading-7">
                    Klinik bünyesinde kan alma işlemi ve gerekli laboratuvar testlerinin güvenli bir şekilde yapılması.
                  </p>
                </div>
              </Link>

              {/* Service 6 */}
              <Link href="/services/breastfeeding-consultation" className="block">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4]">
                    <img src="/icons/mom.svg" alt="" className="h-7 w-7 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#464747] mb-3">
                    Emzirme Danışmanlığı
                  </h3>
                  <p className="text-[#464747]/80 leading-7">
                    Annalara doğru emzirme teknikleri, süt üretimi ve beslenme konusunda profesyonel danışmanlık hizmeti.
                  </p>
                </div>
              </Link>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
