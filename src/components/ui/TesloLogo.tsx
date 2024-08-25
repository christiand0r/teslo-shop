import Link from "next/link";

export const TesloLogo = () => {
  return (
    <Link href={"/"} className="flex items-center">
      <span className="font-alternates font-bold text-2xl  pr-2 antialiased">
        Teslo
      </span>
      <span className="font-semibold text-sm pl-2 border-l-2 uppercase antialiased border-black">
        Shop
      </span>
    </Link>
  );
};
