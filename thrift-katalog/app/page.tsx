"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/products";
import type { Product } from "@/lib/types";
import { STORE } from "@/lib/config";

export default function Home() {

  // ============================================================
  // 1. DATA PRODUK
  // ============================================================

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  // Produk pertama digunakan sebagai foto utama HERO
  const hero = products[0];


  // ============================================================
  // 2. HALAMAN WEBSITE
  // ============================================================

  return (
    <main>


      {/* ========================================================
          3. HERO / BAGIAN PALING ATAS
          ======================================================== */}

      <section className="bg-black text-white">

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-24 md:grid-cols-2 md:items-center">


          {/* ------------------------------------------------------
              3A. TEKS HERO
              ------------------------------------------------------ */}

          <div>

            {/* Nama toko */}
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              {STORE.name}
            </p>


            {/* JUDUL UTAMA
                GANTI TEKS DI SINI
            */}
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">
              Selamat Datang
              <br />
              di Katalog kami.
            </h1>


            {/* TAGLINE
                Diambil dari lib/config.ts
            */}
            <p className="mt-6 max-w-lg text-neutral-300">
              {STORE.tagline}
            </p>


            {/* TOMBOL KATALOG */}
            <Link
              href="/katalog"
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black"
            >
              Lihat Katalog
            </Link>

          </div>


          {/* ------------------------------------------------------
              3B. FOTO HERO
              ------------------------------------------------------ */}

          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-900">

            {hero ? (

              <img
                src={hero.images?.[0]}
                alt={hero.name}
                className="h-full w-full object-cover"
              />

            ) : (

              <div className="flex h-full items-center justify-center text-neutral-500">
                Belum ada produk
              </div>

            )}

          </div>

        </div>

      </section>



      {/* ========================================================
          4. KOLEKSI TERBARU
          ======================================================== */}

      <section className="mx-auto max-w-6xl px-4 py-16">


        {/* ------------------------------------------------------
            4A. JUDUL KOLEKSI
            ------------------------------------------------------ */}

        <div className="flex items-end justify-between">

          <div>

            <p className="text-sm text-neutral-500">
              PILIHAN
            </p>

            <h2 className="mt-1 text-3xl font-black">
              Koleksi terbaru
            </h2>

          </div>


          {/* LINK KE SEMUA KATALOG */}
          <Link
            href="/katalog"
            className="text-sm font-semibold underline"
          >
            Lihat semua
          </Link>

        </div>



        {/* ------------------------------------------------------
            4B. DAFTAR PRODUK
            ------------------------------------------------------ */}

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">

          {products.slice(0, 6).map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>



      {/* ========================================================
          5. WHATSAPP / BAGIAN PESAN
          ======================================================== */}

      <section className="mx-4 mb-10 rounded-3xl bg-neutral-100">

        <div className="mx-auto max-w-3xl px-6 py-16 text-center">


          {/* JUDUL */}
          <h2 className="text-3xl font-black">
            Mau pesan?
          </h2>


          {/* DESKRIPSI */}
          <p className="mt-3 text-neutral-600">
            Pilih produk dari katalog lalu lanjutkan pesanan
            langsung melalui WhatsApp.
          </p>


          {/* TOMBOL WHATSAPP */}
          <a
            href={`https://wa.me/${STORE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block rounded-full bg-black px-7 py-3 font-semibold text-white"
          >
            Chat WhatsApp
          </a>

        </div>

      </section>


    </main>
  );
}