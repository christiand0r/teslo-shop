import type { MenuItem } from "../interfaces/ui";
import {
  IoPeopleOutline,
  IoPersonOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const menuNavItems: MenuItem[] = [
  {
    href: "/profile",
    text: "Perfil",
    icon: <IoPersonOutline size={24} />,
  },
  {
    href: "/orders",
    text: "Ordenes",
    icon: <IoTicketOutline size={24} />,
  },
];

export const menuAdminItems: MenuItem[] = [
  {
    href: "/admin/products",
    text: "Productos",
    icon: <IoShirtOutline size={24} />,
  },
  {
    href: "/admin/orders",
    text: "Ordenes",
    icon: <IoTicketOutline size={24} />,
  },
  {
    href: "/admin/customers",
    text: "Clientes",
    icon: <IoPeopleOutline size={24} />,
  },
];
