"use client";

import Link from "next/link";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const TesloHeaderLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  
  return (
    <Link
      href={href}
      className={cn(
        "font-semibold px-6 py-1 rounded-full antialiased transition-colors text-black hover:bg-neutral-800 hover:text-white",
        { "bg-neutral-800 text-white": href === pathname }
      )}
    >
      {children}
    </Link>
  );
};
