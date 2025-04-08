type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/cart",
    label: "Cart",
  },
  {
    href: "/about",
    label: "about",
  },
  {
    href: "/favourites",
    label: "Favourites",
  },
  {
    href: "/orders",
    label: "orders",
  },
  { href: "/admin/sales", label: "dashboard" },
];
export const adminSideBarLink = [
  { href: "/admin/sales", label: "sales" },

  { href: "/admin/products", label: "my products" },
  { href: "/admin/products/create", label: "create products" },
];
