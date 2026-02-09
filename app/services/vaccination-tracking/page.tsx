"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function VaccinationTrackingPage() {
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
                Aşı Takibi
              </h1>
              
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4] mx-auto">
                <img src="/icons/needle.svg" alt="" className="h-7 w-7 object-contain" />
              </div>
              
              <p className="text-xl font-medium text-[#464747]/90 max-w-3xl mx-auto">
                Milli aşı takvimine uygun olarak tüm aşıların zamanında ve güvenli bir şekilde uygulanması.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#464747]/80 leading-8 mb-6">
                Aşılar, çocukları ölümcül ve tehlikeli hastalıklardan koruyan en etkili sağlık hizmetlerinden biridir. Milli aşı takvimine göre düzenli uygulanmalıdır.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Milli Aşı Takvimi</h2>
              <p className="text-[#464747]/80 leading-8 mb-6">
                Türkiye'de uygulanan aşı takvimi, Dünya Sağlık Örgütü önerilerine göre düzenlenmiş olup, çocukları en yaygın hastalıklara karşı korumaktadır.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Temel Aşılar</h2>
              <ul className="text-[#464747]/80 leading-8 space-y-2">
                <li>• Hepatit B</li>
                <li>• BCG (Tüberküloz)</li>
                <li>• DaBT-İPA-Hib (Difteri, Boğmaca, Tetanoz, Polio, Hemofilus Influenza Tip B)</li>
                <li>• KPA (Konjuge Pnömokok Aşıları)</li>
                <li>• KKK (Kızamık, Kızamıkçık, Kabakulak)</li>
                <li>• Suçiçeği</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Aşı Öncesi ve Sonrası</h2>
              <p className="text-[#464747]/80 leading-8">
                Aşı öncesi çocuğun sağlıklı olduğundan emin olunmalı, aşı sonrası olası yan etkiler takip edilmelidir. Aşı kartı düzenli tutulmalıdır.
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
