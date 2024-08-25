export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

export type Type = "shirts" | "pants" | "hoodies" | "hats";

export type Gender = "men" | "women" | "kid" | "unisex";

export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  type: Type;
  gender: Gender;
  quantity?: number;
}
