import Link from "next/link";
import TesloCartCard from "@/components/cart/TesloCartCard";
import { initialData } from "@/seed/seed";
import { cn, currencyFormatter } from "@/utils";
import { IoCardOutline } from "react-icons/io5";

let productsInCart = initialData.products.slice(0, 3);

interface Props {
  params: { id: string };
}

export default function OrderPage({ params }: Props) {
  return (
    <div className="flex flex-col mx-auto py-10 max-w-5xl w-full flex-auto">
      <h1 className="font-alternates font-bold text-4xl">Orden #{params.id}</h1>
      <p className="text-sm">
        <strong>{productsInCart.length} artículo(s)</strong> en total
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
        </article>
        <aside className="flex flex-col self-start col-span-full gap-4 px-6 py-8 border rounded-3xl bg-white border-gray-200 md:col-span-2">
          <div className="flex items-center gap-8">
            <h2 className="font-bold text-2xl">Resumen</h2>
            <span
              className={cn(
                "font-semibold text-xs gap-2 px-3 py-0.5 leading-normal rounded-full text-white",
                { "bg-emerald-800": true },
                { "bg-amber-500": false }
              )}
            >
              Pagado
            </span>
          </div>
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
        </aside>
      </section>
    </div>
  );
}
