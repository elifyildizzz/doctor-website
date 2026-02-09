"use client";

import Navbar from "../../../components/Navbar";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Footer from "../../../components/Footer";

export default function BloodCollectionLaboratoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <section className="py-14 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-3xl font-semibold text-[#464747] leading-tight md:text-4xl text-center">
              Kan Alma ve Laboratuvar Testleri
            </h1>

            <div className="mt-10 space-y-7 text-lg text-[#464747]/80 leading-8 text-justify">
              <p>
                Anlaşmalı laboratuvarlarımızda ayrıntılı olarak genetik ve alerji testleri dahil olmak üzere tüm testlerin örnekleri klinik ortamında güvenli bir şekilde alınıp laboratuvarlara gönderimi yapılmaktadır.
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
