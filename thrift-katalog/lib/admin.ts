import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function isAdmin(uid: string) {
  console.log("CHECK ADMIN UID:", uid);

  const snap = await getDoc(doc(db, "admins", uid));

  console.log("ADMIN DOCUMENT EXISTS:", snap.exists());

  return snap.exists();
}