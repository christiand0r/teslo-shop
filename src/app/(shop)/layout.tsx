import { TesloHeader, TesloSideMenu, TesloFooter } from "@/components";

interface Props {
  children: React.ReactNode;
}

export default function ShopLayout({ children }: Readonly<Props>) {
  return (
    <div className="flex flex-col min-h-screen">
      <TesloHeader />
      <TesloSideMenu />
      <main className="flex flex-col flex-auto px-4 pb-8">{children}</main>
      <TesloFooter />
    </div>
  );
}
