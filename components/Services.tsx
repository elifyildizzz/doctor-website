"use client";

import { motion } from "framer-motion";

type Service = {
  title: string;
  icon: string;
  href?: string;
};

export default function Services() {
  const services: Service[] = [
    { title: "Sağlam Çocuk İzlemi", icon: "/icons/baby.svg", href: "/hizmetler#saglam-cocuk" },
    { title: "Prematüre Bebek İzlemi", icon: "/icons/feeder.svg", href: "/hizmetler#premature" },
    { title: "Aşı Takibi", icon: "/icons/needle.svg", href: "/hizmetler#asi" },
    { title: "Enfeksiyon Testleri", icon: "/icons/tube.svg", href: "/hizmetler#enfeksiyon" },
    { title: "Kan Alma ve Laboratuvar Testleri", icon: "/icons/drop.svg", href: "/hizmetler#laboratuvar" },
    { title: "Emzirme Danışmanlığı", icon: "/icons/mom.svg", href: "/hizmetler#emzirme" },
  ];

  return (
    <section id="hizmetler" className="bg-[#f8f9fa] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl font-semibold text-[#464747] leading-tight">
              Hizmetlerimiz
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#464747]/80">
              Çocuğunuzun sağlıklı büyümesini sağlarken güvenli ellerde izlemi ile
              birlikte tanı ve tedavide gerekli olan tüm laboratuvar
              tetkiklerinin klinik bünyesinde yapılması sağlanmaktadır.
            </p>

            <p className="mt-4 text-lg leading-8 text-[#464747]/80">
              Özel aşıların yapılması, kan alımı, serum tedavisi, buhar
              tedavisine ek olarak kliniğimizden emzirme danışmanlığını da
              güvenle alabilirsiniz.
            </p>

            <button className="mt-8 rounded-full bg-[#3d636d] px-7 py-3 text-sm font-semibold text-white hover:bg-[#345459]">
              Tüm Hizmetlerimiz
            </button>
          </motion.div>

          {/* RIGHT – EQUAL HEIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <button
                key={s.title}
                onClick={() => s.href && (window.location.href = s.href)}
                className="
                flex h-[230px] flex-col items-center justify-center
                rounded-2xl border border-gray-200
                bg-white px-5
                text-center
                shadow-sm transition
                hover:-translate-y-1 hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-[#3d636d]/40
              "
            >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf1f4]">
    <img
      src={s.icon}
      alt=""
      className="h-7 w-7 object-contain"
    />
  </div>

  <h3 className="min-h-[3.5rem] flex items-center justify-center text-lg font-semibold text-[#464747] leading-snug">
    {s.title}
  </h3>
</button>

            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

