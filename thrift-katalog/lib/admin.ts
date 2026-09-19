import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function isAdmin(uid: string) {
  const snap = await getDoc(doc(db, "admins", uid));
  return snap.exists();
}
