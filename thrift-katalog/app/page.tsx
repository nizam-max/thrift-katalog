"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/products";
import type { Product } from "@/lib/types";
import { STORE } from "@/lib/config";

const FACTS = [
  {
    title: "Dicek satu-satu",
    desc: "Tiap barang kami periksa sebelum difoto, bukan asal kirim.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Kirim ke seluruh Indonesia",
    desc: "Dari Sabang sampai Merauke, tinggal pilih ekspedisi.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 16V7a1 1 0 011-1h9v10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 10h4l3 3v3h-7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="17.5" r="1.7" />
        <circle cx="17" cy="17.5" r="1.7" />
      </svg>
    ),
  },
  {
    title: "Balas cepat di WhatsApp",
    desc: "Tanya stok, ukuran, atau nego, kami usahakan gercep.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 12a8 8 0 1114.3 4.9L20 20l-3.3-1.7A8 8 0 014 12z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Belanja tanpa buang-buang",
    desc: "Baju second, tapi kualitas dan gayanya nggak kaleng-kaleng.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3c2 3 2 5 0 7-2-2-2-4 0-7z" strokeLinejoin="round" />
        <path d="M12 10v11M7 21h10" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  const hero = products[0];

  return (
    <main className="bg-[#EDE7D8] text-[#211D17]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div>
            <h1
              className="text-[2.75rem] leading-[0.95] tracking-tight md:text-6xl"
              style={{ fontFamily: "var(--font-display, 'Anton', sans-serif)" }}
            >
              Cari outfit lawas
              <br />
              yang masih punya nyawa.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#211D17]/75">
              {STORE.tagline || "Kami sortir langsung dari tumpukan bal, kamu tinggal pilih yang paling nempel di hati."}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/katalog"
                className="bg-[#211D17] px-6 py-3 text-sm font-semibold text-[#EDE7D8] transition hover:bg-[#33465B]"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
                }}
              >
                Lihat Katalog
              </Link>
              <a
                href={`https://wa.me/${STORE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="border-b-2 border-[#33465B] pb-0.5 text-sm font-semibold text-[#211D17] transition hover:border-[#211D17]"
              >
                Chat admin
              </a>
            </div>
          </div>

          {/* Tag foto hero */}
          <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
            <div
              className="relative aspect-[4/5] -rotate-3 border-2 border-dashed border-[#211D17]/40 bg-[#DDD3B8] p-3 shadow-[6px_6px_0_0_rgba(33,29,23,0.12)]"
              style={{
                clipPath:
                  "polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)",
              }}
            >
              <div className="h-full w-full overflow-hidden bg-[#EDE7D8]">
                {hero ? (
                  <img
                    src={hero.images?.[0]}
                    alt={hero.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center text-[#211D17]/50">
                    <span className="text-sm">Foto nyusul,</span>
                    <span className="text-sm">katalog tetap bisa dilihat.</span>
                  </div>
                )}
              </div>

              {/* lubang tag */}
              <span className="absolute left-3 top-3 h-3 w-3 rounded-full bg-[#EDE7D8] ring-2 ring-[#211D17]/40" />
            </div>

            {/* cap stempel */}
            <div className="absolute -bottom-5 -right-4 flex h-20 w-20 rotate-6 items-center justify-center rounded-full border-2 border-[#B04A26] text-center text-[10px] font-bold uppercase leading-tight text-[#B04A26]">
              Pilihan
              <br />
              kami
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS — gaya struk, bukan kartu */}
      <section className="border-y border-[#211D17]/15 bg-[#DDD3B8]/50">
        <div className="mx-auto grid max-w-6xl divide-y divide-[#211D17]/15 px-4 md:grid-cols-4 md:divide-x md:divide-y-0">
          {FACTS.map((f) => (
            <div key={f.title} className="flex items-start gap-3 py-6 md:flex-col md:gap-4 md:px-6">
              <span className="text-[#33465B]">{f.icon}</span>
              <div>
                <p className="font-semibold">{f.title}</p>
                <p className="mt-1 text-sm text-[#211D17]/65">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KOLEKSI TERBARU */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-lg">
          <h2
            className="text-3xl leading-tight md:text-4xl"
            style={{ fontFamily: "var(--font-display, 'Anton', sans-serif)" }}
          >
            Baru masuk minggu ini
          </h2>
          <p className="mt-2 text-sm text-[#211D17]/65">
            Update tiap minggu, stok satuan — kalau kesukaan langsung diamankan aja.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
          {products.length > 0
            ? products
                .slice(0, 6)
                .map((p, i) => <ProductCard key={p.id} product={p} index={i} />)
            : Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/5] animate-pulse border-2 border-dashed border-[#211D17]/15 bg-[#DDD3B8]/40"
                />
              ))}
        </div>

        <div className="mt-12">
          <Link
            href="/katalog"
            className="border-b-2 border-[#33465B] pb-0.5 text-sm font-semibold"
          >
            Lihat semua produk
          </Link>
        </div>
      </section>

      {/* CTA — gaya kertas struk sobek */}
      <section className="px-4 pb-16">
        <div className="relative mx-auto max-w-3xl">
          <div
            className="relative rotate-[-1deg] bg-[#33465B] px-8 py-14 text-center text-[#EDE7D8] md:px-16"
            style={{
              clipPath:
                "polygon(0 12px, 4% 0, 8% 12px, 12% 0, 16% 12px, 20% 0, 24% 12px, 28% 0, 32% 12px, 36% 0, 40% 12px, 44% 0, 48% 12px, 52% 0, 56% 12px, 60% 0, 64% 12px, 68% 0, 72% 12px, 76% 0, 80% 12px, 84% 0, 88% 12px, 92% 0, 96% 12px, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display, 'Anton', sans-serif)" }}
            >
              Udah nemu yang cocok?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-[#EDE7D8]/80">
              Pilih dari katalog, kirim nama produknya ke WhatsApp, sisanya biar kami yang urus.
            </p>
            <a
              href={`https://wa.me/${STORE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block bg-[#EDE7D8] px-7 py-3 text-sm font-semibold text-[#211D17] transition hover:bg-white"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
              }}
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}