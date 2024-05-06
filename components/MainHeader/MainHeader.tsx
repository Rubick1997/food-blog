import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./mainHeader.module.css";
import Image from "next/image";
import { MainHeaderBackground, NavLink } from "./components";

const links = [
  { href: "/meals", children: "Browse Meals" },
  { href: "/community", children: "Foodies Community" },
];

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="a plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            {links.map(({ href, children }) => (
              <NavLink href={href} key={href}>
                {children}
              </NavLink>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
export default MainHeader;
