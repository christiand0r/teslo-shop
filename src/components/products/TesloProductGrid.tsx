import type { Product } from "@/interfaces";
import { TesloProductGridItem } from "@/components";

interface Props {
  products: Product[];
}

export const TesloProductGrid = ({ products }: Props) => {
  return (
    <section className="grid grid-cols-2 gap-10 md:grid-cols-3">
      {products.map((product) => (
        <TesloProductGridItem key={product.slug} product={product} />
      ))}
    </section>
  );
};
