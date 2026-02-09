"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#2c5f7c] to-[#3d636d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* LEFT: logo + slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/logo2.png"
                alt="Uzm. Dr. Mümtaz Aktaş"
                width={180}
                height={60}
                priority
                className="object-contain"
              />
            </div>
            <p className="text-sm text-white/80 italic">
              "Çocuklarınızın sağlığı bizim için her şeyden değerlidir"
            </p>
          </motion.div>

          {/* MIDDLE: tedavilerimiz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold mb-4">Tedavilerimiz</h3>
            <nav className="grid grid-cols-2 gap-3">
              <Link href="#hizmetler" className="group flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40"></span>
                Sağlam Çocuk İzlemi
              </Link>
              <Link href="#hizmetler" className="group flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40"></span>
                Prematüre Bebek İzlemi
              </Link>
              <Link href="#hizmetler" className="group flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40"></span>
                Aşı Takibi
              </Link>
              <Link href="#hizmetler" className="group flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40"></span>
                Enfeksiyon Testleri
              </Link>
              <Link href="#hizmetler" className="group flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40"></span>
                Kan Alma ve Laboratuvar
              </Link>
              <Link href="#hizmetler" className="group flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40"></span>
                Emzirme Danışmanlığı
              </Link>
            </nav>
          </motion.div>

          {/* RIGHT: iletişim */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <a href="tel:+905XXXXXXXXX" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +90 5xx xxx xx xx
              </a>
              <a href="mailto:info@ornekklinik.com" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@ornekklinik.com
              </a>
              <div className="pt-3 text-sm text-white/80">
                <p>Antalya / Kemer</p>
                <p className="text-xs text-white/60">Mahalle, Sokak, No: …</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar with social media */}
        <div className="mt-16 border-t border-white/20 pt-8">
          <div className="flex flex-col gap-6 text-center text-sm text-white/70 md:flex-row md:justify-between md:items-center">
            <p>© {new Date().getFullYear()} Uzm. Dr. Mümtaz Aktaş - Antalya Kemer Çocuk Sağlığı ve Hastalıkları Uzmanı @tüm hakları saklıdır</p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
