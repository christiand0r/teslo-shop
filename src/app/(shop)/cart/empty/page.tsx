import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyCartPage() {
  return (
    <div className="flex flex-col flex-auto items-center justify-center gap-4 h-full md:flex-row">
      <IoCartOutline size={120} />
      <div className="text-center md:text-right">
        <p className="font-bold text-3xl md:text-5xl">Tu carrito está vacio</p>
        <Link href={"/"} className="text-sm underline underline-offset-4">
          Continuar comprando
        </Link>
      </div>
    </div>
  );
}
