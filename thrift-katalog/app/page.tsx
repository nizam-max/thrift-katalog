"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/products";
import type { Product } from "@/lib/types";
import { STORE } from "@/lib/config";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  const hero = products[0];

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        {/* Aksen gradient/glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400/30 via-fuchsia-500/20 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/20 to-transparent blur-3xl" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-block rounded-full border border-neutral-700 px-4 py-1 text-xs uppercase tracking-[0.3em] text-neutral-300">
              {STORE.name}
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] md:text-7xl">
              Style yang
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-fuchsia-500 bg-clip-text text-transparent">
                punya karakter.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-neutral-300">{STORE.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/katalog"
                className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200"
              >
                Lihat Katalog
              </Link>
              <a
                href={`https://wa.me/${STORE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full border border-neutral-600 px-6 py-3 font-semibold text-white transition hover:border-white"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>

          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/10">
            {hero ? (
              <img
                src={hero.images?.[0]}
                alt={hero.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-neutral-500">
                <span className="text-4xl">🧺</span>
                <span className="text-sm">Produk segera hadir</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* KOLEKSI TERBARU */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-neutral-500">PILIHAN</p>
            <h2 className="mt-1 text-3xl font-black">Koleksi terbaru</h2>
          </div>
          <Link href="/katalog" className="text-sm font-semibold underline">
            Lihat semua
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section className="mx-4 mb-10 rounded-3xl bg-neutral-100">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black">Mau pesan?</h2>
          <p className="mt-3 text-neutral-600">
            Pilih produk dari katalog lalu lanjutkan pesanan langsung melalui
            WhatsApp.
          </p>
          <a
            href={`https://wa.me/${STORE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block rounded-full bg-black px-7 py-3 font-semibold text-white transition hover:bg-neutral-800"
          >
            Chat WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}