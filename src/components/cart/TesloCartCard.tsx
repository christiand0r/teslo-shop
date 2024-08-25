"use client";

import type { Product } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { TesloProductQuantity } from "@/components";
import { genderDictionary } from "@/static";
import { currencyFormatter } from "@/utils";

interface Props {
  product: Product;
  editable?: boolean;
}

const TesloCartCard = ({ product, editable = false }: Props) => {
  const removeArticle = (slug: string): void => {
    // TODO: Leer las cookies y eliminar articulo desde ahí
  };

  return (
    <li
      className="flex items-center gap-4 p-4 border-b border-gray-200 last:border-none"
    >
      <div className="flex-initial relative group">
        <Image
          src={`/products/${product.images[0]}`}
          alt={product.title}
          height={96}
          width={96}
          className="aspect-square rounded-lg"
        />
        <button
          type="button"
          onClick={() => removeArticle(product.slug)}
          className="flex items-center justify-center absolute inset-0 opacity-0 transition-opacity bg-white/80 group-hover:opacity-100"
        >
          <IoClose fontSize={32} />
        </button>
      </div>
      <div className="flex-1">
        <p className="font-semibold text-xs uppercase">
          {genderDictionary[product.gender]}
        </p>
        <Link href={`/product/${product.slug}`} className="text-lg">
          {product.title}
        </Link>
        <p className="font-semibold">
          {editable
            ? currencyFormatter(product.price)
            : `${product?.quantity || 1} x ${currencyFormatter(product.price)}`}
        </p>

        { !editable && <p className="font-semibold text-sm mt-4">Subtotal: {currencyFormatter(product.price)}</p>}
      </div>

      {editable && <TesloProductQuantity stock={product.inStock} />}
    </li>
  );
};
export default TesloCartCard;
