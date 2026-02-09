"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function BreastfeedingConsultationPage() {
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
                Emzirme Danışmanlığı
              </h1>
              
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4] mx-auto">
                <img src="/icons/mom.svg" alt="" className="h-7 w-7 object-contain" />
              </div>
              
              <p className="text-xl font-medium text-[#464747]/90 max-w-3xl mx-auto">
                Annalara doğru emzirme teknikleri, süt üretimi ve beslenme konusunda profesyonel danışmanlık hizmeti.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#464747]/80 leading-8 mb-6">
                Emzirme, bebeğin ilk 6 ayı için en ideal beslenme şeklidir. Doğru teknik ve destekle emzirme süreci başarılı olabilir.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Emzirme Faydaları</h2>
              <ul className="text-[#464747]/80 leading-8 space-y-2">
                <li>• Bebeği enfeksiyonlardan korur</li>
                <li>• Anne-bebeği bağını güçlendirir</li>
                <li>• Allerji riskini azaltır</li>
                <li>• Annelik sağlığını destekler</li>
                <li>• Ekonomiktir</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Danışmanlık Konuları</h2>
              <ul className="text-[#464747]/80 leading-8 space-y-2">
                <li>• Doğru emzirme pozisyonları</li>
                <li>• Süt üretimini artırma yöntemleri</li>
                <li>• Emzirme sıklığı ve süresi</li>
                <li>• Emzirme sorunları ve çözümleri</li>
                <li>• Ek gıdaya geçiş</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Destek</h2>
              <p className="text-[#464747]/80 leading-8">
                Emzirme danışmanlığı hizmetimizle annaların emzirme sürecinde karşılaştıkları sorunlara çözüm buluyor ve destek oluyoruz.
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
