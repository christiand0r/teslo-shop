import type { Metadata } from "next";
import { inter, montserrat_alternates } from "@/config/fonts";

import "./globals.css";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Teslo Shop",
  description: "Tienda virtual de productos",
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat_alternates.variable} `}
    >
      <body>{children}</body>
    </html>
  );
}
