import Link from "next/link";
import type { Product } from "@/lib/types";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const isAvailable = product.available !== false;
  const rotate = index % 3 === 0 ? "-rotate-1" : index % 3 === 1 ? "rotate-1" : "rotate-0";

  return (
    <Link
      href={`/produk/${product.id}`}
      className={`group block ${rotate} transition-transform duration-200 hover:rotate-0`}
    >
      <div className="relative border-2 border-dashed border-[#211D17]/30 bg-[#F7F2E4] p-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#DDD3B8]">
          <img
            src={
              product.images?.[0] ||
              "https://placehold.co/900x1100/EDE7D8/211D17?text=No+Image"
            }
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />

          {!isAvailable && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#211D17]/50">
              <span className="rotate-[-8deg] border-2 border-[#EDE7D8] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#EDE7D8]">
                Habis
              </span>
            </div>
          )}

          {product.category && (
            <span className="absolute left-2 top-2 rounded-full border border-[#B04A26]/70 bg-[#EDE7D8]/90 px-2.5 py-0.5 text-[10px] font-semibold text-[#B04A26]">
              {product.category}
            </span>
          )}
        </div>

        {/* lubang tag */}
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#EDE7D8] ring-2 ring-[#211D17]/30" />
      </div>

      <div className="mt-3 px-1">
        <h3 className="line-clamp-1 text-sm font-semibold text-[#211D17]">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-bold text-[#33465B]">
          Rp{Number(product.price || 0).toLocaleString("id-ID")}
        </p>
      </div>
    </Link>
  );
}