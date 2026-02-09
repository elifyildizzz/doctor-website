"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function HealthyChildMonitoringPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="py-14 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-3xl font-semibold text-[#464747] leading-tight md:text-4xl text-center">
              Sağlam Çocuk İzlemi
            </h1>

            <div className="mt-10 space-y-7 text-lg text-[#464747]/80 leading-8 text-justify">
              <p>
                Sağlıklı çocuk izlemi, çocukların doğumdan itibaren düzenli aralıklarla sağlık kontrollerinin yapılmasını kapsayan bir süreçtir. Bu kontroller; çocukların fiziksel, duygusal ve bilişsel gelişimlerinin izlenmesi, olası sağlık sorunlarının erken dönemde saptanması ve gerekli önlemlerin alınması amacıyla gerçekleştirilir. Sağlıklı çocuk izlemi, çocukların sağlıklı büyüme ve gelişmelerinin temelini oluşturur.
              </p>

              <p>
                Sağlıklı çocuk izlemi, doğumdan hemen sonra başlar. Yenidoğan bebekler doğum sonrası ilk muayeneleri ile değerlendirilir, genel sağlık durumları gözden geçirilir ve gerekli aşı ve taramalar planlanır. Bu erken dönem değerlendirmeleri, bebeğin sağlıklı bir başlangıç yapması açısından önemlidir.
              </p>

              <p>
                Düzenli yapılan izlemlerle, çocukların genetik potansiyelleri doğrultusunda sağlıklı büyüme ve gelişmeleri hedeflenir. Bu süreçte yapılması gereken ölçümler, tetkikler, tarama testleri ve aşılar planlanır. Anneye emzirme konusunda danışmanlık verilir; tamamlayıcı beslenmeye geçiş döneminde ise doğru ve dengeli beslenme konusunda anne ve bakım verenler bilgilendirilir. İzlem süreci yalnızca süt çocukluğu dönemini değil; okul çağına geçiş, ergenlik dönemi ve sağlıklı yetişkinliğe adım atma sürecini de kapsar. Bu dönemlerde fiziksel, zihinsel ve ruhsal gelişim dikkatle değerlendirilir; riskli olabilecek durumlar erken dönemde belirlenerek gerekli yönlendirmeler yapılır.
              </p>

              <p>
                Çocukların sağlıklı büyüyebilmeleri için dengeli ve yeterli beslenme alışkanlığı kazanmaları önemlidir. Bu nedenle beslenme durumu da sağlık kontrolleri sırasında değerlendirilir ve ailelere çocukların yaşına uygun, yeterli ve dengeli beslenme konusunda rehberlik edilir.
              </p>

              <p>
                Sonuç olarak, sağlıklı çocuk izlemi; çocukların sağlıklı bir yaşam sürmelerini destekleyen, erken tanı ve tedaviye olanak sağlayan bütüncül bir yaklaşımdır. Bu süreç sayesinde aileler çocuklarının gelişimi ve sağlığı hakkında bilinçlenir ve doğru kararlar alabilmeleri için gerekli bilgi ve desteğe sahip olur.
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
