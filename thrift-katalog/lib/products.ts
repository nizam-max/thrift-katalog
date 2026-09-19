import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { Product } from "./types";

const productsRef = collection(db, "products");

export async function getProducts(): Promise<Product[]> {
  const snap = await getDocs(query(productsRef, orderBy("createdAt", "desc")));
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Product, "id">) }));
}

export async function createProduct(product: Omit<Product, "id" | "createdAt" | "updatedAt">) {
  return addDoc(productsRef, { ...product, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
}

export async function updateProduct(id: string, product: Omit<Product, "id" | "createdAt" | "updatedAt">) {
  return updateDoc(doc(db, "products", id), { ...product, updatedAt: serverTimestamp() });
}

export async function removeProduct(id: string) {
  return deleteDoc(doc(db, "products", id));
}
