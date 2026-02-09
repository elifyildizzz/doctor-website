"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function PrematureBabyMonitoringPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="py-14 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-3xl font-semibold text-[#464747] leading-tight md:text-4xl text-center">
              Prematüre Bebek İzlemi
            </h1>

            <div className="mt-10 space-y-7 text-lg text-[#464747]/80 leading-8 text-justify">
              <p>
                Prematüre bebekler, normal doğumda dünyaya gelen bebeklere göre daha erken bir zamanda doğarlar. Gebeliğin 37. haftasından önce doğan bebeklere prematüre bebek denmektedir. Bu bebekler, henüz tam olarak gelişmedikleri için, bazı sağlık sorunları yaşayabilirler. Yaşlarının ilk günlerini, bazen haftalarını anneden ayrı küvozde, yenidoğan yoğun bakım ünitelerinde geçirmektedirler. Bu yavruların dünyaya gelişinin özel olması gibi izlemlerinin de özel ve daha dikkatli yapılması gerekir. Bu nedenle, prematüre bebeklerin doğumdan hemen sonra yakından takip edilmesi gerekmektedir.
              </p>

              <p>
                Prematüre bebeklerin izlenmesi, Serap Doktor, yoğun bakım hemşireleri ve diğer sağlık uzmanları tarafından yapılır. İzlem, doğumdan sonra hemen başlar ve bebeklerin durumlarının sıkı bir şekilde takip edilmesini içerir. Bu izlemler, bebeklerin kan basıncı, kalp atışları, solunumları, kilo alımı, aşıları ve beslenme düzeni gibi birçok faktörü içerir.
              </p>

              <p>
                Bebeklerin izlenmesi, doğumdan sonraki ilk birkaç gün boyunca özellikle önemlidir. Bu süre zarfında, bebeklerin vücut sıcaklıkları, kan şekeri seviyeleri ve diğer birçok faktör de izlenir. Prematüre bebeklerde solunum sorunlarını sıkça görülebildiğinden, bu bebeklerin solunumlarını, akciğer gelişimini ve enfeksiyon varlığını yakından takip etmek önemlidir. Solunum problemleri varsa, bebekler solunum cihazları ile destek gerekebilir.
              </p>

              <p>
                Prematüre bebeklerin izlemi, doğumdan sonra birkaç hafta ya da aylar boyunca devam edebilir. Bebeklerin gelişimi, kilo alımı ve beslenme durumları, Serap Doktor tarafından sürekli olarak takip edilir. Bazı prematüre bebeklerde gelişim geriliği veya diğer sağlık sorunları görülebilir. Bu durumda, bebeklerin tedavisi özel olarak planlanır.
              </p>

              <p>
                Aşık takviminin farklı olmasının yanısıra, gelişimleri daha sık aralıklarla izlenmekte olup ve bazı testlerin ve göz, kalp, nöroloji gibi kontrollerinin daha ayrıntılı yapılması gerekir. Tüm bu izlemler özel bir takvim dahilinde ve ehil ellerde yapılmalıdır. Kliniğimizde de prematüre bebeklerin izlemi ayrıntılı şekilde yapılmaktadır.
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
