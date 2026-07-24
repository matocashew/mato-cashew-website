import type { MenuItem } from "@models/navigation";

export const navigation: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    order: 1,
    visible: true,
  },

  {
    id: "about",
    label: "About",
    href: "/about",
    order: 2,
    visible: true,
    children: [],
  },

  {
    id: "products",
    label: "Products",
    href: "/products",
    order: 3,
    visible: true,
    children: [],
  },

  {
    id: "knowledge",
    label: "Knowledge",
    href: "/knowledge",
    order: 4,
    visible: true,
    children: [],
  },

  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    order: 5,
    visible: true,
    children: [],
  },

  {
    id: "wholesale",
    label: "Wholesale",
    href: "/wholesale",
    order: 6,
    visible: true,
    children: [],
  },

  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    order: 7,
    visible: true,
  },
];

export default navigation;