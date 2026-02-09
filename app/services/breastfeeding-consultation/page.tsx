"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function BreastfeedingConsultationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="py-14 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-3xl font-semibold text-[#464747] leading-tight md:text-4xl text-center">
              Emzirme Danışmanlığı
            </h1>

            <div className="mt-10 space-y-7 text-lg text-[#464747]/80 leading-8 text-justify">
              <p>
                Bebek emzirme danışmanlığı; anne sütü ile beslenmenin önemini anlatan, emzirme sürecinde anne ve ailelere destek olmayı amaçlayan bir hizmettir. Bu danışmanlık, anne sütü ile beslenme sürecinde karşılaşılabilecek zorlukların aşılmasına yardımcı olur ve anne sütü üretimini artırmaya yönelik doğru tekniklerin öğretilmesini kapsar.
              </p>

              <p>
                Bebek emzirme danışmanlığı, anne ve bebek arasındaki bağı güçlendirirken anne sütü ile beslenmenin sağladığı birçok faydanın da etkin şekilde kullanılmasını sağlar. Anne sütü, bebeğin büyüme ve gelişimi için gerekli tüm besin öğelerini içerir. Aynı zamanda bağışıklık sistemini destekleyerek enfeksiyonlara karşı koruyucu etki sağlar. Emzirme süreci, bebeğin fiziksel ve zihinsel gelişimini desteklerken anne-bebek bağının güçlenmesine de katkıda bulunur.
              </p>

              <p>
                “Sütüm yeterli mi?”, “Doğru teknikle emzirebiliyor muyum?”, “Mamaya ne zaman ihtiyaç olabilir?” gibi emzirmeye dair tüm sorularınıza emzirme danışmanlığı ile yanıt alabilirsiniz. Kliniğimizde takibe alınan tüm bebekler ve annelerine, sertifikalı bebek hemşiremiz tarafından emzirme danışmanlığı verilmektedir.
              </p>

              <p>
                Emzirme danışmanlığı, isteğe bağlı olarak gebelik öncesinde ve doğum sonrasında ev ortamında da sunulabilmektedir.
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
