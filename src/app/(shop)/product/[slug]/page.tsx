import { useId } from "react";
import { notFound } from "next/navigation";
import { TesloProductCarousel, TesloProductAdd } from "@/components";
import { initialData } from "@/seed/seed";
import { genderDictionary } from "@/static";

interface Props {
  params: { slug: string };
}

const getProductBySlug = (slug: string) => {
  const products = initialData.products;

  return products.find((product) => product.slug === slug);
};

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <figure className="grid grid-cols-5 gap-6 mx-auto py-10 max-w-5xl w-full">
      <article className="col-span-full md:col-span-3">
        <TesloProductCarousel title={product.title} images={product.images} />
      </article>
      <figcaption className="col-span-full md:col-span-2">
          <p className="font-medium text-sm uppercase">
            {genderDictionary[product.gender]}
          </p>
          <h1 className="font-bold text-4xl">{product.title}</h1>

          <b className="block font-bold text-2xl mt-4 mb-8">${product.price}</b>

          <p className="mb-4 max-h-60 overflow-auto">{product.description}</p>

          <article className="mb-8">
            <p className="font-medium uppercase">Tallas disponibles</p>
            <ul className="flex items-center gap-2">
              {product.sizes.map((size) => (
                <li key={useId()}>
                  <input
                    hidden
                    type="radio"
                    name="size"
                    id={`size-${size}`}
                    className="peer"
                  />
                  <label
                    htmlFor={`size-${size}`}
                    className="uppercase underline-offset-4 cursor-pointer peer-checked:font-semibold peer-checked:underline hover:underline"
                  >
                    {size}
                  </label>
                </li>
              ))}
            </ul>
          </article>

          <TesloProductAdd product={product} />
      </figcaption>
    </figure>
  );
}
