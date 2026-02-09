"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function InfectionTestsPage() {
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
                Enfeksiyon Testleri
              </h1>
              
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4] mx-auto">
                <img src="/icons/tube.svg" alt="" className="h-7 w-7 object-contain" />
              </div>
              
              <p className="text-xl font-medium text-[#464747]/90 max-w-3xl mx-auto">
                Çocuk hastalıklarının teşhisinde gerekli olan kan testleri ve enfeksiyon taramaları.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#464747]/80 leading-8 mb-6">
                Çocuklarda enfeksiyon hastalıkları hızlı teşhis ve tedavi gerektirir. Modern laboratuvar testleri ile doğru tanı konulabilir.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Yaygın Testler</h2>
              <ul className="text-[#464747]/80 leading-8 space-y-2">
                <li>• Tam Kan Sayımı</li>
                <li>• CRP (C-Reaktif Protein)</li>
                <li>• Sedimantasyon</li>
                <li>• Kan Kültürü</li>
                <li>• İdrar Tahlili</li>
                <li>• Boğaz Kültürü</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Ne Zaman Gerekli?</h2>
              <p className="text-[#464747]/80 leading-8 mb-6">
                Ateş, halsizlik, iştahsızlık, karın ağrısı, solunum sıkıntısı gibi enfeksiyon belirtileri olduğunda testler yapılmalıdır.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Hızlı Teşhis</h2>
              <p className="text-[#464747]/80 leading-8">
                Kliniğimizde hızlı sonuç veren modern test cihazları bulunmaktadır. Acil durumlarda aynı gün içinde sonuç alınabilmektedir.
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
