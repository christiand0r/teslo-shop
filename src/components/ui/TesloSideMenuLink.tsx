import type { MenuItem } from "@/interfaces";
import Link from "next/link";

interface Props extends MenuItem {}

export const TesloSideMenuLink = ({ href, icon, text }: Props) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      {icon}
      <span>{text}</span>
    </Link>
  );
};
