import Link from "next/link";
import { initialData } from "@/seed/seed";
import { currencyFormatter } from "@/utils";
import TesloCartCard from "@/components/cart/TesloCartCard";

let productsInCart = initialData.products.slice(0, 3);

export default function CheckoutPage() {
  return (
    <div className="flex flex-col mx-auto py-10 max-w-5xl w-full flex-auto">
      <h1 className="font-alternates font-bold text-4xl">Confirmar compra</h1>
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
              <TesloCartCard key={product.slug} product={product} />
            ))}
          </ul>

          <div className="flex items-center justify-between gap-4">
            <Link
              href={"/cart"}
              className="text-sm underline underline-offset-4"
            >
              Editar Carrito
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
          <h2 className="font-bold text-2xl">Resumen</h2>
          <ul className="space-y-2">
            <li>
              <span>Christian Osorio</span>
            </li>
            <li>
              <span>+584143399616</span>
            </li>
            <li>
              <span>Urbanización Villas del Este</span>
            </li>
            <li>
              <span>Venezuela</span>
            </li>
            <li>
              <span>Miranda</span>
            </li>
            <li>
              <span>1221</span>
            </li>
          </ul>

          <hr className="border-0 h-[1px] w-full bg-gray-200" />

          <ul className="space-y-2">
            <li>
              <span>Envío:</span> <span>{currencyFormatter(0)}</span>
            </li>
            <li>
              <span>Impuestos (%15):</span> <span>{currencyFormatter(0)}</span>
            </li>
            <li className="text-xl">
              <span className="font-semibold">Total:</span>{" "}
              <span>{currencyFormatter(0)}</span>
            </li>
          </ul>

          <button
            type="submit"
            form="article-form"
            className="inline-block font-semibold !mt-6 px-6 py-2 rounded-full w-full transition-colors bg-neutral-800 text-white hover:bg-black"
          >
            Pagar
          </button>
          <span className="text-xs text-center">
            Al hacer click en "Pagar", aceptas nuestros{" "}
            <Link
              href={"/terms-and-conditions"}
              className="underline underline-offset-2"
            >
              terminos y condiciones
            </Link>{" "}
            y{" "}
            <Link
              href={"/privacy-policy"}
              className="underline underline-offset-2"
            >
              politicas de privacidad
            </Link>
          </span>
        </aside>
      </section>
    </div>
  );
}
