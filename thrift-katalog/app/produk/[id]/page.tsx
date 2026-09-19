"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

import type { Product } from "@/lib/types";
import { STORE } from "@/lib/config";

export default function ProductPage() {

  // ============================================================
  // 1. AMBIL ID PRODUK
  // ============================================================

  const params = useParams<{ id: string }>();


  // ============================================================
  // 2. STATE PRODUK
  // ============================================================

  const [p, setP] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Foto yang sedang ditampilkan sebagai foto utama
  const [selectedImage, setSelectedImage] = useState(0);


  // ============================================================
  // 3. AMBIL DATA PRODUK DARI FIREBASE
  // ============================================================

  useEffect(() => {

    if (!params.id) return;

    getDoc(
      doc(db, "products", params.id)
    )
      .then((s) => {

        if (s.exists()) {

          setP({
            id: s.id,
            ...(s.data() as Omit<Product, "id">),
          });

        } else {

          setP(null);

        }

      })
      .finally(() => {
        setLoading(false);
      });

  }, [params.id]);


  // ============================================================
  // 4. LOADING
  // ============================================================

  if (loading) {

    return (
      <main className="mx-auto max-w-6xl px-4 py-20">
        Memuat produk...
      </main>
    );

  }


  // ============================================================
  // 5. PRODUK TIDAK DITEMUKAN
  // ============================================================

  if (!p) {

    return (
      <main className="mx-auto max-w-6xl px-4 py-20">
        Produk tidak ditemukan.
      </main>
    );

  }


  // ============================================================
  // 6. DATA FOTO
  // ============================================================

  const images = p.images?.filter(Boolean) ?? [];

  const currentImage =
    images[selectedImage] || images[0];


  // ============================================================
  // 7. PESAN WHATSAPP
  // ============================================================

  const msg =
    `Halo, saya ingin memesan ${p.name}. ` +
    `Harga: Rp${Number(p.price).toLocaleString("id-ID")}.`;


  // ============================================================
  // 8. HALAMAN PRODUK
  // ============================================================

  return (

    <main className="mx-auto max-w-6xl px-4 py-12">


      {/* ========================================================
          KEMBALI KE KATALOG
          ======================================================== */}

      <Link
        href="/katalog"
        className="text-sm text-neutral-500 hover:text-black"
      >
        ← Kembali ke katalog
      </Link>


      <div className="mt-6 grid gap-10 md:grid-cols-2">


        {/* ======================================================
            9. GALERI FOTO
            ====================================================== */}

        <div>


          {/* ----------------------------------------------------
              FOTO UTAMA
              ---------------------------------------------------- */}

          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100">

            {currentImage ? (

              <img
                src={currentImage}
                alt={p.name}
                className="h-full w-full object-cover"
              />

            ) : (

              <div className="flex h-full items-center justify-center text-neutral-400">
                Tidak ada foto
              </div>

            )}

          </div>


          {/* ----------------------------------------------------
              THUMBNAIL FOTO
              ---------------------------------------------------- */}

          {images.length > 1 && (

            <div className="mt-4 grid grid-cols-5 gap-3">

              {images.map((image, index) => (

                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-xl bg-neutral-100 ${
                    selectedImage === index
                      ? "ring-2 ring-black"
                      : "ring-1 ring-black/10"
                  }`}
                >

                  <img
                    src={image}
                    alt={`${p.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />

                </button>

              ))}

            </div>

          )}

        </div>


        {/* ======================================================
            10. INFORMASI PRODUK
            ====================================================== */}

        <div>


          {/* Kategori */}
          <p className="text-sm uppercase tracking-wider text-neutral-500">
            {p.category}
          </p>


          {/* Nama produk */}
          <h1 className="mt-2 text-4xl font-black">
            {p.name}
          </h1>


          {/* Harga */}
          <p className="mt-4 text-2xl font-bold">
            Rp{Number(p.price).toLocaleString("id-ID")}
          </p>


          {/* Deskripsi */}
          <p className="mt-6 leading-7 text-neutral-600">
            {p.description}
          </p>


          {/* ====================================================
              UKURAN
              ==================================================== */}

          <p className="mt-8 font-semibold">
            Ukuran
          </p>

          <div className="mt-3 flex flex-wrap gap-2">

            {p.sizes?.map((size) => (

              <span
                key={size}
                className="rounded-lg border px-4 py-2 text-sm"
              >
                {size}
              </span>

            ))}

          </div>


          {/* ====================================================
              WARNA
              ==================================================== */}

          <p className="mt-6 font-semibold">
            Warna
          </p>

          <div className="mt-3 flex flex-wrap gap-2">

            {p.colors?.map((color) => (

              <span
                key={color}
                className="rounded-lg border px-4 py-2 text-sm"
              >
                {color}
              </span>

            ))}

          </div>


          {/* ====================================================
              WHATSAPP
              ==================================================== */}

          <a
            href={`https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-9 block rounded-2xl bg-black px-6 py-4 text-center font-bold text-white transition-opacity hover:opacity-80"
          >
            Pesan via WhatsApp
          </a>

        </div>

      </div>

    </main>

  );
}