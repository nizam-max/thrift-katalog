export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  available: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
};
