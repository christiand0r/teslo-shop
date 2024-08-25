"use client";

import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { TesloHeaderLink, TesloResumeCart, TesloLogo } from "@/components";
import { useUIStore } from "@/store";

export const TesloHeader = () => {
  const toggleSideMenu = useUIStore((state) => state.toggleSideMenu);

  return (
    <header className="p-4 bg-white">
      <div className="flex items-center justify-between">
        <TesloLogo />
        <nav className="hidden items-center gap-4 md:flex">
          <TesloHeaderLink href="/category/men">Hombres</TesloHeaderLink>
          <TesloHeaderLink href="/category/women">Mujeres</TesloHeaderLink>
          <TesloHeaderLink href="/category/kid">Niños</TesloHeaderLink>
        </nav>
        <div className="flex items-center gap-4">
          <Link href={"/search"}>
            <IoSearchOutline size={24} />
          </Link>

          <TesloResumeCart products={[]} />

          <button
            type="button"
            onClick={() => toggleSideMenu()}
            className="flex items-center gap-2 px-4 py-1 rounded-full transition-colors hover:bg-gray-100"
          >
            <span>Menú</span>
          </button>
        </div>
      </div>
    </header>
  );
};
