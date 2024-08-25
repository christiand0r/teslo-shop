import type { Gender } from "@/interfaces";
import { notFound } from "next/navigation";
import { TesloProductGrid, TesloTitle } from "@/components";
import { initialData } from "@/seed/seed";

interface Props {
  params: { id: Gender };
}

const genderDictionary: Record<Gender, { title: string; subtitle: string }> = {
  men: {
    title: "Hombres",
    subtitle: "Colección de artículos masculinos"
  },
  women: {
    title: "Mujeres",
    subtitle: "Colección de artículos femeninos"
  },
  kid: {
    title: "Niños",
    subtitle: "Colección para los más pequeños"
  },
  unisex: {
    title: "Unisex",
    subtitle: "Colección para todos"

  },
};

function isAllowedCategories(category: string): category is Gender {
  return ["men", "women", "kid"].includes(category);
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  if (!isAllowedCategories(id)) notFound();

  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  return (
    <>
      <TesloTitle
        title={genderDictionary[id].title}
        subtitle={genderDictionary[id].subtitle}
      />
      <TesloProductGrid products={products} />
    </>
  );
}
