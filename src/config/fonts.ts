import { Inter, Montserrat_Alternates } from "next/font/google";

export const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const montserrat_alternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: '--font-montserrat_alternates',
});
