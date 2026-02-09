"use client";

import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton";
import Footer from "../../components/Footer";

export default function DoktorumuzPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative w-full bg-cover bg-center bg-no-repeat py-12 md:py-20" style={{ backgroundImage: "url('/arka.png')" }}>
          <div className="absolute inset-0 bg-white/85"></div>
          
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              {/* LEFT - Content */}
              <div className="space-y-6">
                <h1 className="text-3xl font-semibold text-[#464747] leading-tight md:text-4xl">
                  Uzm. Dr. Mümtaz Aktaş
                </h1>
                
                <p className="text-xl font-medium text-[#464747]/90">
                  Çocuk Sağlığı ve Hastalıkları Uzmanı
                </p>
                
                <div className="space-y-4 text-lg text-[#464747]/80 leading-8">
                  <p>
                    Tıp eğitimini Kocaeli Üniversitesi Tıp Fakültesi'nde tamamlayan Mümtaz Aktaş, uzmanlık eğitimini İnönü Üniversitesi Tıp Fakültesi'nde gerçekleştirmiştir.
                  </p>
                  <p>
                    Uzun yıllardır çocuk sağlığı ve hastalıkları alanında hizmet veren Dr. Aktaş, özellikle prematüre bebek takibi, aşı uygulamaları ve büyüme-gelişme monitorizasyonu konularında uzmanlaşmıştır.
                  </p>
                  <p>
                    Çocukların sağlıklı büyümesi ve gelişimi için bilimsel yaklaşımları benimseyerek, ailelere danışmanlık hizmeti vermekte ve koruyucu sağlık hizmetlerinin önemine dikkat çekmektedir.
                  </p>
                </div>
              </div>
              
              {/* RIGHT - Image */}
              <div className="flex justify-center">
                <img
                  src="/doctor2.png"
                  alt="Uzm. Dr. Mümtaz Aktaş"
                  className="w-full max-w-xl rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-semibold text-[#464747] mb-12 text-center">
              Deneyim ve Uzmanlık Alanları
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#3d636d] mb-3">
                  Eğitim
                </h3>
                <ul className="space-y-2 text-[#464747]/80">
                  <li>• Kocaeli Üniversitesi Tıp Fakültesi</li>
                  <li>• İnönü Üniversitesi Çocuk Sağlığı ve Hastalıkları Uzmanlık</li>
                </ul>
              </div>
              
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#3d636d] mb-3">
                  Uzmanlık Alanları
                </h3>
                <ul className="space-y-2 text-[#464747]/80">
                  <li>• Prematüre Bebek Takibi</li>
                  <li>• Aşı Uygulamaları</li>
                  <li>• Büyüme-Gelişme Monitorizasyonu</li>
                </ul>
              </div>
              
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#3d636d] mb-3">
                  İlgi Alanları
                </h3>
                <ul className="space-y-2 text-[#464747]/80">
                  <li>• Koruyucu Sağlık Hizmetleri</li>
                  <li>• Çocuk Beslenmesi</li>
                  <li>• Gelişimsel Pediatri</li>
                </ul>
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
