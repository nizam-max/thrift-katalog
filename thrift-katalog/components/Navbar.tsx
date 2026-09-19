import Link from "next/link";
import { STORE } from "@/lib/config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        {/* Logo + Nama Toko */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt={STORE.name}
            className="h-10 w-10 object-contain"
          />

          <span className="text-xl font-black tracking-tight">
            {STORE.name}
          </span>
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-4 text-sm font-semibold">
          <Link href="/katalog">
            Katalog
          </Link>

          <a
            href={STORE.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </nav>

      </div>
    </header>
  );
}