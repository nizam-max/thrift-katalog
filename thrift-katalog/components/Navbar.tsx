"use client";

import Link from "next/link";
import { STORE } from "@/lib/config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">

      {/* =====================================================
          SOCIAL MEDIA — BAGIAN ATAS
          ===================================================== */}

      <div className="border-b bg-neutral-50">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-5 px-4 py-2">

          {/* Instagram */}
          <a
            href={STORE.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="transition-opacity hover:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
              />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>


          {/* TikTok */}
          <a
            href={STORE.tiktok}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="transition-opacity hover:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M16.7 3c.3 1.8 1.3 3.1 3.3 3.7v3.1c-1.3 0-2.5-.4-3.5-1v6.3c0 3.7-2.6 5.9-6 5.9-3.1 0-5.5-2.2-5.5-5.2 0-3.2 2.7-5.5 6.1-5.5.4 0 .8 0 1.2.1v3.1c-.4-.1-.8-.2-1.2-.2-1.4 0-2.7.9-2.7 2.3 0 1.3 1 2.2 2.2 2.2 1.5 0 2.5-.9 2.5-2.8V3h3.6z" />
            </svg>
          </a>


          {/* Facebook */}
          <a
            href={STORE.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="transition-opacity hover:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.6v8h2.9z" />
            </svg>
          </a>

        </div>
      </div>


      {/* =====================================================
          NAVBAR UTAMA
          ===================================================== */}

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        {/* =================================================
            LOGO + NAMA TOKO
            ================================================= */}

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


        {/* =================================================
            MENU
            ================================================= */}

        <nav className="flex items-center gap-5 text-sm font-semibold">

          <Link
            href="/katalog"
            className="transition-opacity hover:opacity-60"
          >
            Katalog
          </Link>

        </nav>

      </div>

    </header>
  );
}