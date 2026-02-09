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
                Prematüre bebekler, gebeliğin 37. haftasından önce dünyaya gelen bebeklerdir. Bu bebekler, gelişimlerini henüz tamamlamadan doğdukları için bazı sağlık sorunlarıyla karşılaşabilirler. Yaşamlarının ilk günlerini, bazen haftalarını annelerinden ayrı olarak küvözde ve yenidoğan yoğun bakım ünitelerinde geçirebilirler. Prematüre bebeklerin dünyaya gelişi nasıl özel ise, izlem süreçlerinin de daha dikkatli ve planlı şekilde yürütülmesi gerekir. Bu nedenle doğumdan hemen sonra yakından takip edilmeleri büyük önem taşır.
              </p>

              <p>
                Prematüre bebeklerin izlemi; hekimler, yenidoğan yoğun bakım hemşireleri ve diğer sağlık uzmanları tarafından yürütülür. İzlem süreci doğumdan hemen sonra başlar ve bebeğin sağlık durumunun düzenli ve ayrıntılı şekilde değerlendirilmesini kapsar. Bu değerlendirmelerde kan basıncı, kalp atım hızı, solunum durumu, kilo alımı, aşılar ve beslenme düzeni gibi pek çok parametre takip edilir.
              </p>

              <p>
                Doğumdan sonraki ilk günler prematüre bebekler için özellikle kritik bir dönemdir. Bu süreçte vücut sıcaklığı, kan şekeri düzeyi ve enfeksiyon bulguları yakından izlenir. Prematüre bebeklerde solunum sorunları daha sık görülebildiğinden; solunum, akciğer gelişimi ve olası enfeksiyonlar dikkatle değerlendirilir. Gerekli durumlarda solunum desteği sağlanabilir.
              </p>

              <p>
                Prematüre bebeklerin izlemi, doğumdan sonraki haftalar hatta aylar boyunca devam edebilir. Bu süreçte bebeklerin büyüme ve gelişmeleri, kilo alımları ve beslenme durumları düzenli aralıklarla değerlendirilir. Bazı prematüre bebeklerde gelişim geriliği veya ek sağlık sorunları görülebileceğinden, takip ve tedavi süreçleri bireysel olarak planlanır.
              </p>

              <p>
                Aşı takviminin farklı olması, gelişimin daha sık aralıklarla izlenmesi ve göz, kalp, nöroloji gibi alanlarda daha ayrıntılı kontrollerin gerekmesi prematüre bebek izleminin önemli parçalarıdır. Tüm bu değerlendirmeler özel bir izlem programı dâhilinde ve deneyimli sağlık ekipleri tarafından yapılmalıdır. Kliniğimizde prematüre bebeklerin izlemi ayrıntılı ve planlı şekilde sürdürülmektedir.
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
