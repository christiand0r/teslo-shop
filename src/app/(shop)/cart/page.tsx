import Link from "next/link";
import { redirect } from "next/navigation";
import { initialData } from "@/seed/seed";
import { currencyFormatter } from "@/utils";
import TesloCartCard from "@/components/cart/TesloCartCard";
import { Product } from "@/interfaces";

// let productsInCart = initialData.products.slice(0, 3);
let productsInCart: Product[] = [];

export default function CartPage() {
  if (!productsInCart.length) redirect("/cart/empty");

  return (
    <div className="flex flex-col mx-auto py-10 max-w-5xl w-full flex-auto">
      <h1 className="font-alternates font-bold text-4xl">Carrito</h1>
      <p className="text-sm">
        <strong>{productsInCart.length} artículo(s)</strong> en tu carrito
      </p>

      <section className="grid grid-cols-5 flex-auto gap-6 mt-4">
        <article className="flex flex-col col-span-full gap-4 md:col-span-3">
          <ul
            id="article-form"
            className="flex-auto overflow-auto h-80 md:h-24"
          >
            {productsInCart.map((product) => (
              <TesloCartCard key={product.slug} product={product} editable />
            ))}
          </ul>

          <div className="flex items-center justify-between gap-4">
            <Link href={"/"} className="text-sm underline underline-offset-4">
              Continuar comprando
            </Link>
            <Link
              href={"/checkout/address"}
              className="text-sm underline underline-offset-4"
            >
              Configurar dirección
            </Link>
          </div>
        </article>
        <aside className="flex flex-col self-start col-span-full gap-4 px-6 py-8 border rounded-3xl bg-white border-gray-200 md:col-span-2">
          <h2 className="font-bold text-2xl">Orden</h2>

          <ul className="space-y-2">
            <li>
              <span>Envío:</span> <span>{currencyFormatter(0)}</span>
            </li>
            <li>
              <span>Impuestos (%15):</span> <span>{currencyFormatter(0)}</span>
            </li>
            <li className="text-xl">
              <span className="font-semibold">Subtotal:</span>{" "}
              <span>{currencyFormatter(0)}</span>
            </li>
          </ul>

          <Link
            href={"/checkout"}
            className="inline-flex justify-center font-semibold !mt-6 px-6 py-2 rounded-full w-full transition-colors bg-neutral-800 text-white hover:bg-black"
          >
            Confirmar
          </Link>
        </aside>
      </section>
    </div>
  );
}
