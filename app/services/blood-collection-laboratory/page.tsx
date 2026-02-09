"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function BloodCollectionLaboratoryPage() {
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
                Kan Alma ve Laboratuvar Testleri
              </h1>
              
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4] mx-auto">
                <img src="/icons/drop.svg" alt="" className="h-7 w-7 object-contain" />
              </div>
              
              <p className="text-xl font-medium text-[#464747]/90 max-w-3xl mx-auto">
                Klinik bünyesinde kan alma işlemi ve gerekli laboratuvar testlerinin güvenli bir şekilde yapılması.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#464747]/80 leading-8 mb-6">
                Çocuklarda kan alma işlemi özel teknik ve hassasiyet gerektirir. Kliniğimizde deneyimli hemşireler tarafından güvenli kan alma hizmeti sunulmaktadır.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Kan Alma Teknikleri</h2>
              <ul className="text-[#464747]/80 leading-8 space-y-2">
                <li>• Venöz kan alma</li>
                <li>• Kılcal kan alma</li>
                <li>• Parmak ucu delme</li>
                <li>• Topuk kanı (yenidoğan)</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Yapılan Testler</h2>
              <ul className="text-[#464747]/80 leading-8 space-y-2">
                <li>• Biyokimya testleri</li>
                <li>• Hematoloji testleri</li>
                <li>• Hormon testleri</li>
                <li>• Alerji testleri</li>
                <li>• Vitamin ve mineral seviyeleri</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Ailelere Bilgi</h2>
              <p className="text-[#464747]/80 leading-8">
                Kan alma öncesi çocuğun aç veya tok olması gerekip gerekmediği, test süresi ve sonuçların nasıl alınacağı hakkında detaylı bilgi verilmektedir.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
