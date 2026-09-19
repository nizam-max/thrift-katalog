"use client";
import { useEffect,useState } from "react";
import { Catalog } from "@/components/Catalog";
import { getProducts } from "@/lib/products";
import type { Product } from "@/lib/types";
export default function KatalogPage(){const[products,setProducts]=useState<Product[]>([]);const[loading,setLoading]=useState(true);useEffect(()=>{getProducts().then(setProducts).finally(()=>setLoading(false))},[]);if(loading)return <main className="mx-auto max-w-6xl px-4 py-20 text-center">Memuat katalog...</main>;return <Catalog products={products}/>}
