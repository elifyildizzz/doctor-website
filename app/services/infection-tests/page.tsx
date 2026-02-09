"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function InfectionTestsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="py-14 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-3xl font-semibold text-[#464747] leading-tight md:text-4xl text-center">
              Enfeksiyon Testleri
            </h1>

            <div className="mt-10 space-y-7 text-lg text-[#464747]/80 leading-8 text-justify">
              <p>
                Enfeksiyon testleri, çocuklarda enfeksiyon belirtileri görüldüğünde altta yatan nedenin belirlenmesi için kullanılır. Bu testler, hastalığın hangi tür enfeksiyondan kaynaklandığını ortaya koyar ve uygun tedavi yaklaşımının planlanmasına yardımcı olur.
              </p>

              <p>
                Çocuklarda sık kullanılan enfeksiyon testleri şunlardır:
              </p>

              <p>
                Kan testi:
                <br />
                Kan örneğinin incelenmesiyle enfeksiyona işaret eden antikorlar veya diğer biyokimyasal göstergeler değerlendirilir.
              </p>

              <p>
                İdrar testi:
                <br />
                İdrarda bakteri veya enfeksiyon bulgularını tespit etmek amacıyla yapılır. İdrar dip çubuğu testi ve idrar kültürü gibi yöntemler kullanılabilir.
              </p>

              <p>
                Boğaz kültürü:
                <br />
                Boğazdan pamuklu çubukla alınan örnekle bakteri veya diğer enfeksiyon etkenleri araştırılır.
              </p>

              <p>
                Kan sayımı:
                <br />
                Kan hücrelerinin sayısı ve dağılımı incelenerek vücuttaki enfeksiyon varlığı hakkında bilgi edinilir.
              </p>

              <p>
                Gaita (dışkı) testi:
                <br />
                İshal veya diğer sindirim sistemi sorunlarına neden olan bakteri, parazit ya da virüslerin tespiti için yapılır.
              </p>

              <p>
                Bu testler, çocuğun genel sağlık durumu ve mevcut belirtiler değerlendirilerek planlanır. Hangi testlerin uygulanacağı; enfeksiyonun türüne, hastalığın şiddetine ve çocuğun yaşına göre belirlenir.
              </p>

              <p>
                Kliniğimizde, hastalık ve enfeksiyonların tanısına hızlı şekilde yönlendiren ve gereksiz antibiyotik kullanımının önüne geçmeye yardımcı olan hızlı antijen testleri de uygulanmaktadır. Bunlar:
                <br />
                COVID-19 Testi
                <br />
                Influenza (Grip) Testi
                <br />
                Adenovirüs Solunum Yolu Testi
                <br />
                Hızlı Strep A Testi
                <br />
                <br />
                Bu testler sayesinde doğru tanıya kısa sürede ulaşılması ve uygun tedavinin planlanması amaçlanır.
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
