"use client";
import Link from "next/link";
import { useEffect,useState } from "react";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { isAdmin } from "@/lib/admin";
import { useRouter } from "next/navigation";
export default function Admin(){const[ok,setOk]=useState<boolean|null>(null);const r=useRouter();useEffect(()=>onAuthStateChanged(auth,async u=>{if(!u||!(await isAdmin(u.uid))){r.replace("/admin/login");return}setOk(true)}),[r]);if(!ok)return <main className="mx-auto max-w-5xl px-4 py-20">Memeriksa akses...</main>;return <main className="mx-auto max-w-5xl px-4 py-12"><div className="flex items-center justify-between"><div><p className="text-sm text-neutral-500">ADMIN</p><h1 className="text-4xl font-black">Dashboard</h1></div><button onClick={()=>signOut(auth).then(()=>r.replace("/admin/login"))} className="rounded-xl border px-4 py-2 text-sm">Keluar</button></div><div className="mt-10 grid gap-4 md:grid-cols-3"><Link href="/admin/produk" className="rounded-2xl bg-white p-6 ring-1 ring-black/10"><b>Produk</b><p className="mt-2 text-sm text-neutral-500">Tambah, edit, hapus, dan upload foto.</p></Link><div className="rounded-2xl bg-white p-6 ring-1 ring-black/10"><b>Pesanan</b><p className="mt-2 text-sm text-neutral-500">Pesanan diteruskan melalui WhatsApp.</p></div><div className="rounded-2xl bg-white p-6 ring-1 ring-black/10"><b>Media</b><p className="mt-2 text-sm text-neutral-500">Foto produk disimpan di Cloudinary Free.</p></div></div></main>}
