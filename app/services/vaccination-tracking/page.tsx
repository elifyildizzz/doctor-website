"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function VaccinationTrackingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="py-14 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-3xl font-semibold text-[#464747] leading-tight md:text-4xl text-center">
              Aşı Takibi
            </h1>

            <div className="mt-10 space-y-7 text-lg text-[#464747]/80 leading-8 text-justify">
              <p>
                Çocukların aşılanması, yaşamlarının ilk yıllarından itibaren sağlıklı bir şekilde büyüyebilmeleri için büyük önem taşır. Aşılar, çocukların vücudunun enfeksiyonlara karşı koruyucu antikorlar üretmesini sağlayarak birçok ciddi hastalığa karşı bağışıklık kazandırır.
              </p>

              <p>
                Çocukların aşı takibi doğumdan itibaren başlar ve çocuk hekimi tarafından belirlenen bir program dâhilinde yürütülür. Bu programda hangi aşıların hangi dönemlerde yapılması gerektiği planlanır. Aşı takvimi; çocuğun yaşı, genel sağlık durumu, varsa risk faktörleri ve çevresel koşullara göre farklılık gösterebilir.
              </p>

              <p>
                Örneğin, bebekler doğumdan sonra ilk günlerde hepatit B aşısı olur. Ardından 2., 4. ve 6. aylarda çeşitli aşılar uygulanır. 12. ayda kızamık, kızamıkçık ve kabakulak (KKK) aşısı ile birlikte menenjit gibi ek aşılar yapılır. 4–6 yaş döneminde ise tetanoz, difteri, boğmaca ve çocuk felci gibi aşılarla bağışıklık programı devam eder.
              </p>

              <p>
                Aşı takibi sürecinde, çocuk hekiminin önerilerine uyulması önemlidir. Aşıların belirli zaman aralıklarında yapılması, bağışıklığın en etkili şekilde oluşmasını sağlar. Ebeveynlerin aşı takvimini düzenli olarak takip etmeleri ve randevuları aksatmamaları, çocuk sağlığı açısından büyük önem taşır. Aşı takibi yalnızca bireysel sağlık açısından değil, toplum sağlığı açısından da büyük önem taşır. Aşıların yaygın olarak uygulanması, toplum bağışıklığını artırarak bulaşıcı hastalıkların yayılmasını engeller.
              </p>

              <p>
                Sonuç olarak, çocukların aşı takibi; sağlıklı büyüme, hastalıklardan korunma ve toplum sağlığının desteklenmesi açısından temel bir unsurdur. Ebeveynlerin, çocuklarının aşı takvimini düzenli olarak takip etmeleri ve önerilen aşılara zamanında başvurmaları, çocuklarının sağlıklı bir yaşam sürmelerine katkı sağlar.
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
