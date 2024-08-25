import { TesloProductGrid, TesloTitle } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";

const products = initialData.products;

export default function HomePage() {
  return (
    <>
      <TesloTitle title="Tienda" subtitle="Todos los productos" />
      <TesloProductGrid products={products} />
    </>
  );
}
