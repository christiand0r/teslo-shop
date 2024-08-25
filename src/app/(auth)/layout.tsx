import Link from "next/link";
import { TesloFooter, TesloLogo } from "@/components";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Readonly<Props>) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-auto flex-col items-center justify-center px-4 pb-8 w-full">
        <header className="mb-6">
          <TesloLogo />
        </header>
        {children}
      </div>
      <TesloFooter />
    </div>
  );
}
