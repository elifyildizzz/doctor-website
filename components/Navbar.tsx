"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#3d636d]/90 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center px-6">
        
        {/* LEFT: LOGO */}
        <div className="flex items-center">
          <Image
            src="/logo2.png"
            alt="Clinic Logo"
            width={210}
            height={70}
            priority
            className="object-contain"
          />
        </div>

        {/* RIGHT BLOCK: MENU + LANGUAGE SWITCHER + CTA BUTTON */}
        <div className="ml-auto flex items-center gap-10">
          
          {/* DESKTOP NAVIGATION MENU */}
          <nav className="hidden md:flex items-center gap-10 text-white text-base">
            <Link href="/" className="hover:opacity-80" onClick={handleHomeClick}>
              Anasayfa
            </Link>
            <Link href="/doctor" className="hover:opacity-80">
              Doktorumuz
            </Link>
            <Link href="/services" className="hover:opacity-80">
              Hizmetler
            </Link>
            <Link href="#iletisim" className="hover:opacity-80">
              İletişim
            </Link>
          </nav>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menüyü aç/kapat"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* LANGUAGE SWITCHER (UI ONLY FOR NOW) */}
          <div className="hidden md:flex overflow-hidden rounded-full border border-white/40">
            <button className="px-3 py-1 text-sm text-white bg-white/20">
              TR
            </button>
            <button className="px-3 py-1 text-sm text-white">
              EN
            </button>
            <button className="px-3 py-1 text-sm text-white">
              RU
            </button>
          </div>

          {/* CALL TO ACTION BUTTON */}
          <button className="hidden md:block rounded-full bg-white px-6 py-2 text-sm font-medium text-[#3d636d] hover:bg-gray-100">
            Randevu Al
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3d636d]/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-white text-base">
            <Link 
              href="/" 
              className="hover:opacity-80 py-2 border-b border-white/20"
              onClick={handleHomeClick}
            >
              Anasayfa
            </Link>
            <Link 
              href="/doctor" 
              className="hover:opacity-80 py-2 border-b border-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Doktorumuz
            </Link>
            <Link 
              href="/services" 
              className="hover:opacity-80 py-2 border-b border-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Hizmetler
            </Link>
            <Link 
              href="#iletisim" 
              className="hover:opacity-80 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
            <button className="mt-4 rounded-full bg-white px-6 py-2 text-sm font-medium text-[#3d636d] hover:bg-gray-100">
              Randevu Al
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
