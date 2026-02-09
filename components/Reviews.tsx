"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";

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
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Önceki" : "Sonraki"}
      className={[
        "absolute top-1/2 -translate-y-1/2 z-20",
        "h-14 w-14 rounded-full bg-white shadow-md border border-black/10",
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
  const reviews: Review[] = useMemo(
    () => [
      {
        id: 1,
        rating: 5,
        tag: "İletişim & takip",
        text: "Muayene süreci düzenliydi. Sorularımıza hızlı dönüş aldık ve takip planı netti.",
      },
      {
        id: 2,
        rating: 5,
        tag: "Güven veren yaklaşım",
        text: "Şikâyetleri dikkatle dinledi. Gereksiz ilaç yazmadan adım adım ilerledi.",
      },
      {
        id: 3,
        rating: 5,
        tag: "Çocuk dostu ortam",
        text: "Klinik ferah ve çocuklar için rahat. Randevu saatine uyum iyiydi.",
      },
      {
        id: 4,
        rating: 5,
        tag: "Açıklayıcı",
        text: "Tanı ve tedavi seçeneklerini anlaşılır şekilde anlattı. İçimiz rahatladı.",
      },
      {
        id: 5,
        rating: 4,
        tag: "Genel memnuniyet",
        text: "Genel olarak memnun kaldık. Bekleme süresi makuldü, ortam temizdi.",
      },
    ],
    []
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
    <section id="yorumlar" className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h2 className="text-3xl font-light text-[#464747] md:text-4xl">
            Sizden Gelen Yorumlar
          </h2>
    
        </motion.div>

        <div className="relative mt-10">
          <Arrow dir="left" onClick={() => scrollOne("left")} disabled={!canLeft} />
          <Arrow dir="right" onClick={() => scrollOne("right")} disabled={!canRight} />

          <div
            ref={scrollerRef}
            onScroll={sync}
            onMouseEnter={sync}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 pt-6 px-2
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
                  <div data-card="1" className="relative w-[340px] md:w-[380px]">
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
                      <div className="flex h-[210px] flex-col p-7">
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
                                <p className="truncate text-base font-semibold text-[#464747]">
                                  {makeMaskedName(r.id)}
                                </p>
                                {r.tag && (
                                  <p className="mt-0.5 text-xs font-medium text-[#464747]/60">
                                    {r.tag}
                                  </p>
                                )}
                              </div>
                              <Stars rating={r.rating} />
                            </div>

                            <p className="mt-4 text-sm leading-6 text-[#464747]/80 line-clamp-3">
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
