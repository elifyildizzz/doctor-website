"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { currentLang, setLang, t } = useLanguage();
  const homeAria = t.nav.home;
  const menuToggleLabel =
    currentLang === "TR"
      ? "Menüyü aç veya kapat"
      : currentLang === "EN"
        ? "Open or close menu"
        : "Открыть или закрыть меню";

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    router.push("/", { scroll: true });
  };

  const closeMenu = () => setIsMenuOpen(false);

  const langBtnClass = (lang: Language) =>
    `px-3 py-1 text-sm text-white transition-colors ${
      currentLang === lang ? "bg-white/20" : "hover:bg-white/10"
    }`;

  const mobileLangBtnClass = (lang: Language) =>
    `px-1.5 py-0.5 text-[11px] text-white transition-colors ${
      currentLang === lang ? "bg-white/20" : "hover:bg-white/10"
    }`;

  const mobileAppointmentLabel =
    currentLang === "TR" ? "Randevu" : currentLang === "EN" ? "Book" : "Запись";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#3d636d]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:h-24 sm:px-6">
        {/* LEFT: LOGO */}
        <div className="flex items-center">
          <Link href="/" onClick={handleHomeClick} aria-label={homeAria}>
            <Image
              src="/logo2.png"
              alt={t.about.name}
              width={210}
              height={70}
              priority
              className="h-auto w-[132px] object-contain sm:w-[185px] md:w-[210px]"
            />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-2 md:gap-10">
          {/* MOBILE LANGUAGE SWITCHER */}
          <div className="flex overflow-hidden rounded-full border border-white/40 md:hidden">
            <button
              type="button"
              className={mobileLangBtnClass("TR")}
              onClick={() => setLang("TR")}
            >
              TR
            </button>
            <button
              type="button"
              className={mobileLangBtnClass("EN")}
              onClick={() => setLang("EN")}
            >
              EN
            </button>
            <button
              type="button"
              className={mobileLangBtnClass("RU")}
              onClick={() => setLang("RU")}
            >
              RU
            </button>
          </div>

          {/* MOBILE CTA */}
          <Link
            href="/contact"
            className="md:hidden rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-[#3d636d] hover:bg-gray-100 min-w-[66px] text-center"
            onClick={closeMenu}
          >
            {mobileAppointmentLabel}
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-white text-base">
            <Link href="/" className="hover:opacity-80" onClick={handleHomeClick}>
              {t.nav.home}
            </Link>
            <Link href="/doctor" className="hover:opacity-80">
              {t.nav.doctor}
            </Link>
            <Link href="/services" className="hover:opacity-80">
              {t.nav.services}
            </Link>
            <Link href="/contact" className="hover:opacity-80">
              {t.nav.contact}
            </Link>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuToggleLabel}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* LANGUAGE SWITCHER (DESKTOP) */}
          <div className="hidden md:flex overflow-hidden rounded-full border border-white/40">
            <button type="button" className={langBtnClass("TR")} onClick={() => setLang("TR")}>
              TR
            </button>
            <button type="button" className={langBtnClass("EN")} onClick={() => setLang("EN")}>
              EN
            </button>
            <button type="button" className={langBtnClass("RU")} onClick={() => setLang("RU")}>
              RU
            </button>
          </div>

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="hidden md:block rounded-full bg-white px-6 py-2 text-sm font-medium text-[#3d636d] hover:bg-gray-100"
          >
            {t.nav.appointment}
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-[#3d636d]/95 shadow-lg backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-white text-base">
            <Link
              href="/"
              className="hover:opacity-80 py-2 border-b border-white/20"
              onClick={handleHomeClick}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/doctor"
              className="hover:opacity-80 py-2 border-b border-white/20"
              onClick={closeMenu}
            >
              {t.nav.doctor}
            </Link>
            <Link
              href="/services"
              className="hover:opacity-80 py-2 border-b border-white/20"
              onClick={closeMenu}
            >
              {t.nav.services}
            </Link>
            <Link href="/contact" className="hover:opacity-80 py-2" onClick={closeMenu}>
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
