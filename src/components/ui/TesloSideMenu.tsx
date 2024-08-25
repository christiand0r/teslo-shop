"use client";

import {
  IoCloseOutline,
  IoLogInOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { TesloSideMenuLink } from "./TesloSideMenuLink";
import { cn } from "@/utils";
import { useUIStore } from "@/store";
import { menuAdminItems, menuNavItems } from "@/static";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";

export const TesloSideMenu = () => {
  const pathname = usePathname()
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const toggleSideMenu = useUIStore((state) => state.toggleSideMenu);

  useEffect(() => toggleSideMenu(false), [pathname])

  return (
    <>
      {isSideMenuOpen && (
        <div className="fixed inset-0 h-screen w-screen z-10 bg-black/30" />
      )}

      {isSideMenuOpen && (
        <div
          onClick={() => toggleSideMenu()}
          className="fixed inset-0 h-screen w-screen z-10 backdrop-blur-sm"
        />
      )}

      <aside
        className={cn(
          "flex flex-col fixed p-6 top-0 right-0 translate-x-full z-20 max-w-sm duration-300 transition-all h-screen w-full bg-white",
          { "translate-x-0": isSideMenuOpen }
        )}
      >
        <div className="flex items-center justify-end gap-4">
          <button type="button" onClick={() => toggleSideMenu()}>
            <IoCloseOutline size={32} />
          </button>
        </div>

        <div className="flex items-center gap-2 my-5 px-4 py-1 border rounded-full bg-gray-100 border-gray-100 focus-within:border-gray-300">
          <label
            htmlFor="searcher"
            className="text-gray-400 focus-within:text-black"
          >
            <IoSearchOutline size={24} />
          </label>
          <input
            type="text"
            id="searcher"
            placeholder="¿Qué estas buscando?"
            className="text-lg bg-transparent focus:outline-none"
          />
        </div>

        <nav className="flex flex-col justify-between flex-auto">
          <div className="flex flex-col gap-4">
            {menuNavItems.length &&
              menuNavItems.map((item) => <TesloSideMenuLink key={item.href} {...item} />)}
            <hr className="my-5" />
            {menuAdminItems.length &&
              menuAdminItems.map((item) => <TesloSideMenuLink key={item.href} {...item} />)}
          </div>

          <div className="flex items-center justify-end">
            <TesloSideMenuLink
              href="/login"
              text="Iniciar sesión"
              icon={<IoLogInOutline size={24} />}
            />
          </div>
        </nav>
      </aside>
    </>
  );
};
