# KOESRIET Katalog V2

Next.js + Firebase Authentication + Firestore + Cloudinary + Vercel.
Firebase Storage tidak digunakan.

## Firebase
Project ID: thrift-445
Web App: koesriet-katalog

## Cloudinary
Cloud name: tqiynhu5
Unsigned upload preset: baju_catalog

## Admin
Akun admin dibuat melalui Firebase Authentication.
UID admin harus mempunyai dokumen:
`admins/{UID}`

Contoh field:
`role: "admin"`

## Firestore Rules
Gunakan isi `firestore.rules` pada Firebase Console → Firestore → Rules lalu Publish.

## Menjalankan lokal
1. Pastikan Node.js LTS terpasang.
2. Jalankan `npm install`.
3. Jalankan `npm run dev`.
4. Buka `http://localhost:3000`.
5. Admin: `http://localhost:3000/admin/login`.

`.env.local` sudah disiapkan untuk project Firebase/Cloudinary yang dikonfigurasi pada tahap setup. Jangan commit file `.env.local` ke GitHub.

## Deploy Vercel
Import repository GitHub ke Vercel.
Tambahkan environment variables yang sama seperti `.env.local` di Vercel Project Settings → Environment Variables.
Build command: `next build`

## Fitur
- Katalog publik dari Firestore
- Login admin
- CRUD produk
- Upload foto dari HP/laptop melalui Cloudinary
- Maksimum 5 MB per foto dan JPG/PNG/WEBP di sisi aplikasi
- Sampai 6 foto per produk
- Link WhatsApp, Instagram, TikTok, Facebook
