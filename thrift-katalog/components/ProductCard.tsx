import Link from "next/link";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const isAvailable = product.available !== false;

  return (
    <Link
      href={`/produk/${product.id}`}
      className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-black/20"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
        <img
          src={
            product.images?.[0] ||
            "https://placehold.co/900x1100/png?text=No+Image"
          }
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay biar teks/badge kebaca di atas foto */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Kategori sebagai badge di atas foto */}
        {product.category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-700 backdrop-blur">
            {product.category}
          </span>
        )}

        {/* Status habis sebagai ribbon, bukan teks polos */}
        {!isAvailable && (
          <span className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Habis
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="line-clamp-1 font-bold text-neutral-900">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-base font-semibold text-neutral-900">
            Rp{Number(product.price || 0).toLocaleString("id-ID")}
          </p>
          <span
            className={`text-xs font-semibold ${
              isAvailable ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {isAvailable ? "Tersedia" : "Habis"}
          </span>
        </div>
      </div>
    </Link>
  );
}