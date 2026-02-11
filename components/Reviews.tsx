"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Review = {
  id: number;
  rating: 5 | 4;
  text: string;
  tag?: string;
};

/**
 * Temsili anonim isim üretimi
 * Örn: N**** Y*****
 */
function makeMaskedName(id: number) {
  // sadece çeşitlilik için harf havuzu
  const firstLetters = ["N", "A", "M", "S", "E", "K", "H"];
  const lastLetters = ["Y", "D", "K", "Ç", "A", "B", "T"];

  const first = firstLetters[id % firstLetters.length];
  const last = lastLetters[id % lastLetters.length];

  return `${first}**** ${last}*****`;
}

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < full ? "currentColor" : "none"}
          className={i < full ? "text-[#3d636d]" : "text-[#3d636d]/35"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.6 6.7L12 16.9 5.8 20l1.6-6.7L2.3 8.8l6.8-.6L12 2z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function Arrow({
  dir,
  onClick,
  disabled,
  ariaLabel,
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={[
        "absolute top-1/2 -translate-y-1/2 z-20",
        "h-12 w-12 rounded-full border border-black/10 bg-white shadow-md md:h-14 md:w-14",
        "flex items-center justify-center",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        dir === "left" ? "-left-4 md:-left-6" : "-right-4 md:-right-6",
      ].join(" ")}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className="text-[#3d636d]/70"
        xmlns="http://www.w3.org/2000/svg"
      >
        {dir === "left" ? (
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export default function Reviews() {
  const { t } = useLanguage();

  const reviews: Review[] = useMemo(
    () => t.reviews.items,
    [t.reviews.items]
  );

  const palette = useMemo(() => ["#eca093", "#b5d4c5", "#8dc9c9"] as const, []);

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const sync = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 2);
    setCanRight(el.scrollLeft < max - 2);
  };

  const scrollOne = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card='1']");
    const w = card ? card.offsetWidth : 380;
    el.scrollBy({ left: dir === "left" ? -w - 24 : w + 24, behavior: "smooth" });
    window.setTimeout(sync, 250);
  };

  return (
    <section id="yorumlar" className="w-full bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h2 className="text-2xl font-light text-[#464747] sm:text-3xl md:text-4xl">
            {t.reviews.title}
          </h2>
    
        </motion.div>

        <div className="relative mt-8 md:mt-10">
          <Arrow
            dir="left"
            onClick={() => scrollOne("left")}
            disabled={!canLeft}
            ariaLabel={t.reviews.prevAria}
          />
          <Arrow
            dir="right"
            onClick={() => scrollOne("right")}
            disabled={!canRight}
            ariaLabel={t.reviews.nextAria}
          />

          <div
            ref={scrollerRef}
            onScroll={sync}
            onMouseEnter={sync}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 pb-2 pt-4 sm:gap-6 sm:px-2 sm:pt-6
                       [-ms-overflow-style:none] [scrollbar-width:none]
                       [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((r, idx) => {
              const color = palette[idx % palette.length];

              return (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="snap-start shrink-0"
                >
                  <div data-card="1" className="relative w-[280px] sm:w-[340px] md:w-[380px]">
                    <div
                      className="absolute -top-2 left-2 h-full w-full rounded-3xl"
                      style={{ backgroundColor: color, opacity: 0.25 }}
                    />

                    <div
                      className="relative rounded-3xl border border-black/10 bg-white shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${color}26, #ffffff)`,
                      }}
                    >
                      <div className="flex h-[190px] flex-col p-5 sm:h-[210px] sm:p-7">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white border border-black/5">
                            <Image
                              src="/profile.svg"
                              alt=""
                              width={22}
                              height={22}
                              className="opacity-80"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-[#464747] sm:text-base">
                                  {makeMaskedName(r.id)}
                                </p>
                                {r.tag && (
                                  <p className="mt-0.5 text-[11px] font-medium text-[#464747]/60 sm:text-xs">
                                    {r.tag}
                                  </p>
                                )}
                              </div>
                              <Stars rating={r.rating} />
                            </div>

                            <p className="mt-3 text-xs leading-5 text-[#464747]/80 line-clamp-3 sm:mt-4 sm:text-sm sm:leading-6">
                              {r.text}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/50" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
