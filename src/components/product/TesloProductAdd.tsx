"use client";

import type { Product } from "../../interfaces/products";
import { TesloProductQuantity } from "@/components";

interface Props {
  product: Product;
}

export const TesloProductAdd = ({ product }: Props) => {
  return (
    <form action="" className="flex flex-col gap-4 md:flex-row">
      <TesloProductQuantity stock={product.inStock} />
      <button
        type="submit"
        className="inline-block flex-auto px-6 py-2 rounded-full truncate transition-colors bg-neutral-800 text-white hover:bg-black"
      >
        Agregar al carrito
      </button>
    </form>
  );
};
