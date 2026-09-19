export async function uploadImage(file: File): Promise<string> {
  const maxBytes = 5 * 1024 * 1024;
  const allowed = ["image/jpeg", "image/png", "image/webp"];
  if (!allowed.includes(file.type)) throw new Error("Format foto harus JPG, PNG, atau WEBP.");
  if (file.size > maxBytes) throw new Error("Ukuran foto maksimal 5 MB.");

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  if (!cloudName || !preset) throw new Error("Konfigurasi Cloudinary belum diisi.");

  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", preset);
  form.append("folder", "products");

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: "POST", body: form });
  if (!res.ok) throw new Error("Upload foto gagal.");
  const data = await res.json();
  return data.secure_url as string;
}
