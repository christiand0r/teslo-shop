import type { Product } from "@/interfaces";
import { cn } from "@/utils";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  products: Product[];
}

export const TesloResumeCart = ({ products }: Props) => {
  return (
    <Link href={"/cart"} className="relative">
      <span
        className={cn(
          "flex text-xs items-center justify-center px-1 rounded-full absolute -top-1  bg-red-500 text-white",
          { "-right-1": products.length <= 10 },
          { "-right-2": products.length > 10 && products.length < 100 },
          { "-right-4": products.length >= 100 }
        )}
      >
        {products.length}
      </span>
      <IoCartOutline size={24} />
    </Link>
  );
};
