"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function HealthyChildMonitoringPage() {
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
                Sağlam Çocuk İzlemi
              </h1>
              
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4] mx-auto">
                <img src="/icons/baby.svg" alt="" className="h-7 w-7 object-contain" />
              </div>
              
              <p className="text-xl font-medium text-[#464747]/90 max-w-3xl mx-auto">
                Yenidoğan bebeklerden ergenlere kadar tüm çocukların büyüme ve gelişim takibi, aşı programları ve koruyucu sağlık hizmetleri.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#464747]/80 leading-8 mb-6">
                Sağlam çocuk izlemi, çocukların doğumdan ergenliğe kadar olan süreçte fiziksel, zihinsel ve sosyal gelişimlerinin düzenli olarak takip edildiği kapsamlı bir sağlık hizmetidir.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Neden Önemli?</h2>
              <p className="text-[#464747]/80 leading-8 mb-6">
                Erken teşhis ve müdahale, çocukların sağlıklı büyümesi için kritik öneme sahiptir. Düzenli kontrollerle gelişimdeki olası sorunlar zamanında tespit edilebilir.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Neler Kapsar?</h2>
              <ul className="text-[#464747]/80 leading-8 space-y-2">
                <li>• Büyüme ve gelişim değerlendirmesi</li>
                <li>• Beslenme danışmanlığı</li>
                <li>• Aşı takibi</li>
                <li>• Gelişimsel tarama testleri</li>
                <li>• Koruyucu sağlık hizmetleri</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-[#464747] mb-4 mt-8">Kontrol Zamanları</h2>
              <p className="text-[#464747]/80 leading-8">
                Milli çocuk izlem programına göre: Yenidoğan (1. ay, 2. ay, 4. ay, 6. ay, 9. ay, 12. ay), 18. ay, 2 yaş, 3 yaş, 4-6 yaş (yılda bir), 11-14 yaş (yılda bir).
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
