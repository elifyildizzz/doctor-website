"use client";

import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

type InfoCard = {
  label: string;
  value: string;
  href?: string;
};

export default function ContactPage() {
  const cards: InfoCard[] = [
    {
      label: "Telefon",
      value: "+90 5xx xxx xx xx",
      href: "tel:+905XXXXXXXXX",
    },
    {
      label: "E-posta",
      value: "info@ornekklinik.com",
      href: "mailto:info@ornekklinik.com",
    },
    {
      label: "Adres",
      value: "Antalya / Kemer (Mahalle, Sokak, No: …)",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="relative w-full min-h-[calc(100vh-96px)] bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 min-h-[calc(100vh-96px)] grid items-center">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <h1 className="text-4xl font-semibold text-[#464747] leading-tight">
                İletişim
              </h1>
              <p className="mt-4 text-lg text-[#464747]/90">
                Randevu ve danışma için aşağıdaki kanallardan bize ulaşabilirsiniz.
              </p>

              <div className="mt-8 grid gap-4 sm:gap-5">
                {cards.map((c) => {
                  const CardInner = (
                    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                      <p className="text-base font-semibold text-[#3d636d]">
                        {c.label}
                      </p>
                      <p className="mt-2 text-base font-medium text-[#464747]">
                        {c.value}
                      </p>
                    </div>
                  );

                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      className="block transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3d636d]/30 rounded-2xl"
                    >
                      {CardInner}
                    </a>
                  ) : (
                    <div key={c.label}>{CardInner}</div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT (MAP) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="w-full"
            >
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <div className="relative h-[420px] w-full md:h-[520px]">
                  {/* Google Maps Embed (replace q= with exact address) */}
                  <iframe
                    title="Harita"
                    src="https://www.google.com/maps?q=Kemer%20Antalya&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
