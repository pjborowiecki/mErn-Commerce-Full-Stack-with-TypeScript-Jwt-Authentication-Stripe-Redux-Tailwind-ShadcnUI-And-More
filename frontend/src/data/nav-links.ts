import type { NavLink } from "@/types"

export const navLinks = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Products",
    href: "products",
  },
  {
    label: "Contact",
    href: "contact",
  },
] satisfies NavLink[]

export const footerLinks = [
  {
    label: "About Us",
    href: "/",
    subLinks: [
      {
        label: "Who We Are",
        href: "/about",
        external: false,
      },
      {
        label: "Our Mission",
        href: "/mission",
        external: false,
      },
      {
        label: "Contact",
        href: "/contact",
        external: false,
      },
    ],
  },
  {
    label: "Help & Legal",
    href: "/",
    subLinks: [
      {
        label: "Terms and Conditions",
        href: "/terms",
        external: false,
      },
      {
        label: "Privacy Policy",
        href: "/privacy",
        external: false,
      },
      {
        label: "FAQ",
        href: "/faq",
        external: false,
      },
    ],
  },
  {
    label: "Other",
    href: "/",
    subLinks: [
      {
        label: "User's Dashboard",
        href: "/user-dashboard",
        external: false,
      },
      {
        label: "Delivery and Payments",
        href: "/delivery-payments",
        external: false,
      },
      {
        label: "Returns",
        href: "/returns",
        external: false,
      },
    ],
  },
] satisfies NavLink[]
