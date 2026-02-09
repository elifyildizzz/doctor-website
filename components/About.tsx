"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="doktorumuz" className="relative w-full min-h-screen">
      {/* BACKGROUND – HORIZONTAL SPLIT */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-[#1d5059]" />
        <div className="h-1/2 bg-[#f8f9fa]" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 items-center gap-20">

          {/* LEFT – BIG DOCTOR IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start"
          >
            <Image
              src="/doctor2.png"
              alt="Uzm. Dr. Mümtaz Aktaş"
              width={1400}
              height={1600}
              priority
              className="
                w-full
                h-[100vh]
                object-cover
              "
            />
          </motion.div>

          {/* RIGHT – TITLE + CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* TITLE – WHITE + QUICKSAND */}
            <h2 className="text-4xl font-semibold text-white leading-tight">
              Uzm. Dr. Mümtaz Aktaş
            </h2>

            <p className="mt-3 text-xl font-medium text-white/90">
              Çocuk Sağlığı ve Hastalıkları Uzmanı
            </p>

            {/* WHITE CARD */}
            <div className="mt-8 w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl">
              <div className="space-y-4 text-base leading-6 text-[#464747]" style={{ fontFamily: 'Lumios Marker, sans-serif' }}>
                <p>
                  Tıp eğitimini Kocaeli Üniversitesi Tıp Fakültesi'nde
                  tamamlayan Mümtaz Aktaş, uzmanlık eğitimini İnönü
                  Üniversitesi Tıp Fakültesi'nde gerçekleştirmiştir.
                </p>

                <p>
                  Yenidoğan ve prematüre bebeklerin takibi, çocukların
                  beslenme ve büyüme gelişimi, solunum sistemi, alerji ve
                  üriner sistem hastalıkları alanlarında hizmet vermiştir.
                </p>

                <p>
                  Rich Hospital, Olimpos Hastanesi, Yaşam Hastanesi ve
                  Gaziantep'te çeşitli sağlık merkezlerinde görev almıştır.
                </p>

                <p>
                  Hasta memnuniyetini ön planda tutan Dr. Aktaş, çocukların
                  sağlıklı gelişimini desteklemek amacıyla çalışmalarını
                  sürdürmektedir.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
