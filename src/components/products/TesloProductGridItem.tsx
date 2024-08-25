"use client";

import { useState } from "react";
import type { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export const TesloProductGridItem = ({ product }: Props) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <article className="flex flex-col gap-4">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${product.images[currentImage]}`}
          alt={product.title}
          height={500}
          width={500}
          className="rounded-lg object-cover w-full"
          onMouseLeave={() => setCurrentImage(0)}
          onMouseEnter={() => setCurrentImage(1)}
        />
      </Link>

      <div>
        <Link href={`/product/${product.slug}`} className="block">
          {product.title}
        </Link>
        <span className="font-bold text-xl">${product.price}</span>
      </div>
    </article>
  );
};
