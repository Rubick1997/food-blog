"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css";

function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${classes.link} ${pathname.startsWith(href) ? classes.active : undefined}`}
    >
      {children}
    </Link>
  );
}
export default NavLink;

type Props = {
  href: string;
  children: React.ReactNode;
};
